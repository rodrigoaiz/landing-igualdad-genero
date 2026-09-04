export type VideoAccent = "turquoise" | "yellow" | "coral" | "violet";

export type ResourceCategory = "actividades" | "celular" | "foros" | "evaluaciones";

export interface FeaturedVideo {
  id: string;
  anchor: string;
  label: string;
  title: string;
  intro: string;
  context: string;
  steps: readonly string[];
  result: string;
  accent: VideoAccent;
  posterLabel: string;
}

export interface RouteStep {
  action: string;
  result: string;
  link: string;
}

export interface ExternalResource {
  title: string;
  type: string;
  category: ResourceCategory;
  note: string;
}
