import { SearchSetting } from "@/components/search/Conditions";

const searchSetting: SearchSetting = [
  {
    id: "12",
    kind: "select",
    label: "물품분류",
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
    id: "13",
    kind: "subSelect",
    parentField: "innerTypeOne",
    selectedValue: "",
    field: "innerTypeTwo",
    options: {
      default: [{ description: "2차분류", value: "", disabled: true }],
      A: [
        { description: "Aa", value: "Aa" },
        { description: "Ab", value: "Ab" },
        { description: "Ac", value: "Ac" },
      ],
      B: [
        { description: "Ba", value: "Ba" },
        { description: "Bb", value: "Bb" },
        { description: "Bc", value: "Bc" },
      ],
      C: [
        { description: "Ca", value: "Ca" },
        { description: "Cb", value: "Cb" },
        { description: "Cc", value: "Cc" },
      ],
    },
  },
  {
    id: "14",
    kind: "subSelect",
    parentField: "innerTypeTwo",
    selectedValue: "",
    field: "innerTypeThree",
    options: {
      default: [{ description: "3차분류", value: "", disabled: true }],
      Aa: [
        { description: "Aa가", value: "Aa가" },
        { description: "Aa나", value: "Aa나" },
        { description: "Aa다", value: "Aa다" },
      ],
      Ab: [
        { description: "Ab가", value: "Ab가" },
        { description: "Ab나", value: "Ab나" },
        { description: "Ab다", value: "Ab다" },
      ],
      Ac: [
        { description: "Ac가", value: "Ac가" },
        { description: "Ac나", value: "Ac나" },
        { description: "Ac다", value: "Ac다" },
      ],
    },
  },
  // {
  //   id: "15",
  //   kind: "subSelect",
  //   parentField: "innerTypeThree",
  //   selectedValue: "",
  //   field: "innerTypeFour",
  //   options: [
  //     { description: "4차분류", value: "", disabled: true },
  //     { description: "Aa가1", value: "Aa가1", parent: "Aa가" },
  //     { description: "Aa가2", value: "Aa가2", parent: "Aa가" },
  //     { description: "Aa가3", value: "Aa가3", parent: "Aa가" },
  //     { description: "Aa나1", value: "Aa나1", parent: "Aa나" },
  //     { description: "Aa나2", value: "Aa나2", parent: "Aa나" },
  //     { description: "Aa나3", value: "Aa나3", parent: "Aa나" },
  //     { description: "Aa다1", value: "Aa다1", parent: "Aa다" },
  //     { description: "Aa다2", value: "Aa다2", parent: "Aa다" },
  //     { description: "Aa다3", value: "Aa다3", parent: "Aa다" },
  //   ],
  // },
];
export default searchSetting;
