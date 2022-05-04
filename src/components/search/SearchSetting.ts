import Condition from "./conditions/Condition";

interface SearchSetting {
  searchUrl: string;
  conditions: Array<Condition>;
}

export default SearchSetting;
