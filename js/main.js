(function() {
  'use strict';

  var orders = ["をほめる","をdisる","を殴る","にkissする","にハグする"];

  var numElement = document.getElementById('num');
  var resultElement = document.getElementById('result');
  var orderButton = document.getElementById('orderButton');

  orderButton.addEventListener('click', function() {
    // 人数(num)の取得
    var num = parseInt(numElement.value);
    if (isNaN(num)) {
      resultElement.innerText = '数値を半角で入力してください';
      resultElement.style.color = 'red';
      return;
    }
    if (num <= 1) {
      resultElement.innerText = '2以上を入力してください';
      resultElement.style.color = 'red';
      return;
    }
    var members = [];
    for (var i = 1; i <= num; i++) {
      members.push(i);
    }
    // 命令の表示
    // 0からnの乱数の取得 ⇒ Math.floor(Math.random() * (n + 1))
    // 配列の場合 ⇒ Maht.floor(Math.random() * array.length)
    var random = Math.floor(Math.random() * orders.length);
    var order = orders[random];
    members.sort(function() {return Math.random() - .5});
    var subject = members[0];
    var object = members[1];
    resultElement.innerText = "#" + subject + "が#" + object + order;
  })
})();
