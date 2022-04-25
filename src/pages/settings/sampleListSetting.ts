import { ListSetting } from "@/components/list/listSettings";

const listSetting: ListSetting = {
  requestURL: "/sampleList",
  title: "정수별 현황",
  total: true,
  headers: [
    {
      field: "name",
      label: "이름",
      type: "label",
      width: "50px",
    },
    {
      field: "type",
      label: "타입",
      type: "label",
      width: "50px",
    },
    {
      field: "col2",
      label: "열2",
      type: "label",
      width: "50px",
    },
    {
      field: "col4",
      label: "열4",
      type: "label",
      width: "50px",
    },
    {
      field: "col5",
      label: "열5",
      type: "label",
      width: "50px",
    },
  ],
};

export { listSetting };
