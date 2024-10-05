import { getTickets } from "../_services/http/ticket";
import HomeClient from "./homeClient";
import React, { Suspense } from "react";

export default async function Home() {
  const tickets = await getTickets();

  return (
    <Suspense fallback={<div>Loading tickets...</div>}>
      <HomeClient tickets={tickets} />
    </Suspense>
  );
}
