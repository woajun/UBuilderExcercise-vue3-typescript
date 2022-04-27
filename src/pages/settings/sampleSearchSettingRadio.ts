import { SearchSetting } from "@/components/search/Conditions";

const searchSetting: SearchSetting = [
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
];
export default searchSetting;
