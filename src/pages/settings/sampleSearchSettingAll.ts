import SearchSetting from "@/components/search/SearchSetting";

import date from "./sampleSearchSettings/date";
import radio from "./sampleSearchSettings/radio";
import select from "./sampleSearchSettings/select";
import text from "./sampleSearchSettings/text";
import codePopup from "./sampleSearchSettings/codePopup";

const searchSetting: SearchSetting = {
  searchUrl: "/api/sample",
  conditions: [...radio, ...select, ...text, ...codePopup, ...date],
};

export default searchSetting;
