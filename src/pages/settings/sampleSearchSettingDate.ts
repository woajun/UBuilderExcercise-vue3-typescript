import { SearchSetting } from "@/components/search/Conditions";

const searchSetting: SearchSetting = [
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
    placeholder: "시작일 입력",
    date: new Date(2022, 0, 1),
  },
  {
    kind: "date",
    field: "endDate",
    id: "3",
    label: "종료일",
    placeholder: "종료일 입력",
    date: new Date(2022, 11, 31),
  },
];

export default searchSetting;
