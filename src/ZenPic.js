import React, { Component } from 'react'
import { Button } from 'reactstrap';

export default class ZenPic extends Component {
  handleClick = () => {
    this.props.remove(this.props.id);
  }
  render() {
    return (
      <div className="zenpic">
        <img src={this.props.background} alt={this.props.quote} />
        <p>{this.props.quote}</p>
        <Button onClick={this.handleClick}>X</Button>
      </div>
    )
  }
}
