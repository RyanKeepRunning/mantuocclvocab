import React,{Component} from 'react';
import '../css/pageTitle.css';

class PageTitle extends Component{
    render(){
        return(
            <div className='col-12 title' >
                <span className='titleText'>Welcome to CCL Vocab System</span>
            </div>
        )
    }
}
export default PageTitle;