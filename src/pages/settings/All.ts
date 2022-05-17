import SearchSetting from "@/components/search/SearchSetting";

const searchSetting: SearchSetting = {
  searchUrl: "/api/sample",
  conditions: [
    {
      width: "500px",
      kind: "text",
      field: "txt1",
      label: "텍스트입력",
      placeholder: "영문입력",
    },
    {
      width: "500px",
      kind: "date",
      field: "date1",
      label: "날짜",
      placeholder: "날짜를 입력하시오",
      initialValue: "2022-03-04",
    },
    {
      width: "500px",
      kind: "period",
      field: "prd-start",
      label: "기간",
      placeholder: "시작일",
      initialValue: "2022-01-01",
      endField: "prd-end",
      endPlaceholder: "종료일",
    },
    {
      label: "코드검색",
      width: "1000px",
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
      width: "500px",
      kind: "radio",
      field: "type",
      label: "타입",
      placeholder: "전체",
      initialValue: "A",
      description: "description",
      value: "value",
      data: [
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
      width: "500px",
      kind: "radio",
      field: "type2",
      label: "타입2",
      placeholder: "전체",
      description: "description",
      value: "value",
      data: [
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
      width: "500px",
      kind: "select",
      label: "학년선택",
      placeholder: "학년",
      field: "fld_grade",
      description: "name",
      value: "grade",
      nestedSelect: {
        data: "classes",
        placeholder: "반",
        field: "fld_class",
        description: "name",
        value: "class",
        nestedSelect: {
          data: "students",
          placeholder: "이름",
          field: "fld_student",
          description: "name",
          value: "id",
        },
      },
      data: [
        {
          name: "1학년",
          grade: 1,
          classes: [
            {
              name: "무지개반",
              class: 1,
              students: [
                {
                  name: "10101-홍길동",
                  id: 10101,
                },
                {
                  name: "10102-이순신",
                  id: 10102,
                },
                {
                  name: "10103-유재석",
                  id: 10103,
                },
              ],
            },
            {
              name: "늘푸른반",
              class: 2,
              students: [
                {
                  name: "10201-가나가",
                  id: 10201,
                },
                {
                  name: "10202-가나나",
                  id: 10202,
                },
                {
                  name: "10203-가나다",
                  id: 10203,
                },
              ],
            },
            {
              name: "해돋이반",
              class: 3,
              students: [
                {
                  name: "10301-가다가",
                  id: 10301,
                },
                {
                  name: "10302-가다나",
                  id: 10302,
                },
                {
                  name: "10303-가다다",
                  id: 10303,
                },
              ],
            },
          ],
        },
        {
          name: "2학년",
          grade: 2,
          classes: [
            {
              name: "무지개반",
              class: 1,
              students: [
                {
                  name: "20101-나가가",
                  id: 20101,
                },
                {
                  name: "20102-나가나",
                  id: 20102,
                },
                {
                  name: "20103-나가다",
                  id: 20103,
                },
              ],
            },
            {
              name: "늘푸른반",
              class: 2,
              students: [
                {
                  name: "20201-나나가",
                  id: 20201,
                },
                {
                  name: "20202-나나나",
                  id: 20202,
                },
                {
                  name: "20203-나나다",
                  id: 20203,
                },
              ],
            },
            {
              name: "해돋이반",
              class: 3,
              students: [
                {
                  name: "20301-나다가",
                  id: 20301,
                },
                {
                  name: "20302-나다나",
                  id: 20302,
                },
                {
                  name: "20303-나다다",
                  id: 20303,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default searchSetting;
