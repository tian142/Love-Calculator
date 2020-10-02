import React from 'react';
import Result from './Result';
import axios from 'axios';

class App extends React.Component {
  state = { name1: '', name2: '', percentage: 0, sentence: '' };

  onInputChange1 = (event) => {
    this.setState({ name1: event.target.value });
  };
  onInputChange2 = (event) => {
    this.setState({ name2: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    axios({
      method: 'GET',
      url: 'https://love-calculator.p.rapidapi.com/getPercentage',
      headers: {
        'content-type': 'application/octet-stream',
        'x-rapidapi-host': 'love-calculator.p.rapidapi.com',
        'x-rapidapi-key': 'b99a83853fmsh8d97f5e798e6920p1fd23ejsnc7871215aa2a',
        useQueryString: true,
      },
      params: {
        fname: this.state.name1,
        sname: this.state.name2,
      },
    })
      .then((response) => {
        this.setState({
          percentage: response.data.percentage,
          sentence: response.data.result,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            value={this.state.name1}
            onChange={this.onInputChange1}
          />
          <input
            type="text"
            value={this.state.name2}
            onChange={this.onInputChange2}
          />
          <input type="submit" />
        </form>
        <Result
          percent={this.state.percentage}
          sentence={this.state.sentence}
        />
      </div>
    );
  }
}

export default App;
