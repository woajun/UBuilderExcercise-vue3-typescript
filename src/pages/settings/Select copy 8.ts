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
          something: "A-something",
          children: [
            {
              label: "Aa-선택",
              value: "Aa",
              something: "Aa-something",
              children: [
                {
                  label: "Aa가-선택",
                  value: "Aa가",
                  something: "Aa가-something",
                },
                {
                  label: "Aa나-선택",
                  value: "Aa나",
                  something: "Aa나-something",
                },
                {
                  label: "Aa다-선택",
                  value: "Aa다",
                  something: "Aa다-something",
                },
              ],
            },
            {
              label: "Ab-선택",
              value: "Ab",
              something: "Ab-something",
              children: [
                {
                  label: "Ab가-선택",
                  value: "Ab가",
                  something: "Ab가-something",
                },
                {
                  label: "Ab나-선택",
                  value: "Ab나",
                  something: "Ab나-something",
                },
                {
                  label: "Ab다-선택",
                  value: "Ab다",
                  something: "Ab다-something",
                },
              ],
            },
            {
              label: "Ac-선택",
              value: "Ac",
              something: "Ac-something",
              children: [
                {
                  label: "Ac가-선택",
                  value: "Ac가",
                  something: "Ac가-something",
                },
                {
                  label: "Ac나-선택",
                  value: "Ac나",
                  something: "Ac나-something",
                },
                {
                  label: "Ac다-선택",
                  value: "Ac다",
                  something: "Ac다-something",
                },
              ],
            },
          ],
        },
        {
          label: "B-선택",
          value: "B",
          something: "B-something",
          children: [
            {
              label: "Ba-선택",
              value: "Ba",
              something: "Ba-something",
              children: [
                {
                  label: "Ba가-선택",
                  value: "Ba가",
                  something: "Ba가-something",
                },
                {
                  label: "Ba나-선택",
                  value: "Ba나",
                  something: "Ba나-something",
                },
                {
                  label: "Ba다-선택",
                  value: "Ba다",
                  something: "Ba다-something",
                },
              ],
            },
            {
              label: "Bb-선택",
              value: "Bb",
              something: "Bb-something",
              children: [
                {
                  label: "Bb가-선택",
                  value: "Bb가",
                  something: "Bb가-something",
                },
                {
                  label: "Bb나-선택",
                  value: "Bb나",
                  something: "Bb나-something",
                },
                {
                  label: "Bb다-선택",
                  value: "Bb다",
                  something: "Bb다-something",
                },
              ],
            },
            {
              label: "Bc-선택",
              value: "Bc",
              something: "Bc-something",
              children: [
                {
                  label: "Bc가-선택",
                  value: "Bc가",
                  something: "Bc가-something",
                },
                {
                  label: "Bc나-선택",
                  value: "Bc나",
                  something: "Bc나-something",
                },
                {
                  label: "Bc다-선택",
                  value: "Bc다",
                  something: "Bc다-something",
                },
              ],
            },
          ],
        },
        {
          label: "C-선택",
          value: "C",
          something: "C-something",
          children: [
            {
              label: "Ca-선택",
              value: "Ca",
              something: "Ca-something",
              children: [
                {
                  label: "Ca가-선택",
                  value: "Ca가",
                  something: "Ca가-something",
                },
                {
                  label: "Ca나-선택",
                  value: "Ca나",
                  something: "Ca나-something",
                },
                {
                  label: "Ca다-선택",
                  value: "Ca다",
                  something: "Ca다-something",
                },
              ],
            },
            {
              label: "Cb-선택",
              value: "Cb",
              something: "Cb-something",
              children: [
                {
                  label: "Cb가-선택",
                  value: "Cb가",
                  something: "Cb가-something",
                },
                {
                  label: "Cb나-선택",
                  value: "Cb나",
                  something: "Cb나-something",
                },
                {
                  label: "Cb다-선택",
                  value: "Cb다",
                  something: "Cb다-something",
                },
              ],
            },
            {
              label: "Cc-선택",
              value: "Cc",
              something: "Cc-something",
              children: [
                {
                  label: "Cc가-선택",
                  value: "Cc가",
                  something: "Cc가-something",
                },
                {
                  label: "Cc나-선택",
                  value: "Cc나",
                  something: "Cc나-something",
                },
                {
                  label: "Cc다-선택",
                  value: "Cc다",
                  something: "Cc다-something",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default searchSetting;
