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
// interface Period extends ICondition {
//   kind: "period";
//   fromField: string;
//   from?: Date;
//   fromPlaceholder?: string;
//   toField: string;
//   to?: Date;
//   toPlaceholder?: string;
// }

interface Text extends ICondition {
  field: string;
  kind: "text";
  value?: string;
  placeholder?: string;
}

interface CodePopup extends ICondition {
  field: string;
  kind: "codePopup";
  value?: string;
  valueWidth?: string;
  valueClickEvent?: boolean;
  placeholder?: string;
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
  chain?: Select;
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

type SearchSetting = Array<CDate | CodePopup | Text | Select | Radio>;

export {
  ICondition,
  CodePopup,
  Select,
  Radio,
  Text,
  CDate,
  SearchSetting,
  SelectOption,
};
