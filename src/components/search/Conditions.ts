interface ICondition {
    kind: 'code'|'radio'|'label'|'select'|'singleDate'|'duration',
    field:string;
    label:string;
    labelWidth?:string;
    size?:string;
}

interface SingleDate extends ICondition{
    kind: 'singleDate'
    date?: Date
}
interface Duration extends ICondition{
    kind: 'duration'
    from?: Date
    to?: Date
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
    event(v?: string): Array<string>
}
interface CodeResult {
    val: string,
    width?: string,
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

export {ICondition, Code, Select, Radio, Label, SingleDate, Duration};