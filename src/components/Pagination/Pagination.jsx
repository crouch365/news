import styles from "./styles.module.css";

const Pagination = ({
  totalPages,
  handNextPage,
  handPreviousPage,
  handPageClick,
  currentPage,
}) => {
  return (
    <div className={styles.pagination}>
      <button
        onClick={handPreviousPage}
        className={styles.arrow}
        disabled={currentPage <= 1}
      >
        {"<"}
      </button>
      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            disabled={index + 1 === currentPage}
            className={styles.pageNumber}
            onClick={() => handPageClick(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button
        onClick={handNextPage}
        className={styles.arrow}
        disabled={currentPage >= totalPages}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
