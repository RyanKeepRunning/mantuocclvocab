import React,{Component} from 'react';
import PageTitle from '../components/PageTitle';
import Categories from '../components/Categories';
import VocabBoard from '../components/VocabBoard';
const containerStyle={
    textAlign:'center'
}

const filterVocabs = (vocabs,currentCategory,index) => {
    let newVocabs = [];
    vocabs.forEach(vocab=>{
        if(vocab.name === currentCategory){
            let temp = Object.assign({},vocab);
            temp.content.splice(index,1);
            newVocabs.push(temp);
        }else{
            let temp = Object.assign({},vocab);
            newVocabs.push(temp);
        }
    });
    return newVocabs;
}

class Homepage extends Component {
    constructor(props){
        super(props);
        this.state={
            currentCategory: "all",
            vocabs:JSON.parse(JSON.stringify(this.props.vocabs)),
            mode:'Exhaustion',
        }
    }

    handleClickCategory = (category)=>{
        this.setState({
            currentCategory:category
        })
    }
    resetVocab = () => {
        this.setState({
            vocabs:JSON.parse(JSON.stringify(this.props.vocabs))
        })
    }
    removePickedWord = (index)=>{
        const newVocabs = filterVocabs(this.state.vocabs,this.state.currentCategory,index);
        this.setState({
            vocabs:newVocabs
        });
    }
    toggleMode = ()=>{
        let mode = this.state.mode === 'Exhaustion'?'Endless':'Exhaustion'
        this.setState({
            mode,
            vocabs:JSON.parse(JSON.stringify(this.props.vocabs))
        })
    }
    render(){
        const vocabs = this.state.vocabs;
        let currentContent;
        const categoryList = vocabs.map(vocab=>{
            if(vocab.name === this.state.currentCategory){
                currentContent = vocab.content;
            }
            return(vocab.name);
        });
        console.log(this.state.mode);
        return(
            <div className='container' style={containerStyle}>
                <div className='row' style={containerStyle}>
                    <PageTitle mode={this.state.mode}/>
                    <Categories mode={this.state.mode}
                                currentCategory={this.state.currentCategory}
                                categoryList={categoryList}
                                handleClickCategory={this.handleClickCategory}/>
                    <VocabBoard currentCategory={this.state.currentCategory}
                                currentContent={currentContent}
                                removePickedWord={this.removePickedWord}
                                mode={this.state.mode}
                                resetVocab={this.resetVocab}
                                toggleMode={this.toggleMode}/>
                </div>
            </div>
        )
    }
}

export default Homepage;