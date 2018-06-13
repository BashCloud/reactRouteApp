import React from 'react';
import { connect } from 'react-redux'

import './style.css';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

import { Link } from 'react-router-dom'


class Dashboard extends React.PureComponent {
    render() {
        return (
            <div>
                <Card className="card">
                    <CardContent>
                        <h2>Welcome User</h2>
                    </CardContent>
                    <Link to="/profile" className="noLink"> <Button >Profile</Button></Link>
                    <Tooltip title="More content to be added soon...">
                        <Link to="/about" className="noLink"><Button >Know More</Button></Link>
                    </Tooltip>
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