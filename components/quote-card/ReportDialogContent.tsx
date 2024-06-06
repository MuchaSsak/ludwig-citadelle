"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import QuoteCard from "@/components/quote-card";
import { Button } from "@/components/ui/button";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import useReport from "@/hooks/useReport";
import { QUOTE_CARD_REPORT_OPTIONS } from "@/lib/constants";

const FormSchema = z.object({
  // @ts-ignore
  issue: z.enum(QUOTE_CARD_REPORT_OPTIONS, {
    required_error: "You need to select what's wrong with this quote.",
  }),
  description: z
    .string()
    .min(5, {
      message: "Description must be over 5 characters.",
    })
    .max(256, {
      message: "Description must be at max 256 characters.",
    })
    .optional(),
});

function ReportDialogContent({
  quote,
  setIsOpenDialog,
}: {
  quote: QuoteInApp;
  setIsOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { mutate, isPending } = useReport(() => setIsOpenDialog(false));
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(formData: z.infer<typeof FormSchema>) {
    const { issue, description } = formData;
    mutate({ quote, issue, description });
  }

  return (
    <>
      <DialogHeader>
        <DialogTitle>Report this quote</DialogTitle>
        <DialogDescription>
          Please specify one of the following reasons that this quote may be
          inappropriate. A report will be sent and reviewed by the Ludwig
          Citadelle&apos;s database administrators. If the report is valid, this
          quote will be removed.
        </DialogDescription>
      </DialogHeader>

      <div className="md:flex md:items-center md:gap-16">
        <div className="md:w-1/2">
          {/* Radio group form */}
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 pt-2"
            >
              {/* Issue */}
              <FormField
                control={form.control}
                name="issue"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="font-semibold">
                      What&apos;s wrong with this quote?
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                        disabled={isPending}
                      >
                        {QUOTE_CARD_REPORT_OPTIONS.map((option) => (
                          <FormItem
                            className="flex grow items-center gap-2 space-y-0"
                            key={option}
                          >
                            <FormControl>
                              <RadioGroupItem value={option} />
                            </FormControl>
                            <FormLabel
                              className={`grow ${
                                isPending
                                  ? "text-muted-foreground"
                                  : "cursor-pointer hover:font-semibold hover:transition-all dark:hover:text-primary"
                              }`}
                            >
                              {option}
                            </FormLabel>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Description */}
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="font-semibold">
                      Attach an additional description (optional)
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        disabled={isPending}
                        className="resize-none bg-background/40"
                        placeholder='e.g. The word "muzgi" is written with an "ó"...'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Submit */}
              <Button type="submit" className="w-full" disabled={isPending}>
                {isPending && (
                  <Loader2 className="mr-2 size-4 animate-spin border-background border-r-transparent" />
                )}{" "}
                Submit
              </Button>
            </form>
          </Form>
        </div>

        <div className="w-1/2 max-md:hidden">
          <QuoteCard
            {...quote}
            canBeReported={false}
            className="border border-solid bg-background/35 shadow-sm sm:w-full"
            style={{ borderColor: quote.color }}
          />
        </div>
      </div>
    </>
  );
}

export default ReportDialogContent;
