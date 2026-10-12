import getProducts from "@/services/productService";
import AllProductsClient from "./AllProductsClient";

const AllProducts = async () => {
  const products = await getProducts();

  return <AllProductsClient title="সব পণ্য" products={products} />;
};

export default AllProducts;
