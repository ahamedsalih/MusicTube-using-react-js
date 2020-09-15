import React, {Component} from "react";


class Tracks extends Component {


    state={playing:false,audio:null,playingPreviewUrl:null}

    

    playAudio=previewUrl=>()=>{
        const audio=new Audio(previewUrl);
        if(!this.state.playing){
            audio.play();
            this.setState({playing:true,audio,playingPreviewUrl:previewUrl});

        }else{
            this.state.audio.pause();
            if(this.state.playingPreviewUrl===previewUrl){
                this.setState({playing:false});
            }else{
                audio.play();
                this.setState({audio,playingPreviewUrl:previewUrl});
            }
        }
    }


    trackIcon= track=>{


        if(this.state.playing && this.state.playingPreviewUrl===track.preview_url){

            return <span style={{color:"white",marginLeft:"100px",marginTop:"-200px",fontSize:"50px",
            position:"absolute",opacity:"0.8"}}>| |</span>;
            
        }else{

        return <span style={{color:"white",marginLeft:"80px",marginTop:"-240px",fontSize:"90px",
        position:"absolute",opacity:"0.8"}}>&#9654;</span>; 

        }

    }


    render(){


        const {tracks}=this.props;

       
        return(
           

            <div style={{marginTop:"10px",height:"330px",width:"2685px",display:"flex",position:"absolute",backgroundColor:"black"}}>
             {
                tracks.map(track=>{
                const {id,name,album,preview_url}=track;
                return(
                    
                    <div key={id} onClick={this.playAudio(preview_url)} style={{width:"250px",
                    height:"200px",margin:"10px",marginLeft:"8px",cursor:"pointer"}}>


                    <img src={album.images[0].url} alt={'track'} style={{width:"250px",height:"250px"}
                    }/>

                    <p style={{color:"white"}}>{name}</p>
                    <p >{this.trackIcon(track)}</p>
                    
                    </div>
                    
                )
            })}




            </div>
            
        )
    }
}


export default Tracks;