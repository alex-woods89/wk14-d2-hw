import React, {Component} from 'react'
import SongList from '../Components/SongList'

class SongBox extends Component{

    constructor(props){
        super(props)
        this.state = {
            songs: []
        }
    }

    componentDidMount(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(songs => this.setState({ songs: songs }))
        .catch(err => console.error(err))
    }

    render(){
        return(
            <div>
            <h2>Top 20 Chart</h2>
            <SongList/>
            </div>
        )
    }
}

export default SongBox