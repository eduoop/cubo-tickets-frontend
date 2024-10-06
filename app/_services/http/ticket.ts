"use server"
import { Ticket } from "@/app/_models/ticket.model";
import { revalidatePath } from "next/cache";

export type TicketsResponse = Ticket[];
export type TicketResponse = Ticket;
export type TicketStatus = "OPEN" | "CLOSED";

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getTickets(): Promise<TicketsResponse> {
  const response = await fetch(`${apiUrl}/tickets`);

  if (!response.ok) {
    throw new Error(`Erro ao buscar os tickets: ${response.statusText}`);
  }

  const data: TicketsResponse = await response.json();

  return data;
}

export async function getTicketById(id: number): Promise<TicketResponse> {
  const response = await fetch(`${apiUrl}/tickets/${id}`);

  if (!response.ok) {
    throw new Error(`Erro ao buscar o ticket com ID ${id}: ${response.statusText}`);
  }

  const data: TicketResponse = await response.json();
  return data;
}


export async function updateTicketStatusById(id: number, status: TicketStatus): Promise<TicketResponse> {
  const response = await fetch(`${apiUrl}/tickets/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status }),
  });

  if (!response.ok) {
    throw new Error(`Erro ao atualizar o status do ticket com ID ${id}: ${response.statusText}`);
  }

  revalidatePath('/');
  revalidatePath('/ticket');

  const data: TicketResponse = await response.json();
  return data;
}

