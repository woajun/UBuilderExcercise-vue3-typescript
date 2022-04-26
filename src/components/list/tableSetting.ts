interface TableSetting {
  requestURL: string;
  title: string;
  total?: boolean;
  headers: Array<Header>;
}

interface Header {
  field: string;
  label: string;
  width?: string;
  type: "search" | "label";
}

export { TableSetting };
