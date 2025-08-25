import styles from "./styles.module.css";
import NewsBanner from "../../components/NewsBanner/NewsBanner";
import { useEffect, useState } from "react";
import { getApiNews, getCategories } from "../../api/getApiNews";
import NewsList from "../../components/NewsList/NewsList";
import Skeleton from "../../components/Skeleton/Skeleton";
import Pagination from "../../components/Pagination/Pagination";
import Categories from "../../components/Categories/Categories";
import Search from "../../components/Search/Search";
import { useDebounce } from "../../helpers/hooks/useDebounce";

const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState("All");
  const [keywords, setKeywords] = useState("");
  const totalPages = 10;
  const pageSize = 10;

  const debounceKeyword = useDebounce(keywords, 1500);

  const fetchNews = async (currentPage) => {
    try {
      setIsLoading(true);
      const response = await getApiNews({
        page_number: currentPage,
        page_size: pageSize,
        category: selectedCategories === "All" ? null : selectedCategories,
        keywords: debounceKeyword,
      });
      setNews(response.news);
      setIsLoading(false);
    } catch (error) {
      console.log("Error from func. fetchNews", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await getCategories();
      setCategories(["All", ...response.categories]);
    } catch (error) {
      console.log("Error from func. fetchNews", error);
    }
  };

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage, selectedCategories, debounceKeyword]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const handNextPage = () => {
    if (currentPage < 10) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handPageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main className={styles.main}>
      <Categories
        categories={categories}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
      />

      <Search keywords={keywords} setKeywords={setKeywords} />

      {news.length > 0 && !isLoading ? (
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton count={1} type={"banner"} />
      )}

      <Pagination
        handNextPage={handNextPage}
        handPreviousPage={handPreviousPage}
        handPageClick={handPageClick}
        totalPages={totalPages}
        currentPage={currentPage}
      />

      {!isLoading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton count={10} type={"item"} />
      )}

      <Pagination
        handNextPage={handNextPage}
        handPreviousPage={handPreviousPage}
        handPageClick={handPageClick}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </main>
  );
};

export default Main;
