import { Input, Root, Trigger } from "./styles";

export type SelectProps = {
  placeholder: string;
  label?: string;
  options?: SelectOptions;
  groups?: SelectGroups;
  isSearchable?: boolean;
  limit?: number;

  triggerProps?: typeof Trigger.defaultProps;
  inputProps?: typeof Input.defaultProps;

  onChange?: any;
  onBlur?: any;
} & typeof Root.defaultProps;

export type SelectOptions = Array<{
  label: string;
  value: string;
}>;

export type SelectGroups = Array<{
  group: string;
  options: SelectOptions;
}>;
