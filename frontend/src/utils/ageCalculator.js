export const ageCalculator = (dob, now) => {

  if (dob > now) {
    var temp = dob
    var dob = now
    var now = temp
  }

  var dobYear = dob.getFullYear();
  var dobMonth = dob.getMonth();
  var dobDate = dob.getDate();

  var currentYear = now.getFullYear();
  var currentMonth = now.getMonth();
  var currentDate = now.getDate();

  var age = {};
  var ageString = "";

  const yearAge = currentYear - dobYear;

  if (currentMonth >= dobMonth)
    var monthAge = currentMonth - dobMonth;
  else {
    yearAge--;
    var monthAge = 12 + currentMonth - dobMonth;
  }

  if (currentDate >= dobDate)
    var dateAge = currentDate - dobDate;
  else {
    monthAge--;
    var dateAge = 31 + currentDate - dobDate;

    if (monthAge < 0) {
      monthAge = 11;
      yearAge--;
    }
  }

  age = {
    years: yearAge,
    months: monthAge,
    days: dateAge,
  };

  if (age.years > 0 && age.months > 0 && age.days > 0)
    ageString = age.years + " years, " + age.months + " months, and " + age.days + " days";
  else if (age.years == 0 && age.months == 0 && age.days > 0)
    ageString = "Only " + age.days + " days";
  else if (age.years > 0 && age.months == 0 && age.days == 0)
    ageString = age.years + " years. Happy Birthday!!";
  else if (age.years > 0 && age.months > 0 && age.days == 0)
    ageString = age.years + " years and " + age.months + " months";
  else if (age.years == 0 && age.months > 0 && age.days > 0)
    ageString = age.months + " months and " + age.days + " days";
  else if (age.years > 0 && age.months == 0 && age.days > 0)
    ageString = age.years + " years, and" + age.days + " days";
  else if (age.years == 0 && age.months > 0 && age.days == 0)
    ageString = age.months + " months";
  else ageString = "Welcome to Earth! It's first day on Earth!";

  return ageString;
}
