import SearchSetting from "@/components/search/SearchSetting";

const searchSetting: SearchSetting = {
  searchUrl: "/api/sample",
  conditions: [
    {
      kind: "date",
      field: "strDate",
      label: "기간",
      default: new Date(2017, 2, 1),
    },
    {
      kind: "date",
      field: "endDate",
      default: new Date(2017, 3, 30),
    },
    {
      kind: "codePopup",
      field: "inspectDep",
      label: "검수부서",
      default: "502010",
      firstResultVisible: true,
      firstResultDefault: "운영본부 차량지원팀 일상파트",
      event: () => {
        alert("검수부서 팝업");
        return ["A14325", "경영지원부"];
      },
    },
    {
      kind: "codePopup",
      field: "inspectNum",
      label: "검수입고번호",
      placeholder: " -    -",
      event: () => {
        alert("검수입고 팝업");
        return ["321515"];
      },
    },
    {
      kind: "codePopup",
      field: "inspector",
      label: "검수자",
      firstResultVisible: true,
      event: () => {
        alert("검수자 팝업");
        return ["01013", "강준희"];
      },
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
  ],
};
export default searchSetting;
