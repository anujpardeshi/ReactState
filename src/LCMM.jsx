import React from 'react'

class LCMM extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0,
        };
    }

    increment = () => {
        this.setState((prevState)=> ({
            count: prevState.count+1,
        }));
    };

    decrement = () => {
        this.setState((prevState) => ({
            count: prevState.count -1,
        }));
    };
    reset = () => {
        this.setState({count:0});
    };

    render(){
        return(
            <div style={{textAlign: "center", margin: "20px"}}>
                <h1>counter</h1>
                <h2>{this.state.count}</h2>
                <button onClick={this.increment}  style={{ margin: "5px" }} disabled={count==10}>Increment</button>
                <button onClick={this.decrement}  style={{ margin: "5px" }} disabled={count==0}>Decrement</button>
                <button onClick={this.reset}  style={{ margin: "5px" }}>Reset</button>
            </div>
        );
    }
    
}

export default LCMM;