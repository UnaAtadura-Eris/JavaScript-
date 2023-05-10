document.getElementById('calculateBtn').addEventListener('click', function() {
  // var moment = require('moment');
  var startDate = moment(document.getElementById('startDate').value);
  var endDate = moment(document.getElementById('endDate').value);
  var units = document.getElementById('units').value;
  var duration = moment.duration(endDate.diff(startDate));
  var result = '';
 if (units === 'all' ) {
        result += duration.years() +'年'+duration.months()+'月'+duration.days()+'日'+duration.hours()+'时'+duration.minutes()+'分'+duration.seconds()+'秒';
      }
    
   if (units === 'year') {
      var years = moment(endDate).diff(startDate, "years",false)
        result += years + '年';
    }
    if (units === 'month') {
      var years = moment(endDate).diff(startDate, "months",false)
        result += years + '月';
    }
    if (units === 'day') {
      var years = moment(endDate).diff(startDate, "days",false)
        result += years + '日';
    }
    if (units === 'hour') {
      var years = moment(endDate).diff(startDate, "hours",false)
        result += years + '时';
    }
    if (units === 'minute') {
      var years = moment(endDate).diff(startDate, "minutes",false)
        result += years + '分';
    }
    if (units === 'second') {
      var years = moment(endDate).diff(startDate, "seconds",false)
        result += years + '秒';
    }
    var resultElement = document.getElementById('result');
    resultElement.textContent = result.trim();
    });

   
  
    // if (units === 'all' || units === 'month') {
    //   var months = duration.months();
    //   if (months >= 0) {
    //     result += months +  ' 月 ';
    //   }
    // }
  
    // if (units === 'all' || units === 'day') {
    //   var days = duration.days();
    //   if (days >= 0) {
    //     result += days + ' 日 ';
    //   }
    // }
  
    // if (units === 'all' || units === 'hour') {
    //   var hours = duration.hours();
    //   if (hours >= 0) {
    //     result += hours + ' 时 ';
    //   }
    // }
  
    // if (units === 'all' || units === 'minute') {
    //   var minutes =duration.minutes();
    //   if (minutes >= 0) {
    //   result += minutes + ' 分 ';
    //   }
    //   }
      
    //   if (units === 'all' || units === 'second') {
    //   var seconds = duration.seconds();
    //   if (seconds >= 0) {
    //   result += seconds + ' 秒 ';
    //   }
    //   }
