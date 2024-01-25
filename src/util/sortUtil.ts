export function sortByProperty<T>(
  data: T[],
  propertyName: keyof T,
  reverse = false
): T[] {
  return data.sort((a, b) => {
    const valueA = a[propertyName];
    const valueB = b[propertyName];

    if (valueA < valueB) {
      return reverse ? 1 : -1;
    } else if (valueA > valueB) {
      return reverse ? -1 : 1;
    } else {
      return 0;
    }
  });
}
export function findPropertyIndex<T extends object>(
  data: T[],
  property: keyof T,
  value: any
): number {
  for (let i = 0; i < data.length; i++) {
    if (property in data[i] && data[i][property] === value) {
      return i;
    }
  }
  return -1;
}
export class SortUtil {
  static reorderMap<T>(
    inputObject: Record<any, T & { index?: number }>
  ): Record<any, T> {
    const sortedKeys = Object.keys(inputObject).sort(
      (keyA, keyB) =>
        (inputObject[keyB]["index"] || 0) - (inputObject[keyA]["index"] || 0)
    );

    const reorderedObject: Record<any, T> = {};

    sortedKeys.forEach((key) => {
      reorderedObject[key] = inputObject[key];
    });
    return reorderedObject;
  }

  static sortByProperty<T>(
    data: T[],
    propertyName: keyof T,
    reverse = false
  ): T[] {
    return data.sort((a, b) => {
      const valueA = a[propertyName];
      const valueB = b[propertyName];

      if (valueA < valueB) {
        return reverse ? 1 : -1;
      } else if (valueA > valueB) {
        return reverse ? -1 : 1;
      } else {
        return 0;
      }
    });
  }

  static findPropertyIndex<T extends object>(
    data: T[],
    property: keyof T,
    value: any
  ): number {
    for (let i = 0; i < data.length; i++) {
      if (property in data[i] && data[i][property] === value) {
        return i;
      }
    }
    return -1;
  }
}
