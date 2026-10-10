import { ProductType } from "@/Types/Product";
import ProductCard from "./ProductCard";
import getProducts from "@/services/productService";

const TodayPriceDecreasedProducts = async() => {
  const products = await getProducts();

  const filteredProducts = products
    .filter((product: ProductType) => product.change.dir === "down")
    .sort((a: ProductType, b: ProductType) => a.change.pct - b.change.pct)
    .slice(0, 6);

  return (
    <section className="w-full pb-8 sm:pb-10">
      <div className="mx-auto max-w-6xl px-3 sm:px-4">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-gray-800 sm:mb-5 sm:text-xl">
          <span className="text-xs text-green-500 sm:text-sm">▼</span>
          আজ দাম কমেছে
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4 md:gap-5">
          {filteredProducts.map((product: ProductType) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TodayPriceDecreasedProducts;
