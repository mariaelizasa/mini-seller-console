import type { Leads } from "../@types/Leads";
import { leadsData } from "../data/leads";

export async function fetchLeads(): Promise<Leads[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(leadsData);
    }, 1000);
  });
}
