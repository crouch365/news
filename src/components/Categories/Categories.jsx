import styles from "./styles.module.css";

const Categories = ({
  categories,
  selectedCategories,
  setSelectedCategories,
}) => {
  return (
    <div className={styles.categories}>
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
};

export default Categories;
