import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Result from './Result';
import axios from 'axios';
import './style.css';

class App extends React.Component {
  state = {
    name1: '',
    name2: '',
    percentage: 0,
    sentence: '',
    prediction: '',
    loading: false,
  };

  onInputChange1 = (event) => {
    this.setState({ name1: event.target.value });
  };
  onInputChange2 = (event) => {
    this.setState({ name2: event.target.value });
  };
  onPredictionChange = (event) => {
    this.setState({ prediction: event.target.value });
  };

  onFormSubmit = async (event) => {
    event.preventDefault();
    await axios({
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
          loading: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="main">
        <div className="left-side">
          <div id="title">Love Calculator</div>
          <div id="instruction">Start by entering two names</div>
          <hr />
          <form onSubmit={this.onFormSubmit}>
            <input
              className="input"
              type="text"
              value={this.state.name1}
              onChange={this.onInputChange1}
              placeholder="Name one"
            />
            <input
              className="input"
              type="text"
              value={this.state.name2}
              onChange={this.onInputChange2}
              placeholder="Name two"
            />
            <input
              className="input"
              type="text"
              value={this.state.prediction}
              onChange={this.onPredictionChange}
              placeholder="Prediction (1-100)"
            />
            <button class="submit" type="submit">
              Submit
            </button>
          </form>
        </div>

        <div className="right-side-main">
          {this.state.loading ? (
            <Result
              percent={this.state.percentage}
              sentence={this.state.sentence}
              prediction={this.state.prediction}
              name1={this.state.name1}
              name2={this.state.name2}
            />
          ) : (
            <Spinner animation="border" />
          )}
        </div>
      </div>
    );
  }
}

export default App;
