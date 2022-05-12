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
          hold: [{ A: "A" }, { B: "B" }, { C: "C" }],
        },
        {
          A: [{ Aa: "Aa" }, { Ab: "Ab" }, { Ac: "Ac" }],
          B: [{ Ba: "Ba" }, { Bb: "Bb" }, { Bc: "Bc" }],
          C: [{ Ca: "Ca" }, { Cb: "Cb" }, { Cc: "Cc" }],
        },
        {
          Aa: [{ Aa가: "Aa가" }, { Aa나: "Aa나" }, { Aa다: "Aa다" }],
          Ab: [{ Ab가: "Ab가" }, { Ab나: "Ab나" }, { Ab다: "Ab다" }],
          Ac: [{ Ac가: "Ac가" }, { Ac나: "Ac나" }, { Ac다: "Ac다" }],
          Ba: [{ Ba가: "Ba가" }, { Ba나: "Ba나" }, { Ba다: "Ba다" }],
          Bb: [{ Bb가: "Bb가" }, { Bb나: "Bb나" }, { Bb다: "Bb다" }],
          Bc: [{ Bc가: "Bc가" }, { Bc나: "Bc나" }, { Bc다: "Bc다" }],
          Ca: [{ Ca가: "Ca가" }, { Ca나: "Ca나" }, { Ca다: "Ca다" }],
          Cb: [{ Cb가: "Cb가" }, { Cb나: "Cb나" }, { Cb다: "Cb다" }],
          Cc: [{ Cc가: "Cc가" }, { Cc나: "Cc나" }, { Cc다: "Cc다" }],
        },
      ],
    },
  ],
};

export default searchSetting;
