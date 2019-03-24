import React, { Component } from 'react';
import DisplayRepInfo from './DisplayRepInfo';
import { BrowserRouter, Route } from "react-router-dom"

import 'tachyons'

export default class PopUp extends Component {
    constructor(props) {
        super(props);
        this.state = { info: [-1], street_address: "", city: "", state: "", zipcode: "" }
    }

    getRepInfo = (event) => {
        var params = { address: this.state.street_address + " " + this.state.city + ", " + this.state.state + " " + this.state.zipcode }
        var url = new URL(window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '') + '/api/Data/Representatives');

        url.search = new URLSearchParams(params)

        fetch(url, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(data => data.json())
            .then(response => this.setState({ info: response }))

        event.preventDefault();
        event.target.reset();
    }

    updateAddress = (event) => {
        var field = event.target.name;
        var value = event.target.value;
        switch(field){
            case "street_address":
                this.setState({ street_address: value })
                break;

            case "city":
                this.setState({city: value})
                break;

            case "state":
                this.setState({state: value})
                break;

            case "zipcode":
                this.setState({zipcode: value})
                break; 
        }
        
    }

    render() {
        if (this.state.info[0] === -1) {
            return (
                <div class="container">
                    <h1>Publishers & Developers <br />
                        Enable your users to find and give feedback to in just a few easy steps!</h1>

                    <ul>
                        <li>Step 1: Insert a MyRepresentatives button on your site.</li>
                        <li>Step 2: Link to (MyRepresentatives URL).</li>
                        <li>Step 3: Celebrate because you're done!</li>
                    </ul>
                    <div>Below are sample buttons you can embed on your site.</div>

                    <div>
                        <img src="assets/MyReps button.jpeg" />
                        <img src="assets/MyReps square button.jpeg" class="myRepsSquare"/>
                        <p>Or enter your address below to find and give feedback to your elected officials</p>
                        <form id="input" onSubmit={this.getRepInfo}>
                            <input type="text" placeholder=" Street address" name="street_address" onChange={this.updateAddress}></input>
                            <input type="text" placeholder="City" name="city" onChange={this.updateAddress}></input>
                            <select name="state" onSelect={this.updateAddress}>	
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District Of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                                </select>
                            <input type="text" placeholder="Zipcode" name="zipcode" onChange={this.updateAddress}></input>
                            <br/>
                            

                            <input type="submit" value="Submit" class="submitButton" src="assets/SubmitButton.png"></input>
                        </form>
                    </div>
                </div>

            )
        } else {
            return (<div><DisplayRepInfo officialInfo={this.state.info} /></div>)
        }
    }
}
