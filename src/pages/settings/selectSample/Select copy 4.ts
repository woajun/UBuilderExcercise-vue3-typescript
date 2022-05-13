import SearchSetting from "@/components/search/SearchSetting";

const searchSetting: any = {
  searchUrl: "/api/sample",
  conditions: [
    {
      kind: "select",
      label: "물품분류",
      placeholder: "물품분류",
      field: "slt3",
      data: [
        {
          cateA: "A",
          cateB: ["Aa", "Ab", "Ac"],
        },
        {
          cateA: "B",
          cateB: ["Ba", "Bb", "Bc"],
        },
        {
          cateA: "C",
          cateB: ["Ca", "Cb", "Cc"],
        },
      ],
    },
  ],
};

export default searchSetting;
