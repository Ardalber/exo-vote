import React, {Component} from 'react';

class Question extends Component {
    state = {
        countVisible: false
    }

    setCountVisibility = () => {
        this.setState({
            countVisible: true
        })
    }

    render() {
        const data = this.props.data;
        const answersJSX = data.answers.map(answer => {
            const idAnswer = "q"+data.id+"r"+answer.number;
            return (
                <div className="form-check">
                    <input className="form-check-input" type="radio" 
                    name={"radiogrp-"+data.id} id={idAnswer} />
                    <label className="form-check-label" htmlFor={idAnswer}>
                        {answer.name} 
                        {this.state.countVisible ? answer.count : ""} 
                    </label>
                </div>
            )
        })
        
        return(
            <div className="card mb-3">
                <div className="card-header bg-primary text-white border-primary">
                    {data.title}
                </div>
                <div className="card-body">
                <form>
                    {answersJSX}
                </form>
                </div>
                <div className="card-footer bg-transparent">
                    <button className="btn btn-primary"
                        onClick={this.setCountVisibility}>Voter</button>
                </div>
            </div>
        );
    }
}

export default Question;