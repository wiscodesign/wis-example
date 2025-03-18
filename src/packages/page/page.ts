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
  ref?: Ref<RightRef>;

  children: ReactNode;
}
