export interface TransportData {
  acknowledgments: string;
  member: TransportDataMember[];
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