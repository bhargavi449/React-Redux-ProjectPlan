import React, { Component } from 'react';
import ProjectList from '../projects/ProjectList';
import Notifications from './Notifications';
import { connect } from 'react-redux';

class Dashboard extends Component {
    render() {
        //console.log(this.props);
        const { projects } = this.props;
        return (
            <div className="dashboard container">
            <div className="row">
            <div className="col s12 m6">
            <ProjectList projects={projects}/>
            </div>
            <div className="col s12 m5">
            <Notifications />
            </div>
            </div>
            </div>

        )
    }
}
//map our state from the store to the props in this component.
const mapStateToProps = (state) => {
     return {
         projects: state.project.projects
     }
}

export default connect(mapStateToProps)(Dashboard);