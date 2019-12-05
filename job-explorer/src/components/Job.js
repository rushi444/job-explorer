import React, { Component } from 'react';

class Job extends Component {
  rawMarkup() {
    let content = this.props.job.description;
    return { __html: content };
  }
  render() {
    const dateArray = this.props.job.created_at.split(' ');
    console.log(this.props.job.description);
    return (
      <div>
        <div className='jobTitleAndLocation'>
          <div className='title'>
            <h3>{this.props.job.title}</h3>
          </div>
          <div className='location'>
            <h3>{this.props.job.location}</h3>
          </div>
        </div>
        <div>
          <div>
            <h5>{this.props.job.company}</h5>
            <h5>{this.props.job.type}</h5>
            <h5>Posted On: {`${dateArray[1]} ${dateArray[2]}`}</h5>
          </div>
          <div>
            <p dangerouslySetInnerHTML={this.rawMarkup()} />
          </div>
        </div>
      </div>
    );
  }
}

export default Job;
