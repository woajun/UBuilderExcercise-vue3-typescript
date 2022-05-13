import SearchSetting from "@/components/search/SearchSetting";

const searchSetting: any = {
  searchUrl: "/api/sample",
  conditions: [
    {
      kind: "select",
      label: "학생선택",
      selectSetting: [
        {
          placeholder: "학년",
          field: "grade",
          description: "name",
          value: "grade",
          children: "classes",
        },
        {
          placeholder: "반",
          field: "class",
          description: "name",
          value: "class",
          children: "students",
        },
        {
          placeholder: "이름",
          field: "student",
          description: "name",
          value: "name",
        },
      ],
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
