import Skeleton from "../../components/Skeleton/Skeleton";
import type { DirectionType, SkeletonType } from "../../inrefaces/interfaces";

interface IProps {
  isLoading: boolean;
}

const withSkeleton = <P extends object>(
  Component: React.ComponentType<P>,
  type?: SkeletonType,
  count?: number,
  direction?: DirectionType
) => {
  return function WithSkeleton(props: IProps & P) {
    const { isLoading, ...restProps } = props;

    if (isLoading) {
      return <Skeleton type={type} count={count} direction={direction} />;
    }

    return <Component {...(restProps as P)} />;
  };
};

export default withSkeleton;
