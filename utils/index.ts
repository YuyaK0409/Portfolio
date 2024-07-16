/**
 * Checking if the obj is empty
 * @param obj: Object
 * @returns
 * Return true if the obj is empty
 * Return false if the obj is not empty
 */
export const isEmptyObj = (obj: Object): boolean => {
  return Object.keys(obj).length === 0;
};

/**
 * Getting current age from birthyear
 * @param birthYear: number
 * @returns
 * Return number
 */
export const getAge = (birthYear: number): number => {
  return new Date().getFullYear() - birthYear;
};
