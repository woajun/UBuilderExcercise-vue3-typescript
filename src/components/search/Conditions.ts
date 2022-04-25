interface ICondition {
  id: string;
  kind: "innerSearch" | "radio" | "text" | "selects" | "date" | "period";
  label: string;
  labelWidth?: string;
  fullWidth?: string;
}

interface CDate extends ICondition {
  field: string;
  kind: "date";
  date?: Date;
  placeholder?: string;
}
interface Period extends ICondition {
  kind: "period";
  fromField: string;
  from?: Date;
  fromPlaceholder?: string;
  toField: string;
  to?: Date;
  toPlaceholder?: string;
}

interface Text extends ICondition {
  field: string;
  kind: "text";
  value?: string;
  placeholder?: string;
}

interface InnerSearch extends ICondition {
  field: string;
  kind: "innerSearch";
  value: string;
  valueWidth?: string;
  valueClickEvent?: boolean;
  disabled?: boolean;
  firstResultVisible?: boolean;
  firstResult?: string;
  firstResultWidth?: string;
  secondResultVisible?: boolean;
  secondResult?: string;
  secondResultWidth?: string;
  event?(value: string): Array<string>;
}

interface Selects extends ICondition {
  kind: "selects";
  selects: Array<Select>;
}

interface Select {
  options: Array<SelectOption>;
  field: string;
  endLabel?: string;
  width?: string;
  selectedValue?: string;
}

interface SelectOption {
  value: string;
  description: string;
  disabled?: boolean;
  parent?: string;
}

interface Radio extends ICondition {
  field: string;
  kind: "radio";
  options: Array<RadioOption>;
  selectedValue?: string;
}

interface RadioOption {
  value: string;
  description: string;
  checked?: boolean;
  disabled?: boolean;
}

type SearchSetting = Array<
  Period | CDate | InnerSearch | Text | Selects | Radio
>;

export {
  ICondition,
  InnerSearch,
  Selects,
  Radio,
  Text,
  CDate,
  Period,
  SearchSetting,
};
