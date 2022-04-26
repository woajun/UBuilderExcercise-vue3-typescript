import { SearchSetting } from "@/components/search/Conditions";

const searchSetting: SearchSetting = [
  {
    kind: "codePopup",
    field: "code",
    id: "code",
    value: "aaaa",
  },
  {
    kind: "codePopup",
    field: "code2",
    id: "code2",
    value: "bbbb",
    firstResultVisible: true,
    firstResult: "bb탄",
  },
];

export default searchSetting;
