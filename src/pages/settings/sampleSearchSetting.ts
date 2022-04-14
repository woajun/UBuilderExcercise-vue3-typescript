import {ICondition, Code, Select, Radio, Text, CDate, Period} from '@/components/search/Conditions'


const inputDate: CDate = {
  kind: 'date',
  field: 'inputDate',
  label: '기준일자',
  date: new Date(),
}

const period: Period = {
  kind: 'period',
  field: 'period',
  label: '기간',
  from: new Date(),
  to: new Date()
}

const contractName: Text = {
  kind: 'text',
  field: 'contractName',
  label: '계약명',
  placeholder: '계약명 입력'
}

const radio1: Radio = {
  kind: 'radio',
  field: 'radio1',
  label: '사용구분',
  options: [
    {description:'전체', value:'0', checked: true},
    {description:'사업용', value:'1'},
    {description:'사무용', value:'2'}
  ]
}

const radio2: Radio = {
  kind: 'radio',
  field: 'radio2',
  label: '사용구분',
  options: [
    {description:'전체', value:'0', checked: true},
    {description:'사업용', value:'1'},
    {description:'사무용', value:'2'}
  ]
}

const radio3: Radio = {
  kind: 'radio',
  field: 'radio3',
  label: 'disabled',
  options: [
    {description:'전체', value:'4', disabled: true, checked: true },
    {description:'사업용', value:'5', disabled: true},
    {description:'사무용', value:'6', disabled: true}
  ]
}

const dept1: Code = {
  kind: 'code',
  field: 'dept1',
  label: '부서1',
  labelWidth: '40px',
  fullWidth:'col-12',
  value: '  -     -    ',
  valueWidth: '100px',
  result: [
    {value: '차량지원팀-일상파트', width: '100px'},
    {value: '78AB531-DS241ST', width: '150px'}
  ],
  //여기서 구현하면 코드가 장황해지고 js파일에 import할 게 많아짐
  event(val){
    alert('검색값:'+val);
    return ['아큐라지원팀','아큐라코드'];
    // return dept1ClickEvent(val);
  }
}

// Sample.vue에 구현하고 import??? 의존성이 양쪽에 생김...
function dept1ClickEvent(val: string):Array<string>{
  alert('검색값:'+val);
  return ['아큐라지원팀','아큐라코드']
}


const dept2: Code = {
  kind: 'code',
  field: 'dept2',
  label: '부서2',
  value: '  -     -    ',
  valueWidth: '100px',
  result: [
    {value: '타입2-일상파트'},
  ],
  event(value){
    alert('검색값:'+value);
    return ['검색결과'];
  }
}

const dept3: Code = {
  kind: 'code',
  field: 'dept3',
  label: '부서3',
  value: '기본값',
  event(value){
    alert('검색값:'+value);
    return [];
  }
}



const bunRyu1: Select = {
  kind: 'select',
  field: 'bunRyu1',
  label: '수입구분',
  optionBox: [
    {
      selectedValue: 'A',
      options: [
        {description:'정규구매입고', value:'A'},
        {description:'비정규구매입고', value:'B'}, 
      ],
      width: '100px'
    },
  ]
}

const bunRyu2: Select = {
  kind: 'select',
  field: 'bunRyu2',
  label: '확정차수',
  optionBox: [
    {
      selectedValue: '',
      options: [
        {description:'확정차수', value:'',disabled:true},
        {description:'1차확정', value:'kr'}, 
        {description:'2차확정', value:'cn'},
        {description:'3차확정', value:'uk'},
      ],
      endLabel: ' ~ ',
      width: '100px'
    },
    {
      selectedValue: '',
      options: [
          {description:'-중분류-', value:'', disabled:true},
          {description:'소', value:'1'},
          {description:'중', value:'2'},
          {description:'대', value:'3'},
      ],
    }
  ]
}
const bunRyu3: Select = {
  kind: 'select',
  field: 'bunRyu3',
  label: '물품분류',
  optionBox: [
    {
      selectedValue: '',
      options: [
        {description:'1차분류', value:'',disabled:true},
        {description:'A', value:'A'}, 
        {description:'B', value:'B'}, 
        {description:'C', value:'C'}, 
      ],
    },
    {
      selectedValue: '',
      options: [
        {description:'2차분류', value:'',disabled:true},
        {description:'Aa', value:'Aa', parent:'A'}, 
        {description:'Ab', value:'Ab', parent:'A'}, 
        {description:'Ac', value:'Ac', parent:'A'}, 
        {description:'Ba', value:'Ba', parent:'B'}, 
        {description:'Bb', value:'Bb', parent:'B'}, 
        {description:'Bc', value:'Bc', parent:'B'}, 
        {description:'Ca', value:'Ca', parent:'C'}, 
        {description:'Cb', value:'Cb', parent:'C'}, 
        {description:'Cc', value:'Cc', parent:'C'}, 
      ],
    },
    {
      selectedValue: '',
      options: [
        {description:'3차분류', value:'',disabled:true},
        {description:'3차', value:'kr'}, 
      ],
    },
    {
      selectedValue: '',
      options: [
        {description:'4차분류', value:'',disabled:true},
        {description:'4차', value:'kr'}, 
      ],
    },
  ]
}

const conditions: Array<ICondition> = [
  radio1, radio2, radio3, dept1, dept2, dept3, bunRyu1, bunRyu2, bunRyu3, contractName, period, inputDate
]
export {conditions};
