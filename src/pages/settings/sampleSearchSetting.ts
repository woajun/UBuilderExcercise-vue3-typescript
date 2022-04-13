import {ICondition, Code, Select} from "@/components/search/Conditions"
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

const bunRyu: Select = {
  kind: 'select',
  field: 'bunRyu',
  label: '분류',
  optionBox: [
    {
      options: [
        {label:'-대분류-',value:null,selected:true},
        {label:'한식',value:'kr'}, 
        {label:'중식',value:'cn'},
        {label:'양식',value:'uk'},
      ],
      endLabel: "에서 "
    },
    {
      options: [
          {label:'-중분류-',value:null, selected:true},
          {label:'김치찌개',value:'1', parent:'kr'},
          {label:'된장찌개',value:'2', parent:'kr'},
          {label:'감자탕',value:'3', parent:'kr'},
      ],
      endLabel:"를 먹어야징~"
    }
  ]
}

const conditions: Array<ICondition> = [
  dept, bunRyu
]
export {conditions};
