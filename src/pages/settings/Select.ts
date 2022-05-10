import SearchSetting from "@/components/search/SearchSetting";

const searchSetting: SearchSetting = {
  searchUrl: "/api/sample",
  conditions: [
    {
      kind: "select",
      label: "물품분류",
      placeholder: "1차분류",
      field: "select1",
      options: [
        {
          description: "A",
          value: "A",
          children: [
            {
              description: "Aa",
              value: "Aa",
              children: [
                { description: "Aa가", value: "Aa가" },
                { description: "Aa나", value: "Aa나" },
                { description: "Aa다", value: "Aa다" },
              ],
            },
            {
              description: "Ab",
              value: "Ab",
              children: [
                { description: "Ab가", value: "Ab가" },
                { description: "Ab나", value: "Ab나" },
                { description: "Ab다", value: "Ab다" },
              ],
            },
            {
              description: "Ac",
              value: "Ac",
              children: [
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
          children: [
            {
              description: "Ba",
              value: "Ba",
              children: [
                { description: "Ba가", value: "Ba가" },
                { description: "Ba나", value: "Ba나" },
                { description: "Ba다", value: "Ba다" },
              ],
            },
            {
              description: "Bb",
              value: "Bb",
              children: [
                { description: "Bb가", value: "Bb가" },
                { description: "Bb나", value: "Bb나" },
                { description: "Bb다", value: "Bb다" },
              ],
            },
            {
              description: "Bc",
              value: "Bc",
              children: [
                { description: "Bc가", value: "Bc가" },
                { description: "Bc나", value: "Bc나" },
                { description: "Bc다", value: "Bc다" },
              ],
            },
          ],
        },
        {
          description: "C",
          value: "C",
          children: [
            {
              description: "Ca",
              value: "Ca",
              children: [
                { description: "Ca가", value: "Ca가" },
                { description: "Ca나", value: "Ca나" },
                { description: "Ca다", value: "Ca다" },
              ],
            },
            {
              description: "Cb",
              value: "Cb",
              children: [
                { description: "Cb가", value: "Cb가" },
                { description: "Cb나", value: "Cb나" },
                { description: "Cb다", value: "Cb다" },
              ],
            },
            {
              description: "Cc",
              value: "Cc",
              children: [
                { description: "Cc가", value: "Cc가" },
                { description: "Cc나", value: "Cc나" },
                { description: "Cc다", value: "Cc다" },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default searchSetting;
