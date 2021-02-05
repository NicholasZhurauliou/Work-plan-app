export const getFirstDayInCurrentMonthIndex = () => {
  let now = new Date();
  now.setDate(1);
  const weekday = now.getDay();
  if (!weekday) {
    return 7;
  }
  return weekday;
};

export const getLastDayInCurrentMonth = () => {
  const now = new Date();
  const month = now.getMonth();
  const year = now.getFullYear();

  return new Date(year, month + 1, 0).getDate();
};

export const getQuentityWeekInCurrentMonth = () => {
  return Math.ceil(
    (getLastDayInCurrentMonth() + getFirstDayInCurrentMonthIndex() - 1) / 7
  );
};

export const initDays = hoursInDay => {
  let days = {};
  let lastDay = getLastDayInCurrentMonth();

  for (let day = 1; day <= lastDay; day++) {
    let hours = [...new Array(hoursInDay)].map(() => ({
      isImportant: false,
      isRoutine: false
    }));
    days[day] = hours;
  }

  return days;
};
