import { IHeaderNavMenuItem } from "../../layouts/header/types";
import { ABOUT, CONTACTS, HOME, SHOP } from "../routes";

export const navMenuItems: IHeaderNavMenuItem[] = [
  { title: "Home", link: HOME },
  { title: "Shop", link: SHOP },
  { title: "About", link: ABOUT },
  { title: "Contact", link: CONTACTS },
];
