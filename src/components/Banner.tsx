import { date } from "@/components/Navbar";
import { Button } from "@heroui/react";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="w-full py-4 sm:py-5 lg:py-6">
      <div className="mx-auto max-w-6xl px-3 sm:px-4">
        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-[#E1E8E1] bg-[#FAFCFA] px-6 py-6 sm:px-8 sm:py-7 md:flex-row md:gap-8 lg:px-12 lg:py-8">
          <div className="flex flex-1 flex-col items-start text-left">
            <span
              suppressHydrationWarning
              className="inline-flex items-center rounded-full bg-[#eaf5ee] px-3 py-1 text-xs font-medium text-[#1e7f47]"
            >
              {date}
            </span>

            <h1 className="mt-3 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl lg:text-[36px] xl:text-[38px] leading-[1.18] sm:leading-[1.18]">
              আজকের বাজারের দাম এক
              <br className="hidden sm:inline" /> নজরে
            </h1>

            <p className="mt-2.5 max-w-lg text-xs leading-relaxed text-gray-500 sm:text-sm lg:text-[15px] sm:leading-relaxed">
              চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
              বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
            </p>

            <Button className="mt-4 sm:mt-5 h-9 sm:h-10 rounded-lg bg-emerald-700 px-4 sm:px-5 text-xs sm:text-sm font-semibold text-white shadow-none transition-colors hover:bg-emerald-800">
              সব পণ্য দেখুন
            </Button>
          </div>

          <div className="flex shrink-0 items-center justify-center lg:justify-end">
            <Image
              src="/bazar-hero.png"
              alt="আজকের বাজারের দাম"
              width={315}
              height={263}
              priority
              className="h-auto w-[210px] object-contain sm:w-[250px] md:w-[270px] lg:w-[300px] xl:w-[320px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
