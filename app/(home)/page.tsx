import { getTickets } from "../_services/http/ticket";
import HomeClient from "./homeClient";
import React, { Suspense } from "react";
import PageSkeleton from "./_components/PageSkeleton";

export default async function Home() {
  const tickets = await getTickets();

  return (
    <Suspense fallback={<PageSkeleton />}>
      <HomeClient tickets={tickets} />
    </Suspense>
  );
}
