import React from 'react';
import { connect } from 'react-redux'

import './style.css';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

import { NavLink } from 'react-router-dom'


class Dashboard extends React.PureComponent {
    render() {
        return (
            <div>
                <Card className="card">
                    <CardContent>
                        <h2>Welcome User</h2>
                    </CardContent>
                        <NavLink to="/profile"> <Button >Profile</Button></NavLink>
                        <Tooltip title="More content to be added soon..."><Button >Know More</Button></Tooltip>
                        <Button onClick={this.props.Logout}>Logout</Button>
                    <br /><br />
                </Card>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        authorized: state
    }
}
const mapDispatchToProps = dispatch => {
    return {
        Logout: () => dispatch({
            type: 'LOGOUT'
        })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)