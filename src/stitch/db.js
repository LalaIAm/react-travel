import { RemoteMongoClient } from 'mongodb-stitch-browser-sdk';
import { app } from './app';

const mongoClient = app.getServiceClient(
    RemoteMongoClient.factory,
    "mongodb-atlas"
);

const trips = mongoClient.db("travelFar").collection("trips");

export { trips };