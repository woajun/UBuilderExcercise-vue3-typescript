import { Header } from "@/components/list/tableSetting"; // for PopupModal

interface ICondition {
  kind: "popup" | "radio" | "text" | "select" | "date" | "period";
  label?: string;
  field: string;
  initialValue?: string | string[];
  placeholder?: string | string[];
}

interface CDate extends ICondition {
  kind: "date";
}

interface Text extends ICondition {
  kind: "text";
}

interface Popup extends ICondition {
  kind: "popup";
  displayFields?: string[];
  modal: PopupModal;
  valueField?: string;
  data: Array<Record<string, any>>;
}

export interface PopupModal {
  conditions?: Array<Condition>;
  headers: Array<Header>;
}

interface Select extends ICondition {
  kind: "select";
  options: Array<Option>;
  width?: string;
}

export interface Option {
  description: string;
  value: string;
  children?: Array<Option>;
}

interface Radio extends ICondition {
  kind: "radio";
  options: Array<Option>;
}

type Condition = CDate | Popup | Text | Select | Radio;

export default Condition;
