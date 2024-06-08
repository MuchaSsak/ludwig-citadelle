import { createClient } from "@/services/supabase/client";

async function getQotd() {
  const supabase = createClient();

  try {
    const { data, error } = await supabase.from("qotd").select("*").single();

    if (error) throw error;

    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export default getQotd;
