import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initLanding() {
  const resourceCards = Array.from(document.querySelectorAll<HTMLElement>(".resource-card"));
  const resourceButtons = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-resource-filter]"));
  const resourceCount = document.querySelector<HTMLElement>("#resource-count");

  const applyResourceFilter = (filter: string) => {
    let visible = 0;
    resourceCards.forEach((card) => {
      const matches = filter === "todos" || card.dataset.resourceCategory === filter;
      card.hidden = !matches;
      if (matches) visible += 1;
    });
    resourceButtons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.resourceFilter === filter)));
    if (resourceCount) resourceCount.textContent = `${visible} ${visible === 1 ? "recurso" : "recursos"} complementarios`;
    ScrollTrigger.refresh();
  };

  resourceButtons.forEach((button) => button.addEventListener("click", () => applyResourceFilter(button.dataset.resourceFilter ?? "todos")));

  const faqItems = Array.from(document.querySelectorAll<HTMLDetailsElement>(".faq-item"));
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let faqAction = 0;

  const closeFaq = (detail: HTMLDetailsElement) => new Promise<void>((resolve) => {
    const content = detail.querySelector<HTMLElement>(".faq-content");
    if (!detail.open || !content || reducedMotion) {
      detail.open = false;
      if (content) content.style.removeProperty("height");
      resolve();
      return;
    }

    const currentHeight = content.getBoundingClientRect().height;
    content.style.height = `${currentHeight}px`;
    void content.offsetHeight;

    let finished = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      window.clearTimeout(fallback);
      content.removeEventListener("transitionend", onTransitionEnd);
      detail.open = false;
      content.style.height = "0px";
      resolve();
    };
    const onTransitionEnd = (event: TransitionEvent) => {
      if (event.target === content && event.propertyName === "height") finish();
    };
    const fallback = window.setTimeout(finish, 450);

    content.addEventListener("transitionend", onTransitionEnd);
    requestAnimationFrame(() => {
      content.style.height = "0px";
    });
  });

  const openFaq = (detail: HTMLDetailsElement) => {
    const content = detail.querySelector<HTMLElement>(".faq-content");
    detail.open = true;
    if (!content || reducedMotion) {
      content?.style.removeProperty("height");
      return;
    }

    content.style.height = "0px";
    const targetHeight = content.scrollHeight;
    let finished = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      window.clearTimeout(fallback);
      content.removeEventListener("transitionend", onTransitionEnd);
      content.style.removeProperty("height");
    };
    const onTransitionEnd = (event: TransitionEvent) => {
      if (event.target === content && event.propertyName === "height") finish();
    };
    const fallback = window.setTimeout(finish, 450);

    content.addEventListener("transitionend", onTransitionEnd);
    requestAnimationFrame(() => {
      content.style.height = `${targetHeight}px`;
    });
  };

  const toggleFaq = async (detail: HTMLDetailsElement) => {
    const action = ++faqAction;
    if (detail.open) {
      await closeFaq(detail);
      return;
    }

    for (const other of faqItems) {
      if (other !== detail && other.open) await closeFaq(other);
    }
    if (action !== faqAction) return;
    openFaq(detail);
  };

  faqItems.forEach((detail) => {
    detail.querySelector("summary")?.addEventListener("click", (event) => {
      event.preventDefault();
      void toggleFaq(detail);
    });
  });

  document.querySelectorAll<HTMLDetailsElement>("details").forEach((detail) => {
    detail.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && detail.open) {
        if (detail.classList.contains("faq-item")) void closeFaq(detail);
        else detail.open = false;
        detail.querySelector<HTMLElement>("summary")?.focus();
      }
    });
  });

  /* Keep the compact navigation behavior independent from the FAQ accordion. */
  document.querySelectorAll<HTMLAnchorElement>("[data-mobile-menu] a").forEach((link) => link.addEventListener("click", () => link.closest("details")?.removeAttribute("open")));

  const routeLine = document.querySelector<SVGPathElement>("[data-route-line]");
  const routeSvg = routeLine?.closest<SVGSVGElement>(".route-path");
  const routeShell = routeLine?.closest<HTMLElement>(".route-shell");
  const lastRouteCard = document.querySelector<HTMLElement>(".route-card:last-of-type");
  const routeMarkers = Array.from(document.querySelectorAll<HTMLElement>(".route-marker"));
  let routePathLength = 0;

  const fitRoutePath = () => {
    if (!routeLine || !routeSvg || !routeShell || !lastRouteCard || routeMarkers.length === 0) return;

    const routeTop = Number.parseFloat(getComputedStyle(routeSvg).top) || 0;
    const shellRect = routeShell.getBoundingClientRect();
    const lastMarkerRect = routeMarkers.at(-1)?.getBoundingClientRect();
    if (!lastMarkerRect) return;

    const markerCenter = lastMarkerRect.top + lastMarkerRect.height / 2 - shellRect.top;
    routeSvg.style.height = `${Math.max(120, (markerCenter - routeTop) / 0.99)}px`;

    const svgRect = routeSvg.getBoundingClientRect();
    const routeLength = routeLine.getTotalLength();

    routeMarkers.forEach((marker) => {
      const card = marker.closest<HTMLElement>(".route-card");
      if (!card) return;

      const markerRect = marker.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();
      const targetY = markerRect.top + markerRect.height / 2;
      const targetPathY = ((targetY - svgRect.top) / svgRect.height) * 1000;
      let closestPoint = routeLine.getPointAtLength(0);
      let closestDistance = Number.POSITIVE_INFINITY;

      for (let index = 0; index <= 300; index += 1) {
        const point = routeLine.getPointAtLength((routeLength * index) / 300);
        const distance = Math.abs(point.y - targetPathY);
        if (distance < closestDistance) {
          closestPoint = point;
          closestDistance = distance;
        }
      }

      const targetX = svgRect.left + (closestPoint.x / 100) * svgRect.width;
      marker.style.left = `${targetX - cardRect.left - markerRect.width / 2}px`;
    });

    const previousOffset = Number.parseFloat(getComputedStyle(routeLine).strokeDashoffset);
    const previousProgress = routePathLength > 0 ? 1 - previousOffset / routePathLength : 0;
    routePathLength = routeLength;
    routeLine.style.strokeDasharray = `${routePathLength}`;
    routeLine.style.strokeDashoffset = `${routePathLength * (1 - Math.min(1, Math.max(0, previousProgress)))}`;
  };

  fitRoutePath();
  window.addEventListener("resize", fitRoutePath, { passive: true });

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    if (routeLine) routeLine.style.strokeDashoffset = "0";
    return;
  }

  gsap.from(".hero-copy > *", { y: 34, opacity: 0, duration: 0.8, stagger: 0.1, ease: "expo.out" });
  gsap.from(".hero-illustration", { x: 75, rotation: 8, opacity: 0, duration: 0.95, ease: "expo.out" });
  gsap.to(".scroll-progress", { scaleX: 1, ease: "none", scrollTrigger: { trigger: document.documentElement, start: "top top", end: "bottom bottom", scrub: 0.2 } });
  gsap.to(".hero-illustration", { yPercent: 10, rotation: -3, ease: "none", scrollTrigger: { trigger: "#inicio", start: "top top", end: "bottom top", scrub: 1 } });
  gsap.to(".hero-orbit", { rotation: 280, y: -50, ease: "none", scrollTrigger: { trigger: "#inicio", start: "top top", end: "bottom top", scrub: 0.8 } });

  if (routeLine) {
    const routeLength = routeLine.getTotalLength();
    routeLine.style.strokeDasharray = `${routeLength}`;
    routeLine.style.strokeDashoffset = `${routeLength}`;
    gsap.to(routeLine, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: ".route-shell",
        start: "top 72%",
        endTrigger: ".route-card:last-of-type",
        end: "top 72%",
        scrub: 0.5,
      },
    });
  }
  const compactMotion = window.matchMedia("(max-width: 639px)").matches;
  document.querySelectorAll<HTMLElement>(".route-card").forEach((card, index) => {
    const movingContent = card.querySelectorAll<HTMLElement>(".route-number, .route-action, .route-result, .route-link");
    gsap.from(movingContent, { x: index % 2 === 0 ? (compactMotion ? 24 : 90) : (compactMotion ? -18 : -55), rotation: index % 2 === 0 ? 2 : -2, ease: "none", scrollTrigger: { trigger: card, start: "top 92%", end: "top 54%", scrub: 0.7 } });
  });

  gsap.to(".assignment-art", { yPercent: -9, rotation: 3, ease: "none", scrollTrigger: { trigger: ".assignment-section", start: "top bottom", end: "bottom top", scrub: 0.9 } });
  gsap.to(".assignment-note", { x: 26, rotation: 4, ease: "none", scrollTrigger: { trigger: ".assignment-section", start: "top 80%", end: "bottom 30%", scrub: 0.8 } });

  const videoIntro = document.querySelector<HTMLElement>(".video-intro");
  const videoIntroCopy = document.querySelector<HTMLElement>(".video-intro-copy");
  const videoIntroArt = document.querySelector<HTMLElement>(".video-intro-art");
  const videoIntroImage = videoIntroArt?.querySelector<HTMLElement>("img");
  if (videoIntro && videoIntroCopy && videoIntroArt) {
    const introTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: videoIntro,
        start: "top 82%",
        end: "top 36%",
        scrub: 0.8,
      },
    });

    introTimeline
      .from(videoIntroCopy, { x: -46, opacity: 0, ease: "none" })
      .from(videoIntroArt, { x: 46, y: 24, rotation: 5, opacity: 0, ease: "none" }, "<0.08");

    if (videoIntroImage) {
      gsap.to(videoIntroImage, {
        yPercent: -8,
        rotation: -3,
        ease: "none",
        scrollTrigger: {
          trigger: videoIntro,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }
  }

  document.querySelectorAll<HTMLElement>(".featured-video").forEach((section, index) => {
    const preview = section.querySelector<HTMLElement>(".video-preview");
    const copy = section.querySelector<HTMLElement>(".video-copy");
    if (preview) gsap.from(preview, { x: index % 2 === 0 ? (compactMotion ? -28 : -70) : (compactMotion ? 28 : 70), rotation: index % 2 === 0 ? -3 : 3, ease: "none", scrollTrigger: { trigger: section, start: "top 82%", end: "top 34%", scrub: 0.8 } });
    if (copy) gsap.from(copy, { x: index % 2 === 0 ? (compactMotion ? 18 : 45) : (compactMotion ? -18 : -45), ease: "none", scrollTrigger: { trigger: section, start: "top 82%", end: "top 42%", scrub: 0.8 } });
  });

  document.querySelectorAll<HTMLElement>(".resource-marker").forEach((mark) => gsap.to(mark, { rotation: 25, ease: "none", scrollTrigger: { trigger: mark, start: "top bottom", end: "bottom top", scrub: 1.2 } }));
  gsap.to(".closing-illustration", { yPercent: -10, rotation: -4, ease: "none", scrollTrigger: { trigger: ".closing-section", start: "top bottom", end: "bottom top", scrub: 0.8 } });
}
