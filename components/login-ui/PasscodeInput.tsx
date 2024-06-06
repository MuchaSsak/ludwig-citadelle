"use client";

import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import React, { useState } from "react";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import useSignInUser from "@/hooks/useSignInUser";

function PasscodeInput() {
  const [passcode, setPasscode] = useState("");
  const { mutate, isPending } = useSignInUser();

  function handleEnterPasscode() {
    mutate(passcode);
  }

  return (
    <div className="pb-6">
      <p className="pb-2 font-mono text-sm text-muted-foreground">
        Enter the passcode
      </p>
      <InputOTP
        maxLength={6}
        pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
        value={passcode}
        onChange={(newValue) => setPasscode(newValue)}
        onComplete={handleEnterPasscode}
        disabled={isPending}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
}

export default PasscodeInput;
