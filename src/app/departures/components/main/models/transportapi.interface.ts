export interface TransportData {
  acknowledgements: string;
  member: TransportDataMember[];
  request_time: string;
  source: string;
}


export interface TransportDataMember {
  accuracy: number;
  atcocode: string;
  description: string;
  latitude: number;
  longitude: number;
  name: string;
  type: string;
}

export interface DeparturesBoardListing {
  service: string;
  destination: string;
  departureTime: string;
}

export interface CustomMarkerOptions {
  icon: CustomIconOptions;
}

export interface CustomIconOptions {
  url: string;
  size: CustomIconSize;
  scaledSize: CustomIconSize;
}

export interface CustomIconSize {
  height: number;
  width: number
}

export interface CustomMapOptions {

  center: google.maps.LatLng | google.maps.LatLngLiteral;
  clickableIcons?: boolean;
  controlSize?: number;
  disableDefaultUI?: boolean;
  disableDoubleClickZoom?: boolean;
  draggable?: boolean;
  fullscreenControl?: boolean;
  fullscreenControlOptions?: google.maps.FullscreenControlOptions;
  mapTypeControl?: boolean,
  mapTypeId: string;
  maxZoom?: number;
  minZoom?: number;
  streetViewControl?: boolean,
  styles?: MapTypeStyle[];
  zoom: number;
  zoomControl?: boolean;
  zoomControlOptions?: google.maps.ZoomControlOptions;
}

interface MapTypeStyle {
  elementType: string;
  featureType?: string;
  stylers?: Object[];
}