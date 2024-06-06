import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import reportQuote from "@/services/reportQuote";

function useReport(closeDialog?: () => void) {
  const mutation = useMutation({
    mutationKey: ["report"],
    mutationFn: (args: QuoteReport) => reportQuote(args),
    onSuccess: () => {
      toast.success(
        "Successfully sent the report! Thank you for your assistance."
      );
      closeDialog?.();
    },
    onError: () => {
      toast.error(
        "Something went wrong with sending your report. Sorry for the inconvenience"
      );
    },
  });

  return mutation;
}

export default useReport;
