import { getLatestNews } from "../../api/getApiNews";
import { useFetch } from "../../helpers/hooks/useFetch";
import type { NewsApiResponse } from "../../inrefaces/interfaces";
import BannersList from "../BannersList/BannersList";
import styles from "./styles.module.css";

const LatestNews = () => {
  const { data, isLoading } = useFetch<NewsApiResponse, null>(getLatestNews);
  return (
    <section className={styles.section}>
      <BannersList banners={data && data.news} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
