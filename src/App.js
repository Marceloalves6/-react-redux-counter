import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import logo from './logo.svg';
import {increase, decrease} from './actionCreators'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="box">
      <h3>React + Redux - Counter</h3>
        <button onClick={this.props.decrease}>-</button>
        <button onClick={this.props.increase}>+</button>
        <p>{this.props.count}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { count: state.count }
}

function mapActonToProps(dispatch) {
  return {
    increase: bindActionCreators(increase, dispatch),
    decrease: bindActionCreators(decrease, dispatch)
  }
}

export default connect(mapStateToProps, mapActonToProps)(App);
