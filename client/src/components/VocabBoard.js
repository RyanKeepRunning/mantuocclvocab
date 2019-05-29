import React,{Component} from 'react';
import '../css/vocabBoard.css';

class VocabBoard extends Component{
    constructor(props){
        super(props);
        this.state={
            currentLanguage:"c",
            wordPicked:{e:'',c:'Generate vocab by clicking "Chinese", "English" or "refresh"'},
            showAnswer:false,
            lastWordPicked:{e:'',c:''}
        }
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
        return currentContent[index];
    }
    render(){
        return(
            <div className='col-12 vocabBoardFrame' >
                <div className='row'>
                    <div className='col-12 vocabBoard' >
                        <div className='vocabInnerBoard'>

                        {this.state.wordPicked[this.state.currentLanguage]}

                        </div>
                    </div>

                    <div className='col-4 vocabBoardMid' >
                        <button className='controlButton' onClick={()=>{this.handleControl('c',this.props.currentContent)}}>Chinese</button>
            
                    </div>
                    <div className='col-4 vocabBoardMid' >
                        
                        <i className="fas fa-redo fa-2x refresh" style={{color:'#68A691'}} onClick={()=>this.handleControl(this.state.currentLanguage,this.props.currentContent)}></i>
                        
                    </div>
                    <div className='col-4 vocabBoardMid' >
                        
                        <button className='controlButton' onClick={()=>{this.handleControl('e',this.props.currentContent)}} >English</button>
                    </div>
                    
                    <div className='col-12 vocabBoard' onClick={this.toggleShowAnswer} >
                        <div className='vocabInnerBoard' >
                            
                            {this.state.showAnswer?this.state.wordPicked[this.getTheOther(this.state.currentLanguage)]:
                                                <button className='btn btn-secondary disguiseButton'>Reveal the answer</button>}
                            
                        
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default VocabBoard;