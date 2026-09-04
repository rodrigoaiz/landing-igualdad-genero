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

  document.querySelectorAll<HTMLDetailsElement>("details").forEach((detail) => {
    detail.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && detail.open) {
        detail.open = false;
        detail.querySelector<HTMLElement>("summary")?.focus();
      }
    });
  });

  document.querySelectorAll<HTMLAnchorElement>("[data-mobile-menu] a").forEach((link) => link.addEventListener("click", () => link.closest("details")?.removeAttribute("open")));

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  gsap.from(".hero-copy > *", { y: 34, opacity: 0, duration: 0.8, stagger: 0.1, ease: "expo.out" });
  gsap.from(".hero-illustration", { x: 75, rotation: 8, opacity: 0, duration: 0.95, ease: "expo.out" });
  gsap.to(".scroll-progress", { scaleX: 1, ease: "none", scrollTrigger: { trigger: document.documentElement, start: "top top", end: "bottom bottom", scrub: 0.2 } });
  gsap.to(".hero-illustration", { yPercent: 10, rotation: -3, ease: "none", scrollTrigger: { trigger: "#inicio", start: "top top", end: "bottom top", scrub: 1 } });
  gsap.to(".hero-orbit", { rotation: 280, y: -50, ease: "none", scrollTrigger: { trigger: "#inicio", start: "top top", end: "bottom top", scrub: 0.8 } });

  gsap.to("[data-route-line]", { strokeDashoffset: 0, ease: "none", scrollTrigger: { trigger: ".route-shell", start: "top 72%", end: "bottom 68%", scrub: 0.5 } });
  const compactMotion = window.matchMedia("(max-width: 639px)").matches;
  document.querySelectorAll<HTMLElement>(".route-card").forEach((card, index) => gsap.from(card, { x: index % 2 === 0 ? (compactMotion ? 24 : 90) : (compactMotion ? -18 : -55), rotation: index % 2 === 0 ? 2 : -2, ease: "none", scrollTrigger: { trigger: card, start: "top 92%", end: "top 54%", scrub: 0.7 } }));

  gsap.to(".assignment-art", { yPercent: -9, rotation: 3, ease: "none", scrollTrigger: { trigger: ".assignment-section", start: "top bottom", end: "bottom top", scrub: 0.9 } });
  gsap.to(".assignment-note", { x: 26, rotation: 4, ease: "none", scrollTrigger: { trigger: ".assignment-section", start: "top 80%", end: "bottom 30%", scrub: 0.8 } });

  document.querySelectorAll<HTMLElement>(".featured-video").forEach((section, index) => {
    const preview = section.querySelector<HTMLElement>(".video-preview");
    const copy = section.querySelector<HTMLElement>(".video-copy");
    if (preview) gsap.from(preview, { x: index % 2 === 0 ? (compactMotion ? -28 : -70) : (compactMotion ? 28 : 70), rotation: index % 2 === 0 ? -3 : 3, ease: "none", scrollTrigger: { trigger: section, start: "top 82%", end: "top 34%", scrub: 0.8 } });
    if (copy) gsap.from(copy, { x: index % 2 === 0 ? (compactMotion ? 18 : 45) : (compactMotion ? -18 : -45), ease: "none", scrollTrigger: { trigger: section, start: "top 82%", end: "top 42%", scrub: 0.8 } });
  });

  document.querySelectorAll<HTMLElement>(".resource-marker").forEach((mark) => gsap.to(mark, { rotation: 25, ease: "none", scrollTrigger: { trigger: mark, start: "top bottom", end: "bottom top", scrub: 1.2 } }));
  gsap.to(".closing-illustration", { yPercent: -10, rotation: -4, ease: "none", scrollTrigger: { trigger: ".closing-section", start: "top bottom", end: "bottom top", scrub: 0.8 } });
}
