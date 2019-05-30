import React,{Component} from 'react';
import '../css/pageTitle.css';

class PageTitle extends Component{
    render(){
        return(
            <div className={`col-12 ${this.props.mode==='Exhaustion'?'titleBlue':'titleGreen'}`} >
                <span className='titleText'>Welcome to CCL Vocab System V1.2</span>
            </div>
        )
    }
}
export default PageTitle;