"use client";

import React from "react";
import { Ticket } from "../_models/ticket.model";
import TicketCard from "../_components/TicketCard";
import { useSearch } from "../_contexts/SearchContext";

interface HomeClientProps {
    tickets: Ticket[];
}

function HomeClient({ tickets }: HomeClientProps) {
  const { searchTerm } = useSearch();

  const filteredTickets = tickets.filter(
    (ticket) =>
      ticket.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.messages[0].body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {filteredTickets.map((ticket) => (
        <TicketCard key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
}

export default HomeClient;
