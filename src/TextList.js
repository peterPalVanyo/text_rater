import React, { Component } from "react";
import axios from "axios";
import Text from "./Text";
import rate from "./image/rate.svg";
import "./TextList.css";

class TextList extends Component {
  static defaultProps = {
    numOfTexts: 10
  };
  constructor(props) {
    super(props);
    this.state = { texts: JSON.parse(window.localStorage.getItem('texts') || '[]') };
    this.handleRate = this.handleRate.bind(this);
  }

  componentDidMount() {
    if(this.state.texts.length === 0) this.getTexts()
  }
  async getTexts() {
    //_id, content, author
    const texts = [];
    while (texts.length < this.props.numOfTexts) {
      let resp = await axios.get("https://api.quotable.io/random");
      texts.push({ id: resp.data._id, text: resp.data.content, rate: 0 });
    }
    this.setState({ texts: texts });
    window.localStorage.setItem('texts', JSON.stringify(texts))
  }
  handleRate(id, change) {
        this.setState( state => ({
            texts: state.texts.map( text => text.id === id ? {...text, rate: text.rate+change} : text)
        }))
  }
  render() {
    return (
      <div className="TextList">
        <div className="TextList-side">
          <h1 className="TextList-title">
            <span>Rate</span> Them!
          </h1>
          <object type="image/svg+xml" data={rate}>
            vote
          </object>
          <button className="TextList-getmore">New Texts</button>
        </div>
        <div className="TextList-texts">
          {this.state.texts.map(text => (
            <Text
              key={text.id}
              text={text.text}
              rate={text.rate}
              upRate={() => this.handleRate(text.id, 1)}
              downRate={() => this.handleRate(text.id, -1)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default TextList;
