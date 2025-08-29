import Pagination from "../Pagination/Pagination";
import NewsList from "../../components/NewsList/NewsList";
import styles from "./styles.module.css";
import { TOTAL_PAGES } from "../../constants/constants";
import NewsFilters from "../NewsFilters/NewsFilters";

const NewsByFilters = ({ filters, changeFilters, isLoading, news }) => {
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

      <Pagination
        handNextPage={handNextPage}
        handPreviousPage={handPreviousPage}
        handPageClick={handPageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
      />

      <NewsList isLoading={isLoading} news={news} />

      <Pagination
        handNextPage={handNextPage}
        handPreviousPage={handPreviousPage}
        handPageClick={handPageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
      />
    </section>
  );
};

export default NewsByFilters;
