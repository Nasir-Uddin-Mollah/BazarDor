import AllProductsClient from "@/components/AllProductsClient";
import { toBn } from "@/components/Marquee";
import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: Promise<{ categorySlug: string }>;
}

const getCategory = async (categorySlug: string) => {
  try {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/bazardor/categories/${categorySlug}`,
      { next: { revalidate: 60 } },
    );
    if (!res.ok) throw new Error(`Failed to fetch product`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};

const getProductsByCategory = async (categorySlug: string) => {
  try {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/bazardor/products?category=${categorySlug}`,
      { next: { revalidate: 3600 } },
    );
    if (!res.ok) throw new Error(`Failed to fetch products`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

const ProductsByCategory = async ({ params }: CategoryPageProps) => {
  const { categorySlug } = await params;
  const product = await getCategory(categorySlug);
  const products = await getProductsByCategory(categorySlug);

  if (!product || !products || products.length === 0) {
    notFound();
  }

  return (
    <div className="py-6">
      <div className="mx-auto max-w-6xl px-3 sm:px-4 mb-6">
        <div className="flex items-center gap-4 rounded-2xl border border-[#E1E8E1] bg-[#FAFCFA] p-5">
          <span className="flex size-14 items-center justify-center rounded-2xl bg-[#F0F5F0] text-3xl">
            {product?.icon}
          </span>
          <div>
            <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">
              {product?.nameBn}
            </h1>
            <p className="text-sm text-gray-500">
              {toBn(products.length)}টি পণ্যের আজকের দাম ও পরিবর্তন
            </p>
          </div>
        </div>
      </div>
      <AllProductsClient products={products} />
    </div>
  );
};

export default ProductsByCategory;
