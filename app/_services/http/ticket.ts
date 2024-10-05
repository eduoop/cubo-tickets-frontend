import { Ticket } from "@/app/_models/ticket.model";

export type TicketsResponse = Ticket[];

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getTickets(): Promise<TicketsResponse> {
  const response = await fetch(`${apiUrl}/tickets`);

  if (!response.ok) {
    throw new Error(`Erro ao buscar os tickets: ${response.statusText}`);
  }

  const data: TicketsResponse = await response.json();

  return data;
}
