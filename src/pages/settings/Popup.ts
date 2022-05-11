import SearchSetting from "@/components/search/SearchSetting";

const searchSetting: SearchSetting = {
  searchUrl: "/api/sample",
  conditions: [
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
  ],
};

export default searchSetting;
