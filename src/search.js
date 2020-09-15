import React,{ Component } from 'react';




class Search extends Component{


    state={artistQuery:""}


    updateArtistQuery= event =>{
        this.setState({ artistQuery: event.target.value });
      }


      handleKeyPress=event=>{
        if(event.key==="Enter"){
          this.searchArtist();
        }
      }

      searchArtist=()=>{
          this.props.searchArtist(this.state.artistQuery);
      }
    
    

    render(){
        return(
            <div>
 <input placeholder='search for an artist' style={{marginLeft:"500px",height:"24px",width:"260px"}}  
        onChange={this.updateArtistQuery}
        onKeyPress={this.handleKeyPress}
      />
      <button  onClick={this.searchArtist}  style={{height:"30px"}}>search</button>


            </div>
        )
    }
}



export default Search;