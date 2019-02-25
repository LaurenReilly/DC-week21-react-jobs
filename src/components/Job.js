import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class Job extends Component {
    
    async componentDidMount() {
        let response = await axios.get(`/api/jobs/${this.props.match.params.job}`)
        console.log(response);
    }

    render() {
        return (
            <div>
                individual job
            </div>
        )
    }
}

export default withRouter(Job);