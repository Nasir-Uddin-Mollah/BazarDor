import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center sm:py-24">
      <div className="mb-4 text-5xl select-none sm:text-6xl">
        🧺
      </div>

      <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
        পাতাটি খুঁজে পাওয়া যায়নি
      </h1>

      <p className="mt-2.5 max-w-md text-xs leading-relaxed text-gray-500 sm:text-sm">
        আপনি যে পণ্য বা পাতাটি খুঁজছেন সেটি সরানো হয়েছে বা কখনো ছিল না।
      </p>

      <div className="mt-6 flex items-center justify-center">
        <Link
          href="/"
          className="inline-flex h-10 items-center justify-center rounded-lg bg-emerald-700 px-5 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-emerald-800 sm:text-sm cursor-pointer"
        >
          হোম পেজে যান
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;