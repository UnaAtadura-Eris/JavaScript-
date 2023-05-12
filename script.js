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
      var months = moment(endDate).diff(startDate, "months",false)
        result += months + '月';
    }
    if (units === 'day') {
      var days = moment(endDate).diff(startDate, "days",false)
        result += days + '日';
    }
    if (units === 'hour') {
      var hours = moment(endDate).diff(startDate, "hours",false)
        result += hours + '时';
    }
    if (units === 'minute') {
      var minutes = moment(endDate).diff(startDate, "minutes",false)
        result += minutes + '分';
    }
    if (units === 'second') {
      var seconds = moment(endDate).diff(startDate, "seconds",false)
        result += seconds + '秒';
    }
    if (units === 'week') {
      var diff = moment.duration(endDate.diff(startDate)); // 获取两个日期之间的差值，返回一个duration对象
      var weeks = diff.weeks(); // 获取周数，返回一个整数
      var days = diff.days()-(diff.weeks()*7); // 获取天数，返回一个整数，不包括周数的部分
      result += weeks + "周"+ days +"天"; // 输出 “4 weeks and 2 days”
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
