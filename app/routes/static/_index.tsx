import type { MetaFunction } from "@remix-run/node";

import { Page } from "~/components/page";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return <Page name="Remix" />;
}
