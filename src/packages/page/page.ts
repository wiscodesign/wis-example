import type { ReactNode, Ref } from "react";

export interface PageProps {
  title: string;

  children: ReactNode;
}

export interface RightRef {
  show: () => void;
  hide: () => void;
}

export interface RightProps {
  title: string;

  ref?: Ref<RightRef>;

  children: ReactNode;
}
