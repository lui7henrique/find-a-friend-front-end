import React from "react";
import { v4 } from "uuid";

import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { SelectItem } from "../SelectItem";

import * as S from "./styles";
import { SelectProps } from "./types";

const LIMIT = 200;

const Select = (props: SelectProps) => {
  const {
    placeholder,
    label,
    options,
    groups,
    triggerProps,
    inputProps,

    onChange,
    onBlur,
    ...rootProps
  } = props;

  return (
    <S.Root onValueChange={onChange} {...rootProps}>
      <S.Container>
        {label && <S.Label>{label}</S.Label>}

        <S.Trigger {...triggerProps}>
          <S.Value placeholder={placeholder} />

          <S.Icon>
            <ChevronDownIcon />
          </S.Icon>
        </S.Trigger>

        <S.Portal>
          <S.Content>
            <S.ScrollUpButton>
              <ChevronUpIcon />
            </S.ScrollUpButton>

            <S.ViewPort>
              {options?.map((option) => {
                const { label, value } = option;

                return (
                  <SelectItem key={v4()} value={value}>
                    {label}
                  </SelectItem>
                );
              })}

              {groups?.map(({ group, options }) => {
                return (
                  <S.Group key={v4()}>
                    <S.GroupLabel className="S.Label">{group}</S.GroupLabel>

                    {options.slice(0, LIMIT)?.map((option) => {
                      const { label, value } = option;

                      return (
                        <SelectItem key={v4()} value={value}>
                          {label}
                        </SelectItem>
                      );
                    })}
                  </S.Group>
                );
              })}
            </S.ViewPort>

            <S.ScrollDownButton>
              <ChevronDownIcon />
            </S.ScrollDownButton>
          </S.Content>
        </S.Portal>
      </S.Container>
    </S.Root>
  );
};

export default Select;
