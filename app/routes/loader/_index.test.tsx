/** @vitest-environment happy-dom */

import "@testing-library/jest-dom/vitest";

import { createRemixStub } from "@remix-run/testing";
import { render, screen } from "@testing-library/react";

import { default as Component, loader } from "./_index";

const path = "/loader";

test("render <IndexWithLoader />", () => {
  const App = createRemixStub([{ path, Component, loader }]);

  render(<App initialEntries={[path]} />);

  const target = screen.getByRole("heading", { level: 1 });
  expect(target).toHaveTextContent("Welcome to Remix with loader");
});
