import React from "react";
import { v4 } from "uuid";

import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { SelectItem } from "../SelectItem";

import * as S from "./styles";
import { SelectProps } from "./types";
import { Field } from "../Field";
import dynamic from "next/dynamic";

const LIMIT = 400;

const FieldSelect = (props: SelectProps) => {
  const {
    placeholder,

    options,
    groups,
    triggerProps,
    inputProps,

    onChange,
    onBlur,

    label,
    error,
    ...rootProps
  } = props;

  return (
    <Field
      label={label}
      labelProps={{
        color: triggerProps?.variant !== "input" ? "white" : "blue",
      }}
      error={error}
    >
      <S.Root onValueChange={onChange} {...rootProps}>
        <S.Container>
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
    </Field>
  );
};

export const DynamicSelect = dynamic(
  () => import("../../components/FieldSelect"),
  {
    loading: () => <></>,
    ssr: false,
  }
);

export default FieldSelect;
