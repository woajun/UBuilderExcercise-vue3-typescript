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
    chain: {
      id: "13",
      kind: "select",
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
      chain: {
        id: "14",
        kind: "select",
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
    },
  },
];
export default searchSetting;
