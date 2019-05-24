import React,{Component} from 'react';
import '../css/homePage.css';
const containerStyle={
    textAlign:'center'
}
const titleStyle={
    textAlign:'center',
    marginTop:'50px',
    marginBottom:'20px'
}
const titleFontStyle={
    borderLeft:'5px solid #68A691',
    borderRight:'5px solid #68A691',
    fontSize:'32px',
    backgroundColor:'#BFD3C1'
}
const categoryContainerStyle={
    border:'2px solid gray',
    borderStyle:'outset',
    textAlign:'center',
    marginLeft:'1px',
    backgroundColor:'#BFD3C1',
    borderRadius:'10px',
}
const categoryStyle={
    fontSize:'20px',
    marginBottom:'6px'
}
const currentCategoryStyle=Object.assign({},categoryStyle,{
    backgroundColor:'#68A691',
    borderRadius: '5px',
    color:'#fff',
})
const vocabBoardFrame={
    border:'2px solid gray',
    borderStyle:'outset',
    marginTop:'50px',
    height:'300px',
    width:'80%',
    backgroundColor:'#BFD3C1',
    borderRadius: '10px',
    padding:'10px',
}
const controlBoard={
    border:'2px solid gray',
    borderStyle:'outset',
    marginTop:'50px',
    height:'300px',
    width:'80%',
    backgroundColor:'#BFD3C1',
    borderRadius: '10px',
    paddingTop:'50px',
    paddingBottom:'50px'
}
const controlButtonStyle={
    backgroundColor:'#FFE5D4',
    fontSize:'40px',
    marginBottom:'60px',
    borderRadius:'8px'
}

const vocabBoard={
    width:'80%',
    height:'275px',
    textAlign:'center',
    fontSize:'23px',
    overflowWrap:'break-word'
}
const vocabInnerBoard={
    backgroundColor:'#68A691',
    height:'275px',
    color:'#fff',
    borderRadius:'10px',
    padding:'100px 0'
}
const vocabBoardMiddle={
    width:'80%',
    height:'300px',
    lineHeight:'300px'
}

class Homepage extends Component {
    constructor(props){
        super(props);
        this.state={
            currentCategory: "all",
            currentLanguage:"c",
            wordPicked:{e:'',c:'Click "Chinese" or "English" to generate a random word'},
            showAnswer:false,
        }
    }
    handleClickCategory = (category)=>{
        this.setState({
            currentCategory:category
        })
    }
    handleControl = (language,currentContent) =>{
        this.setState({currentLanguage:language,wordPicked:this.wordPicker(currentContent),showAnswer:false});
    }
    wordPicker = (currentContent)=>{
        const max = currentContent.length;
        const index = Math.floor(Math.random() * Math.floor(max));
        return currentContent[index];
    }
    getTheOther=(language)=>{
        if(language==='e'){
            return 'c'
        }else{
            return 'e'
        }
    }
    toggleShowAnswer=()=>{
        this.setState({
            showAnswer:!this.state.showAnswer
        })
    }
    render(){
        const vocabs = this.props.vocabs;
        let currentContent;
        const categoryList = vocabs.map((vocab,index)=>{
            if(vocab.name === this.state.currentCategory){
                currentContent = vocab.content;
            }
            return(vocab.name);
        });
        console.log(this.state.wordPicked)
        console.log(this.state.wordPicked[this.state.currentLanguage])
        return(
            <div className='container' style={containerStyle}>
                <div className='row' style={containerStyle}>
                    <div className='col-12' style={titleStyle}><span style={titleFontStyle}>Welcome to Mantuo Vocab System</span></div>
                    <div className='col-12 row' style={categoryContainerStyle}>
                        <div className='col-12 category' onClick={()=>this.handleClickCategory('all')}
                        style={this.state.currentCategory==='all'?currentCategoryStyle:categoryStyle}>all</div>
                        {categoryList.map((category,index)=>{
                            if(category!=='all'){
                                return(
                                    <div className='col-4 category' key={index} onClick={()=>this.handleClickCategory(category)}
                                        style={this.state.currentCategory===category?currentCategoryStyle:categoryStyle}>
                                    {category}
                                    </div>)
                            }
                        })}
                    </div>
                    <div className='col-12 col-md-3' style={controlBoard}>
                        <div>
                            <button className='controlButton' onClick={()=>{this.handleControl('c',currentContent)}} style={controlButtonStyle}>Chinese</button>
                        </div>
                        <div>
                            <button className='controlButton' onClick={()=>{this.handleControl('e',currentContent)}} style={controlButtonStyle}>English</button>
                        </div>
                    </div>
                    <div className='col-md-1'></div>
                    <div className='col-12 col-md-8' style={vocabBoardFrame}>
                        <div className='row'>
                            <div className='col-5' style={vocabBoard}>
                                <div/>
                                <div style={vocabInnerBoard}>
                                    {this.state.wordPicked[this.state.currentLanguage]}
                                </div>
                            </div>
                            <div className='col-2' style={vocabBoardMiddle}>
                                <i className="fas fa-redo fa-2x refresh" style={{color:'#68A691'}} onClick={()=>this.handleControl(this.state.currentLanguage,currentContent)}></i>
                            </div>
                            <div className='col-5' onClick={this.toggleShowAnswer} style={vocabBoard}>
                                <div/>
                                <div style={vocabInnerBoard}>
                                {this.state.showAnswer?this.state.wordPicked[this.getTheOther(this.state.currentLanguage)]:
                                                       <button className='btn btn-secondary'style={{height:'100px'}}>Reveal the answer</button>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Homepage;