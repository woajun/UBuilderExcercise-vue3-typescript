import SearchSetting from "@/components/search/SearchSetting";

const searchSetting: SearchSetting = {
  searchUrl: "/api/sample",
  conditions: [
    {
      width: "500px",
      label: "검수부서",
      kind: "popup",
      field: "inspectDep",
      valueField: "code",
      initialValue: "000001",
      displayFields: ["name"],
      modal: {
        conditions: [
          {
            kind: "text",
            field: "code",
            label: "코드",
          },
        ],
        headers: [
          {
            label: "코드",
            field: "code",
          },
          {
            label: "부서명",
            field: "name",
          },
        ],
      },
      data: [
        {
          code: "000001",
          name: "운영본부 차량지원팀 일상파트",
        },
        {
          code: "000002",
          name: "영업부",
        },
        {
          code: "000003",
          name: "경영지원부",
        },
        {
          code: "000004",
          name: "개발부",
        },
      ],
    },
    {
      width: "500px",
      kind: "radio",
      field: "useFor",
      label: "사용구분",
      initialValue: "all",
      description: "description",
      value: "value",
      data: [
        { description: "전체", value: "all" },
        { description: "사업용", value: "business" },
        { description: "사무용", value: "office" },
      ],
    },
    {
      width: "500px",
      label: "정수코드",
      kind: "popup",
      field: "code",
      modal: {
        conditions: [
          {
            kind: "text",
            field: "code",
            label: "정수코드",
          },
        ],
        headers: [
          {
            label: "정수코드",
            field: "code",
          },
          {
            label: "품명",
            field: "name",
          },
        ],
      },
      data: [
        {
          code: "1",
          name: "물품1",
        },
        {
          code: "2",
          name: "물품2",
        },
        {
          code: "3",
          name: "물품3",
        },
        {
          code: "4",
          name: "물품4",
        },
      ],
    },
    {
      width: "500px",
      kind: "date",
      field: "standDate",
      label: "기준일자",
      initialValue: "2017-03-31",
    },
    {
      width: "500px",
      kind: "radio",
      field: "findFor",
      label: "조회구분",
      initialValue: "amount",
      description: "description",
      value: "value",
      data: [
        { description: "정수별", value: "amount" },
        { description: "물품별", value: "product" },
      ],
    },
  ],
};
export default searchSetting;
