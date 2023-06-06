import React from "react";
import './counter.css';

class Addsub extends React.Component {
    constructor() {
        super();
        this.state = {initial:0};
        this.sub = this.callMe1.bind(this);//binding decrease function
        this.add = this.callMe2.bind(this);//binding increase function
        this.reset = this.callMe3.bind(this);//binding reset function

    }
    //decrease function
    callMe1() {
        this.setState ({initial:this.state.initial-1})
        if(this.state.initial<=0) {
            this.setState({initial:0})
        }
      }
    //increase function
    callMe2() {
        this.setState({initial:this.state.initial+1})
    }
    //reset function
    callMe3() {
        this.setState({initial:0})
    }
    render() {
        console.log("this is render");
        return(
            <>
            <div className="co">
                <h1>Simple react counter</h1>
            <div class="containerco">
            <div class="buttonco">
                <button onClick={this.sub}>-</button>
                <p>{this.state.initial}</p>
                <button onClick={this.add}>+</button>
            </div>
            <div class="resetco">
                <button onClick={this.reset}>Reset</button>
            </div>
            </div>
            </div>
            </>
        )
    }
}
export default Addsub