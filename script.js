document.getElementById('calculateBtn').addEventListener('click', function() {
  // var moment = require('moment');并不需要require或import？
var startDate = moment(document.getElementById('startDate').value);
  var endDate = moment(document.getElementById('endDate').value);
  var units = document.getElementById('units').value;
  var duration = moment.duration(endDate.diff(startDate));
  var result = '';

  if (units === 'all' || units === 'year') {
    var years = duration.years();
    if (years >= 0) {
      result += years +  ' 年 ';
    }
  }

  if (units === 'all' || units === 'month') {
    var months = duration.months();
    if (months >= 0) {
      result += months +  ' 月 ';
    }
  }

  if (units === 'all' || units === 'day') {
    var days = duration.days();
    if (days >= 0) {
      result += days + ' 日 ';
    }
  }

  if (units === 'all' || units === 'hour') {
    var hours = duration.hours();
    if (hours >= 0) {
      result += hours + ' 时 ';
    }
  }

  if (units === 'all' || units === 'minute') {
    var minutes =duration.minutes();
    if (minutes >= 0) {
    result += minutes + ' 分 ';
    }
    }
    
    if (units === 'all' || units === 'second') {
    var seconds = duration.seconds();
    if (seconds >= 0) {
    result += seconds + ' 秒 ';
    }
    }
    
    var resultElement = document.getElementById('result');
    resultElement.textContent = result.trim();
    });
