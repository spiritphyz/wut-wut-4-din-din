export const GetTime = request => {
  const months = {
    '1': 'January',
    '2': 'February',
    '3': 'March',
    '4': 'April',
    '5': 'May',
    '6': 'June',
    '7': 'July',
    '8': 'August',
    '9': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December'
  };
  const date = new Date();
  if (request === 'day') {
    const day = date.getDate();
    console.log('🍊  Requested day is', day);
    return day;
  }
  if (request === 'month') {
    const month = months[ date.getMonth() + 1 ];
    console.log('🍊  Requested month is', month);
    return month;
  }
};