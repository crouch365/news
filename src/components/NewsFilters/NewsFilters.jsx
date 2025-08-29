import styles from "./styles.module.css";
import { useFetch } from "../../helpers/hooks/useFetch";
import { getCategories } from "../../api/getApiNews";
import Search from "../Search/Search";
import Categories from "../Categories/Categories";

const NewsFilters = ({ filters, changeFilters }) => {
  const { data: dataCategories } = useFetch(getCategories);

  return (
    <div className={styles.filters}>
      {dataCategories ? (
        <Categories
          categories={dataCategories.categories}
          selectedCategories={filters.category}
          setSelectedCategories={(category) =>
            changeFilters("category", category)
          }
        />
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilters("keywords", keywords)}
      />
    </div>
  );
};

export default NewsFilters;
