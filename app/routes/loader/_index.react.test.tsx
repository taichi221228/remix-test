/** @vitest-environment happy-dom */

import "@testing-library/jest-dom/vitest";

import { useLoaderData } from "@remix-run/react";
import { render, screen } from "@testing-library/react";

import { default as Component, loader } from "./_index";

vi.mock("@remix-run/react", () => ({
  ...vi.importActual("@remix-run/react"),
  useLoaderData: vi.fn(),
}));

test("render <IndexWithLoader /> without Remix", () => {
  vi.mocked(useLoaderData<typeof loader>).mockReturnValue({
    name: "Welcome to Remix with mocked loader",
  });

  render(<Component />);

  const target = screen.getByRole("heading", { level: 1 });
  expect(target).toHaveTextContent("Welcome to Remix with mocked loader");
});
