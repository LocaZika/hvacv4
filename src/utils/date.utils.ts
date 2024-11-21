const date = new Date();
const month = new Map<number, string>([
  [0, 'january'],
  [1, 'february'],
  [2, 'march'],
  [3, 'april'],
  [4, 'may'],
  [5, 'june'],
  [6, 'july'],
  [7, 'august'],
  [8, 'september'],
  [9, 'october'],
  [10, 'november'],
  [11, 'december'],
]);
const dayOfWeek = new Map<number, string>([
  [0, 'Sunday'],
  [1, 'Monday'],
  [2, 'Tuesday'],
  [3, 'Wednesday'],
  [4, 'Thursday'],
  [5, 'Friday'],
  [6, 'Saturday'],
]);
const getDay = (): string => date.getDate() < 10 ? `0${date.getDate()}` : date.getDate().toString();
const getMonth = (): string => date.getMonth() < 9 ? `0${date.getMonth() + 1}` : (date.getMonth() + 1).toString();
type TOption = 'day' | 'month' | 'year' | 'fullDate' | 'dayOfWeek';
export const getDate = (option: TOption): string | undefined=> {
  if(option){
    switch (option) {
      case 'day':
        return date.getDate().toString();
      case 'month':
        return month.get(date.getMonth());
      case 'year':
        return date.getFullYear().toString();
      case 'fullDate': 
        return `${getDay()}/${getMonth()}/${date.getFullYear()}`;
      case 'dayOfWeek':
        return dayOfWeek.get(date.getDay());
      default: throw new Error('the option is invalid');
    }
  }
  return date.toString();
};