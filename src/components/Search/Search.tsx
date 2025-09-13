import { useTheme } from "../../context/ThemeContext";
import styles from "./styles.module.css";

interface IProps {
  keywords: string;
  setKeywords: (keywords: string) => void;
}

const Search = ({ keywords, setKeywords }: IProps) => {
  const { isDark } = useTheme();

  return (
    <div className={`${styles.search} ${isDark ? styles.dark : styles.light}`}>
      <input
        type="text"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        placeholder="JavaScript"
        className={styles.input}
      />
    </div>
  );
};

export default Search;
