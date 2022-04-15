import { SearchSetting } from "@/components/search/Conditions";

export const searchSetting: SearchSetting = [
  {
    kind: "date",
    field: "inputDate",
    label: "기준일자",
    date: new Date(),
  },

  {
    kind: "period",
    field: "period",
    label: "기간",
    from: new Date(),
    to: new Date(),
  },

  {
    kind: "text",
    field: "contractName",
    label: "계약명",
    placeholder: "계약명 입력",
  },

  {
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
    kind: "innerSearch",
    field: "dept1",
    label: "부서1",
    labelWidth: "40px",
    fullWidth: "col-12",
    value: "  -     -    ",
    valueWidth: "100px",
    firstResult: "차량지원팀-일상파트",
    event(value) {
      alert("검색값:" + value);
      return ["아큐라지원팀", "아큐라코드"];
    },
  },

  {
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
    kind: "innerSearch",
    field: "dept3",
    label: "부서3",
    value: "기본값",
  },

  {
    kind: "select",
    field: "bunRyu1",
    label: "수입구분",
    optionBox: [
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
    kind: "select",
    field: "bunRyu2",
    label: "확정차수",
    optionBox: [
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
    kind: "select",
    field: "innerType",
    label: "물품분류",
    optionBox: [
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
