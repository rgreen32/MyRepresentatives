import React, { Component } from 'react';
import DisplayRepInfo from './DisplayRepInfo';
import 'tachyons'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { info: [-1], address: "" }
    }

    getRepInfo = (event) => {
        var params = { address: this.state.address }
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
        this.setState({ address: event.target.value })
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
                            <input type="text" placeholder="address" name="address" onChange={this.updateAddress}></input>
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
