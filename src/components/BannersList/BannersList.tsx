import withSkeleton from "../../helpers/hoc/withSkeleton";
import type { INews } from "../../inrefaces/interfaces";
import NewsBanner from "../NewsBanner/NewsBanner";
import styles from "./styles.module.css";

interface IProps {
  banners: INews[] | null;
}

const BannersList = ({ banners }: IProps) => {
  return (
    <ul className={styles.banners}>
      {banners?.map((banner) => (
        <NewsBanner key={banner.id} item={banner} />
      ))}
    </ul>
  );
};
const BannersListWithSkeleton = withSkeleton<IProps>(
  BannersList,
  "banner",
  10,
  "row"
);

export default BannersListWithSkeleton;
