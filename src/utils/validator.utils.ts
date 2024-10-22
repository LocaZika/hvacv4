export const isEmptyObject = <T>(object: T | any): boolean | null | undefined => {
  return object && Object.keys(object).length === 0 && object.constructor === Object;
};
export const isEmptyArray = (array: Array<any>) => {
  return array && Array.isArray(array) && array.length === 0;
}