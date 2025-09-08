import styles from "./styles.module.css";
import { useFetch } from "../../helpers/hooks/useFetch";
import { getCategories } from "../../api/getApiNews";
import Search from "../Search/Search";
import Categories from "../Categories/Categories";
import Slider from "../Slider/Slider";
import type {
  CategoriesApiResponse,
  IFilters,
} from "../../inrefaces/interfaces";

interface IProps {
  filters: IFilters;
  changeFilters: (key: string, value: string | null | number) => void;
}

const NewsFilters = ({ filters, changeFilters }: IProps) => {
  const { data: dataCategories } = useFetch<CategoriesApiResponse, null>(
    getCategories
  );

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
