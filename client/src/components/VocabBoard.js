import React,{Component} from 'react';
const vocabBoard={
    width:'80%',
    height:'110px',
    textAlign:'center',
    fontSize:'20px',
    overflow:'auto'
}
const vocabInnerBoard={
    height:'100%',
    width:'100%',
    backgroundColor:'#68A691',
    color:'#fff',
    borderRadius:'10px',

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

class VocabBoard extends Component{
    render(){
        return(
            <div className='col-12' style={vocabBoard}>
                                
                <div style={vocabInnerBoard}>
                <div style={centerTextBoard}>
                    {this.props.wordPicked}
                </div>
                

                </div>
            </div>
        )
    }
}
export default VocabBoard;