import { CheckIcon } from "@radix-ui/react-icons";
import { ForwardRefRenderFunction, ReactNode, forwardRef } from "react";

import * as S from "./styles";

type SelectItemBaseProps = {
  children: ReactNode;
  value: string;
} & typeof S.Item.defaultProps;

// eslint-disable-next-line react/display-name
const SelectItemBase: ForwardRefRenderFunction<
  HTMLDivElement,
  SelectItemBaseProps
> = ({ children, ...props }, ref) => {
  return (
    <S.Item {...props} ref={ref}>
      <S.ItemText>{children}</S.ItemText>

      <S.ItemIndicator>
        <CheckIcon />
      </S.ItemIndicator>
    </S.Item>
  );
};

export const SelectItem = forwardRef(SelectItemBase);
