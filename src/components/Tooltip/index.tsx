import * as RadixTooltip from "@radix-ui/react-tooltip";

import { TooltipProps } from "./types";

import * as S from "./styles";

export const Tooltip = (props: TooltipProps) => {
  const { children, message, ...contentProps } = props;

  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>

        <RadixTooltip.Portal>
          <S.Content sideOffset={5} {...contentProps}>
            {message}
            <S.TooltipArrow />
          </S.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};
