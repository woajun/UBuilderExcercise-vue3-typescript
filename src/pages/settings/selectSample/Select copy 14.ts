import SearchSetting from "@/components/search/SearchSetting";

const searchSetting: any = {
  searchUrl: "/api/sample",
  conditions: [
    {
      kind: "select",
      label: "학년선택",
      placeholder: "이름",
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
                  name: "홍길동",
                  id: 10101,
                },
                {
                  name: "이순신",
                  id: 10102,
                },
                {
                  label: "유재석",
                  id: 10103,
                },
              ],
            },
            {
              name: "늘푸른반",
              class: 2,
              students: [
                {
                  name: "가나가",
                  id: 10201,
                },
                {
                  name: "가나나",
                  id: 10202,
                },
                {
                  label: "가나다",
                  id: 10203,
                },
              ],
            },
            {
              name: "해돋이반",
              class: 3,
              students: [
                {
                  name: "가다가",
                  id: 10301,
                },
                {
                  name: "가다나",
                  id: 10302,
                },
                {
                  label: "가다다",
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
                  name: "나가가",
                  id: 20101,
                },
                {
                  name: "나가나",
                  id: 20102,
                },
                {
                  label: "나가다",
                  id: 20103,
                },
              ],
            },
            {
              name: "늘푸른반",
              class: 2,
              students: [
                {
                  name: "나나가",
                  id: 20201,
                },
                {
                  name: "나나나",
                  id: 20202,
                },
                {
                  label: "나나다",
                  id: 20203,
                },
              ],
            },
            {
              name: "해돋이반",
              class: 3,
              students: [
                {
                  name: "나다가",
                  id: 20301,
                },
                {
                  name: "나다나",
                  id: 20302,
                },
                {
                  label: "나다다",
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
