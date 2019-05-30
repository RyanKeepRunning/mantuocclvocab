import React,{Component} from 'react';
import '../css/vocabBoard.css';

class VocabBoard extends Component{
    constructor(props){
        super(props);
        this.state={
            currentLanguage:"c",
            wordPicked:{e:'',c:'Generate vocab by clicking "Chinese", "English" or "refresh"'},
            showAnswer:false,
            lastWordPicked:{e:'',c:''},
        }
    }
    getTheOtherLanguage=(language)=>{
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
    handleControl = (language,currentContent) =>{
        this.setState({wordPicked:""},()=>{
            const wordPicked = this.wordPicker(currentContent);
            this.setState({currentLanguage:language,wordPicked,showAnswer:false,lastWordPicked:wordPicked});
        })
    }
    wordPicker = (currentContent)=>{
        const max = currentContent.length;
        let index = Math.floor(Math.random() * Math.floor(max));
        while(JSON.stringify(currentContent[index])===JSON.stringify(this.state.lastWordPicked)){
            const newIndex = Math.floor(Math.random() * Math.floor(max));
            index = newIndex;
        }
        let wordPicked = Object.assign({},currentContent[index]);
        if(this.props.mode==="Exhaustion"){
            this.props.removePickedWord(index);
            if(JSON.stringify(wordPicked)==='{}'){
                wordPicked={e:`${this.props.currentCategory} vocab has been completed.`,c:`${this.props.currentCategory} 词汇已完成。`}
            }
        }
        return wordPicked;
    }
    resetVocab=()=>{
        this.setState({
            wordPicked:{e:`All vocabs got recharged!`,c:`各类词汇均已重置`}
        },()=>{
            this.props.resetVocab();
        })
    }
    toggleMode=()=>{
        this.props.toggleMode();
    }
    render(){
        return(
            <div className={`col-12 ${this.props.mode==='Exhaustion'?'vocabBoardFrameBlue':'vocabBoardFrameGreen'}`}>
                <div className='row'>
                    <div className='col-12'style={{paddingLeft:0,paddingRight:0}}   >
                        <button className={`modeToggler${this.props.mode==='Exhaustion'?'Blue':'Green'}`}  
                        onClick={this.toggleMode}>{this.props.mode} mode</button>
                    </div>
                    <div className='col-12 vocabBoard'>
                        <div className={`${this.props.mode==='Exhaustion'?'vocabInnerBoardBlue':'vocabInnerBoardGreen'}`}>

                        {this.state.wordPicked[this.state.currentLanguage]}

                        </div>
                    </div>
                    
                    <div className='col-4 vocabBoardMid' >
                        <button className='controlButton' onClick={()=>{this.handleControl('c',this.props.currentContent)}}>Chinese</button>
                    </div>
                    <div className='col-4 vocabBoardMid' >
                        <i className={`fas fa-step-forward fa-2x ${this.props.mode==='Exhaustion'? 'responsiveIconBlue':'responsiveIconGreen'}`} onClick={()=>this.handleControl(this.state.currentLanguage,this.props.currentContent)}></i>
                    </div>
                    <div className='col-4 vocabBoardMid' >
                        <button className='controlButton' onClick={()=>{this.handleControl('e',this.props.currentContent)}} >English</button>
                    </div>
                    
                    
                    <div className='col-12 vocabBoard' onClick={this.toggleShowAnswer} >
                        <div className={`${this.props.mode==='Exhaustion'?'vocabInnerBoardBlue':'vocabInnerBoardGreen'}`}>
                            {this.state.showAnswer?this.state.wordPicked[this.getTheOtherLanguage(this.state.currentLanguage)]:
                                                <button className='btn btn-secondary disguiseButton'>Reveal the answer</button>}
                        </div>
                    </div>
                    {this.props.mode==='Exhaustion'?
                        <div className='col-12 vocabBoardMid' >
                            <i className={`fas fa-redo fa-2x responsiveIconBlue`} onClick={this.resetVocab}></i>
                        </div>
                        :null
                    }
                </div>
            </div>
        )
    }
}
export default VocabBoard;