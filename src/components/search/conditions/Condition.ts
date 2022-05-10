import { Header } from "@/components/list/tableSetting"; // for PopupModal

interface ICondition {
  kind: "popup" | "radio" | "text" | "select" | "date" | "period";
  label?: string;
  field: string;
  default?: string | Date;
  parentField?: string;
  placeholder?: string;
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
  placeholder?: string;
  displayFields?: string[];
  modal: PopupModal;
  valueField?: string;
}

export interface PopupModal {
  conditions?: Array<Condition>;
  headers: Array<Header>;
}

interface PopupURL extends Popup {
  dataURL: string;
}

interface PopupOptions extends Popup {
  data: Array<Record<string, string>>;
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
  options: Array<Option>;
}

type Condition = CDate | PopupOptions | PopupURL | Text | Select | Radio;

export default Condition;
