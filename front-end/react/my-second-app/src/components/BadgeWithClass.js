import { Component } from "react";

class BadgeWithClass extends Component{

    constructor(){
        // always as first line in constructor
        super();
        this.state = {count: 0}

        console.log('Constructor invoked...');
    }

    componentDidMount(){
        console.log('CDM invoked...');

        // initialize component
        // make api calls
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res=> res.json())
        .then(data => {
            this.setState({count: data.id})
        });

    }

    componentDidUpdate(){
        console.log('CDU invoked...');
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log(nextProps)
        console.log(nextState)
        return true;
    }   

    handleClick(){
        console.log('button clicked...');
        console.log(this.state.count);
        // setState is the right way to change state
        this.setState({count: this.state.count + 1});
        // this.state.count = 10;
        // console.log(this.state.count);
        // this.state.count = ;
    }

    render(){
        console.log('Render method invoked...');
        return(
            <button type="button" onClick={this.handleClick.bind(this)} className="btn btn-primary">
                {this.props.caption} <span className="badge bg-secondary">{this.state.count}</span>
            </button>
        )
    }

}

export default BadgeWithClass;