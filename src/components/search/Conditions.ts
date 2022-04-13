interface ICondition {
    kind: 'code'|'radio'|'label'|'select'|'date',
    field:string;
    label:string;
    labelWidth?:string;
    size?:string;
}

//TODO default값
//TODO 모든 타입의 검색파라미터 제작
interface Code extends ICondition{
    kind: 'code',
    val?: string,
    valWidth?: string
    active?: boolean //default true
    result?: Array<Result>
}
interface Result {
    val: string,
    width: string,
    editable?: boolean //default false
}


export {ICondition, Code};