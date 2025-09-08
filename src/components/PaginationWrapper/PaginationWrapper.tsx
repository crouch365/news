import type { IPaginationProps } from "../../inrefaces/interfaces";
import Pagination from "../Pagination/Pagination";

interface IProps {
  children: React.ReactNode;
  top?: boolean;
  bottom?: boolean;
}

const PaginationWrapper = ({
  top,
  bottom,
  children,
  ...paginationProps
}: IProps & IPaginationProps) => {
  return (
    <>
      {top && <Pagination {...paginationProps} />}
      {children}

      {bottom && <Pagination {...paginationProps} />}
    </>
  );
};

export default PaginationWrapper;
