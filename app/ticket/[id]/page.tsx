import { getTicketById } from "@/app/_services/http/ticket";
import React, { Suspense } from "react";
import PageClient from "./pageClient";
import PageSkeleton from "./_components/PageSkeleton";

interface TicketProps {
  params: {
    id: string;
  };
}

async function Ticket({ params }: TicketProps) {
  const ticket = await getTicketById(Number(params.id));

  return (
    <Suspense fallback={<PageSkeleton />}>
      <PageClient ticket={ticket} />
    </Suspense>
  );
}

export default Ticket;
