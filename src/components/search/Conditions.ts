interface ICondition {
    kind: 'innerSearch'|'radio'|'text'|'select'|'date'|'period'
    field:string
    label:string
    labelWidth?:string
    fullWidth?:string
}

interface CDate extends ICondition{
    kind: 'date'
    date?: Date
    placeholder?: string
}
interface Period extends ICondition{
    kind: 'period'
    from?: Date
    fromPlaceholder?: string
    to?: Date
    toPlaceholder?: string
}

interface Text extends ICondition {
    kind: 'text',
    value?: string,
    placeholder?: string,
}

interface InnerSearch extends ICondition{
    kind: 'innerSearch',
    value: string,
    valueWidth?: string
    valueClickEvent?: boolean
    disabled?: boolean
    firstResult?: string,
    firstResultWidth?: string,
    secondResult?:string,
    secondResultWidth?: string,
    event(value: string): Array<string>
}
interface InnerSearchResult {
    field: string,
    value: string,
    firstResult?: string,
    secondResult?: string
}

interface Select extends ICondition{
    kind: 'select',
    optionBox: Array<SelectOptionBox>,
}

interface SelectOptionBox {
    options: Array<SelectOption>,
    endLabel?: string,
    width?: string,
    selectedValue?: string,
}
interface SelectOption {
    value: string,
    description: string,
    disabled?:boolean,
    parent?: string,
}

interface Radio extends ICondition {
    kind: 'radio',
    options: Array<RadioOption>,
}

interface RadioOption {
    value: string,
    description: string,
    checked?: boolean,
    disabled?: boolean
}

export {ICondition, InnerSearch, Select, Radio, Text, CDate, Period};