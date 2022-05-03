interface ICondition {
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
  value?: string | Date;
  parentField?: string;
}

interface CDate extends ICondition {
  kind: "date";
  placeholder?: string;
  inline?: boolean;
  value?: Date;
}

interface Text extends ICondition {
  kind: "text";
  placeholder?: string;
  value?: string;
}

interface CodePopup extends ICondition {
  kind: "codePopup";
  value?: string;
  valueWidth?: string;
  valueClickEvent?: boolean;
  placeholder?: string;
  disabled?: boolean;
  firstResultVisible?: boolean;
  firstResultDefault?: string;
  firstResultWidth?: string;
  firstResultPlaceholder?: string;
  secondResultVisible?: boolean;
  secondResultDefault?: string;
  secondResultWidth?: string;
  secondResultPlaceholder?: string;
  event?(value: string): Array<string>;
}

interface Select extends ICondition {
  kind: "select";
  value?: string;
  options: Array<SelectOption>;
  endLabel?: string;
  width?: string;
}

interface SelectOption {
  value: string;
  description: string;
  disabled?: boolean;
  parent?: string;
}

interface Radio extends ICondition {
  kind: "radio";
  value?: string;
  options: Array<RadioOption>;
}

interface RadioOption {
  value?: string;
  description: string;
  disabled?: boolean;
}

type Conditions = Array<CDate | CodePopup | Text | Select | Radio>;

export default Conditions;
