import React from 'react';
import Message from './Message';

const text1 = 'Hello, world!';
const text2 = 'Another exciting text.';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  onClickHandler = (text) => {
    this.setState({
      text: text,
    });
  };

  render() {
    return (
      <div className="page">
        <Message text={this.state.text} />
        <div className="actions">
          <button className="btn" onClick={() => this.onClickHandler(text1)}>
            Text 1
          </button>
          <button className="btn" onClick={() => this.onClickHandler(text2)}>
            Text 2
          </button>
          <button className="btn" onClick={() => this.onClickHandler('')}>
            Clear
          </button>
        </div>
      </div>
    );
  }
}

export default Page;
