import SearchSetting from "@/components/search/SearchSetting";

const searchSetting: any = {
  searchUrl: "/api/sample",
  conditions: [
    {
      kind: "select",
      label: "물품분류",
      placeholder: "물품분류",
      field: "slt3",
      description: "label",
      value: "value",
      children: "children",
      data: [
        {
          label: "A-선택",
          value: "A",
        },
        {
          label: "B-선택",
          value: "B",
        },
        {
          label: "C-선택",
          value: "C",
        },
      ],
    },
  ],
};

export default searchSetting;
