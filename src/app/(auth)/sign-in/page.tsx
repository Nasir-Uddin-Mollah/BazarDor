"use client";
import { signIn, useSession } from "@/lib/auth-client";
import { handleSocialSignIn } from "@/services/authService";
import {
  Button,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SocialButtons from "@/components/SocialButtons";

const SignInPage = () => {
  const router = useRouter();
  const { data: session, isPending } = useSession();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [socialLoading, setSocialLoading] = useState<"google" | "github" | null>(null);

  useEffect(() => {
    if (!isPending && session) {
      router.replace("/");
    }
  }, [isPending, session, router]);

  const onSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const { data: user, error } = await signIn.email({
        email: data.email as string,
        password: data.password as string,
      });

      if (error) {
        toast.error("ইমেইল অথবা পাসওয়ার্ড সঠিক নয়। আবার চেষ্টা করুন।");
        setIsSubmitting(false);
        return;
      }

      if (user) {
        toast.success("সফলভাবে সাইন ইন হয়েছে।");
        router.replace("/");
        router.refresh();
      }
    } catch {
      toast.error("সাইন ইন করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setIsSubmitting(false);
    }
  };

  const onSocialClick = async (provider: "google" | "github") => {
    setSocialLoading(provider);
    try {
      await handleSocialSignIn(provider);
    } catch {
      setSocialLoading(null);
    }
  };

  const isAnyLoading = isSubmitting || socialLoading !== null;

  if (session) {
    return null;
  }

  return (
    <div className="flex min-h-[calc(100vh-140px)] flex-col items-center justify-center px-4 py-8 sm:py-12">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold tracking-tight text-gray-800 sm:text-[28px]">
          সাইন ইন
        </h1>
        <p className="mt-1.5 text-xs text-gray-500 sm:text-sm">
          বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
        </p>
      </div>

      <div className="w-full max-w-[420px] rounded-3xl border border-[#E1E8E1] bg-[#FAFCFA] p-6 shadow-xs sm:p-8">
        <Form className="w-full" onSubmit={onSubmit}>
          <Fieldset aria-label="সাইন ইন তথ্য" className="w-full">
            <FieldGroup className="flex w-full flex-col gap-4 [&_.label]:after:!hidden [&_.label]:after:!content-none">

              <TextField
                isRequired
                name="email"
                type="email"
                aria-label="ইমেইল"
                className="flex flex-col gap-1.5"
              >
                <Label className="text-xs font-semibold text-gray-800 sm:text-sm">
                  ইমেইল
                </Label>
                <Input
                  aria-label="ইমেইল"
                  placeholder="you@example.com"
                  className="h-11 w-full rounded-xl border border-[#E1E8E1] bg-white px-3.5 text-sm text-gray-800 placeholder:text-gray-400 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
                />
                <FieldError className="text-xs text-rose-500" />
              </TextField>

              <TextField
                isRequired
                minLength={8}
                name="password"
                type="password"
                aria-label="পাসওয়ার্ড"
                className="flex flex-col gap-1.5"
                validate={(value) => {
                  if (value.length < 8) {
                    return "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে।";
                  }
                  if (!/[A-Z]/.test(value)) {
                    return "পাসওয়ার্ডে কমপক্ষে একটি বড় হাতের অক্ষর থাকতে হবে।";
                  }
                  if (!/[0-9]/.test(value)) {
                    return "পাসওয়ার্ডে কমপক্ষে একটি সংখ্যা থাকতে হবে।";
                  }
                  return null;
                }}
              >
                <Label className="text-xs font-semibold text-gray-800 sm:text-sm">
                  পাসওয়ার্ড
                </Label>
                <Input
                  aria-label="পাসওয়ার্ড"
                  placeholder="কমপক্ষে ৮ অক্ষর"
                  className="h-11 w-full rounded-xl border border-[#E1E8E1] bg-white px-3.5 text-sm text-gray-800 placeholder:text-gray-400 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
                />
                <FieldError className="text-xs text-rose-500" />
              </TextField>
            </FieldGroup>

            <Fieldset.Actions className="mt-5 flex w-full flex-col gap-0 items-stretch">
              <Button
                type="submit"
                isDisabled={isAnyLoading}
                className={`h-11 w-full rounded-xl text-sm font-semibold transition-colors ${
                  isAnyLoading
                    ? "bg-[#E5ECE5] text-gray-500 cursor-not-allowed shadow-none"
                    : "bg-emerald-700 text-white shadow-[0_4px_14px_rgba(13,122,62,0.25)] hover:bg-emerald-800 cursor-pointer"
                }`}
              >
                {isAnyLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="size-4 animate-spin rounded-full border-2 border-gray-400 border-t-transparent" />
                    <span>অপেক্ষা করুন...</span>
                  </span>
                ) : (
                  "সাইন ইন"
                )}
              </Button>

              <SocialButtons
                isSubmitting={isSubmitting}
                socialLoading={socialLoading}
                onSocialClick={onSocialClick}
              />

              <div className="mt-6 text-center text-xs text-gray-600 sm:text-sm">
                অ্যাকাউন্ট নেই?{" "}
                <Link
                  href="/sign-up"
                  className="font-medium text-emerald-700 transition-colors hover:text-emerald-800 hover:underline"
                >
                  সাইন আপ করুন
                </Link>
              </div>
            </Fieldset.Actions>
          </Fieldset>
        </Form>
      </div>

      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-1 text-xs text-gray-500 transition-colors hover:text-gray-800 sm:text-sm"
      >
        ← হোম পেজে ফিরে যান
      </Link>
    </div>
  );
};

export default SignInPage;
