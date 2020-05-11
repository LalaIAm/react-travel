import { trips } from '../stitch';

export const createTrip = async (data) => {
    try {
        await trips.insertOne(data).then((result) => {
             console.log('New Trip added!')
         })
    } catch (error){
        console.log('error creating trip: ', error);
    }
}

export const deleteTrip = async id => {
    try {
        await trips.deleteOne({ _id: id });
        console.log('trip successfully deleted')
    } catch (error) {
        console.log('error deleting trip: ', error);
    }
}

export const removeAllTrips = async () => {
    try {
        await trips.deleteMany({})
    } catch (error) {
        console.log("Error deleting: ", error);
    }
}

export const updateTrip = async (tripId, data) => {
    try {
        const result = await trips.updateOne(
            { _id: tripId },
            { [data]: data },
            { returnNewDocument: true }
        )
        return result;
    } catch (error) {
        console.log('Error updating trip: ', error);
    }
}

export const getAllTrips = async () => {
    try {
        const allTrips = await trips.find({}, { limit: 1000 }).asArray();
        return allTrips;
    } catch (error) {
        console.log('error fetching trips: ', error);
    }
}

export const getTripById = async (id) => {
    try {
        const tripData = await trips.find({ _id: id }).asArray();
        return tripData;
    } catch (error) {
        console.log('Error finding trip: ', error);
    }
}