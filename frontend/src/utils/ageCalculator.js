import moment from 'moment'

export const calculateDuration = (date1, date2) => {

  if (date1 < date2) {
    var temp = date1
    var date1 = date2
    var date2 = temp
  }

  const diffDuration = moment.duration(date1.diff(date2));
  const years = diffDuration.years()
  const months = diffDuration.months()
  const days = diffDuration.days()

  let ageString = ""
  if (years) {
    ageString += ` ${years} Years`
  }
  if (months) {
    ageString += ` ${months} Months`
  }
  if (days) {
    ageString += ` ${days} Days`
  }
  return ageString.trim()
}
