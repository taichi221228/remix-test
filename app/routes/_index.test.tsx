/** @vitest-environment happy-dom */

import "@testing-library/jest-dom/vitest";

import { createRemixStub } from "@remix-run/testing";
import { render, screen } from "@testing-library/react";

import { default as Component } from "./_index";

const path = "/";

test("render <Index />", () => {
  const App = createRemixStub([{ path, Component }]);

  render(<App initialEntries={[path]} />);

  const target = screen.getByRole("heading", { level: 1 });
  expect(target).toHaveTextContent("Welcome to Remix");
});
