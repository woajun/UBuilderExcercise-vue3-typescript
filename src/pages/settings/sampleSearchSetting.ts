import { SearchSetting } from "@/components/search/Conditions";

export const searchSetting: SearchSetting = [
  {
    kind: "radio",
    field: "type",
    id: "typeRadio",
    label: "타입",
    checkedValue: "",
    options: [
      { description: "전체", value: "" },
      { description: "A", value: "A" },
      {
        description: "B",
        value: "B",
      },
      {
        description: "C",
        value: "C",
      },
    ],
  },
  {
    kind: "text",
    field: "name",
    id: "name",
    label: "이름 검색",
    placeholder: "포함검색",
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
          { description: "Aa가", value: "Aa가", parent: "Aa" },
          { description: "Aa나", value: "Aa나", parent: "Aa" },
          { description: "Aa다", value: "Aa다", parent: "Aa" },
          { description: "Ab가", value: "Ab가", parent: "Ab" },
          { description: "Ab나", value: "Ab나", parent: "Ab" },
          { description: "Ab다", value: "Ab다", parent: "Ab" },
          { description: "Ac가", value: "Ac가", parent: "Ac" },
          { description: "Ac나", value: "Ac나", parent: "Ac" },
          { description: "Ac다", value: "Ac다", parent: "Ac" },
        ],
      },
      {
        selectedValue: "",
        field: "innerTypeFour",
        options: [
          { description: "4차분류", value: "", disabled: true },
          { description: "Aa가1", value: "Aa가1", parent: "Aa가" },
          { description: "Aa가2", value: "Aa가2", parent: "Aa가" },
          { description: "Aa가3", value: "Aa가3", parent: "Aa가" },
          { description: "Aa나1", value: "Aa나1", parent: "Aa나" },
          { description: "Aa나2", value: "Aa나2", parent: "Aa나" },
          { description: "Aa나3", value: "Aa나3", parent: "Aa나" },
          { description: "Aa다1", value: "Aa다1", parent: "Aa다" },
          { description: "Aa다2", value: "Aa다2", parent: "Aa다" },
          { description: "Aa다3", value: "Aa다3", parent: "Aa다" },
        ],
      },
    ],
  },
];
