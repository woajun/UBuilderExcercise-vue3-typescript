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
  field: string;
  value?: string;
}

interface CDate extends ICondition {
  kind: "date";
  date?: Date;
  placeholder?: string;
  inline?: boolean;
}

interface Text extends ICondition {
  kind: "text";
  placeholder?: string;
}

interface CodePopup extends ICondition {
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
  endLabel?: string;
  width?: string;
  selectedValue?: string;
  chain?: Select;
  dependField?: string;
}

interface SelectOption {
  value: string;
  description: string;
  disabled?: boolean;
  parent?: string;
}

interface Radio extends ICondition {
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
