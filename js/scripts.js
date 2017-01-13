$(function() {
  $('.rr').click(function() {
    $('#rr').slideDown();
    $('#pd').slideUp();
    $('#ja').slideUp();
    $('#cd').slideUp();
    $('#cn').slideUp();
  });
  $('.pd').click(function() {
    $('#pd').slideDown();
    $('#rr').slideUp();
    $('#ja').slideUp();
    $('#cd').slideUp();
    $('#cn').slideUp();
  });
  $('.ja').click(function() {
    $('#ja').slideDown();
    $('#pd').slideUp();
    $('#rr').slideUp();
    $('#cd').slideUp();
    $('#cn').slideUp();
  });
  $('.cd').click(function() {
    $('#cd').slideDown();
    $('#pd').slideUp();
    $('#ja').slideUp();
    $('#rr').slideUp();
    $('#cn').slideUp();
  });
  $('.cn').click(function() {
    $('#cn').slideDown();
    $('#pd').slideUp();
    $('#ja').slideUp();
    $('#cd').slideUp();
    $('#rr').slideUp();
  });
  $('#start').click(function() {
    $('form').slideToggle();
    $('#rr').slideUp();
    $('#pd').slideUp();
    $('#ja').slideUp();
    $('#cd').slideUp();
    $('#cn').slideUp();
    event.preventDefault();
  });
  $('form').submit(function(){
    var q1 = parseInt($('input[name=q1]:checked').val())
    var q2 = parseInt($('input[name=q2]:checked').val())
    var q3 = parseInt($('input[name=q3]:checked').val())
    var q4 = parseInt($('input[name=q4]:checked').val())
    var q5 = parseInt($('input[name=q5]:checked').val())
    var q6 = parseInt($('input[name=q6]:checked').val())
    var points = q1 + q2 + q3 + q4 + q5 + q6;
    var program;
    if (points <= 2) {
      $('#rr').slideDown();
    } else if (points >= 3 && points <= 5) {
      $('#pd').slideDown();
    } else if (points > 5 && points < 7) {
      $('#ja').slideDown();
    } else if (points >= 7 && points <= 9) {
      $('#cd').slideDown();
    } else if (points >= 10) {
      $('#cn').slideDown();
    } else {
      console.log('we have a problem');
    }
    event.preventDefault();
    $('form').slideUp();
  });
})
