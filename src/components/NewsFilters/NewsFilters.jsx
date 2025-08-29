import styles from "./styles.module.css";
import { useFetch } from "../../helpers/hooks/useFetch";
import { getCategories } from "../../api/getApiNews";
import Search from "../Search/Search";
import Categories from "../Categories/Categories";
import Slider from "../Slider/Slider";

const NewsFilters = ({ filters, changeFilters }) => {
  const { data: dataCategories } = useFetch(getCategories);

  return (
    <div className={styles.filters}>
      {dataCategories ? (
        <Slider>
          <Categories
            categories={dataCategories.categories}
            selectedCategories={filters.category}
            setSelectedCategories={(category) =>
              changeFilters("category", category)
            }
          />
        </Slider>
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilters("keywords", keywords)}
      />
    </div>
  );
};

export default NewsFilters;
