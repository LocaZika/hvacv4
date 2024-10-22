export const spaceToDash = (text: string): string => text.replace(' ', '-');
export const getNumberFromString = (text: string): string => text.match(/\d/g)?.[0] ?? text;