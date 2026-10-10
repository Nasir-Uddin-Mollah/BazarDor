import AllProducts from "@/components/AllProducts";
import Banner from "@/components/Banner";
import Marquee from "@/components/Marquee";
import TodayPriceDecreasedProducts from "@/components/TodayPriceDecreasedProducts";
import TodayPriceIncreasedProducts from "@/components/TodayPriceIncreasedProducts";

export default function Home() {
  return (
    <main className="flex-1">
      <Marquee />
      <Banner />
      <TodayPriceIncreasedProducts />
      <TodayPriceDecreasedProducts />
      <AllProducts />
    </main>
  );
}
