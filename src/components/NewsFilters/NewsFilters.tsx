import styles from "./styles.module.css";
import Search from "../Search/Search";
import Categories from "../Categories/Categories";
import Slider from "../Slider/Slider";
import type { IFilters } from "../../inrefaces/interfaces";
import { useGetCategoriesQuery } from "../../store/services/newsApi";
import { useAppDispatch } from "../../store";
import { setFilters } from "../../store/slices/newsSlice";

interface IProps {
  filters: IFilters;
}

const NewsFilters = ({ filters }: IProps) => {
  const { data } = useGetCategoriesQuery(null);

  const dispatch = useAppDispatch();
  return (
    <div className={styles.filters}>
      {data ? (
        <Slider>
          <Categories
            categories={data.categories}
            selectedCategories={filters.category}
            setSelectedCategories={(category) =>
              dispatch(setFilters({ key: "category", value: category }))
            }
          />
        </Slider>
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) =>
          dispatch(setFilters({ key: "keywords", value: keywords }))
        }
      />
    </div>
  );
};

export default NewsFilters;
