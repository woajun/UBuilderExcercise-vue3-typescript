import { ListSetting } from "@/components/list/listSettings";

const listSetting: ListSetting = {
  requestURL: "/sampleList",
  title: "정수별 현황",
  total: true,
  headers: [
    {
      field: "col1",
      label: "정수코드",
      type: "label",
      width: "50px",
    },
    {
      field: "col2",
      label: "거래처물품명",
      type: "label",
      width: "50px",
    },
    {
      field: "col3",
      label: "순번",
      type: "label",
      width: "50px",
    },
    {
      field: "col4",
      label: "정수",
      type: "label",
      width: "50px",
    },
    {
      field: "col5",
      label: "보유수",
      type: "label",
      width: "50px",
    },
  ],
};

export { listSetting };
