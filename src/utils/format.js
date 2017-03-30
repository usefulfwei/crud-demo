/**
 * Created by jwdn on 2017/3/30.
 */
export function formateDate(time){
  let initialDate = new Date(time),
      year = initialDate.getFullYear(),
      date = initialDate.getDate(),
      day= initialDate.getDay();

  let weeks = ['mon','tue','wen','thu','fri','sau','sun'];
  let months = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
  day = weeks[day-1];
  let month = months[initialDate.getMonth()];
  let formatedDate = `${year} -- ${month} -- ${date}  ${day}`;
  return formatedDate;
}