"use client";

import { Message } from "@/app/_models/message.model";
import React, { useState } from "react";
import MessageCard from "../MessageCard";
import { Input } from "@/app/_components/ui/input";
import { LuSearch } from "react-icons/lu";

interface MessageContainerProps {
  messages: Message[];
  clientName: string;
}

function MessageContainer({ messages, clientName }: MessageContainerProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMessages = messages.filter((message) =>
    message.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Mensagens</h2>
      <div className="relative min-w-[100px] md:min-w-[500px] py-4 group mb-4">
        <LuSearch
          size={21}
          className={`absolute left-4 top-1/2 -translate-y-1/2 transform text-muted-foreground group-hover:text-primary-theme duration-200 ${
            searchTerm.length > 0 && "text-primary-theme"
          }`}
        />
        <Input
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          placeholder="Pesquisar mensagem"
          className="w-full rounded-[24px] py-5 pl-12 text-[15px] font-medium border border-solid border-gray-500"
        />
      </div>
      <div className="flex flex-col space-y-3">
        {filteredMessages.map((message) => (
          <MessageCard
            key={message.id}
            message={message}
            clientName={clientName}
          />
        ))}
      </div>
    </div>
  );
}

export default MessageContainer;
