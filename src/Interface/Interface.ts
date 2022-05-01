import { ReactNode } from 'react';

export interface RefType {
  element: HTMLSpanElement | HTMLDivElement | null;
}

export interface LoaderProps {
  hideLoader: () => void;
}

export interface ReactComponent {
  children?: ReactNode;
}
