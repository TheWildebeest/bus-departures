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
  styles?: CustomMapTypeStyle[];
  zoom: number;
  zoomControl?: boolean;
  zoomControlOptions?: google.maps.ZoomControlOptions;
}

export interface CustomMapTypeStyle {
  elementType: string;
  featureType?: string;
  stylers: Object[];
}