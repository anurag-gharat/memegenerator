import React, {Component} from "react"

class memegenerator extends Component{

constructor(){
    super()
    this.state={
        topText:"",
        bottomText:"",
        randomimg:"http://i.imgflip.com/1bij.jpg",
        allmemes:""
    }
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
}
componentDidMount(){
    fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(response => {
        const {memes} = response.data
        this.setState({ allmemes: memes })
    })
}
handleSubmit(event){
    event.preventDefault()
    const randvalue = Math.floor(Math.random() * this.state.allmemes.length)
    const randimg = this.state.allmemes[randvalue].url
    this.setState({
        randomimg:randimg
    }
    )    
}
handleChange(event){
    const { name,value } =event.target
    this.setState({ [name]: value })
}




render(){
    return(
        <div className="memeholder">
            <form onSubmit={this.handleSubmit}>
                <input 
                type="text" 
                name="topText"
                placeholder="Toptext"
                onChange={this.handleChange}
                value={this.state.topText}
                />
                <input 
                type="text" 
                name="bottomText"
                placeholder="Bottomtext"
                onChange={this.handleChange}
                value={this.state.bottomText}
                />
                <button>Generate</button>
            </form>
            <div className="meme">
                
                <h1 className="top">{this.state.topText}</h1> 
                <img src={this.state.randomimg} height="100" width="100"/>
                <h1 className="bottom">{this.state.bottomText}</h1> 
                                    
            </div>
        </div>
    )
}
}

export default memegenerator