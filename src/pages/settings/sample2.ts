import { SearchSetting } from "@/components/search/Conditions";

export const searchSetting: SearchSetting = [
  {
    kind: "date",
    field: "strDate",
    label: "기간",
    value: new Date(2017, 2, 1),
  },
  {
    kind: "date",
    field: "endDate",
    value: new Date(2017, 3, 30),
  },
  {
    kind: "codePopup",
    field: "inspectDep",
    label: "검수부서",
    value: "502010",
    firstResultVisible: true,
    firstResultDefault: "운영본부 차량지원팀 일상파트",
  },
  {
    kind: "codePopup",
    field: "inspectNum",
    label: "검수입고번호",
    placeholder: " -    -",
  },
  {
    kind: "codePopup",
    field: "inspector",
    label: "검수자",
    firstResultVisible: true,
  },
  {
    kind: "text",
    field: "client",
    label: "거래처명",
  },
  {
    kind: "text",
    field: "note",
    label: "비고",
  },
];
