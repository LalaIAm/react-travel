import * as db from '../utils/db';

export const CREATE_TRIP = 'CREATE_TRIP';
export const LIST_TRIPS = 'LIST_TRIPS';
export const UPDATE_TRIP = 'UPDATE_TRIP';
export const DELETE_TRIP = 'DELETE_TRIP';
export const GET_TRIP_BY_ID = 'GET_TRIP_BY_ID';
export const DELETE_ALL = 'DELETE_ALL'


const createTripSuccess = (trip) => {
    return {
        type: CREATE_TRIP,
        trip
    }
}

export const createTrip = (data) => {
    return async (dispatch) => {
        const trip = await db.createTrip(data);
        dispatch(createTripSuccess(trip));
    }
}

const listTripSuccess = (trips) => {
    return {
        type: LIST_TRIPS,
        trips
    }
}

export const listTrips = () => {
    return (dispatch) => {
        db.getAllTrips().then((trips) => {
            dispatch(listTripSuccess(trips));
         })
    }
}

const updateTripSuccess = (trip) => {
    return {
        type: UPDATE_TRIP,
        trip
    }
}

export const updateTrip = (tripId, data) => {
    return async (dispatch) => {
        const trip = await db.updateTrip(tripId, data);
        dispatch(updateTripSuccess(trip));
    }
}

const deleteTripByIdSuccess = (id) => {
    return {
        type: DELETE_TRIP,
        id
    }
}

export const deleteTripById = (tripId) => {
    return async (dispatch) => {
        const id = await db.deleteTrip(tripId);
        return dispatch(deleteTripByIdSuccess(id));
    }
}

const getTripByIdSuccess = (trip) => {
    return {
        type: GET_TRIP_BY_ID,
        trip
    }
}

export const getTripById = (id) => {
    return async (dispatch) => {
        const trip = await db.getTripById(id);
        return dispatch(getTripByIdSuccess(trip));
    }
}

const clearTripsSuccess = () => {
    return {
        type: DELETE_ALL
    }
}

export const clearTrips = async () => {
    return async (dispatch) => {
         await db.removeAllTrips();
        dispatch(clearTripsSuccess());
    }
}