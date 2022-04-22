import { SearchSetting } from "@/components/search/Conditions";

export const searchSetting: SearchSetting = [
  {
    id: "1",
    kind: "date",
    field: "inputDate",
    label: "기준일자",
    date: new Date(),
  },
  {
    id: "2",
    kind: "period",
    fromField: "datefrom",
    toField: "dateTo",
    label: "기간",
    from: new Date(),
    to: new Date(),
  },
  {
    id: "3",
    kind: "text",
    field: "contractName",
    label: "계약명",
    placeholder: "계약명 입력",
  },
  {
    id: "4",
    kind: "radio",
    field: "radio1",
    label: "사용구분",
    options: [
      { description: "전체", value: "0", checked: true },
      { description: "사업용", value: "1" },
      { description: "사무용", value: "2" },
    ],
  },
  {
    id: "5",
    kind: "radio",
    field: "radio2",
    label: "사용구분",
    options: [
      { description: "전체", value: "0", checked: true },
      { description: "사업용", value: "1" },
      { description: "사무용", value: "2" },
    ],
  },
  {
    id: "6",
    kind: "radio",
    field: "radio3",
    label: "disabled",
    options: [
      { description: "전체", value: "4", disabled: true, checked: true },
      { description: "사업용", value: "5", disabled: true },
      { description: "사무용", value: "6", disabled: true },
    ],
  },
  {
    id: "7",
    kind: "innerSearch",
    field: "class1",
    label: "학생검색1",
    labelWidth: "40px",
    fullWidth: "col-12",
    value: "020301",
    valueWidth: "100px",
    firstResult: "2학년 3반 1번",
    secondResult: "강준희",
    event(value) {
      alert("검색값:" + value);
      return ["2학년 5반 2번", "홍길동"];
    },
  },
  {
    id: "8",
    kind: "innerSearch",
    field: "dept2",
    label: "부서2",
    value: "  -     -    ",
    valueWidth: "100px",
    firstResult: "타입2-일상파트",
    event(value) {
      alert("검색값:" + value);
      return ["검색결과"];
    },
  },
  {
    id: "9",
    kind: "innerSearch",
    field: "dept3",
    label: "부서3",
    value: "기본값",
  },
  {
    id: "10",
    kind: "selects",
    label: "수입구분",
    selects: [
      {
        selectedValue: "A",
        field: "bunRyu1One",
        options: [
          { description: "정규구매입고", value: "A" },
          { description: "비정규구매입고", value: "B" },
        ],
        width: "100px",
      },
    ],
  },
  {
    id: "11",
    kind: "selects",
    label: "확정차수",
    selects: [
      {
        selectedValue: "",
        field: "bunRyu2One",
        options: [
          { description: "확정차수", value: "", disabled: true },
          { description: "1차확정", value: "kr" },
          { description: "2차확정", value: "cn" },
          { description: "3차확정", value: "uk" },
        ],
        endLabel: " ~ ",
        width: "100px",
      },
      {
        selectedValue: "",
        field: "bunRyu2Two",
        options: [
          { description: "-중분류-", value: "", disabled: true },
          { description: "소", value: "1" },
          { description: "중", value: "2" },
          { description: "대", value: "3" },
        ],
      },
    ],
  },
  {
    id: "12",
    kind: "selects",
    label: "물품분류",
    selects: [
      {
        selectedValue: "",
        field: "innerTypeOne",
        options: [
          { description: "1차분류", value: "", disabled: true },
          { description: "A", value: "A" },
          { description: "B", value: "B" },
          { description: "C", value: "C" },
        ],
      },
      {
        selectedValue: "",
        field: "innerTypeTwo",
        options: [
          { description: "2차분류", value: "", disabled: true },
          { description: "Aa", value: "Aa", parent: "A" },
          { description: "Ab", value: "Ab", parent: "A" },
          { description: "Ac", value: "Ac", parent: "A" },
          { description: "Ba", value: "Ba", parent: "B" },
          { description: "Bb", value: "Bb", parent: "B" },
          { description: "Bc", value: "Bc", parent: "B" },
          { description: "Ca", value: "Ca", parent: "C" },
          { description: "Cb", value: "Cb", parent: "C" },
          { description: "Cc", value: "Cc", parent: "C" },
        ],
      },
      {
        selectedValue: "",
        field: "innerTypeThree",
        options: [
          { description: "3차분류", value: "", disabled: true },
          { description: "3차", value: "kr" },
        ],
      },
      {
        selectedValue: "",
        field: "innerTypeFour",
        options: [
          { description: "4차분류", value: "", disabled: true },
          { description: "4차", value: "kr" },
        ],
      },
    ],
  },
];
