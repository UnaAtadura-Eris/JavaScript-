document.getElementById('calculateBtn').addEventListener('click', function() {
  // var moment = require('moment');
  var startDate = moment(document.getElementById('startDate').value);
  var endDate = moment(document.getElementById('endDate').value);
  var units = document.getElementById('units').value;
  var duration = moment.duration(endDate.diff(startDate));
  var result = '';

  if (units === 'all' || units === 'year') {
    var years = duration.years();
    if (years > 0) {
      result += years + (years === 1 ? ' year ' : ' years ');
    }
  }

  if (units === 'all' || units === 'month') {
    var months = duration.months();
    if (months > 0) {
      result += months + (months === 1 ? ' month ' : ' months ');
    }
  }

  if (units === 'all' || units === 'day') {
    var days = duration.days();
    if (days > 0) {
      result += days + (days === 1 ? ' day ' : ' days ');
    }
  }

  if (units === 'all' || units === 'hour') {
    var hours = duration.hours();
    if (hours > 0) {
      result += hours + (hours === 1 ? ' hour ' : ' hours ');
    }
  }

  if (units === 'all' || units === 'minute') {
    var minutes =duration.minutes();
    if (minutes > 0) {
    result += minutes + (minutes === 1 ? ' minute ' : ' minutes ');
    }
    }
    
    if (units === 'all' || units === 'second') {
    var seconds = duration.seconds();
    if (seconds > 0) {
    result += seconds + (seconds === 1 ? ' second ' : ' seconds ');
    }
    }
    
    var resultElement = document.getElementById('result');
    resultElement.textContent = result.trim();
    });
