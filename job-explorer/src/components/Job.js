import React, { Component } from 'react'

export class Job extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h3>{this.props.job.company}</h3>
            </div>
        )
    }
}

export default Job
