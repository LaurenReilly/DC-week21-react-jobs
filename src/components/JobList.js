import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class JobList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jobs: []
        }
    }

    async componentDidMount() {
        let response = await axios.get('/api/jobs');
        this.setState({
            jobs: response.data
        })
    }
 
    render() {
        let jobs = this.state.jobs;
        console.log(jobs)
        return <div>
                {
                    jobs.map((job, i) =>(
                        <div key={i}>
                            <Link to={`/${job.id}`}>{job.title}</Link>
                        </div>
                    ))
                }
            </div>
    }
}

export default JobList;