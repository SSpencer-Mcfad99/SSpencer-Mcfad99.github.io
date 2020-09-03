$(document).ready(function() {
  $('.hamburger').click(function(event) {
     $('.nav-links').toggleClass('displayed');
   });

   $('.mail').click(function(event) {
     window.location.href = "mailto:sam.mcfadden2@gmail.com";
   })

   $('.linkedin').click(function(event) {
      window.location.href = "https://www.linkedin.com/in/sam-spencer-mcfadden-a57a42152/";
   })
});
