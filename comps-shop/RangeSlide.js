import React from 'react';
import ReactDOM from 'react-dom';
import InputRange from 'react-input-range';
import  "react-input-range/lib/css/index.css"
class RangeSlide extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value4: {
        min: 100,
        max: 200,
      },
    };
  }

  render() {
    return (
      <form className="form-q">
        <InputRange
          step={50}
          maxValue={500}
          minValue={100}
          formatLabel={value => `$${value}`}
          value={this.state.value4}
          onChange={value => this.setState({ value4: value })}
          onChangeComplete={value => console.log(value)} 
          />
      </form>
    );
  }
}


export default RangeSlide