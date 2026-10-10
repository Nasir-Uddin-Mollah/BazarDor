import Banner from "@/components/Banner";
import Marquee from "@/components/Marquee";
import TodayPriceIncreasedProducts from "@/components/TodayPriceIncreasedProducts";

export default function Home() {
  return (
    <main className="flex-1">
      <Marquee />
      <Banner />
      <TodayPriceIncreasedProducts/>
    </main>
  );
}
