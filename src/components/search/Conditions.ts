interface ICondition {
    field:string;
    label:string;
    labelWidth:string;
    size:string;
}

//TODO default값
//TODO 모든 타입의 검색파라미터 제작
interface Code extends ICondition{
    codeWidth: string
    resultWidth: string,    
}

export {ICondition, Code};