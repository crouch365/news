import styles from "./styles.module.css";

interface IProps {
  image: string;
}

const Image = ({ image }: IProps) => {
  return (
    <div className={styles.banner}>
      {image ? (
        <img src={image} alt="news banner" className={styles.image} />
      ) : null}
    </div>
  );
};

export default Image;
