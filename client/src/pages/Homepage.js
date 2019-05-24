import React,{Component} from 'react';
import '../css/homePage.css';
const containerStyle={
    textAlign:'center'
}
const titleStyle={
    borderLeft:'5px solid #68A691',
    borderRight:'5px solid #68A691',
    textAlign:'center',
    marginTop:'15px',
    marginBottom:'20px',
    backgroundColor:'#BFD3C1'
}
const titleFontStyle={
    fontSize:'30px'
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
    fontSize:'17px',
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
    marginTop:'20px',
    height:'320px',
    width:'80%',
    backgroundColor:'#BFD3C1',
    borderRadius: '10px',
    padding:'20px',
}
// const controlBoard={
//     border:'2px solid gray',
//     borderStyle:'outset',
//     marginTop:'50px',
//     height:'300px',
//     width:'80%',
//     backgroundColor:'#BFD3C1',
//     borderRadius: '10px',
//     paddingTop:'50px',
//     paddingBottom:'50px'
// }
const controlButtonStyle={
    backgroundColor:'#FFE5D4',
    fontSize:'15px',
    borderRadius:'8px'
}

const vocabBoard={
    width:'80%',
    height:'110px',
    textAlign:'center',
    fontSize:'20px',
    overflowWrap:'break-word'
}
const vocabInnerBoard={
    position:'absolute',
    height:'100%',
    width:'100%',
    left:'-1px',
    backgroundColor:'#68A691',
    color:'#fff',
    borderRadius:'10px',
    position: 'absolute',
    verticalAlign: 'middle',
    textAlign: 'center',
    padding: '1.5em 0 1em 0'
}
const vocabBoardMiddle={
    width:'80%',
    height:'20px',
    lineHeight:'20px',
    margin:'20px 0'
}
const centerTextBoard={
    position: 'absolute',
    width: '90%',
    height: '100%',
    verticalAlign: 'middle',
    textAlign: 'center',
    padding: '1.6em 0 0 0',
    fontSize:'20px'
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
    // handleControl = (language,currentContent) =>{
    //     if(this.state.needReset){
    //         this.setState({needReset:false,wordPicked:""})
    //     }else{
    //         this.setState({currentLanguage:language,needReset:true,wordPicked:this.wordPicker(currentContent),showAnswer:false});
    //     }
    // }
    handleControl = (language,currentContent) =>{
        this.setState({wordPicked:""},()=>{
            this.setState({currentLanguage:language,wordPicked:this.wordPicker(currentContent),showAnswer:false});
        })
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

        // console.log(this.state.wordPicked[this.state.currentLanguage]);

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

                    <div className='col-12' style={vocabBoardFrame}>
                        <div className='row'>
                            <div className='col-12' style={vocabBoard}>
                                <div style={vocabInnerBoard}>
                                {/* <div style={centerTextBoard}> */}
                                {this.state.wordPicked[this.state.currentLanguage]}
                                {/* </div> */}
                                </div>
                            </div>

                            <div className='col-4' style={vocabBoardMiddle}>
                                <button className='controlButton' onClick={()=>{this.handleControl('c',currentContent)}} style={controlButtonStyle}>Chinese</button>
                                {/* <i className="fas fa-redo fa-2x refresh" style={{color:'#68A691'}} onClick={()=>this.handleControl(this.state.currentLanguage,currentContent)}></i>
                                <button className='controlButton' onClick={()=>{this.handleControl('e',currentContent)}} style={controlButtonStyle}>English</button> */}
                            </div>
                            <div className='col-4' style={vocabBoardMiddle}>
                                {/* <button className='controlButton' onClick={()=>{this.handleControl('c',currentContent)}} style={controlButtonStyle}>Chinese</button> */}
                                <i className="fas fa-redo fa-2x refresh" style={{color:'#68A691'}} onClick={()=>this.handleControl(this.state.currentLanguage,currentContent)}></i>
                                {/* <button className='controlButton' onClick={()=>{this.handleControl('e',currentContent)}} style={controlButtonStyle}>English</button> */}
                            </div>
                            <div className='col-4' style={vocabBoardMiddle}>
                                {/* <button className='controlButton' onClick={()=>{this.handleControl('c',currentContent)}} style={controlButtonStyle}>Chinese</button>
                                <i className="fas fa-redo fa-2x refresh" style={{color:'#68A691'}} onClick={()=>this.handleControl(this.state.currentLanguage,currentContent)}></i> */}
                                <button className='controlButton' onClick={()=>{this.handleControl('e',currentContent)}} style={controlButtonStyle}>English</button>
                            </div>
                            
                            <div className='col-12' onClick={this.toggleShowAnswer} style={vocabBoard}>
                                <div style={vocabInnerBoard}>
                                    {/* <div style={centerTextBoard}> */}
                                    {this.state.showAnswer?this.state.wordPicked[this.getTheOther(this.state.currentLanguage)]:
                                                       <button className='btn btn-secondary'style={{height:'40px'}}>Reveal the answer</button>}
                                    {/* </div> */}
                                
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