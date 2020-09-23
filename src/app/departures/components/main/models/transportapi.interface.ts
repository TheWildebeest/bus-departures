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