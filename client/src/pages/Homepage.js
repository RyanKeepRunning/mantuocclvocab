import React,{Component} from 'react';
import PageTitle from '../components/PageTitle';
import Categories from '../components/Categories';
import VocabBoard from '../components/VocabBoard';
const containerStyle={
    textAlign:'center'
}

class Homepage extends Component {
    constructor(props){
        super(props);
        this.state={
            currentCategory: "all",
        }
    }
    handleClickCategory = (category)=>{
        this.setState({
            currentCategory:category
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

        return(
            <div className='container' style={containerStyle}>
                <div className='row' style={containerStyle}>
                    <PageTitle/>
                    <Categories currentCategory={this.state.currentCategory}
                                categoryList={categoryList}
                                handleClickCategory={this.handleClickCategory}/>
                    <VocabBoard currentContent={currentContent}/>
                </div>
            </div>
        )
    }
}

export default Homepage;