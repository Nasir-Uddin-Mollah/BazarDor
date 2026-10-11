import { signIn } from "@/lib/auth-client";
import { toast } from "@heroui/react";

export const handleSocialSignIn = async (provider: "google" | "github") => {
  try {
    await signIn.social({
      provider,
      callbackURL: "/profile",
    });
  } catch (error) {
    toast.danger("সোশ্যাল লগইনে সমস্যা হয়েছে। আবার চেষ্টা করুন।");
  }
};
