import Conditions from "@/components/search/conditions/Conditions";

const searchSetting: Conditions = [
  {
    label: "코드검색",
    kind: "codePopup",
    field: "code",
    value: "MESSI-01",
    event: () => {
      alert("코드 팝업");
      return ["결과1", "결과2", "결과3"];
    },
  },
  {
    label: "상품코드",
    kind: "codePopup",
    field: "code2",
    value: "12-db-215",
    firstResultVisible: true,
    firstResultDefault: "등심300g",
    event: () => {
      alert("상품 팝업");
      return ["결과1", "결과2", "결과3"];
    },
  },
  {
    label: "거래처",
    kind: "codePopup",
    field: "code3",
    placeholder: "코드 검색",
    firstResultVisible: true,
    secondResultVisible: true,
    event: () => {
      alert("거래처 팝업");
      return ["결과1", "결과2", "결과3"];
    },
  },
];

export default searchSetting;
