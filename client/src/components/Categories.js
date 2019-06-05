import React,{Component} from 'react';
import '../css/categories.css';



class Categories extends Component{

    render(){
        let categoryStyle={
            fontSize:'17px',
            marginBottom:'6px'
        }
        let currentCategoryStyle;
        if(this.props.mode==='Exhaustion'){
            currentCategoryStyle=Object.assign({},categoryStyle,{
                backgroundColor:'#6699CC',
                borderRadius: '5px',
                color:'#fff',
                transitionDuration:'0.8s',
                WebkitTransitionDuration: '0.8s'
            })
        }else{
            currentCategoryStyle=Object.assign({},categoryStyle,{
                backgroundColor:'#68A691',
                borderRadius: '5px',
                color:'#fff',
                transitionDuration:'0.8s',
                WebkitTransitionDuration: '0.8s'
            })
        }

        return(
            <div className={`col-12 row ${this.props.mode==='Exhaustion'?'categoryBlueContainer':'categoryGreenContainer'}`}>
                <div className={`col-12 ${this.props.mode==='Exhaustion'?'categoryBlue':'categoryGreen'}`} onClick={()=>this.props.handleClickCategory('all')}
                style={this.props.currentCategory==='all'?currentCategoryStyle:categoryStyle}>all</div>
                {this.props.categoryList.map((category,index)=>{
                    if(category!=='all'){
                        return(
                            <div className={`col-4 ${this.props.mode==='Exhaustion'?'categoryBlue':'categoryGreen'}`} key={index} onClick={()=>this.props.handleClickCategory(category)}
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