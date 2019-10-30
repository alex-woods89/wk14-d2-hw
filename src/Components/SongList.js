import React,{Component} from 'react'
import Song from './Song'

const SongList = ({songData}) => {
  
    
   return(
    
       <ul>
         {songData.map((song, index) => 
          
          <li key={index}>{song["im:name"].label}: {song["im:artist"].label}
          
          </li>)}
       </ul>
   
   )
}
export default SongList