function initMap() {
    const myLatlng = { lat: 53.264747, lng: 17.4473908 };
  
    const map = new google.maps.Map(document.getElementById("map")!, {
      zoom: 4,
      center: myLatlng,
    });
  

    let infoWindow = new google.maps.InfoWindow({
      content: "Click the map to get Lat/Lng!",
      position: myLatlng,
    });
  
    infoWindow.open(map);
  

    map.addListener("click", (mapsMouseEvent) => {

      infoWindow.close();
  
 
      infoWindow = new google.maps.InfoWindow({
        position: mapsMouseEvent.latLng,
      });
      infoWindow.setContent(
        JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
      );
      infoWindow.open(map);
    });
  }
  
  declare global {
    interface Window {
      initMap: () => void;
    }
  }
  window.initMap = initMap;