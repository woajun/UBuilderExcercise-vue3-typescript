interface ICondition {
    kind: 'code'|'radio'|'label'|'select'|'date',
    field:string;
    label:string;
    labelWidth?:string;
    size?:string;
}

interface Label extends ICondition {
    kind: 'label',
    value?: string,
    placeholder?: string,
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
    optionBox: Array<SelectOptionBox>,
}

interface SelectOptionBox {
    options: Array<SelectOption>,
    endLabel?: string,
    width?: string,
}
interface SelectOption {
    value: string|null,
    description: string,
    selected?:boolean, //default false
    parent?: string,
}

interface Radio extends ICondition {
    kind: 'radio',
    options: Array<RadioOption>,
}

interface RadioOption {
    value: string,
    description: string,
}

export {ICondition, Code, Select, Radio, Label};