import styles from "./styles.module.css";
import NewsBanner from "../../components/NewsBanner/NewsBanner";
import { getApiNews, getCategories } from "../../api/getApiNews";
import NewsList from "../../components/NewsList/NewsList";
import Pagination from "../../components/Pagination/Pagination";
import Categories from "../../components/Categories/Categories";
import Search from "../../components/Search/Search";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/constants";
import { useFetch } from "../../helpers/hooks/useFetch";
import { useFilters } from "../../helpers/hooks/useFilters";

const Main = () => {
  const { filters, changeFilters } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  });

  const debounceKeyword = useDebounce(filters.keywords, 1500);

  const { data, isLoading } = useFetch(getApiNews, {
    ...filters,
    keywords: debounceKeyword,
  });

  const { data: dataCategories } = useFetch(getCategories);

  const handNextPage = () => {
    if (filters.page_number < 10) {
      changeFilters("page_number", filters.page_number + 1);
    }
  };

  const handPreviousPage = () => {
    if (filters.page_number > 1) {
      changeFilters("page_number", filters.page_number + 1);
    }
  };

  const handPageClick = (pageNumber) => {
    changeFilters("page_number", pageNumber);
  };

  return (
    <main className={styles.main}>
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

      <NewsBanner
        isLoading={isLoading}
        item={data && data.news && data.news[0]}
      />

      <Pagination
        handNextPage={handNextPage}
        handPreviousPage={handPreviousPage}
        handPageClick={handPageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
      />

      <NewsList isLoading={isLoading} news={data?.news} />

      <Pagination
        handNextPage={handNextPage}
        handPreviousPage={handPreviousPage}
        handPageClick={handPageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
      />
    </main>
  );
};

export default Main;
