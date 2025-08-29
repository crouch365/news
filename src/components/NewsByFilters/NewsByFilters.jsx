import NewsList from "../../components/NewsList/NewsList";
import styles from "./styles.module.css";
import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/constants";
import NewsFilters from "../NewsFilters/NewsFilters";
import { useFilters } from "../../helpers/hooks/useFilters";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { getApiNews } from "../../api/getApiNews";
import { useFetch } from "../../helpers/hooks/useFetch";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper";

const NewsByFilters = () => {
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
    <section className={styles.section}>
      <NewsFilters filters={filters} changeFilters={changeFilters} />
      <PaginationWrapper
        top
        bottom
        handNextPage={handNextPage}
        handPreviousPage={handPreviousPage}
        handPageClick={handPageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
      >
        <NewsList isLoading={isLoading} news={data?.news} />
      </PaginationWrapper>
    </section>
  );
};

export default NewsByFilters;
