import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

import signInUser from "@/services/signInUser";

function useSignInUser() {
  const mutation = useMutation({
    mutationKey: ["signInUser"],
    mutationFn: signInUser,
  });

  const router = useRouter();
  const { error, isSuccess } = mutation;

  // Fetching cases
  useEffect(() => {
    if (error) toast.error(error.message);
    if (isSuccess) {
      toast.success("Logged in successfully!");
      router.push("/");
    }
  }, [error, isSuccess, router]);

  return mutation;
}

export default useSignInUser;
