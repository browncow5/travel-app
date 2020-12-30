// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Place } = initSchema(schema);

export {
  Place
};