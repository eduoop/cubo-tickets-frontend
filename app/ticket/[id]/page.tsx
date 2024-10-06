import { getTicketById } from "@/app/_services/http/ticket";
import React, { Suspense } from "react";
import PageClient from "./pageClient";

interface TicketProps {
  params: {
    id: string;
  };
}

async function Ticket({ params }: TicketProps) {
  const ticket = await getTicketById(Number(params.id));

  return (
    <Suspense fallback={<div>Carregando ticket...</div>}>
      <PageClient ticket={ticket} />
    </Suspense>
  );
}

export default Ticket;
