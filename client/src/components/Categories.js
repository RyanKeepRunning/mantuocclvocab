import React,{Component} from 'react';
import '../css/categories.css';

const categoryStyle={
    fontSize:'17px',
    marginBottom:'6px'
}
const currentCategoryStyle=Object.assign({},categoryStyle,{
    backgroundColor:'#68A691',
    borderRadius: '5px',
    color:'#fff',
})

class Categories extends Component{

    render(){
        return(
            <div className='col-12 row categoryContainer'>
                <div className='col-12 category' onClick={()=>this.props.handleClickCategory('all')}
                style={this.props.currentCategory==='all'?currentCategoryStyle:categoryStyle}>all</div>
                {this.props.categoryList.map((category,index)=>{
                    if(category!=='all'){
                        return(
                            <div className='col-4 category' key={index} onClick={()=>this.props.handleClickCategory(category)}
                                style={this.props.currentCategory===category?currentCategoryStyle:categoryStyle}>
                            {category}
                            </div>)
                    }else{
                        return null;
                    }
                })}
            </div>
        )
    }
}
export default Categories;