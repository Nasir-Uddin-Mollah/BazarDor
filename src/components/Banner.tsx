import { date } from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="w-full py-2 sm:py-3 lg:py-3.5 mt-8 mb-12">
      <div className="mx-auto max-w-6xl px-3 sm:px-4">
        <div className="flex flex-col items-center justify-between gap-4 rounded-3xl border border-[#E1E8E1] bg-[#FAFCFA] px-6 py-5 sm:px-8 sm:py-5.5 md:flex-row md:gap-6 lg:px-10 lg:py-6">
          <div className="flex flex-1 flex-col items-start text-left">
            <span
              suppressHydrationWarning
              className="inline-flex items-center rounded-full bg-[#eaf5ee] px-3 py-0.5 text-xs font-medium text-[#1e7f47]"
            >
              {date}
            </span>

            <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl lg:text-[32px] xl:text-[34px] leading-[1.18] sm:leading-[1.18]">
              আজকের বাজারের দাম এক
              <br className="hidden sm:inline" /> নজরে
            </h1>

            <p className="mt-2 max-w-lg text-xs leading-relaxed text-gray-500 sm:text-sm lg:text-[14px] sm:leading-relaxed">
              চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
              বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
            </p>

            <Link
              href="#সব-পণ্য"
              className="mt-3.5 sm:mt-4 inline-flex h-9 items-center justify-center rounded-lg bg-emerald-700 px-4 sm:px-5 text-xs sm:text-sm font-semibold text-white shadow-none transition-colors hover:bg-emerald-800"
            >
              সব পণ্য দেখুন
            </Link>
          </div>

          <div className="flex shrink-0 items-center justify-center lg:justify-end">
            <Image
              src="/bazar-hero.png"
              alt="আজকের বাজারের দাম"
              width={350}
              height={292}
              priority
              className="h-auto w-[230px] object-contain sm:w-[270px] md:w-[300px] lg:w-[335px] xl:w-[355px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
