import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllJobs } from '../actions';
import Job from './Job';

export class Dashboard extends Component {
  componentDidMount() {
    this.props.getAllJobs();
  }

  render() {
    return (
      <div className='dashboardContainer'>
        <div className='marketMetricsContainer'>
          <h2>Market Metrics</h2>
        </div>
        <div className='jobsContainer'>
          <h2>Jobs</h2>
          {this.props.jobs &&
            this.props.jobs.map(job => <Job job={job} key={job.id} />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  jobs: state.getAllJobsReducer.jobs,
});

export default connect(mapStateToProps, { getAllJobs })(Dashboard);
