import SearchSetting from "@/components/search/SearchSetting";

const searchSetting: SearchSetting = {
  searchUrl: "/api/sample",
  conditions: [
    {
      kind: "radio",
      field: "type",
      label: "타입",
      default: "A",
      options: [
        {
          description: "전체",
        },
        {
          description: "A",
          value: "A",
        },
        {
          description: "B",
          value: "B",
        },
        {
          description: "C",
          value: "C",
        },
      ],
    },
    {
      kind: "radio",
      field: "type2",
      label: "타입2",
      options: [
        { description: "전체" },
        {
          description: "A",
          value: "A",
        },
        {
          description: "B",
          value: "B",
        },
        {
          description: "C",
          value: "C",
        },
      ],
    },
    {
      kind: "select",
      label: "물품분류",
      default: "A",
      field: "select1",
      options: [
        { description: "1차분류", value: "", disabled: true },
        { description: "A", value: "A" },
        { description: "B", value: "B" },
        { description: "C", value: "C" },
      ],
    },
    {
      kind: "select",
      parentField: "select1",
      default: "",
      field: "select2",
      options: [
        { description: "2차분류", value: "", disabled: true },
        { description: "Aa", value: "Aa", parent: "A" },
        { description: "Ab", value: "Ab", parent: "A" },
        { description: "Ac", value: "Ac", parent: "A" },
        { description: "Ba", value: "Ba", parent: "B" },
        { description: "Bb", value: "Bb", parent: "B" },
        { description: "Bc", value: "Bc", parent: "B" },
        { description: "Ca", value: "Ca", parent: "C" },
        { description: "Cb", value: "Cb", parent: "C" },
        { description: "Cc", value: "Cc", parent: "C" },
      ],
    },
    {
      kind: "select",
      parentField: "select2",
      default: "",
      field: "select3",
      options: [
        { description: "3차분류", value: "", disabled: true },
        { description: "Aa가", value: "Aa가", parent: "Aa" },
        { description: "Aa나", value: "Aa나", parent: "Aa" },
        { description: "Aa다", value: "Aa다", parent: "Aa" },
        { description: "Ab가", value: "Ab가", parent: "Ab" },
        { description: "Ab나", value: "Ab나", parent: "Ab" },
        { description: "Ab다", value: "Ab다", parent: "Ab" },
        { description: "Ac가", value: "Ac가", parent: "Ac" },
        { description: "Ac나", value: "Ac나", parent: "Ac" },
        { description: "Ac다", value: "Ac다", parent: "Ac" },
        { description: "Ba가", value: "Ba가", parent: "Ba" },
        { description: "Ba나", value: "Ba나", parent: "Ba" },
        { description: "Ba다", value: "Ba다", parent: "Ba" },
        { description: "Bb가", value: "Bb가", parent: "Bb" },
        { description: "Bb나", value: "Bb나", parent: "Bb" },
        { description: "Bb다", value: "Bb다", parent: "Bb" },
        { description: "Bc가", value: "Bc가", parent: "Bc" },
        { description: "Bc나", value: "Bc나", parent: "Bc" },
        { description: "Bc다", value: "Bc다", parent: "Bc" },
        { description: "Ca가", value: "Ca가", parent: "Ca" },
        { description: "Ca나", value: "Ca나", parent: "Ca" },
        { description: "Ca다", value: "Ca다", parent: "Ca" },
        { description: "Cb가", value: "Cb가", parent: "Cb" },
        { description: "Cb나", value: "Cb나", parent: "Cb" },
        { description: "Cb다", value: "Cb다", parent: "Cb" },
        { description: "Cc가", value: "Cc가", parent: "Cc" },
        { description: "Cc나", value: "Cc나", parent: "Cc" },
        { description: "Cc다", value: "Cc다", parent: "Cc" },
      ],
    },
    {
      label: "텍스트1",
      kind: "text",
      field: "textField1",
      placeholder: "텍스트 입력",
      default: "입력된 값",
    },
    {
      default: "ssss",
      label: "텍스트2",
      kind: "text",
      field: "textField2",
      placeholder: "텍스트 입력",
    },
    {
      label: "코드검색",
      kind: "codePopup",
      field: "code",
      default: "MESSI-01",
      event: () => {
        alert("코드 팝업");
        return ["결과1", "결과2", "결과3"];
      },
    },
    {
      label: "상품코드",
      kind: "codePopup",
      field: "code2",
      default: "12-db-215",
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
    {
      kind: "date",
      field: "date1",
      label: "날짜:",
      placeholder: "날짜를 입력하시오",
    },
    {
      kind: "date",
      field: "startDate",
      label: "기간:",
      placeholder: "시작일 입력",
      default: new Date(2022, 0, 1),
    },
    {
      kind: "date",
      field: "endDate",
      label: "~",
      placeholder: "종료일 입력",
      default: new Date(2022, 11, 31),
      inline: true,
    },
  ],
};

export default searchSetting;
