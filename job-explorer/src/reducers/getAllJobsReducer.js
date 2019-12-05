import {
  GET_ALL_JOBS_FETCHING,
  GET_ALL_JOBS_SUCCESS,
  GET_ALL_JOBS_FAILURE,
} from '../actions';

const initialState = {
  jobs: null,
  fetchingJobs: false,
  fetchingJobsError: null,
};

const getAllJobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_JOBS_FETCHING:
      return {
        ...state,
        fetchingJobs: true,
      };
    case GET_ALL_JOBS_SUCCESS:
      return {
        ...state,
        jobs: action.payload,
        fetchingJobs: false,
      };
    case GET_ALL_JOBS_FAILURE:
      return {
        ...state,
        fetchingJobs: false,
        fetchingJobsError: action.payload,
      };
    default:
      return state;
  }
};

export default getAllJobsReducer;
