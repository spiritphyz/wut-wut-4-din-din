export const GetTime = request => {
  if (request === 'day') {
    const day = moment().format('D');
    // console.log('🍊  Requested day is', day);
    return day;
  }
  if (request === 'month') {
    const month = moment().format('MMMM');
    // console.log('🍊  Requested month is', month);
    return month;
  }
};