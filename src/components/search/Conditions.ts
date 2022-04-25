interface ICondition {
  id: string;
  kind:
    | "codePopup"
    | "radio"
    | "text"
    | "select"
    | "subSelect"
    | "date"
    | "period";
  label?: string;
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

interface CodePopup extends ICondition {
  field: string;
  kind: "codePopup";
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

interface Select extends ICondition {
  kind: "select";
  options: Array<SelectOption>;
  field: string;
  endLabel?: string;
  width?: string;
  selectedValue?: string;
}
interface SubSelect extends ICondition {
  parentField: string;
  kind: "subSelect";
  options: Record<string, Array<SelectOption>>;
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
  checkedValue?: string;
}

interface RadioOption {
  value: string;
  description: string;
  disabled?: boolean;
}

type SearchSetting = Array<
  Period | CDate | CodePopup | Text | Select | Radio | SubSelect
>;

export {
  ICondition,
  CodePopup,
  Select,
  SubSelect,
  Radio,
  Text,
  CDate,
  Period,
  SearchSetting,
  SelectOption,
};
