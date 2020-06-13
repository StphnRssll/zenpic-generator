import React, { Component } from 'react'
import ZenPic from './ZenPic'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

export default class ZenPicGenerator extends Component {
  state = {
    quote: "When you realize nothing is lacking, the whole world belongs to you. -Lao Tzu",
    background: "https://images.unsplash.com/photo-1483794344563-d27a8d18014e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    selectingImage: false
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleClick = () => {
    // TODO: refactor functional setstate
    this.setState({ selectingImage: !this.state.selectingImage })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.savePic({
      background: this.state.background,
      quote: this.state.quote
    })
  }

  render() {
    let quoteForm =
      <FormGroup>
        <Label for="quote">Quote</Label>
        <Input onChange={this.handleChange} type="textarea" name="quote" />
        <Button onClick={this.handleClick}>Change Image</Button> <br />
        <ZenPic quote={this.state.quote} background={this.state.background} />
        <Button>Save Pic!</Button> <br />
      </FormGroup>

    let imageForm =
      <FormGroup>
        <Label for="background">Background Image URL</Label>
        <Input onChange={this.handleChange} type="text" name="background" />
        <Button onClick={this.handleClick}>Use This Image</Button> <br />
      </FormGroup>
    return (
      <div className="zenpic-generator">
        <Form onSubmit={this.handleSubmit}>
          {this.state.selectingImage ? imageForm : quoteForm}
        </Form>
      </div>
    )
  }
}
