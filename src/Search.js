import React from 'react';


class Search extends React.Component{
    constructor(props){
        super(props);
        this.Result=this.Result.bind(this);
        this.Seek=this.Seek.bind(this);
        this.state ={
          val : ""
        }
    }
    txt=['HTML','CSS','CSS3','NodeJS','PHP','JQUERY','JAVASCRIPT','BOOTSTRAP','REACTJS'];
    
    Seek(evt){
      let val=evt.target.value;
      this.setState({
          val : val
      })
    }

    Result(){
            
            let res=[];
            let key=this.state.val.toLocaleUpperCase();
            let i;
            
            if(key != ''){
            for(i=0;i<this.txt.length;i++){
                let me=this.txt[i].toLocaleUpperCase().indexOf(key);
                if( me > -1){
                    res.push(this.txt[i]);
                }
                }
               if(res.length>0){ 
               return( res.map((word)=>(<li>{word}</li>)))
                }
                else{
                  return(  <li>No match found</li>)
                }
                
            
          }
          
       
           
    }

    render(){
        return(
           <div>
              Search your target here :  <input className="srch" onKeyUp={this.Seek}  type="text"/>  
              
              {this.Result()}
           </div>
        );
    }
}

export default Search;