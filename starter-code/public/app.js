console.log('app.js connected');
$(document).ready(function(){
  console.log('DOM ready');

  $('#guess-number-form').on('submit', function(event) {
      event.preventDefault();
      console.log('request made');
      $.ajax({
        method: "GET",
        url: "/pick-a-number",
        data: $('#guess-number-form').serialize(),
        dataType: "json",
        success: OnSuccess,
        error: OnError
      });

    function OnSuccess() {
      console.log('ajax success');
    }
  });

  $('#target-number-form').on('submit', function(event){
    event.preventDefault();
    $.ajax({
      url: '/pick-a-number',
      method: 'POST',
      data: $('#target-number-form').serialize(),
      success: handleTargetChangeSuccess,
      error: handleError
    });
  });

  function handleTargetChangeSuccess(targetResponse){
    console.log(targetResponse);
    $('#target-number-form')[0].reset();
  }

  function OnError() {
    console.log('ajax error');
  }

});
console.log('app.js connected');
$(document).ready(function(){
  console.log('DOM ready');
});
