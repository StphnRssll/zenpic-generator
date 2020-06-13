import React from 'react';
import './App.css';
import ZenPicGenerator from './ZenPicGenerator';
import Collection from './Collection';
import uuid from 'uuid/v4'

class App extends React.Component {
  state = {
    collection: [
      { id: uuid(), background: "https://images.unsplash.com/photo-1483794344563-d27a8d18014e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80", quote: "When you realize nothing is lacking, the whole world belongs to you. -Lao Tzu" },
      { id: uuid(), background: "https://wallpaperplay.com/walls/full/b/7/8/130979.jpg", quote: "When something is important enough, you do it even if the odds are not in your favor. - Elon Musk" }
    ]
  }
  savePic = (zenpic) => {
    this.setState({
      collection: [
        ...this.state.collection,
        {
          id: uuid(),
          background: zenpic.background,
          quote: zenpic.quote
        }
      ]
    })
  }
  remove = (id) => {
    // how do we remove a specific element from array?
    console.log(id)
    this.setState({
      collection: this.state.collection.filter(zenpic =>
        zenpic.id !== id
      )
    })
  }
  render() {
    return (
      <div className="App" >
        <h1>Zenpic Generator!</h1>
        <ZenPicGenerator savePic={this.savePic} />
        <Collection collection={this.state.collection} remove={this.remove} />
      </div>
    );
  }
}

export default App;
