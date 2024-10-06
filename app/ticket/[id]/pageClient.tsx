"use client";

import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import { Card } from "@/app/_components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/_components/ui/popover";
import { Ticket } from "@/app/_models/ticket.model";
import Link from "next/link";
import React, { useState } from "react";
import { BiMessageSquareDetail } from "react-icons/bi";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import {
  TicketStatus,
  updateTicketStatusById,
} from "@/app/_services/http/ticket";

interface PageClientProps {
  ticket: Ticket;
}

function PageClient({ ticket }: PageClientProps) {
  const [ticketStatus, setTicketStatus] = useState(ticket.status);
  const [openChangeStatus, setOpenChangeStatus] = useState(false);
  const isOpen = ticketStatus === "CLOSED" ? false : true;

  const updateTicketStatus = (status: TicketStatus) => {
    try {
      updateTicketStatusById(ticket.id, status);
    } catch {
      alert("Não foi possível atualizar :(");
    }
  };

  const handleChangeTicketStatus = (newStatus: TicketStatus) => {
    setTicketStatus(newStatus);
    setOpenChangeStatus(false);

    if (newStatus !== ticketStatus) {
      updateTicketStatus(newStatus);
    }
  };

  return (
    <div className="px-6 py-4">
      <Link href={"/"}>
        <HiOutlineArrowLeft size={27} />
      </Link>
      <Card className="flex gap-4 h-[125px] items-center px-2 mt-5">
        <div
          className={`h-[70%] w-[5px] ${
            isOpen ? "bg-green-600" : "bg-red-600"
          }  rounded-full`}
        />
        <div className="flex flex-col gap-2 overflow-hidden text-ellipsis text-nowrap">
          <Popover onOpenChange={setOpenChangeStatus} open={openChangeStatus}>
            <PopoverTrigger>
              <Badge
                className={`rounded-full cursor-pointer w-fit text-white gap-2 ${
                  isOpen ? "bg-green-700" : "bg-red-900"
                } `}
              >
                {isOpen ? "Aberto" : "Fechado"}
                <IoIosArrowDown size={20} />
              </Badge>
            </PopoverTrigger>
            <PopoverContent className="w-fit flex flex-col p-2 gap-2">
              <Button
                className="rounded-full gap-2 border border-solid border-green-500/50 bg-green-50 text-black hover:bg-green-50"
                onClick={() => handleChangeTicketStatus("OPEN")}
              >
                <FaCircle size={11} className="text-green-900" />
                Ativo
              </Button>
              <Button
                className="rounded-full gap-2 border border-solid border-red-500/50 bg-red-50 text-black hover:bg-red-50"
                onClick={() => handleChangeTicketStatus("CLOSED")}
              >
                <FaCircle size={11} className="text-red-900" />
                Inativo
              </Button>
            </PopoverContent>
          </Popover>

          {ticket.clientName}
          <div className="flex items-center gap-2">
            <BiMessageSquareDetail size={20} />
            <h2 className="text-sm font-medium w-full overflow-hidden text-ellipsis text-nowrap">
              {ticket.messages.length}
            </h2>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default PageClient;
