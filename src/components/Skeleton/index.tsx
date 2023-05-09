import * as S from "./styles";

type SkeletonProps = typeof S.Skeleton.defaultProps;

export const Skeleton = (props: SkeletonProps) => {
  return <S.Skeleton {...props} />;
};
