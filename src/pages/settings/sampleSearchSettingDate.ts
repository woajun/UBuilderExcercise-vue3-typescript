import { SearchSetting } from "@/components/search/Conditions";

export const searchSetting: SearchSetting = [
  {
    kind: "date",
    field: "date1",
    id: "1",
    label: "날짜",
    placeholder: "날짜를 입력하시오",
  },
  {
    kind: "date",
    field: "startDate",
    id: "2",
    label: "시작일",
    placeholder: "날짜를 입력하시오",
  },
  {
    kind: "date",
    field: "endDate",
    id: "3",
    label: "종료일",
    placeholder: "날짜를 입력하시오",
  },
];
