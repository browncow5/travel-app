import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Places {
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
  constructor(init: ModelInit<Places>);
  static copyOf(source: Places, mutator: (draft: MutableModel<Places>) => MutableModel<Places> | void): Places;
}