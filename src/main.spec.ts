import { describe, it, expect, vi, beforeEach } from "vitest";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { act } from "react";

vi.mock("react-dom/client", () => ({
  createRoot: vi.fn(() => ({
    render: vi.fn(),
  })),
}));

vi.mock("./App.tsx", () => ({
  App: vi.fn(() => null),
}));

vi.mock("normalize.css", () => ({}));
vi.mock("@fontsource/roboto", () => ({}));

describe("Application Bootstrap", () => {
  const mockRootElement = document.createElement("div");

  beforeEach(() => {
    vi.resetModules();
    vi.clearAllMocks();
    vi.spyOn(document, "getElementById").mockReturnValue(mockRootElement);
  });

  it.each([
    {
      name: "should get root element from DOM",
      assertion: () =>
        expect(document.getElementById).toHaveBeenCalledWith("root"),
    },
    {
      name: "should create React root with DOM element",
      assertion: () => expect(createRoot).toHaveBeenCalledWith(mockRootElement),
    },
    {
      name: "should render App component",
      assertion: () => {
        const rootInstance = vi.mocked(createRoot).mock.results[0].value;
        const renderedElement = rootInstance.render.mock.calls[0][0];
        expect(renderedElement.type).toBe(App);
      },
    },
  ])("$name", async ({ assertion }) => {
    await act(async () => {
      await import("./main");
    });

    assertion();
  });
});
