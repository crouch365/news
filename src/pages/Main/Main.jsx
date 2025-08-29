import styles from "./styles.module.css";
import { getApiNews } from "../../api/getApiNews";

import { useDebounce } from "../../helpers/hooks/useDebounce";
import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/constants";
import { useFetch } from "../../helpers/hooks/useFetch";
import { useFilters } from "../../helpers/hooks/useFilters";
import LatestNews from "../../components/LatestNews/LatestNews";
import NewsByFilters from "../../components/NewsByFilters/NewsByFilters";

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

  return (
    <main className={styles.main}>
      <LatestNews isLoading={isLoading} banners={data && data.news} />

      <NewsByFilters
        filters={filters}
        changeFilters={changeFilters}
        isLoading={isLoading}
        news={data?.news}
      />
    </main>
  );
};

export default Main;
