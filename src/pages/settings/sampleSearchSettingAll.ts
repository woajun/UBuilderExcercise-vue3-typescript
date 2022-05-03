import SearchSetting from "@/components/search/SearchSetting";

import date from "./sampleSearchSettingDate";
import radio from "./sampleSearchSettingRadio";
import select from "./sampleSearchSettingSelect";
import text from "./sampleSearchSettingText";
import codePopup from "./sampleSearchSettingCodePopup";

const searchSetting: SearchSetting = {
  searchUrl: "/api/sample",
  conditions: [...radio, ...select, ...text, ...codePopup, ...date],
};

export default searchSetting;
