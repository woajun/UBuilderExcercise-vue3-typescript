import SearchSetting from "@/components/search/SearchSetting";

const searchSetting: any = {
  searchUrl: "/api/sample",
  conditions: [
    {
      kind: "select",
      label: "학생선택",
      placeholder: ["학년", "반", "이름"],
      field: ["grade", "class", "student"],
      description: ["name", "name", "name"],
      value: ["grade", "class", "name"],
      children: ["classes", "students"],
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
