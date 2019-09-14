import React, { Component } from 'react';
import { TimelineLite } from "gsap/all";
import './List.css';

import Card from '../Card/Card';

export default class List extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lists: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7']
    }

    this.inputRef = React.createRef()
    this.divRef = [];
    this.singleDivRef = React.createRef()
    this.myTween = new TimelineLite({ paused: false });
  }

  componentDidMount() {
    this.myTween.staggerTo(this.divRef, 0.5, {y: -20, autoAlpha: 1}, 0.5);
  }

  // handleChange = () => {
  //   console.log(this.inputRef.current)
  // }

  cardClick = () => {
    console.log('Clicked')
  }
  handleClick = (index) => {
    console.log(this.divRef[index])
    this.divRef[index].focus()
  }


  render() {

    const items = this.state.lists.map((item, index) => (
      <Card onClick={ this.handleClick } className="animate"    key={index} title ={ item} handleClick={ () => this.handleClick(index)} ref= {(element) => {
        this.divRef[index] = element
      }} />
    ));
    return (
      <div className="list">
        {items}
      </div>
    )
  }
}
