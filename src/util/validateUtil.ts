import { DataType } from "@/model/input";
import { xPrint } from "./xPrint";

export interface Rule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
}
export var forceValidate = false;
const validateTextField = (key: string, value: any, rules?: Rule) => {
  const required = rules?.required || false;
  const minLength = rules?.minLength || 0;
  const maxLength = rules?.maxLength || Infinity;
  const pattern = rules?.pattern || null;

  let error = "";
  if (Array.isArray(value)) {
    const values = (value && value.length) || 0;
    if (required && !values) {
      error = `${key} is required`;
    } else if (values < minLength) {
      error = `${key} must be at least ${minLength} options`;
    } else if (values > maxLength) {
      error = `${key} must be less than ${maxLength} options`;
    }
  } else {
    if (required && !value) {
      error = `${key} is required`;
    } else if (value && value.length < minLength) {
      error = `${key} must be at least ${minLength} characters long`;
    } else if (value && value.length > maxLength) {
      error = `${key} must be less than ${maxLength} characters long`;
    } else if (pattern && !pattern.test(value)) {
      error = `${key} does not match the required format`;
    }
  }
  return error;
};
export function getDayTimeNow(date?: string): number {
  return (date ? new Date(date) : new Date()).setHours(0, 0, 0, 0);
}
export const validateFiles = (
  key: string,
  value: any,
  fileValue: any,
  rules?: Rule
) => {
  const required = rules?.required || false;
  const minLength = rules?.minLength || 0;
  const maxLength = rules?.maxLength || Infinity;
  let error = "";
  const url = (value && value.length) || 0;
  const files = (fileValue && fileValue.length) || 0;
  xPrint(
    ` validation ${JSON.stringify(url || files)} ${key} ${Array.isArray(
      fileValue
    )}`
  );
  if (required && !(url || files)) {
    error = `${key} is required`;
  } else if (url + files < minLength) {
    error = `${key} must be at least ${minLength} files`;
  } else if (url + files > maxLength) {
    error = `${key} must be less than ${maxLength} files`;
  }
  return error;
};
export const validateFile = (
  key: string,
  value: any,
  fileValue: any,
  rules?: Rule
) => {
  const required = rules?.required || false;

  let error = "";
  if (required && !(value || fileValue)) {
    error = `${key} is required`;
  }
  return error;
};
export default validateTextField;
export const getInputValue = (
  v: any,
  type: DataType | undefined,
  isList?: boolean
) => {
  let result: any = v;
  if (!type) type = "text";
  if (isList) {
    if (v) {
      if (typeof v === "object") {
      } else if (typeof v === "string" && v) {
        result = v.split(",");
      }
      if (type === "number") {
        result = result.map((e: any) => parseFloat(`${e}`));
      }
    } else {
      result = [];
    }
  } else {
    if (type === "number") {
      if (v) {
        result = parseFloat(v);
      } else {
        result = "";
      }
    } else if (type === "text") {
      if (!v) {
        result = "";
      }
    } else if (type === "date") {
      if (!v) {
        result = "";
      } else {
        if (typeof v === "number") {
          const dateObject = new Date(v);
          result = `${dateObject.getFullYear()}-${(dateObject.getMonth() + 1)
            .toString()
            .padStart(2, "0")}-${dateObject
            .getDate()
            .toString()
            .padStart(2, "0")}`;
          // result = "2024-11-05";
        }
      }
    } else if (type === "boolean") {
      result = Boolean(v);
    } else if (type === "object") {
      if (!v) {
        result = "";
      } else {
        // result = JSON.stringify(v);
      }
    }
  }
  return result;
};
export function removeEmptyValues(record: Record<any, any>): Record<any, any> {
  const cleanedRecord: Record<any, any> = {};

  Object.entries(record).forEach(([key, value]) => {
    if (value !== null && value !== undefined && value !== "") {
      if (Array.isArray(value)) {
        if (value.length > 0) {
          cleanedRecord[key] = value;
        }
      } else {
        if (value !== "") {
          cleanedRecord[key] = value;
        }
      }
    }
  });

  return cleanedRecord;
}

export function filterFilesFromData(
  data: Record<string, any>
): Record<string, any> {
  const filteredData: Record<string, any> = {};
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      let value = data[key];
      if (
        !(value instanceof File) &&
        !(
          Array.isArray(value) && value.every((item) => item instanceof File)
        ) &&
        key !== "id"
      ) {
        if (key.endsWith("At")) {
          if (["createdAt", "updatedAt"].includes(key)) {
            continue;
          }
          value = getDayTimeNow(value);
        }
        filteredData[key] = value;
      }
    }
  }

  return filteredData;
}
