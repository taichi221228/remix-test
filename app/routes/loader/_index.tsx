import type { MetaFunction } from "@remix-run/node";

import { Page } from "~/components/page";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = () => {
  return { name: "Remix with loader" };
};

export default function IndexWithLoader() {
  const { name } = useLoaderData<typeof loader>();

  return <Page name={name} />;
}
