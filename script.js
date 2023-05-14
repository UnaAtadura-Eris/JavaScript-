document.getElementById('calculateBtn').addEventListener('click', function () {
  // var moment = require('moment');
  var startDate = moment(document.getElementById('startDate').value);

  var startTimeInput = document.getElementById('startTime'); // 获取输入框元素
  var startTimeValue = startTimeInput.value; // 获取输入框的值
  startDate.set('hour', startTimeValue.split(':')[0]); // 设置小时
  startDate.set('minute', startTimeValue.split(':')[1]); // 设置分钟
  startDate.set('second', startTimeValue.split(':')[2]); // 设置秒


  var endDate = moment(document.getElementById('endDate').value);

  var endTimeInput = document.getElementById('endTime'); // 获取输入框元素
  var endTimeValue = endTimeInput.value; // 获取输入框的值
  endDate.set('hour', endTimeValue.split(':')[0]); // 设置小时
  endDate.set('minute', endTimeValue.split(':')[1]); // 设置分钟
  endDate.set('second', endTimeValue.split(':')[2]); // 设置秒

  var units = document.getElementById('units').value;
  var duration = moment.duration(endDate.diff(startDate));
  var result = '';
  if (units === 'all') {
    result += duration.years() + '年' + duration.months() + '月' + duration.days() + '日' + duration.hours() + '时' + duration.minutes() + '分' + duration.seconds() + '秒';
  }

  if (units === 'year') {
    var years = moment(endDate).diff(startDate, "years", false)
    result += years + '年';
  }
  if (units === 'month') {
    var months = moment(endDate).diff(startDate, "months", false)
    result += months + '月';
  }
  if (units === 'day') {
    var days = moment(endDate).diff(startDate, "days", false)
    result += days + '日';
  }
  if (units === 'hour') {
    var hours = moment(endDate).diff(startDate, "hours", false)
    result += hours + '时';
  }
  if (units === 'minute') {
    var minutes = moment(endDate).diff(startDate, "minutes", false)
    result += minutes + '分';
  }
  if (units === 'second') {
    var seconds = moment(endDate).diff(startDate, "seconds", false)
    result += seconds + '秒';
  }
  if (units === 'week') {
    var diff = moment.duration(endDate.diff(startDate)); // 获取两个日期之间的差值，返回一个duration对象
    var weeks = diff.weeks(); // 获取周数，返回一个整数
    var days = diff.days() - (diff.weeks() * 7); // 获取天数，返回一个整数，不包括周数的部分
    result += weeks + "周" + days + "天"; // 输出 “4 weeks and 2 days”
  }
  var resultElement = document.getElementById('result');
  resultElement.textContent = result.trim();
  // resultElement.textContent = startDate
});




/*
地球online
*/
// 定义一个目标日期时间
var targetDate = moment("1995-12-19 11:23:24");
// 定义一个函数，用来计算两个日期时间的间隔，并返回一个字符串
function getInterval(date1, date2) {
  // 计算两个日期时间的间隔对象
  var duration = moment.duration(date1.diff(date2));
  var result = duration.years() + '年' + duration.months() + '月' + duration.days() + '日' + duration.hours() + '时' + duration.minutes() + '分' + duration.seconds() + '秒';
  /*    var result = Math.abs(duration.years()) +'年'
  这是因为 Moment.js 的持续时间（duration）对象的设计是基于时间间隔的，其中负数表示时间间隔是从过去到未来的。
  如果你希望输出的年数不带负号，可以使用 Math.abs() 函数来获取绝对值，将负数转换为正数。*/
  return result;
}
// 定义一个函数，用来显示目标日期时间和当前日期时间的间隔，并实时更新
function showInterval() {
  // 获取当前日期时间
  var currentDate = moment();
  // 获取目标日期时间和当前日期时间的间隔字符串
  var interval = getInterval(currentDate, targetDate);
  // 获取网页上的显示元素
  var display = document.getElementById("display");
  // 设置显示元素的内容为间隔字符串
  display.innerHTML = interval;
}
// 调用一次显示函数，以便在网页上显示初始结果
showInterval();
// 设置一个定时器，每隔一秒调用一次显示函数，以便实时更新结果
setInterval(showInterval, 1000);

