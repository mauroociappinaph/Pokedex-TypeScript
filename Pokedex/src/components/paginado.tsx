import styles from "./paginado.module.css";
type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className={styles.pagination}>
      {Array.from({ length: totalPages }, (_, index) => (
        <div
          key={index}
          className={styles["pagination-item"] + " " + (index + 1 === currentPage ? styles.active : "")}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
};

export default Pagination;