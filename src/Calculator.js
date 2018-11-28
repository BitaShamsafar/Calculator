import React from 'react';
import './App.css';

class Calc extends  React.Component{
 constructor(props){
     super(props);
     this.func=this.func.bind(this);
     this.result=this.result.bind(this);
     this.clear = this.clear.bind(this);
     this.state ={
         wrapper : [],
         no : []
     }

 }
 nums=['1','2','3','4','5','6','7','8','9','0'];
 operator=['+','-','*','/'];
 temp=[];
 func(evt){
         if(evt.target.className == 'ops'){
             if(this.operator.indexOf(this.state.wrapper[this.state.wrapper.length-1])>-1){
                this.state.wrapper.pop([this.state.wrapper.length-1])
             }
         }
         this.temp.push(evt.target.value);
         this.setState({
            wrapper : this.temp
        })
 }
 result(){
    if(this.operator.indexOf(this.state.wrapper[this.state.wrapper.length-1])>-1){
        this.state.wrapper.pop([this.state.wrapper.length-1])
     }
    let tst=this.state.wrapper.toString().replace(/,/g,'');
    let mine=eval(tst)
    
    this.setState({
        wrapper : mine
    })
 }

 clear(){
    this.temp=[]; 
    this.setState({
        wrapper : this.temp
    })
 }

 render(){
     return(
        <div className="calwrapper">
         <div className="result">{this.state.wrapper}</div>
         <div className="numwrapper">
          {this.nums.map((number)=>(<input className="nums" value={number} type="submit"  onClick={this.func}/>))}
         </div>
         <div className="opswrapper">
           {this.operator.map((oper)=>(<input className="ops" value={oper} type="submit" onClick={this.func}/>))}
         </div>
         <input type="submit" value="Result" onClick={this.result}/>
         <input type="submit" value="Clear" onClick={this.clear}/>
        </div>
     )
 }
}
export default Calc;