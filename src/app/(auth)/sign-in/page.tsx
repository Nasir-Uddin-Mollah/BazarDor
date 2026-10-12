"use client";
import { signIn } from "@/lib/auth-client";
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
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignInPage = () => {
  const router = useRouter();

  const onSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const { data: user, error } = await signIn.email({
      email: data.email as string,
      password: data.password as string,
    });

    if (error) {
      toast.error("ইমেইল অথবা পাসওয়ার্ড সঠিক নয়। আবার চেষ্টা করুন।");
      return;
    }

    if (user) {
      router.push("/");
      toast.success("সফলভাবে সাইন ইন হয়েছে।");
    }
  };

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
          <Fieldset className="w-full">
            <FieldGroup className="flex w-full flex-col gap-4 [&_.label]:after:!hidden [&_.label]:after:!content-none">

              <TextField
                isRequired
                name="email"
                type="email"
                className="flex flex-col gap-1.5"
              >
                <Label className="text-xs font-semibold text-gray-800 sm:text-sm">
                  ইমেইল
                </Label>
                <Input
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
                  placeholder="কমপক্ষে ৮ অক্ষর"
                  className="h-11 w-full rounded-xl border border-[#E1E8E1] bg-white px-3.5 text-sm text-gray-800 placeholder:text-gray-400 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
                />
                <FieldError className="text-xs text-rose-500" />
              </TextField>
            </FieldGroup>

            <Fieldset.Actions className="mt-5 flex w-full flex-col gap-0 items-stretch">
              <Button
                type="submit"
                className="h-11 w-full rounded-xl bg-emerald-700 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(13,122,62,0.25)] transition-colors hover:bg-emerald-800 cursor-pointer"
              >
                সাইন ইন
              </Button>

              <div className="my-5 flex w-full items-center gap-3">
                <div className="h-px flex-1 bg-[#E1E8E1]" />
                <span className="text-xs font-normal text-gray-500">অথবা</span>
                <div className="h-px flex-1 bg-[#E1E8E1]" />
              </div>

              <div className="grid w-full grid-cols-2 gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => handleSocialSignIn("google")}
                  className="flex h-11 w-full items-center justify-center gap-1.5 rounded-xl border border-[#E1E8E1] bg-white px-2 text-xs font-medium text-gray-700 shadow-none transition-colors hover:bg-gray-50 cursor-pointer"
                >
                  <FcGoogle className="size-4 shrink-0 text-base" />
                  <span className="truncate">Google দিয়ে চালিয়ে যান</span>
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => handleSocialSignIn("github")}
                  className="flex h-11 w-full items-center justify-center gap-1.5 rounded-xl border border-[#E1E8E1] bg-white px-2 text-xs font-medium text-gray-700 shadow-none transition-colors hover:bg-gray-50 cursor-pointer"
                >
                  <FaGithub className="size-4 shrink-0 text-base text-gray-800" />
                  <span className="truncate">GitHub দিয়ে চালিয়ে যান</span>
                </Button>
              </div>

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
