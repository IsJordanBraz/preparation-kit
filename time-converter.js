function timeConverver(s) {
  let datePattern = /([a-z]), ''/;
  let matchResult = datePattern.exec("07:05:45PM");
  console.log(matchResult)
}

timeConverver('07:05:45PM');