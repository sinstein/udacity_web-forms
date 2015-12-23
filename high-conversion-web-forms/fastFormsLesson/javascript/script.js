var personalSubmit = document.querySelector('#personal-details-submit');
// personalSubmit.onclick = function () {
//   jQuery('.eql-w').removeClass('active');
//   jQuery('.eql-w')[1].addClass('active');
//   // alert("All of your information was valid, right? I'll just go ahead and assume that it is ;)\n\nThanks for your submission!");
// };

jQuery(document).on('click',personalSubmit, function(event){
  debugger;
  jQuery('.eql-w').removeClass('active');
  jQuery('.eql-w')[1].addClass('active');
  event.preventDefault();
});