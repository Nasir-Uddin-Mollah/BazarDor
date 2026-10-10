import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";
import { ProductType } from "@/Types/Product";

const toBn = (num: number | string) => {
  return num.toString().replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[+d]);
};

const getUnitBn = (unit: string) => {
  if (unit === "kg") return "কেজি";
  if (unit === "litre") return "লিটার";
  if (unit === "dozen") return "ডজন";
  if (unit === "piece") return "টি";
  return unit;
};

const getProducts = async (): Promise<ProductType[]> => {
  try {
    const res = await fetch(
      "https://api.abcz.workers.dev/api/bazardor/products",
    );
    if (!res.ok) throw new Error("Failed to fetch products");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

const Marquee = async () => {
  const products: ProductType[] = await getProducts();

  return (
    <div className="border-b border-gray-100 bg-white py-2.5 text-sm">
      <MarqueeText direction="right" duration={8} pauseOnHover={true}>
        {products.map((product: ProductType) => (
          <span
            key={product?.id}
            className="inline-block border-r border-gray-200 px-4 text-gray-700"
          >
            <span className="mr-1.5">{product?.image}</span>
            <span className="mr-1.5 font-medium text-gray-800">
              {product?.nameBn}
            </span>
            <span className="mr-1.5 text-gray-600">
              {toBn(product?.today)} টাকা/{getUnitBn(product?.unit)}
            </span>
            <span
              className={`font-semibold ${
                product?.change.dir === "up" ? "text-red-500" : "text-green-600"
              }`}
            >
              {product?.change.dir === "up" ? "▲ " : "▼ "}
              {toBn(Math.abs(product?.change.pct))}%
            </span>
          </span>
        ))}
      </MarqueeText>
    </div>
  );
};

export default Marquee;
