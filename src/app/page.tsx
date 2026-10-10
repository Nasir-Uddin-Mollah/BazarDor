import Banner from "@/components/Banner";
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <main className="flex-1">
      <Marquee />
      <Banner />
    </main>
  );
}
