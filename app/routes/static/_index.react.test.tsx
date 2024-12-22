/** @vitest-environment happy-dom */

import "@testing-library/jest-dom/vitest";

import { render, screen } from "@testing-library/react";

import { default as Component } from "./_index";

test("render <Index /> without Remix", () => {
  render(<Component />);

  screen.debug();

  const target = screen.getByRole("heading", { level: 1 });
  expect(target).toHaveTextContent("Welcome to Remix");
});
