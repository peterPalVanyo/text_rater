import React, { Component } from "react";
import axios from "axios";

class TextList extends Component {
  static defaultProps = {
    numOfTexts: 5
  };
  constructor(props) {
    super(props);
    this.state = { texts: [] };
  }

  async componentDidMount() {
    //_id, content, author
    const texts = [];
    while (texts.length < this.props.numOfTexts) {
      let resp = await axios.get("https://api.quotable.io/random");
      texts.push(resp.data.content);
    }
    this.setState({texts: texts})
  }

  render() {
    return (
      <div className='TextList'>
        <h1>Text to evaluate</h1>
        <div className='TextList-texts'>
            {this.state.texts.map(text => (
                <div>{text}</div>
            ))}
        </div>

      </div>
    );
  }
}

export default TextList;
