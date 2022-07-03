/*
 * Required cloud-event fields
 *
 */
export interface RequiredCloudEvent<T> {
  // required, identifies the event
  id: string;
  // required, context the event happened in. {source + id} is unique
  // uuid, urn, dns authority, etc.
  source: string;
  // required, 1.0
  specversion: string;
  // required, the type of the event
  type: string;
  // required, event data
  data: T;
}

/*
 * Optional cloud-event fields
 *
 */
export interface OptionalCloudEvent {
  // optional, IANA media type
  datacontenttype: string;
  // optional, URI for a data-schema
  dataschema: string;
  // optional, additional substructure for `source`
  subject: string;
  // optional, timestamp in RFC 3339 (e.g 2002-10-02T15:00:00Z)
  timestamp: string;
}

/*
 * CloudEvent data
 */
export type CloudEvent<T> = RequiredCloudEvent<T> & Partial<OptionalCloudEvent>;

export interface MoodData {
  rating: 0 | 1 | 2 | 3 | 4 | 5 | 6;
}

export interface EnergyData {
  rating: 0 | 1 | 2 | 3 | 4 | 5 | 6;
}
