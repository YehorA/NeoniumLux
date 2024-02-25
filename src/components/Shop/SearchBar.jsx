import React from "react";
import styles from "./SearchBar.module.scss";

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className={styles["searchBar"]}>
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
