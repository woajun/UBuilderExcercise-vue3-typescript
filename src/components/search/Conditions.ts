interface ICondition {
    kind: 'code'|'radio'|'label'|'select'|'date',
    field:string;
    label:string;
    labelWidth?:string;
    size?:string;
}

interface Code extends ICondition{
    kind: 'code',
    val?: string,
    valWidth?: string
    active?: boolean //default true
    result?: Array<CodeResult>
}
interface CodeResult {
    val: string,
    width: string,
    editable?: boolean //default false
}

interface Select extends ICondition{
    kind: 'select',
    optionBox: Array<OptionBox>,
}

interface OptionBox {
    options: Array<Option>,
    endLabel?: string,
}
interface Option {
    value: string|null,
    label: string,
    selected?:boolean, //default false
    parent?: string,
}


export {ICondition, Code, Select};