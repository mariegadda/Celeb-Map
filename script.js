  function initMap() {

        var uluru = {lat: 34.492907, lng: -41.408286};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 3,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }

   