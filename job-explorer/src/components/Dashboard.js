import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllJobs, searchJobs } from '../actions';
import Job from './Job';

export class Dashboard extends Component {
  state = {
    text: '',
  };
  componentDidMount() {
    this.props.getAllJobs();
  }

  onSubmit = e => {
    e.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("Please enter something", "light");
    } else {
      this.props.searchJobs(this.state.text);
      this.setState({ text: "" });
    }
  };

  onChange = e => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <div className='dashboardContainer'>
        <div className='jobsContainer'>
          <form onSubmit={this.onSubmit}>
            <input
              type='text'
              name='text'
              placeholder='search here...'
              value={this.state.text}
              onChange={this.onChange}
            />
            <button onClick={this.onSubmit}>Submit</button>
          </form>
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

export default connect(mapStateToProps, { getAllJobs, searchJobs })(Dashboard);
