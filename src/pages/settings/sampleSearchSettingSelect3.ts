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
    kind: "select",
    dependField: "innerTypeOne",
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
];
export default searchSetting;
