import React, {Component} from 'react'
import 'tachyons';
// import 'bootstrap';


class DisplayRepInfo extends Component{
    render(){
        if(this.props.officialInfo[0] !== -1){
        
        
         var htmlBlocks = this.props.officialInfo.officials.map(
             official =>{
                 let img;
                 if(official.photoUrl=== undefined){
                    img = "no-image.png"
                 }else{
                     console.log(img)
                     img = official.photoUrl
                 }
                 
                 return(
                     
                     <div class="tc">
                         <img class="h5 w5"src={img}></img>
                         <h1 class="">{official.name}</h1>
                         <h3>Party: {official.party}</h3>
                         <h3>Phone Number: {official.phones}</h3>
                         <a href={official.urls}>{official.urls}</a>
                     </div>
                 )
             }
         )
         return(
             <div>{htmlBlocks}</div>
        )
         }else{
             return(<h1></h1>)
         }
        
    }

}

export default DisplayRepInfo;