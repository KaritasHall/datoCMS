"use client";

import { useProducts } from "@/app/hooks/useProducts";
import { useThrottle } from "@/app/hooks/useThrottle";
import SectionContainer from "../components/section-container";
import ProductGrid from "../components/product-grid";

// TODO: Create Search Hook, useSearch, that handles the search functionality and returns the products
// endpoint is search/:query, example: /api/search/Eco

const limit = 40;

export default function SearchPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  // Use useThrottle to throttle the query
  const throttledQuery =
    useThrottle({ value: searchParams?.query ?? "", limit: 1000 }) || "";

  const currentPage = Number(searchParams?.page) || 1;

  const { products } = useProducts({});

  // Checking basic search functionality with the throttled query
  // Currently searching by title only
  const filteredProducts = products?.filter((product) =>
    product.title.toLowerCase().includes(throttledQuery.toLowerCase()),
  );

  try {
    console.log({
      value: searchParams?.query,
      throttledQuery,
    });
  } catch (e) {
    console.error(e);
  }

  const currentProducts = filteredProducts?.slice(
    (currentPage - 1) * limit,
    currentPage * limit,
  );

  return (
    <div>
      <SectionContainer>
        <h2 className="pb-24 text-2xl font-bold">Results</h2>
        <ProductGrid products={currentProducts ?? []} />
      </SectionContainer>
    </div>
  );
}
