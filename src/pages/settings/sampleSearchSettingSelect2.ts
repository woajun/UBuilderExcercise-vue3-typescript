import { SearchSetting } from "@/components/search/Conditions";

const searchSetting: SearchSetting = [
  {
    id: "12",
    kind: "select",
    label: "물품분류",
    selectedValue: "",
    field: "innerTypeOne",
    options: [
      {
        description: "1차분류",
        value: "",
        disabled: true,
        options: [
          {
            description: "2차분류",
            value: "",
            disabled: true,
            options: [{ description: "3차분류", value: "", disabled: true }],
          },
        ],
      },
      {
        description: "A",
        value: "A",
        options: [
          {
            description: "Aa",
            value: "Aa",
            options: [
              { description: "Aa가", value: "Aa가" },
              { description: "Aa나", value: "Aa나" },
              { description: "Aa다", value: "Aa다" },
            ],
          },
          {
            description: "Ab",
            value: "Ab",
            options: [
              { description: "Ab가", value: "Ab가" },
              { description: "Ab나", value: "Ab나" },
              { description: "Ab다", value: "Ab다" },
            ],
          },
          {
            description: "Ac",
            value: "Ac",
            options: [
              { description: "Ac가", value: "Ac가" },
              { description: "Ac나", value: "Ac나" },
              { description: "Ac다", value: "Ac다" },
            ],
          },
        ],
      },
      {
        description: "B",
        value: "B",
        options: [
          { description: "Ba", value: "Ba" },
          { description: "Bb", value: "Bb" },
          { description: "Bc", value: "Bc" },
        ],
      },
      {
        description: "C",
        value: "C",
        options: [
          { description: "Ca", value: "Ca" },
          { description: "Cb", value: "Cb" },
          { description: "Cc", value: "Cc" },
        ],
      },
    ],
  },
];
export default searchSetting;
