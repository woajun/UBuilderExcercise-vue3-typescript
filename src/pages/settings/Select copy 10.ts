import SearchSetting from "@/components/search/SearchSetting";

const searchSetting: any = {
  searchUrl: "/api/sample",
  conditions: [
    {
      kind: "select",
      label: "학생선택",
      placeholder: ["학년", "반", "이름"],
      field: ["grd", "cls", "stnt"],
      description: ["gradeName", "className", "name"],
      value: ["grade", "class", "name"],
      children: ["classes", "students"],
      data: [
        {
          name: "홍길동",
          id: 10101,
          class: 1,
          className: "무지개반",
          grade: 1,
          gradeName: "1학년",
        },
        {
          name: "이순신",
          id: 10102,
          class: 1,
          className: "무지개반",
          grade: 1,
          gradeName: "1학년",
        },
        {
          name: "유재석",
          id: 10103,
          class: 1,
          className: "무지개반",
          grade: 1,
          gradeName: "1학년",
        },
      ],
    },
  ],
};

export default searchSetting;
