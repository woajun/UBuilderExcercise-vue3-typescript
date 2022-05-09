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
      kind: "magnifier",
      field: "code",
      fieldLinked: "integerCode", // default는 field 이름과 매칭
      default: "001",
      results: [
        { field: "name" },
        { field: "standard" },
        { field: "integer" },
        { field: "date" },
      ],
      modal: {
        conditions: [
          {
            kind: "text",
            field: "integerCode",
            label: "정수코드",
          },
          {
            kind: "text",
            field: "name",
            label: "물품명",
          },
        ],
        tableSetting: {
          headers: [
            {
              label: "정수코드",
              field: "integerCode",
            },
            {
              label: "물품명",
              field: "name",
            },
            {
              label: "규격",
              field: "standard",
            },
            {
              label: "정수",
              field: "integer",
            },
            {
              label: "기준일",
              field: "date",
            },
          ],
        },
      },
      data: [
        {
          integerCode: "001",
          name: "공공일",
          standard: "규격1",
          integer: "1",
          date: "2017-01-02",
        },
        {
          integerCode: "002",
          name: "공공이",
          standard: "규격2",
          integer: "2",
          date: "2017-01-02",
        },
        {
          integerCode: "003",
          name: "공공삼",
          standard: "규격3",
          integer: "3",
          date: "2017-01-02",
        },
        {
          integerCode: "004",
          name: "공공사",
          standard: "규격4",
          integer: "4",
          date: "2017-01-02",
        },
        {
          integerCode: "005",
          name: "공공오",
          standard: "규격5",
          integer: "5",
          date: "2017-01-02",
        },
      ],
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
    {
      label: "텍스트3",
      kind: "text",
      field: "textField3",
      placeholder: "텍스트 입력",
    },
  ],
};

export default searchSetting;
