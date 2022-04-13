import {ICondition, Code, Select, Radio, Label, SingleDate, Duration} from '@/components/search/Conditions'


const inputDate: SingleDate = {
  kind: 'singleDate',
  field: 'inputDate',
  label: '기준일자',
  date: new Date(),
}

const period: Duration = {
  kind: 'duration',
  field: 'period',
  label: '기간',
  from: new Date(),
  to: new Date()
}

const contractName: Label = {
  kind: 'label',
  field: 'contractName',
  label: '계약명',
  placeholder: '계약'
}

const usePurpose: Radio = {
  kind: 'radio',
  field: 'usePurpose',
  label: '사용구분',
  options: [
    {description:'전체', value:'0'},
    {description:'사업용', value:'1'},
    {description:'사무용', value:'2'}
  ]
}

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
        {description:'-대분류-', value:null,selected:true},
        {description:'한식', value:'kr'}, 
        {description:'중식', value:'cn'},
        {description:'양식', value:'uk'},
      ],
      endLabel: '에서 ',
      width: '100px'
    },
    {
      options: [
          {description:'-중분류-', value:null, selected:true},
          {description:'김치찌개', value:'1', parent:'kr'},
          {description:'된장찌개', value:'2', parent:'kr'},
          {description:'감자탕', value:'3', parent:'kr'},
      ],
      endLabel:'를 먹어야징~'
    }
  ]
}

const conditions: Array<ICondition> = [
  usePurpose, dept, bunRyu, contractName, period, inputDate
]
export {conditions};
