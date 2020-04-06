import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const Appoints = new Mongo.Collection('Appoints');

/** Define a schema to specify the structure of each document in the collection. */
const AppointsSchema = new SimpleSchema({
  firstName: String,
  lastName: String,
  address: String,
  image: String,
  description: String,
  owner: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Appoints.attachSchema(AppointsSchema);

/** Make the collection and schema available to other code. */
export { Appoints, AppointsSchema };
