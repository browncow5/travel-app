import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Place {
  readonly id: string;
  readonly name: string;
  readonly types?: (string | null)[];
  readonly description?: string;
  readonly business_status?: string;
  readonly url?: string;
  readonly website?: string;
  readonly formatted_phone_number?: string;
  readonly rating?: number;
  readonly user_ratings_total?: number;
  constructor(init: ModelInit<Place>);
  static copyOf(source: Place, mutator: (draft: MutableModel<Place>) => MutableModel<Place> | void): Place;
}