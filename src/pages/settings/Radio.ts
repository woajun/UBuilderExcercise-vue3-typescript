import SearchSetting from "@/components/search/SearchSetting";

const searchSetting: SearchSetting = {
  searchUrl: "/api/sample",
  conditions: [
    {
      kind: "radio",
      field: "type",
      label: "타입",
      default: "A",
      placeholder: "전체",
      options: [
        {
          description: "A",
          value: "A",
        },
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
      placeholder: "전체",
      options: [
        {
          description: "A",
          value: "A",
        },
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
  ],
};

export default searchSetting;
