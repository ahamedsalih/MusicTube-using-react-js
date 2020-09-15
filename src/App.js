import React,{ Component } from 'react';
import Artist from "./artist";

import Search from "./search";

import Tracks from "./tracks";




const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com';


class App extends Component {

  state={artist:null,tracks:[]};


componentDidMount=()=>{
  this.searchArtist("anirudh");
}


  

  searchArtist = (artistQuery) =>{

    fetch(`${API_ADDRESS}/artist/${artistQuery}`)
    .then(response => response.json())
    .then(json => {
      if(json.artists.total > 0){
        const artist=json.artists.items[0];
        this.setState({artist});

        fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
        .then(response => response.json())
        .then(json => this.setState({tracks:json.tracks}))
        .catch(error=>alert(error.message));

      }
    }).catch(error=>alert(error.message));
    
  }

 
  render(){
    
    return(
      <div   style={{marginTop:"50px",width:"1200px",height:"700px"}}>
      <h2 style={{color:"blue",marginLeft:"560px"}} >MUSIC PREVIEW</h2>

      <Search searchArtist={this.searchArtist}/>
     

      
      <Artist artist={this.state.artist}/>
      <h3 style={{marginLeft:"575px",color:"blue"}}>TOP TRACKS</h3>

      
      
      <Tracks  tracks={this.state.tracks}/>

      <h4  style={{marginLeft:"590px",color:"blue",marginTop:"400px"}}>ADMIN @ ahamed salih</h4>
      

    

      </div>

    
      


      


     

      



     

    )
  }
}


export default App;