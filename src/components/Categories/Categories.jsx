import { forwardRef } from "react";
import styles from "./styles.module.css";

const Categories = forwardRef(
  ({ categories, selectedCategories, setSelectedCategories }, ref) => {
    return (
      <div ref={ref} className={styles.categories}>
        <button
          onClick={() => setSelectedCategories(null)}
          className={!selectedCategories ? styles.active : styles.item}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            onClick={() => setSelectedCategories(category)}
            className={
              selectedCategories === category ? styles.active : styles.item
            }
            key={category}
          >
            {category}
          </button>
        ))}
      </div>
    );
  }
);

Categories.displayName = "Categories";
export default Categories;
