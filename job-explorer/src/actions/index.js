import axios from 'axios';

export const GET_ALL_JOBS_FETCHING = 'GET_ALL_JOBS_FETCHING';
export const GET_ALL_JOBS_SUCCESS = 'GET_ALL_JOBS_SUCCESS';
export const GET_ALL_JOBS_FAILURE = 'GET_ALL_JOBS_FAILURE';

export const getAllJobs = () => dispatch => {
  dispatch({
    type: GET_ALL_JOBS_FETCHING,
  });
  axios
    .get(
      'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json',
    )
    .then(res => {
      dispatch({
        type: GET_ALL_JOBS_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ALL_JOBS_FAILURE,
        payload: err,
      });
    });
};

export const SEARCH_JOBS_FETCHING = 'SEARCH_JOBS_FETCHING';
export const SEARCH_JOBS_SUCCESS = 'SEARCH_JOBS_SUCCESS';
export const SEARCH_JOBS_FAILURE = 'SEARCH_JOBS_FAILURE';

export const searchJobs = searchParam => dispatch => {
  dispatch({
    type: SEARCH_JOBS_FETCHING,
  });
  axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?search=${searchParam}`,
    )
    .then(res => {
      dispatch({
        type: SEARCH_JOBS_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch({
        type: SEARCH_JOBS_FAILURE,
        payload: err,
      });
    });
};
