import SearchSetting from "@/components/search/SearchSetting";

const searchSetting: SearchSetting = {
  searchUrl: "/api/sample",
  conditions: [
    {
      kind: "date",
      field: "date1",
      label: "날짜:",
      placeholder: "날짜를 입력하시오",
      initialValue: "2022-03-04",
    },
  ],
};

export default searchSetting;
