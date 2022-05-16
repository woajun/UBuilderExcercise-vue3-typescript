import SearchSetting from "@/components/search/SearchSetting";

const searchSetting: SearchSetting = {
  searchUrl: "/api/sample",
  conditions: [
    {
      kind: "period",
      field: "strDate",
      label: "기간",
      initialValue: "2017-03-01",
      endField: "endDate",
      endInitialValue: "2017-03-31",
      width: "500px",
    },
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
      label: "검수입고번호",
      kind: "popup",
      field: "inspectNum",
      valueField: "code",
      modal: {
        conditions: [
          {
            kind: "text",
            field: "code",
            label: "번호",
          },
        ],
        headers: [
          {
            label: "번호",
            field: "code",
          },
          {
            label: "이름",
            field: "name",
          },
        ],
      },
      data: [
        {
          code: "1",
          name: "입고1",
        },
        {
          code: "2",
          name: "입고2",
        },
        {
          code: "3",
          name: "입고3",
        },
        {
          code: "4",
          name: "입고4",
        },
      ],
    },

    {
      width: "500px",
      label: "검수자",
      kind: "popup",
      field: "inspector",
      valueField: "code",
      displayFields: ["name"],
      modal: {
        conditions: [
          {
            kind: "text",
            field: "code",
            label: "번호",
          },
          {
            kind: "text",
            field: "name",
            label: "이름",
          },
        ],
        headers: [
          {
            label: "사번",
            field: "code",
          },
          {
            label: "이름",
            field: "name",
          },
        ],
      },
      data: [
        {
          code: "1",
          name: "강준희",
        },
        {
          code: "2",
          name: "홍길동",
        },
        {
          code: "3",
          name: "임꺽정",
        },
        {
          code: "4",
          name: "이순신",
        },
      ],
    },
    {
      width: "500px",
      kind: "text",
      field: "client",
      label: "거래처명",
    },
    {
      width: "500px",
      kind: "text",
      field: "note",
      label: "비고",
    },
  ],
};
export default searchSetting;
