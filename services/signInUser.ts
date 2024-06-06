import { LOZA_EMAIL } from "@/lib/constants";
import { createClient } from "@/services/supabase/client";

async function signInUser(passcode: string) {
  const supabase = createClient();

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: LOZA_EMAIL,
      password: passcode,
    });

    if (error) throw error;

    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export default signInUser;
