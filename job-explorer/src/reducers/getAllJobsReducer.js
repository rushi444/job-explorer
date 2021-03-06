import {
  GET_ALL_JOBS_FETCHING,
  GET_ALL_JOBS_SUCCESS,
  GET_ALL_JOBS_FAILURE,
  SEARCH_JOBS_FETCHING,
  SEARCH_JOBS_SUCCESS,
  SEARCH_JOBS_FAILURE,
  CHANGE_PAGE_FETCHING,
  CHANGE_PAGE_SUCCESS,
  CHANGE_PAGE_FAILURE,
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
    case SEARCH_JOBS_FETCHING:
      return {
        ...state,
        fetchingJobs: true,
      };
    case SEARCH_JOBS_SUCCESS:
      return {
        ...state,
        jobs: action.payload,
        fetchingJobs: false,
      };
    case SEARCH_JOBS_FAILURE:
      return {
        ...state,
        fetchingJobs: false,
        fetchingJobsError: action.payload,
      };
    case CHANGE_PAGE_FETCHING:
      return {
        ...state, 
        fetchingJobs: true,
      };
    case CHANGE_PAGE_SUCCESS:
      return {
        ...state, 
        jobs: action.payload,
        fetchingJobs: false
      };
    case CHANGE_PAGE_FAILURE:
      return {
        ...state,
        fetchingJobsError: action.payload,
        fetchingJobs: false
      };
    default:
      return state;
  }
};

export default getAllJobsReducer;
