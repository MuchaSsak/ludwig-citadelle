import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

import signOutUser from "@/services/signOutUser";

function useSignOutUser() {
  const mutation = useMutation({
    mutationKey: ["signOutUser"],
    mutationFn: signOutUser,
  });

  const router = useRouter();
  const { error, isSuccess } = mutation;

  // Fetching cases
  useEffect(() => {
    if (error) toast.error(error.message);
    if (isSuccess) {
      toast.success("Logged out!");
      router.refresh();
    }
  }, [error, isSuccess, router]);

  return mutation;
}

export default useSignOutUser;
