import Conditions from "@/components/search/conditions/Conditions";

const searchSetting: Conditions = [
  {
    kind: "radio",
    field: "type",
    label: "타입",
    options: [
      { description: "전체" },
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
    kind: "radio",
    field: "type2",
    label: "타입2",
    options: [
      { description: "전체" },
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
