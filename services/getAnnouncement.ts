import { createClient } from "@/services/supabase/client";

async function getAnnouncement() {
  const supabase = createClient();

  try {
    const { data, error } = await supabase
      .from("announcement")
      .select("*")
      .single();

    if (error) throw error;

    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export default getAnnouncement;
