export interface moddisModel {
  "mote_id": any,
  "location": string,
  "platform": string,
  "pir"?: number,
  "magnetic"?: number,
  "acoustic"?: number,
  "temperature"?: number,
  "humidity"?: number,
  "visibleLight"?: number,
  "infraredLight"?: number,
  "dateFormat"?: Date
}
