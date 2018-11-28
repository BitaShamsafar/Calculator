import React from 'react';
import './App.css';



class CD extends React.Component{

    constructor(props){
        super(props);

        this.CountDown=this.CountDown.bind(this);
        this.change = this.change.bind(this);
        this.state={
            now : ''
        }
        

    }
    componentDidMount(){
        setInterval(this.change , 1000)
    }

    change(){
        var jetzt = new Date().getTime();
        this.setState({
            now : jetzt 
        })
       
    }

    CountDown(time){
      
        var countDownDate = new Date(time).getTime();
        
        var distance = countDownDate - this.state.now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        return (days + ' D' + hours + ' H'+minutes + ' M' + seconds + ' S')
    }
    render(){
      return(
        <div >
          
            {this.CountDown("23jan 2020 11:45:20")} 
           
            
        </div>
      )
    }
}
 export default CD;