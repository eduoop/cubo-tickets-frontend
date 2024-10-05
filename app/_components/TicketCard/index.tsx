import { Ticket } from "@/app/_models/ticket.model";
import { Badge } from "@/app/components/ui/badge";
import { Card } from "@/app/components/ui/card";
import Link from "next/link";
import React from "react";

interface TicketCardProps {
  ticket: Ticket;
}

function TicketCard({ ticket }: TicketCardProps) {
  const isOpen = ticket.status === "CLOSED" ? false : true;

  return (
    <Link href={"/"}>
      <Card className="flex gap-2 min-h-[125px] items-center px-2 h-full transition-transform transform hover:scale-105">
        <div
          className={`h-[70%] w-[3px] ${
            isOpen ? "bg-green-600" : "bg-red-600"
          }  rounded-full `}
        />
        <div className="flex flex-col gap-2 overflow-hidden text-ellipsis text-nowrap">
          <Badge
            className={`rounded-full w-fit text-white ${
              isOpen ? "bg-green-700" : "bg-red-900"
            } `}
          >
            {isOpen ? "Aberto" : "Fechado"}
          </Badge>
          {ticket.clientName}
          <h2 className="text-sm font-light w-full overflow-hidden text-ellipsis text-nowrap">
            {ticket.messages[0].body}
          </h2>
        </div>
      </Card>
    </Link>
  );
}

export default TicketCard;
