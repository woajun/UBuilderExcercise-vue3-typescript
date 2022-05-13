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
          basic: ["A", "B", "C"],
        },
        {
          A: ["Aa", "Ab", "Ac"],
          B: ["Ba", "Bb", "Bc"],
          C: ["Ca", "Cb", "Cc"],
        },
        {
          Aa: ["Aa가", "Aa나", "Aa다"],
          Ab: ["Ab가", "Ab나", "Ab다"],
          Ac: ["Ac가", "Ac나", "Ac다"],
          Ba: ["Ba가", "Ba나", "Ba다"],
          Bb: ["Bb가", "Bb나", "Bb다"],
          Bc: ["Bc가", "Bc나", "Bc다"],
          Ca: ["Ca가", "Ca나", "Ca다"],
          Cb: ["Cb가", "Cb나", "Cb다"],
          Cc: ["Cc가", "Cc나", "Cc다"],
        },
      ],
    },
  ],
};

export default searchSetting;
