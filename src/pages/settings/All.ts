import SearchSetting from "@/components/search/SearchSetting";

const searchSetting: SearchSetting = {
  searchUrl: "/api/sample",
  conditions: [
    {
      kind: "radio",
      field: "type",
      label: "타입",
      placeholder: "전체",
      initialValue: "B",
      options: [
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
      placeholder: "전체",
      options: [
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
      initialValue: ["A", "Aa", "Aa가"],
      placeholder: ["1차분류", "2차분류", "3차분류"],
      field: "select1",
      options: [
        {
          description: "A",
          value: "A",
          children: [
            {
              description: "Aa",
              value: "Aa",
              children: [
                { description: "Aa가", value: "Aa가" },
                { description: "Aa나", value: "Aa나" },
                { description: "Aa다", value: "Aa다" },
              ],
            },
            {
              description: "Ab",
              value: "Ab",
              children: [
                { description: "Ab가", value: "Ab가" },
                { description: "Ab나", value: "Ab나" },
                { description: "Ab다", value: "Ab다" },
              ],
            },
            {
              description: "Ac",
              value: "Ac",
              children: [
                { description: "Ac가", value: "Ac가" },
                { description: "Ac나", value: "Ac나" },
                { description: "Ac다", value: "Ac다" },
              ],
            },
          ],
        },
        {
          description: "B",
          value: "B",
          children: [
            {
              description: "Ba",
              value: "Ba",
              children: [
                { description: "Ba가", value: "Ba가" },
                { description: "Ba나", value: "Ba나" },
                { description: "Ba다", value: "Ba다" },
              ],
            },
            {
              description: "Bb",
              value: "Bb",
              children: [
                { description: "Bb가", value: "Bb가" },
                { description: "Bb나", value: "Bb나" },
                { description: "Bb다", value: "Bb다" },
              ],
            },
            {
              description: "Bc",
              value: "Bc",
              children: [
                { description: "Bc가", value: "Bc가" },
                { description: "Bc나", value: "Bc나" },
                { description: "Bc다", value: "Bc다" },
              ],
            },
          ],
        },
        {
          description: "C",
          value: "C",
          children: [
            {
              description: "Ca",
              value: "Ca",
              children: [
                { description: "Ca가", value: "Ca가" },
                { description: "Ca나", value: "Ca나" },
                { description: "Ca다", value: "Ca다" },
              ],
            },
            {
              description: "Cb",
              value: "Cb",
              children: [
                { description: "Cb가", value: "Cb가" },
                { description: "Cb나", value: "Cb나" },
                { description: "Cb다", value: "Cb다" },
              ],
            },
            {
              description: "Cc",
              value: "Cc",
              children: [
                { description: "Cc가", value: "Cc가" },
                { description: "Cc나", value: "Cc나" },
                { description: "Cc다", value: "Cc다" },
              ],
            },
          ],
        },
      ],
    },
    {
      kind: "select",
      label: "물품분류",
      placeholder: "물품분류",
      field: "select2",
      options: [
        {
          description: "A",
          value: "A",
          children: [
            {
              description: "Aa",
              value: "Aa",
              children: [
                { description: "Aa가", value: "Aa가" },
                { description: "Aa나", value: "Aa나" },
                { description: "Aa다", value: "Aa다" },
              ],
            },
            {
              description: "Ab",
              value: "Ab",
              children: [
                { description: "Ab가", value: "Ab가" },
                { description: "Ab나", value: "Ab나" },
                { description: "Ab다", value: "Ab다" },
              ],
            },
            {
              description: "Ac",
              value: "Ac",
              children: [
                { description: "Ac가", value: "Ac가" },
                { description: "Ac나", value: "Ac나" },
                { description: "Ac다", value: "Ac다" },
              ],
            },
          ],
        },
        {
          description: "B",
          value: "B",
          children: [
            {
              description: "Ba",
              value: "Ba",
              children: [
                { description: "Ba가", value: "Ba가" },
                { description: "Ba나", value: "Ba나" },
                { description: "Ba다", value: "Ba다" },
              ],
            },
            {
              description: "Bb",
              value: "Bb",
              children: [
                { description: "Bb가", value: "Bb가" },
                { description: "Bb나", value: "Bb나" },
                { description: "Bb다", value: "Bb다" },
              ],
            },
            {
              description: "Bc",
              value: "Bc",
              children: [
                { description: "Bc가", value: "Bc가" },
                { description: "Bc나", value: "Bc나" },
                { description: "Bc다", value: "Bc다" },
              ],
            },
          ],
        },
        {
          description: "C",
          value: "C",
          children: [
            {
              description: "Ca",
              value: "Ca",
              children: [
                { description: "Ca가", value: "Ca가" },
                { description: "Ca나", value: "Ca나" },
                { description: "Ca다", value: "Ca다" },
              ],
            },
            {
              description: "Cb",
              value: "Cb",
              children: [
                { description: "Cb가", value: "Cb가" },
                { description: "Cb나", value: "Cb나" },
                { description: "Cb다", value: "Cb다" },
              ],
            },
            {
              description: "Cc",
              value: "Cc",
              children: [
                { description: "Cc가", value: "Cc가" },
                { description: "Cc나", value: "Cc나" },
                { description: "Cc다", value: "Cc다" },
              ],
            },
          ],
        },
      ],
    },
    {
      label: "텍스트1",
      kind: "text",
      field: "textField1",
      placeholder: "텍스트 입력",
      initialValue: "입력된 값",
    },
    {
      initialValue: "ssss",
      label: "텍스트2",
      kind: "text",
      field: "textField2",
      placeholder: "텍스트 입력",
    },
    {
      label: "코드검색",
      kind: "popup",
      field: "code",
      valueField: "integerCode", // default는 field 이름과 매칭
      displayFields: ["name", "standard", "integer", "date"],
      initialValue: "001",
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
      label: "텍스트3",
      kind: "text",
      field: "textField3",
      placeholder: "텍스트 입력",
    },
  ],
};

export default searchSetting;
