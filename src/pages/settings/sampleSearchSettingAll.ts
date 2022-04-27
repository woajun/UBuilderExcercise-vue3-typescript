import { SearchSetting } from "@/components/search/Conditions";

import date from "./sampleSearchSettingDate";
import radio from "./sampleSearchSettingRadio";
import select from "./sampleSearchSettingSelect3";
import text from "./sampleSearchSettingText";
import codePopup from "./sampleSearchSettingCodePopup";

export const searchSetting: SearchSetting = [
  ...date,
  ...radio,
  ...select,
  ...text,
  ...codePopup,
];
