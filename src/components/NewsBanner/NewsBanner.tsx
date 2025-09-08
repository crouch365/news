import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import type { INews } from "../../inrefaces/interfaces";
import Image from "../Image/Image";
import styles from "./styles.module.css";

interface IProps {
  item: INews;
}

const NewsBanner = ({ item }: IProps) => {
  return (
    <div className={styles.banner}>
      <Image image={item?.image} />
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.extra}>
        {formatTimeAgo(item.published)} by {item.author}
      </p>
    </div>
  );
};

export default NewsBanner;
