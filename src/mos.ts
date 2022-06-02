type Obj =  Record<string|number|symbol, any>;

interface mosFormProps {
    value?: Obj,
    header?: Array<HeaderRow>,
    colGroup?: Array<number|string>,
    editor?: boolean,
    customClass?: string,
    editable?: boolean
}

//header
type HeaderRow = Array<mText|mNumberInput|mBtnbutton|mMonth
                        |mCombo|mDate|mDateinput|mCustom>;

interface Colspan{
    colsapn: number
}

interface Rowspan{
    style?: 'rowspan'
    rowspan: number
}

interface HeaderColumn extends Rowspan, Colspan{
    field: string,
    type: 'rowspan'|'text'|'numberinput'|'btnbutton'|'month'
    |'combo'|'date'|'dateinput'|'custom'
    label: string,
}


interface mText extends HeaderColumn{
    type: "text",
    readonly: boolean,
    placeholder:string,
}

interface mNumberInput extends HeaderColumn {
    type: "numberinput",
}

interface mBtnbutton extends HeaderColumn {
    type: "btnbutton",
    text: string,
}

interface mMonth extends HeaderColumn {
    type: "month",
}

interface mCombo extends HeaderColumn {
    type: "combo",
    placeholder: string
    readonly: boolean
    comboData: Array<{value:string, description:string}>
}

interface mDate extends HeaderColumn {
    type: "date",
}

interface mDateinput extends HeaderColumn {
    type: "dateinput",
}

interface mCustom extends HeaderColumn {
    type: "custom",
    default: string
}

//eas
interface eDoubletest extends HeaderColumn {
    type: "doubletest",
    field_min: string;
} 

interface eDatecombo extends HeaderColumn {
    type: "datecombo",
    selectDisabled: boolean,
    placeholder: string,
    comboDate: Array<{value:string, description:string}>
}