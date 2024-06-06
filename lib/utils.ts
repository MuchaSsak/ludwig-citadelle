import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function splitStringByCapitalization(str: string) {
  return str.split(/(?=[A-Z])/);
}
