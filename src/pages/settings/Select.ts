import SearchSetting from "@/components/search/SearchSetting";

const searchSetting: SearchSetting = {
  searchUrl: "/api/sample",
  conditions: [
    {
      kind: "select",
      label: "학년선택",
      placeholder: "학년",
      field: "fld_grade",
      description: "name",
      value: "grade",

      nestedSelect: {
        data: "classes",
        placeholder: "반",
        field: "fld_class",
        description: "name",
        value: "class",

        nestedSelect: {
          data: "students",
          placeholder: "이름",
          field: "fld_student",
          description: "name",
          value: "id",
        },
      },
      data: [
        {
          name: "1학년",
          grade: 1,
          classes: [
            {
              name: "무지개반",
              class: 1,
              students: [
                {
                  name: "10101-홍길동",
                  id: 10101,
                },
                {
                  name: "10102-이순신",
                  id: 10102,
                },
                {
                  name: "10103-유재석",
                  id: 10103,
                },
              ],
            },
            {
              name: "늘푸른반",
              class: 2,
              students: [
                {
                  name: "10201-가나가",
                  id: 10201,
                },
                {
                  name: "10202-가나나",
                  id: 10202,
                },
                {
                  name: "10203-가나다",
                  id: 10203,
                },
              ],
            },
            {
              name: "해돋이반",
              class: 3,
              students: [
                {
                  name: "10301-가다가",
                  id: 10301,
                },
                {
                  name: "10302-가다나",
                  id: 10302,
                },
                {
                  name: "10303-가다다",
                  id: 10303,
                },
              ],
            },
          ],
        },
        {
          name: "2학년",
          grade: 2,
          classes: [
            {
              name: "무지개반",
              class: 1,
              students: [
                {
                  name: "20101-나가가",
                  id: 20101,
                },
                {
                  name: "20102-나가나",
                  id: 20102,
                },
                {
                  name: "20103-나가다",
                  id: 20103,
                },
              ],
            },
            {
              name: "늘푸른반",
              class: 2,
              students: [
                {
                  name: "20201-나나가",
                  id: 20201,
                },
                {
                  name: "20202-나나나",
                  id: 20202,
                },
                {
                  name: "20203-나나다",
                  id: 20203,
                },
              ],
            },
            {
              name: "해돋이반",
              class: 3,
              students: [
                {
                  name: "20301-나다가",
                  id: 20301,
                },
                {
                  name: "20302-나다나",
                  id: 20302,
                },
                {
                  name: "20303-나다다",
                  id: 20303,
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
