import React from "react";


import './style.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export default class Profile extends React.Component{
    render(){
        return(
            <div> 
                 <Card className="card">
                    <CardContent>
                        <h2>Hey, You are Offline !!</h2>
                    </CardContent>
                    
                </Card>

            </div>
        )
    }
}