import {InputTypeHTMLAttribute, Ref} from "vue";

export type Tabs = Tab[];
export type Tab = {
  name: string;
  items: TabItem[];
};
export type TabItem = ({
  type: "text";
  text: string;
} | {
  type: "input";
  inputType: InputTypeHTMLAttribute;
  placeholder?: string;
  value: Ref;
} | {
  type: "textarea";
  placeholder?: string;
  value: Ref;
} | {
  type: "separator";
} | {
  type: "button";
  text: string;
  onClick?: () => void;
} | {
  type: "dropdown";
  options: SelectOption[];
  default?: string;
  value: Ref<string>;
}) & {
  append?: TabItem;
};

export type SelectOption = {
  key: string;
  text: string;
};