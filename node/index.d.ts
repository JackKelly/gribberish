/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export interface GridShape {
  rows: number
  cols: number
}
export interface LatLng {
  latitude: Float64Array
  longitude: Float64Array
}
export function parseMessagesFromBuffer(buffer: Buffer): unknown[]
export class GribMessage {
  static parseFromBuffer(buffer: Buffer, offset: number): GribMessage
  get varName(): string
  get varAbbrev(): string
  get units(): string
  get forecastDate(): Date
  get referenceDate(): Date
  get proj(): string
  get crs(): string
  get gridShape(): GridShape
  get latlng(): LatLng
  get data(): Float64Array
}
export class GribMessageFactory {
  static fromBuffer(buffer: Buffer): GribMessageFactory
  get availableMessages(): Array<string>
  getMessage(key: string): GribMessage
}
