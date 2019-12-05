import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllJobs } from '../actions';
import Job from './Job';

export class Dashboard extends Component {
  componentDidMount() {
    this.props.getAllJobs();
  }

 
  render() { 
    return <div>
        <h1>dashboard</h1>
        {this.props.jobs && this.props.jobs.map(job => (
            <Job job={job} key={job.id}/>
        ))}
    </div>;
  }
}

const mapStateToProps = state => ({
  jobs: state.getAllJobsReducer.jobs,
});

export default connect(mapStateToProps, { getAllJobs })(Dashboard);
