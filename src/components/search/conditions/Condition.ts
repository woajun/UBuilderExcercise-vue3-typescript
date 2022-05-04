// request 용 인터페이스이다 - 그래서, response에 대한 프로퍼티는 정의하지 않는다.
interface ICondition {
  kind:
    | "magnifier"
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
  default?: string | Date;
  parentField?: string;
}

interface CDate extends ICondition {
  kind: "date";
  placeholder?: string;
  inline?: boolean;
  default?: Date;
}

interface Text extends ICondition {
  kind: "text";
  placeholder?: string;
  default?: string;
}

interface Magnifier extends ICondition {
  kind: "magnifier";
  default?: string;
  valueWidth?: string;
  valueClickEvent?: boolean;
  placeholder?: string;
  disabled?: boolean;
  results?: Array<Result>;
  modal: MagnifierModal;
}

interface MagnifierModal {
  matchField?: string;
  headers: Array<MagnifierHeader>;
}

interface MagnifierHeader {
  field: string;
  label: string;
  width?: string;
}
interface MagnifierURL extends Magnifier {
  optionsURL: string;
}

interface MagnifierOptions extends Magnifier {
  options: Array<Record<string, any>>;
}

interface Result extends ICondition {
  Default?: string;
  Placeholder?: string;
  Width?: string;
}

interface Select extends ICondition {
  kind: "select";
  default?: string;
  options: Array<SelectOption>;
  endLabel?: string;
  width?: string;
}

export interface SelectOption {
  value: string;
  description: string;
  disabled?: boolean;
  parent?: string;
}

interface Radio extends ICondition {
  kind: "radio";
  default?: string;
  options: Array<RadioOption>;
}

export interface RadioOption {
  value?: string;
  description: string;
  disabled?: boolean;
}

type Condition =
  | CDate
  | MagnifierOptions
  | MagnifierURL
  | Text
  | Select
  | Radio;

export default Condition;
