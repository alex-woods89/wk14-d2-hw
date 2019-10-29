import React, {Component} from 'react'

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
            <h2>Top 20 Chart</h2>
        )
    }
}

export default SongBox