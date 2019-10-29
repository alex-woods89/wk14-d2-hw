import React,{Component} from 'react'
import Song from './Song'

class SongList extends Component {
   constructor(props){
       super(props)
   }

   render(){
       const songTitle = this.props.songData.feed.entry["im:collection"]["im:name"].label;
        
     return  <p>{songTitle}</p>
   }

}
export default SongList