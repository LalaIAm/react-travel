import {
  CREATE_TRIP,
  DELETE_ALL,
  DELETE_TRIP,
  UPDATE_TRIP,
  LIST_TRIPS,
  GET_TRIP_BY_ID,
} from '../actions/trip';

export const trips = (state = {}, action) => {
    switch (action.type) {
        case LIST_TRIPS:
            return {
                ...state,
                ...action.trips
            }
        case CREATE_TRIP:
            const { trip } = action;
            return {
                ...state,
                [trip.location]: trip
            }
        case DELETE_TRIP:
            return Object.keys(state).reduce((newState, key) => {
                if (key !== action.location) {
                    return {
                        ...newState,
                        [key]: state[key]
                    }
                }
                return newState;
            }, {})
        default:
            return state;
    }
};
