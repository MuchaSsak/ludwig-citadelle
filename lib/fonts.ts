import {
  Kumbh_Sans as FontSans,
  Roboto_Slab as FontHandwritten,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontHandwritten = FontHandwritten({
  subsets: ["latin"],
  variable: "--font-handwritten",
  weight: "variable",
});
