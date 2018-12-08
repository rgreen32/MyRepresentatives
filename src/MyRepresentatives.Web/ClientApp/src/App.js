import React, { Component } from 'react';
import DisplayRepInfo from './DisplayRepInfo';
import 'tachyons'

export default class App extends Component {
  constructor(props){
      super(props);
      this.state ={info:[-1], address:""}
  }

  getRepInfo = (event) =>{
      var params = {address:this.state.address}
      var url = new URL("https://localhost:5001/api/Data/Representatives")

      url.search = new URLSearchParams(params)

      fetch(url,{headers:{
          'Content-Type': 'application/json'
      }}).then(data=>data.json())
      .then(response =>this.setState({info:response}))

      event.preventDefault();
      event.target.reset();
  }
  updateAddress = (event) =>{
      this.setState({address: event.target.value})
  }

  render(){
      if(this.state.info[0] === -1){
        return(
          
            <div align="center" class="">
              <div id="text"><p>Welcome to MyRepresentatives! 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                  </div>
                <form id="input" onSubmit={this.getRepInfo}>
                    <input type="text" placeholder="address" name="address" onChange={this.updateAddress}></input>
                </form>
                
                
                
            </div>
        )

      }else{
          return(<div><DisplayRepInfo officialInfo={this.state.info}/></div>)
      }

  }
}
