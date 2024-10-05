import { Message } from "./message.model";

export interface Ticket {
    id: number;                  
    clientName: string;        
    status: 'OPEN' | 'CLOSED';   
    createdAt: string;          
    updatedAt: string;          
    messages: Message[];        
  }