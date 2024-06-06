import { createClient } from "@/services/supabase/client";

async function reportQuote({ quote, issue, description }: QuoteReport) {
  const supabase = createClient();
  try {
    const { error } = await supabase.from("reports").insert({
      issue,
      description,
      quote,
    });

    if (error) throw error;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export default reportQuote;
