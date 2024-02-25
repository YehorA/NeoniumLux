import React from "react";
import styles from "./Filter.module.scss";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

function Filter({ filters, setFilters, setCurrentPage, minPrice, maxPrice }) {
  const colorOptions = ["red", "blue", "yellow", "white", "pink"];
  const stylesOptions = ["typography", "minimalist", "graphics"];

  const handleColorChange = (e) => {
    setFilters({ ...filters, colors: e.target.value });
    setCurrentPage(1);
  };

  const handlePriceChange = (value) => {
    setFilters({ ...filters, price: value });
    setCurrentPage(1);
  };

  const handleStyleChange = (e) => {
    setFilters({ ...filters, style: e.target.value });
    setCurrentPage(1);
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className={styles["filter"]}>
      <select
        value={filters["colors"]}
        onChange={handleColorChange}
        className={`${styles["select"]} ${styles["option"]}`}>
        <option value="" className={styles["option"]}>
          All Colors
        </option>
        {colorOptions.map((color) => (
          <option key={color} value={color} className={styles["option"]}>
            {capitalizeFirstLetter(color)}
          </option>
        ))}
      </select>

      <div className={styles["priceSlider"]}>
        <label>Price Range:</label>
        <Slider
          range
          trackStyle={{ backgroundColor: "#199999" }}
          railStyle={{ backgroundColor: "$secondary-color", width: "100%" }}
          handleStyle={{
            backgroundColor: "#fff",
            borderColor: "$secondary-color",
          }}
          dotStyle={{ backgroundColor: "$secondary-color" }}
          activeDotStyle={{ borderColor: "$secondary-color" }}
          markTextStyle={{ fontSize: "1rem", color: "#333" }}
          markTextActiveStyle={{ color: "$secondary-color" }}
          min={minPrice}
          max={maxPrice}
          value={filters.price}
          onChange={handlePriceChange}
        />
        <span>${filters.price[0]}</span> - <span>${filters.price[1]}</span>
      </div>

      <select
        value={filters["style"]}
        onChange={handleStyleChange}
        className={`${styles["select"]} ${styles["option"]}`}>
        <option value="" className={styles["option"]}>
          All Styles
        </option>
        {stylesOptions.map((style) => (
          <option key={style} value={style} className={styles["option"]}>
            {capitalizeFirstLetter(style)}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
