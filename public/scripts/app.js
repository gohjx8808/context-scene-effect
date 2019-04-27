(function () {
  'use strict';
  var data = [];
  var counter;
  var d = new Date();
  var n1, n2;
  var database = firebase.database();
  var correct;
  var wrong;

  function myTimer() {
    counter = counter + 1;
  }

  function writeData(data) {
    database.ref(d.getTime()).set(data);
  }

  $("#gender").on("change", function () {
    var selValue = $(this).children("option:selected").val();
    data.push(selValue);
  });

  $("#easy").click(function () {
    correct=0;
    wrong=0;
    var diff = $(this).val();
    data.push(diff);
    $("#easyd").show();
    $('#index').hide();
  });

  $("#m1p1b").click(function () {
    $("#m1p1").show();
    $("#easyd").hide();
  })

  $('#y1').click(function () {
    $('#m1q1').show();
    $('#m1p1').hide();
    counter = 0;
    n1 = setInterval(myTimer, 1000);
  })

  $("#m1p2b").click(function () {
    var radioValue = $("input[name=m1q1]:checked").val();
    data.push(radioValue);
    if (radioValue!="chopboard"){
      alert("You are wrong. The correct answer is chopboard.");
      wrong=wrong+1;
    }
    else{
      alert("You are correct. The correct answer is chopboard.");
      correct=correct+1;
    }
    $("#m1p2").show();
    $("#m1q1").hide();
    n2 = clearInterval(n1);
    data.push(counter);
  })


  $('#y2').click(function () {
    $('#m1q2').show();
    $('#m1p2').hide();
    counter = 0;
    n1 = setInterval(myTimer, 1000);
  })

  $("#m1p3b").click(function () {
    var radioValue = $("input[name=m1q2]:checked").val();
    data.push(radioValue);
    if (radioValue!="volleyball"){
      alert("You are wrong. The correct answer is volleyball.");
      wrong=wrong+1;
    }
    else{
      alert("You are correct. The correct answer is volleyball.");
      correct=correct+1;
    }
    $("#m1p3").show();
    $("#m1q2").hide();
    n2 = clearInterval(n1);
    data.push(counter);
  })

  $('#y3').click(function () {
    $('#m1q3').show();
    $('#m1p3').hide();
    counter = 0;
    n1 = setInterval(myTimer, 1000);
  })

  $("#m1p4b").click(function () {
    var radioValue = $("input[name=m1q3]:checked").val();
    data.push(radioValue);
    if (radioValue!="speaker"){
      alert("You are wrong. The correct answer is speaker.");
      wrong=wrong+1;
    }
    else{
      alert("You are correct. The correct answer is speaker.");
      correct=correct+1;
    }
    $("#m1p4").show();
    $("#m1q3").hide();
    n2 = clearInterval(n1);
    data.push(counter);
  })

  $('#y4').click(function () {
    $('#m1q4').show();
    $('#m1p4').hide();
    counter = 0;
    n1 = setInterval(myTimer, 1000);
  })

  $('#submitb1').click(function () {
    var radioValue = $("input[name=m1q4]:checked").val();
    data.push(radioValue);
    if (radioValue!="shampoo"){
      alert("You are wrong. The correct answer is shampoo.");
      wrong=wrong+1;
    }
    else{
      alert("You are correct. The correct answer is shampoo.");
      correct=correct+1;
    }
    alert("You answered "+correct+" question(s) correctly and "+wrong+" question(s) wrongly.")
    $('#m1q4').hide();
    $("#submit").show();
    n2 = clearInterval(n1);
    data.push(counter);
    writeData(data);
  })

  $("#hard").click(function () {
    correct=0;
    wrong=0;
    var diff = $(this).val();
    data.push(diff);
    $("#hardd").show();
    $('#index').hide();
  })

  $("#m2p1b").click(function () {
    $("#m2p1").show();
    $("#hardd").hide();
  })

  $('#y5').click(function () {
    $('#m2q1').show();
    $('#m2p1').hide();
    counter = 0;
    n1 = setInterval(myTimer, 1000);
  })

  $("#m2p2b").click(function () {
    var radioValue = $("input[name=m2q1]:checked").val();
    data.push(radioValue);
    if (radioValue!="ysl"){
      alert("You are wrong. The correct answer is YSL.");
      wrong=wrong+1;
    }
    else{
      alert("You are correct. The correct answer is YSL.");
      correct=correct+1;
    }
    $("#m2p2").show();
    $("#m2q1").hide();
    n2 = clearInterval(n1);
    data.push(counter);
  })

  $('#y6').click(function () {
    $('#m2q2').show();
    $('#m2p2').hide();
    counter = 0;
    n1 = setInterval(myTimer, 1000);
  })

  $("#m2p3b").click(function () {
    var radioValue = $("input[name=m2q2]:checked").val();
    data.push(radioValue);
    if (radioValue!="david beckham"){
      alert("You are wrong. The correct answer is david beckham.");
      wrong=wrong+1;
    }
    else{
      alert("You are correct. The correct answer is david beckham.");
      correct=correct+1;
    }
    $("#m2p3").show();
    $("#m2q2").hide();
    n2 = clearInterval(n1);
    data.push(counter);
  })

  $('#y7').click(function () {
    $('#m2q3').show();
    $('#m2p3').hide();
    counter = 0;
    n1 = setInterval(myTimer, 1000);
  })

  $("#m2p4b").click(function () {
    var radioValue = $("input[name=m2q3]:checked").val();
    data.push(radioValue);
    if (radioValue!="geely"){
      alert("You are wrong. The correct answer is geely.");
      wrong=wrong+1;
    }
    else{
      alert("You are correct. The correct answer is geely.");
      correct=correct+1;
    }
    $("#m2p4").show();
    $("#m2q3").hide();
    n2 = clearInterval(n1);
    data.push(counter);
  })

  $('#y8').click(function () {
    $('#m2q4').show();
    $('#m2p4').hide();
    counter = 0;
    n1 = setInterval(myTimer, 1000);
  })

  $('#submitb2').click(function () {
    var radioValue = $("input[name=m2q4]:checked").val();
    data.push(radioValue);
    if (radioValue!="chanel"){
      alert("You are wrong. The correct answer is Chanel.");
      wrong=wrong+1;
    }
    else{
      alert("You are correct. The correct answer is Chanel.");
      correct=correct+1;
    }
    alert("You answered "+correct+" question(s) correctly and "+wrong+" question(s) wrongly.")
    $('#m2q4').hide();
    $("#submit").show();
    n2 = clearInterval(n1);
    data.push(counter);
    writeData(data);
  })

  $('#again').click(function () {
    $('#index').show();
    $('#submit').hide();
  })

  $('#noagain').click(function () {
    $('#last').show();
    $('#submit').hide();
  })

  $('#home').click(function () {
    $('#index').show();
    $('#last').hide();
  })

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('./service-worker.js')
      .then(function () { console.log('Service Worker Registered'); });
  }
})();
