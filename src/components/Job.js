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
        console.log(response.data);
        this.setState({
            job: response.data
        })
    }

    render() {
        return (
            <div>
                <div>
                    <img src={this.state.job.company_logo} alt="company logo"></img>
                    <h2>{this.state.job.company}</h2>
                </div>
                <p>{this.state.job.title}</p>
                <a href={this.state.job.company_url} target="blank">{this.state.job.company_url}</a>
                {this.state.job.description}
            </div>
        )
    }
}

export default withRouter(Job);

// company: 
// company_logo: 
// company_url: 
// created_at: 
// description: 
// how_to_apply: 
// location:
// title:
// type:
// url: