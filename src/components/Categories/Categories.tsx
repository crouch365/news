import { forwardRef, type ForwardedRef } from "react";
import styles from "./styles.module.css";
import type { CategoriesType } from "../../inrefaces/interfaces";

interface IProps {
  categories: CategoriesType[];
  selectedCategories: CategoriesType | null;
  setSelectedCategories: (categories: CategoriesType | null) => void;
}

const Categories = forwardRef(
  (
    { categories, selectedCategories, setSelectedCategories }: IProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
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
