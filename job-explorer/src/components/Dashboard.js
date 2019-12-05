import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllJobs } from '../actions';
import Job from './Job';

export class Dashboard extends Component {
  componentDidMount() {
    this.props.getAllJobs();
  }
  render() {
      console.log('dash state',this.state)
    return <div></div>;
  }
}

const mapStateToProps = state => ({
  jobs: state.getAllJobsReducer,
});

export default connect(mapStateToProps, { getAllJobs })(Dashboard);
