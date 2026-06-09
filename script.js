$(document).ready(function(){
  $("#submitBtn").click(function(){
    var age = parseInt($("#age").val());
    if (isNaN(age)) { alert("Enter a valid age."); return; }
    if (age < 13) {
      alert("Participant is not eligible to register for the event.");
    } else if (age >= 13 && age <= 17) {
      alert("Participant must be accompanied by a parent or guardian.");
    } else if (age >= 18 && age <= 40) {
      alert("Participant is eligible to participate in all event activities.");
    } else if (age >= 41 && age <= 60) {
      alert("Participant is eligible to participate but is advised to choose suitable activities.");
    } else if (age > 60) {
      alert("Participant is welcome to join the event but is advised to participate in light activities only.");
    }
  });
});