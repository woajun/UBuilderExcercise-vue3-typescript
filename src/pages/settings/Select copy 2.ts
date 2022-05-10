import SearchSetting from "@/components/search/SearchSetting";

const searchSetting: any = {
  searchUrl: "/api/sample",
  conditions: [
    {
      kind: "select",
      label: "물품분류",
      placeholder: "1차분류",
      field: "select1",
      options: {
        A: {
          Aa: {
            Aa가: null,
            Aa나: null,
            Aa다: null,
          },
          Ab: {
            Ab가: null,
            Ab나: null,
            Ab다: null,
          },
          Ac: {
            Ac가: null,
            Ac나: null,
            Ac다: null,
          },
        },
        B: {
          Ba: {
            Ba가: null,
            Ba나: null,
            Ba다: null,
          },
          Bb: {
            Bb가: null,
            Bb나: null,
            Bb다: null,
          },
          Bc: {
            Bc가: null,
            Bc나: null,
            Bc다: null,
          },
        },
        C: {
          Ca: {
            Ca가: null,
            Ca나: null,
            Ca다: null,
          },
          Cb: {
            Cb가: null,
            Cb나: null,
            Cb다: null,
          },
          Cc: {
            Cc가: null,
            Cc나: null,
            Cc다: null,
          },
        },
      },
    },
  ],
};
export default searchSetting;
