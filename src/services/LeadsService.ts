import type { Lead } from "../@types/Leads";
import { leadsData } from "../data/leads";

export async function fetchLeads(): Promise<Lead[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(leadsData);
    }, 1000);
  });
}
