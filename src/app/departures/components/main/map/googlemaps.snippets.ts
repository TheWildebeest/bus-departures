export const busMapStyles: google.maps.MapTypeStyle[] = [
  { elementType: 'geometry', stylers: [{ color: '#212121' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#212121' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#757575' }] },
  { elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [{ color: '#757575' }]
  },
  {
    featureType: 'administrative.country',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#9e9e9e' }]
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#bdbdbd' }]
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'all',
    stylers: [{ visibility: 'off' }]
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#d59563' }]
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{ color: '#212121' }]
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#6b9a76' }]
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: '#38414e' }]
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#664200' }]
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#9ca5b3' }]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{ color: '#746855' }]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#1f2835' }]
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#f3d19c' }]
  },
  {
    featureType: 'road.local',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#664200' }]
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#996300' }]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#ffa500' }]
  },

  {
    featureType: 'road.local',
    elementType: 'geometry.fill',
    stylers: [{ color: '#666666' }]
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry.fill',
    stylers: [{ color: '#414b55' }]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [{ color: '#212b35' }]
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#17263c' }]
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#515c6d' }]
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{ color: '#17263c' }]
  },
  {
    featureType: "landscape",
    elementType: "labels",
    stylers: [{ visibility: "off" }]
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{ color: '#2f3948' }]
  },
  {
    featureType: 'transit.station',
    elementType: 'labels',
    stylers: [{ visibility: 'on' }]
  },
  {
    featureType: 'transit.station.bus',
    elementType: 'labels.icon',
    stylers: [
      { visibility: 'on' },
      { color: '#dc2521' }]
  },
  {
    featureType: 'landscape.man_made',
    elementType: 'geometry.stroke',
    stylers: [
      { visibility: 'on' },
      { color: '#404040' },
    ]
  }
]

export const busMarkerOptions = (event: google.maps.MouseEvent, mapObject: google.maps.Map): google.maps.MarkerOptions => {
  return {
    map: mapObject,
    position: event.latLng,
    animation: google.maps.Animation.DROP,
    icon: {
      url: 'assets/images/logo.png',
      size: new google.maps.Size(25, 25),
      scaledSize: new google.maps.Size(25, 25)
    }
  }
}

export const busMapOptions: google.maps.MapOptions = {
  center: {
    lat: 51.5124,
    lng: -0.0902
  },
  clickableIcons: false,
  mapTypeControl: false,
  mapTypeId: 'roadmap',
  streetViewControl: false,
  styles: busMapStyles,
  zoom: 16,
  backgroundColor: '#212121'
} // this should be an output from here, fired in parent

const mapsSearchLocationBounds: google.maps.LatLngBounds = new google.maps.LatLngBounds(
  { lat: 51.27693, lng: -0.55852 },
  { lat: 51.74019, lng: 0.28605 }
)

// export const mapsSearchLocationBounds: google.maps.LatLngBounds = new google.maps.LatLngBounds(
//   new google.maps.LatLng(51.27693, -0.55852),
//   new google.maps.LatLng(51.74019, 0.28605)
// )
export const mapSearchBoundsOptions = { bounds: mapsSearchLocationBounds }