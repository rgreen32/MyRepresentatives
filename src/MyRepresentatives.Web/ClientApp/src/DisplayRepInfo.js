import React, {Component} from 'react'
import 'tachyons';
// import 'bootstrap';


class DisplayRepInfo extends Component{
    render(){
        if(this.props.officialInfo[0] !== -1){
        

            var allOfficials = this.props.officialInfo.officials


            var htmlBlocks = Object.keys(this.props.officialInfo.divisions).map(
                key =>{
                    console.log(key)
                    var officialKeyArray = this.props.officialInfo.divisions[key].officeIndices
                    console.log(officialKeyArray);

                    
                    if(officialKeyArray !== undefined){
                       
                    officialKeyArray.forEach(officialKey => {
                        var official = allOfficials[officialKey]
                        //console.log(official)
                        return(
                        
                            <div class="tc">
                                
                                <h1 class="">{official.name}</h1>
                                <h3>District: {this.props.officialInfo.divisions[key].name}</h3>
                                <h3>Party: {official.party}</h3>
                                <h3>Phone Number: {official.phones}</h3>
                                <a href={official.urls}>{official.urls}</a>
                            </div>
                        )
                    });
                    console.log(blocks)
                }else{
                    return <h1>Not here</h1>
                }
                    
                    
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