import React, { Component } from 'react'
import './App.css';
import Info from './components/Info'
import EstimateForm from './components/EstimateForm';

class App extends Component {
  state = {
    showForm: true
  }

  handleShowEstimateForm = evt => {
    console.log(evt)
    this.setState({
      showForm: !this.state.showForm
    })
  }

  render() {
    return (
      <>
        <Info onHandleShowEstimateForm={this.handleShowEstimateForm}/>
        <br/>
        {this.state.showForm && <EstimateForm/>} 
      </>
    )  
  }
}

export default App;
