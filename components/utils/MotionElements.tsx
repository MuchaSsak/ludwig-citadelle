"use client";

import { motion } from "framer-motion";

/*
   the purpose of doing this is to avoid making entire components client ones.
   
   the entire components (e.g. NavBar) are server components
   and only the children framer-motion components are rendered on the client.
*/

export const MotionDiv = motion.div;
export const MotionSpan = motion.span;
export const MotionH1 = motion.h1;
