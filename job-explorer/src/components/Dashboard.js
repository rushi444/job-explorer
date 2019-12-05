import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllJobs, searchJobs, changePage } from '../actions';
import Job from './Job';
import ClipLoader from 'react-spinners/ClipLoader';

export class Dashboard extends Component {
  state = {
    text: '',
    searchText: '',
    page: 1,
  };
  componentDidMount() {
    this.props.getAllJobs();
  }

  onSubmit = e => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.getAllJobs()
    } else {
      this.props.searchJobs(this.state.text);
      this.setState({ text: '' });
      this.setState({ searchText: this.state.text });
    }
  };

  onChange = e => {
    this.setState({ text: e.target.value });
  };

  pageSubmitNext = e => {
    e.preventDefault();
    this.setState({ page: this.state.page + 1 });
    this.props.changePage(this.state.page, 'add', this.state.searchText);
  };
  pageSubmitPrevious = e => {
    e.preventDefault();
    this.setState({ page: this.state.page - 1 });
    changePage(this.state.page, this.state.searchText);
  };

  render() {
    if (this.props.isFetching === true) {
      return <ClipLoader />;
    } else {
    return (
      <div className='dashboardContainer'>
        <div className='jobsContainer'>
          <form onSubmit={this.onSubmit}>
            <input className='searchBar'
              type='text'
              name='text'
              placeholder='search here...'
              value={this.state.text}
              onChange={this.onChange}
            />
            <button className='searchSubmit' onClick={this.onSubmit}>Submit</button>
          </form>
          {this.props.jobs &&
            this.props.jobs.map(job => <Job job={job} key={job.id} />)}
          <div className='pathButtons'>
            <button className='prevAndNext' onClick={this.pageSubmitPrevious}>Previous</button>
            
            <button className='prevAndNext' onClick={this.pageSubmitNext}>Next</button>
          </div>
        </div>
      </div>
    )};
  }
}

const mapStateToProps = state => ({
  jobs: state.getAllJobsReducer.jobs,
  isFetching: state.getAllJobsReducer.fetchingJobs,
});

export default connect(mapStateToProps, { getAllJobs, searchJobs, changePage })(
  Dashboard,
);
