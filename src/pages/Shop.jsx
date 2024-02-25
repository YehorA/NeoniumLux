import React, { useState, useEffect } from "react";
import Filter from "../components/Shop/Filter";
import ProductList from "../components/Shop/ProductList";
import SearchBar from "../components/Shop/SearchBar";
import styles from "./Shop.module.scss";
import NavigationBar from "../components/NavigationBar";
import allProductsData from "../data/allProductsData";

function Shop() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    colors: "",
    price: [0, 0],
    style: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  useEffect(() => {
    // Effect for updating price range based on filters
    const filteredProducts = allProductsData.filter((product) => {
      const selectedColors = Array.isArray(filters.colors)
        ? filters.colors
        : filters.colors
        ? [filters.colors]
        : [];

      const selectedStyle = Array.isArray(filters.style)
        ? filters.style
        : filters.style
        ? [filters.style]
        : [];

      return (
        (!selectedColors.length ||
          selectedColors.every((selectedColor) =>
            product.colors.includes(selectedColor)
          )) &&
        (!selectedStyle.length ||
          selectedStyle.every((selectedStyle) =>
            product.style.includes(selectedStyle)
          ))
      ); // Filtering logic based on selected colors and styles
    });

    // Calculate min and max prices from filtered products
    const prices = filteredProducts.map((product) => product.price);
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    setMinPrice(min);
    setMaxPrice(max);
    setFilters((prevFilters) => ({
      ...prevFilters,
      price: [min, max],
    }));
  }, [filters.colors, filters.style, searchQuery]);

  // Filter products based on search query, filters, and current page
  const filteredProducts = allProductsData.filter((product) => {
    const selectedColors = Array.isArray(filters.colors)
      ? filters.colors
      : filters.colors
      ? [filters.colors]
      : [];

    const priceInRange =
      product.price >= filters.price[0] && product.price <= filters.price[1];

    const selectedStyle = Array.isArray(filters.style)
      ? filters.style
      : filters.style
      ? [filters.style]
      : [];

    return (
      (!selectedColors.length ||
        selectedColors.every((selectedColor) =>
          product.colors.includes(selectedColor)
        )) &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      priceInRange &&
      (!selectedStyle.length ||
        selectedStyle.every((selectedStyle) =>
          product.style.includes(selectedStyle)
        ))
    );
  });

  return (
    <div>
      <NavigationBar showNavBar={true} />
      <div className={styles["productPage"]}>
        <Filter
          filters={filters}
          setFilters={setFilters}
          setCurrentPage={setCurrentPage}
          minPrice={minPrice}
          maxPrice={maxPrice}
        />
        <div className={styles["mainContent"]}>
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <ProductList
            filteredProducts={filteredProducts}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}

export default Shop;
