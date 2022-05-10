import { TableSetting } from "@/components/list/tableSetting"; // for PopupModal

// request 용 인터페이스이다 - 그래서, response에 대한 프로퍼티는 정의하지 않는다.
interface ICondition {
  kind: "popup" | "radio" | "text" | "select" | "date" | "period";
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

interface Popup extends ICondition {
  kind: "popup";
  default?: string;
  valueWidth?: string;
  valueClickEvent?: boolean;
  placeholder?: string;
  disabled?: boolean;
  results?: Array<PopupResult>;
  modal: PopupModal;
  fieldLinked?: string;
}

export interface PopupModal {
  conditions?: Array<Condition>;
  tableSetting: TableSetting;
}

export interface PopupResult {
  field: string;
  width?: string;
}
interface PopupURL extends Popup {
  dataURL: string;
}

interface PopupOptions extends Popup {
  data: Array<Record<string, any>>;
}

interface Select extends ICondition {
  kind: "select";
  default?: string;
  options: Array<Option>;
  width?: string;
  placeholder?: string;
}

export interface Option {
  description: string;
  value: string;
  children?: Array<Option>;
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

type Condition = CDate | PopupOptions | PopupURL | Text | Select | Radio;

export default Condition;
