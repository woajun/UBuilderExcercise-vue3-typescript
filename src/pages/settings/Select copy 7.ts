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
          hold: [
            { value: "A", description: "v-A" },
            { value: "B", description: "v-B" },
            { value: "C", description: "v-C" },
          ],
        },
        {
          A: [
            { value: "Aa", description: "v-Aa" },
            { value: "Ab", description: "v-Ab" },
            { value: "Ac", description: "v-Ac" },
          ],
          B: [
            { value: "Ba", description: "v-Ba" },
            { value: "Bb", description: "v-Bb" },
            { value: "Bc", description: "v-Bc" },
          ],
          C: [
            { value: "Ca", description: "v-Ca" },
            { value: "Cb", description: "v-Cb" },
            { value: "Cc", description: "v-Cc" },
          ],
        },
        {
          Aa: [
            { value: "Aa가", description: "v-Aa가" },
            { value: "Aa나", description: "v-Aa나" },
            { value: "Aa다", description: "v-Aa다" },
          ],
          Ab: [
            { value: "Ab가", description: "v-Ab가" },
            { value: "Ab나", description: "v-Ab나" },
            { value: "Ab다", description: "v-Ab다" },
          ],
          Ac: [
            { value: "Ac가", description: "v-Ac가" },
            { value: "Ac나", description: "v-Ac나" },
            { value: "Ac다", description: "v-Ac다" },
          ],
          Ba: [
            { value: "Ba가", description: "v-Ba가" },
            { value: "Ba나", description: "v-Ba나" },
            { value: "Ba다", description: "v-Ba다" },
          ],
          Bb: [
            { value: "Bb가", description: "v-Bb가" },
            { value: "Bb나", description: "v-Bb나" },
            { value: "Bb다", description: "v-Bb다" },
          ],
          Bc: [
            { value: "Bc가", description: "v-Bc가" },
            { value: "Bc나", description: "v-Bc나" },
            { value: "Bc다", description: "v-Bc다" },
          ],
          Ca: [
            { value: "Ca가", description: "v-Ca가" },
            { value: "Ca나", description: "v-Ca나" },
            { value: "Ca다", description: "v-Ca다" },
          ],
          Cb: [
            { value: "Cb가", description: "v-Cb가" },
            { value: "Cb나", description: "v-Cb나" },
            { value: "Cb다", description: "v-Cb다" },
          ],
          Cc: [
            { value: "Cc가", description: "v-Cc가" },
            { value: "Cc나", description: "v-Cc나" },
            { value: "Cc다", description: "v-Cc다" },
          ],
        },
      ],
    },
  ],
};

export default searchSetting;
