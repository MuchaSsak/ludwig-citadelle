import React from "react";

import GreetingTitle from "@/components/login-ui/GreetingTitle";
import InfoTooltip from "@/components/login-ui/InfoTooltip";
import PasscodeInput from "@/components/login-ui/PasscodeInput";

function LoginModal() {
  return (
    <div className="bg-glassmorphism-md absolute inset-1/2 z-10 flex h-72 w-11/12 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-between rounded-md bg-background/75 p-6 text-center dark:bg-background/50 xs:w-[25rem]">
      <GreetingTitle />
      <PasscodeInput />
      <InfoTooltip />
    </div>
  );
}

export default LoginModal;
