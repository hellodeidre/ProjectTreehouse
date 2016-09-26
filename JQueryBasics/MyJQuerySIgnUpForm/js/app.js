//Problem: Hints are shown even when form is valid
//Solution: Hide and show them at appropriate times

//Hide hints

//When event happens on password input
  //Find out if password is valid
    //Hide hint if valid
    //Else show hint

//When event happens on confirmation input
  //Find out if password and confirmation match
    //Hide hint if match
    //Else show hint

var $password = $("#password");
var $confirmPassword = $("#confirm_password");

$("form span").hide();

function isPasswordValid() {
  return $password.val().length > 8;
}

function arePasswordsMatching() {
  return $password.val() === $confirmPassword.val();
}

function canSubmit() {
  return isPasswordValid() && arePasswordsMatching();
}

function passwordEvent() {
  if(isPasswordValid()) {
    $password.next().hide();
  } else {
    $password.next().show();
  }
}

function confirmPasswordEvent(){
  if(arePasswordsMatching()) {
    $confirmPassword.next().hide();
  } else {
    $confirmPassword.next().show();
  }
}

function enableSubmitEvent() {
  $("submit").prop("disabled", !canSubmit());
}

$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

enableSubmitEvent();
