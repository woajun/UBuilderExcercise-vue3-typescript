import { SearchSetting } from "@/components/search/Conditions";

const searchSetting: SearchSetting = [
  {
    label: "코드팝업1",
    kind: "codePopup",
    field: "code",
    id: "code",
    value: "aaaa",
  },
  {
    label: "코드팝업2",
    kind: "codePopup",
    field: "code2",
    id: "code2",
    value: "bbbb",
    firstResultVisible: true,
    firstResult: "bb탄",
  },
  {
    label: "코드팝업3",
    kind: "codePopup",
    field: "code3",
    id: "code3",
    placeholder: "코드 검색",
    firstResultVisible: true,
    firstResult: "bb탄",
    secondResultVisible: true,
  },
];

export default searchSetting;
