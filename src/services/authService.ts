import { signIn } from "@/lib/auth-client";
import { toast } from "react-toastify";

export const handleSocialSignIn = async (provider: "google" | "github") => {
  try {
    await signIn.social({
      provider,
      callbackURL: "/",
    });
  } catch (error) {
    toast.error("সোশ্যাল লগইনে সমস্যা হয়েছে। আবার চেষ্টা করুন।");
  }
};
