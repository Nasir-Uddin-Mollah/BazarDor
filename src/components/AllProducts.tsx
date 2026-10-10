import getProducts from "@/services/productService";
import AllProductsClient from "./AllProductsClient";

const AllProducts = async () => {
  const products = await getProducts();

  return <AllProductsClient products={products} />;
};

export default AllProducts;
