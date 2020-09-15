import React from "react";






const Artist =({artist}) => {

    if (!artist) return null;

    const {images,name,followers,genres}=artist;

    return(


        <div style={{marginLeft:"590px",marginTop:"50px",display:"flexInline"}}>


        <h3 style={{marginLeft:"40px"}}>{name}</h3>
        <p  style={{marginLeft:"40px"}}>{followers.total} followers</p>
        <p style={{marginLeft:"40px"}}>{genres.join(',')}</p>
        <img src={images[0] && images[0].url} alt="artist-profile"
         style={{height:"150px",width:"150px",borderRadius:"75px",marginLeft:"-120px",marginTop:"-400px",objectFit:"cover"}}/>




        </div>
    )
}


export default Artist;