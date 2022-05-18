import { Header } from "@/components/list/tableSetting"; // for PopupModal

export type Data = Array<Record<string, any>>;

interface ICondition {
  kind:
    | "popup"
    | "radio"
    | "text"
    | "select"
    | "date"
    | "period"
    | "singleSelect";
  label?: string;
  initialValue?: string;
  placeholder?: string;
  width?: string;
}

interface CDate extends ICondition {
  kind: "date";
}

interface CPeriod extends ICondition {
  kind: "period";
  endField: string;
  endPlaceholder?: string;
  endInitialValue?: string;
}

interface Text extends ICondition {
  kind: "text";
  // regex?: "phone" | "name" | "number";
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

interface SingleSelect extends ICondition {
  kind: "singleSelect";
  descriptionKey: string;
  valueKey: string;
  data: Data;
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

interface Radio extends ICondition {
  kind: "radio";
  description: string;
  value: string;
  data: Data;
}

type Condition = CDate | CPeriod | Popup | Text | Select | Radio | SingleSelect;

export default Condition;
