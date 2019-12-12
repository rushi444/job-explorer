import React, { Component } from 'react';

class Job extends Component {
  rawMarkup() {
    let content = this.props.job.description;
    return { __html: content };
  }

  routeToApply = () => {
    window.location.href = this.props.job.url;
  };
  render() {
    const dateArray = this.props.job.created_at.split(' ');
    return (
      <div className='individualJob'>
        <div className='jobTitleAndLocation'>
          <div className='title'>
            <h3>{this.props.job.title}</h3>
          </div>
          <div className='location'>
            <h4>{this.props.job.location}</h4>
          </div>
        </div>
        <div className='jobSplit'>
          <div className='companyAndType'>
            <h5>{this.props.job.company}</h5>
            <h5>{this.props.job.type}</h5>
            <h5>Posted On: {`${dateArray[1]} ${dateArray[2]}`}</h5>
            <button className='searchSubmit' onClick={this.routeToApply}>
              Apply
            </button>
          </div>
          <div className='dangerousDescription'>
            <p
              className='dangerous'
              dangerouslySetInnerHTML={this.rawMarkup()}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Job;
