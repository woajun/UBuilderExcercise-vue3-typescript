import SearchSetting from "@/components/search/SearchSetting";

const searchSetting: SearchSetting = {
  searchUrl: "/api/sample",
  conditions: [
    {
      label: "코드검색",
      kind: "magnifier",
      field: "code",
      default: "MESSI-01",
      modal: {
        matchField: "integerCode", // default는 field 이름과 매칭
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
      options: [
        {
          code: "001",
          name: "공공일",
          standard: "규격1",
          integer: "1",
          data: "2017-01-02",
        },
        {
          code: "002",
          name: "공공이",
          standard: "규격2",
          integer: "2",
          data: "2017-01-02",
        },
        {
          code: "003",
          name: "공공삼",
          standard: "규격3",
          integer: "3",
          data: "2017-01-02",
        },
        {
          code: "004",
          name: "공공사",
          standard: "규격4",
          integer: "4",
          data: "2017-01-02",
        },
        {
          code: "005",
          name: "공공오",
          standard: "규격5",
          integer: "5",
          data: "2017-01-02",
        },
      ],
    },
  ],
};

export default searchSetting;
