import React, {Component} from 'react'
import Song from './Song'

class SongList extends Component{

    render(){
        return(
            <ol>
            <Song/>
            </ol>
        )
    }
}

export default SongList