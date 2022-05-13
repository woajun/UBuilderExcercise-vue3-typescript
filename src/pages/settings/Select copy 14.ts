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
          ],
        },
      ],
    },
  ],
};

export default searchSetting;
