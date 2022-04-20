interface ListSetting {
  requestURL: string;
  title: string;
  total?: boolean;
  headers: Array<Header>;
}

interface Header {
  field: string;
  label: string;
  width?: string;
  type: "saerch" | "label";
}

export { ListSetting };
