const MONTH_STRINGS = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

const formatDate = (day: number, month: number, year: number) => {
  // const date = new Date(dateString);
  // const day = date.getDate();
  const monthText = MONTH_STRINGS[month];
  // const year = date.getFullYear();

  return `${day} ${monthText} ${year}`;
};

export default formatDate;
