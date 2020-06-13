import React, { Component } from 'react'
import ZenPic from './ZenPic'

export default class Collection extends Component {
  render() {
    let collection = this.props.collection.map(zenpic =>
      <ZenPic id={zenpic.id} key={zenpic.id} remove={this.props.remove} background={zenpic.background} quote={zenpic.quote} />
    );
    return (
      <div className="collection">
        <h1> Collection! </h1>
        {collection}
      </div>
    )
  }
}
