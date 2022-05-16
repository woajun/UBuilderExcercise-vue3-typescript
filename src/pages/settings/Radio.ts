import SearchSetting from "@/components/search/SearchSetting";

const searchSetting: SearchSetting = {
  searchUrl: "/api/sample",
  conditions: [
    {
      width: "300px",
      kind: "radio",
      field: "type",
      label: "타입",
      placeholder: "전체",
      initialValue: "A",
      description: "description",
      value: "value",
      data: [
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
      description: "description",
      value: "value",
      data: [
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
