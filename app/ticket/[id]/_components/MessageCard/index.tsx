import { Card } from "@/app/_components/ui/card";
import { Message } from "@/app/_models/message.model";
import React from "react";

interface MessageCardProps {
  message: Message;
  clientName: string;
}

function MessageCard({ message, clientName }: MessageCardProps) {
  return (
    <Card className="shadow-md rounded-lg p-4">
      <div className="flex justify-between mb-2">
        <div>
          <span className="text-xs mb-1 block">{clientName}</span>
          <span className="text-lg font-semibold block">
            {message.body}
          </span>
        </div>
        <div className="text-sm text-gray-600">
          {new Date(message.createdAt).toLocaleDateString("pt-BR")}
        </div>
      </div>
    </Card>
  );
}

export default MessageCard;
