import { ReactElement } from "react";
import { Rule } from "../util/validateUtil";

export type DataType =
  | "text"
  | "number"
  | "boolean"
  | "file"
  | "files"
  | "object"
  | "date";
export type PrefixType = "Min" | "Max" | "Files" | "File" | "List" | "Map";
// enum PrefixEnum {
//   MIN,
//   MAX,
//   FILES,
//   FILE,
//   LIST,
//   MAP
// }
// export type ID = { id?: string | number };
export type FilterType = "one" | "range" | "list";
export type XKeys<T> = keyof T;

export type XFormMapped<T> = {
  [key in XKeys<T>]: InputEntity;
  // [key in XKeys<T>]?: InputEntity;
};
export type XFormError<T> = {
  [key in XKeys<T>]?: string;
};
export interface FileType extends Blob {
  name: string;
  type: string;
  size: number;
  preview?: string;
}

export interface XInputProps {
  name: string;
  label: string;
  input: InputEntity;
  errorText?: string;
  value: any;
  setFilter: (filter: Record<string, any>) => void;
  getOptions?: (api: string) => Promise<any[]>;
}
export interface InputEntity<T = any> {
  index?: number;
  filter?: FilterType;
  title?: string;
  description?: string;
  type?: DataType;
  isList?: boolean;
  validate?: Rule;
  options?: Record<number | string, any>;
  cache?: boolean;
  ignore?: boolean;
  asyncOption?: AsyncOption<T>;
  // api?: string;
}
export interface AsyncOption<T> {
  api: string;
  options?: T[];
  getOnlyId?: boolean;
  renderSelect: (e: any, options?: { onDelete: () => void }) => ReactElement;
  renderOption: (e: any) => ReactElement;
}
