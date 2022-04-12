import {ICondition, Code} from "@/components/search/Conditions"
const dept: Code = {
  field: 'dept',
  label: '부서',
  labelWidth: '40px',
  codeWidth: '40px',
  resultWidth: '100px',
  size:'col-12',
}
const conditions: Array<ICondition> = [
  dept
]
export {conditions};
