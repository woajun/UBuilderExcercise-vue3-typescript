import SearchSetting from "@/components/search/SearchSetting";

const searchSetting: any = {
  searchUrl: "/api/sample",
  conditions: [
    {
      kind: "select",
      label: "학생선택",
      placeholder: "학년",
      field: "fld_grade",
      description: "name",
      value: "grade",
      data: [
        {
          name: "1학년",
          grade: 1,
        },
        {
          name: "2학년",
          grade: 1,
        },
        {
          name: "3학년",
          grade: 1,
        },
      ],
    },
    {
      kind: "select",
      label: "반선택",
      placeholder: "반",
      field: "fld_class",
      description: "name",
      value: "class",
      dependOn: "fld_grade",
      data: [
        {
          grade: 1,
          name: "무지개반",
          class: 1,
        },
        {
          grade: 1,
          name: "해돋이반",
          class: 2,
        },
        {
          grade: 1,
          name: "늘푸른반",
          class: 3,
        },
      ],
    },
    {
      kind: "select",
      label: "학생선택",
      placeholder: "이름",
      field: "fld_student",
      description: "name",
      value: "name",
      dependOn: "fld_class",
      data: [
        {
          grade: 1,
          class: 1,
          name: "홍길동",
          id: 10101,
        },
        {
          grade: 1,
          class: 1,
          name: "이순신",
          id: 10102,
        },
        {
          grade: 1,
          class: 1,
          label: "유재석",
          id: 10103,
        },
      ],
    },
  ],
};

export default searchSetting;
