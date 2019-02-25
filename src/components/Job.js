import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class Job extends Component {
    constructor(props) {
        super(props)
        this.state = {
            job: {}
        }
    }
  
    
    async componentDidMount() {
        let response = await axios.get(`/api/jobs/${this.props.match.params.job}`);
        this.setState({
            job: response.data
        })
    }

    render() {
        return (
            <div>
                {this.state.job.title}
            </div>
        )
    }
}

export default withRouter(Job);