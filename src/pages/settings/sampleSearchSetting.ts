import {ICondition, Code} from "@/components/search/Conditions"
const dept: Code = {
  kind: 'code',
  field: 'dept',
  label: '부서',
  labelWidth: '40px',
  size:'col-12',
  val: '  -     -    ',
  valWidth: '100px',
  result: [
    {val: '차량지원팀-일상파트', width: '100px'},
    {val: '78AB531-DS241ST', width: '150px'}
  ]
}

const conditions: Array<ICondition> = [
  dept
]
export {conditions};
