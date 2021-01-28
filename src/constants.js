export const HOURS_IN_DAY = 24;

export const getLastDayInCurrentMonth = () => {
    let now = new Date();
    let month = now.getMonth();
    let year = now.getFullYear();
  
    return new Date(year, month + 1, 0).getDate();
};

export const changeNumberToTimeStr = num => `${num < 10 ? '0' : ''}${num}:00`;