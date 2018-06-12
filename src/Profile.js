import React from "react";


import './style.css';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';

export default class Profile extends React.Component{
    render(){
        return(
            <div> 
                 <Card className="card">
                    <CardContent>
                        <h2>Profile Page</h2>
                    </CardContent>
                    
                </Card>

            </div>
        )
    }
}