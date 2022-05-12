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
        ["A", "B", "C"],
        ["Aa", "Ab", "Ac"],
        ["Ba", "Bb", "Bc"],
        ["Ca", "Cb", "Cc"],
        ["Aa가", "Aa나", "Aa다"],
        ["Ab가", "Ab나", "Ab다"],
        ["Ac가", "Ac나", "Ac다"],
        ["Ba가", "Ba나", "Ba다"],
        ["Bb가", "Bb나", "Bb다"],
        ["Bc가", "Bc나", "Bc다"],
        ["Ca가", "Ca나", "Ca다"],
        ["Cb가", "Cb나", "Cb다"],
        ["Cc가", "Cc나", "Cc다"],
      ],
    },
  ],
};

export default searchSetting;
