/**
 * Remove properties from object
 * @param object source object.
 * @param remove properties to remove. Default removed all properties
 * @returns Removed properties object.
 */
export function removeProperty<T>(object: any, remove?: string[]): T {
  const obj = { ...object };
  if (remove && remove.length >= 0) {
    remove.forEach((prop) => delete obj[prop]);
  } else {
    const objKeys = Object.keys(obj);
    objKeys.forEach((key) => delete obj[key]);
  }
  return obj;
};

/**
 * Remove empty properties object
 * @param object source object.
 * @returns Removed empty properties object.
 */
export function removePropertyEmptyValue<T>(object: any): T {
  const obj = {...object };
  const objKeys = Object.keys(obj);
  objKeys.forEach((key) => {
    if (obj[key] === null || obj[key] === undefined || obj[key] === '') {
      delete obj[key];
    }
  });
  return obj;
}