import { Header } from "@/components/list/tableSetting"; // for PopupModal

interface ICondition {
  kind: "popup" | "radio" | "text" | "select" | "date" | "period";
  label?: string;
  field: string;
  initialValue?: string | string[];
  placeholder?: string | string[];
  width?: string;
}

interface CDate extends ICondition {
  kind: "date";
}

interface CPeriod extends ICondition {
  kind: "period";
}

interface Text extends ICondition {
  kind: "text";
}

interface Popup extends ICondition {
  kind: "popup";
  displayFields?: string[];
  modal: PopupModal;
  valueField?: string;
  data: Data;
}

export interface PopupModal {
  conditions?: Array<Condition>;
  headers: Array<Header>;
}

interface Select extends ICondition {
  kind: "select";
  description: string;
  value: string;
  nestedSelect: NestedSelect;
  data: Data;
}

export interface NestedSelect {
  data: string;
  placeholder?: string;
  field: string;
  description: string;
  value: string;
  nestedSelect?: NestedSelect;
}

export type Data = Array<Record<string, any>>;

export interface Option {
  description: string;
  value: string;
  children?: Array<Option>;
}

interface Radio extends ICondition {
  kind: "radio";
  options: Array<Option>;
}

type Condition = CDate | CPeriod | Popup | Text | Select | Radio;

export default Condition;
