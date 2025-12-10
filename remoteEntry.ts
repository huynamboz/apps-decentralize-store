import React from "react";
import { createRoot, Root } from "react-dom/client";
import { App } from "./src/App";

let root: Root | null = null;

export function mount(element: HTMLElement) {
  root = createRoot(element);
  root.render(React.createElement(App));
}

export function unmount() {
  if (root) {
    root.unmount();
    root = null;
  }
}
