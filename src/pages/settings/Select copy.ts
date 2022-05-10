import SearchSetting from "@/components/search/SearchSetting";

const searchSetting: any = {
  searchUrl: "/api/sample",
  conditions: [
    {
      kind: "select",
      label: "물품분류",
      placeholder: "1차분류",
      field: "select1",
      options: [
        {
          A: {
            Aa: {
              Aa가: {},
              Aa나: {},
              Aa다: {},
            },
            Ab: {
              Ab가: {},
              Ab나: {},
              Ab다: {},
            },
            Ac: {
              Ac가: {},
              Ac나: {},
              Ac다: {},
            },
          },
        },
        {
          B: {
            Ba: {
              Ba가: {},
              Ba나: {},
              Ba다: {},
            },
            Bb: {
              Bb가: {},
              Bb나: {},
              Bb다: {},
            },
            Bc: {
              Bc가: {},
              Bc나: {},
              Bc다: {},
            },
          },
        },
        {
          C: {
            Ca: {
              Ca가: {},
              Ca나: {},
              Ca다: {},
            },
            Cb: {
              Cb가: {},
              Cb나: {},
              Cb다: {},
            },
            Cc: {
              Cc가: {},
              Cc나: {},
              Cc다: {},
            },
          },
        },
      ],
    },
  ],
};
export default searchSetting;
