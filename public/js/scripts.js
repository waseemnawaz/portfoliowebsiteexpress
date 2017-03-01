
function initMap() {
  var myLatLng = {lat: 49.6189887, lng: 6.046929};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
}
$(document).ready(function(){
  // your code goes here
  //smooth scrolling
  var $root = $('html, body');
  $('.navbar-nav a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
       scrollTop: $(href).offset().top
    }, 500, function () {
       window.location.hash = href;
   	});
    return false;
   });
  // Stellar
  $.stellar();
  //torus
      //$("#links a").tosrus();
      $("#links a").each(
        function()
        {
          $(this).tosrus({
            buttons : false
          });
        }
      );
      //$("#liinks a").tosrus();
      $("#liinks a").each(
        function()
        {
          $(this).tosrus({
            buttons : false
          });
        }
      );
});