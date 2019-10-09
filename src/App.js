import React from 'react';
import './App.css';

const data = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24,53,55,78,50,13,40,48,32,26,2,14,33,45,72,56,44,21,88,27,68,15,62,93,98,73,28,16,46,87,28,65,38,67,16,85,63,23,69,64,91,9,70,81,27,97,82,6,88,3,7,46,13,11,64,76,31,26,38,28,13,17,69,90,1,6,7,64,43,9,73,80,98,46,27,22,87,49,83,6,39,42,51,54,84,34,53,78,40,14,5]
const sorted = [...data];
sorted.sort(function(a, b){return a - b});

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      input:'',
      message:'',
      searches : 0,
    }

  }

  handleChange = (e) => {
    this.setState({
      input :e.target.value
    })
  }

  handleLinearSearch = () => {
    let num = parseInt(this.state.input) ;
    let searches = 0;
    for (let i =0; i< data.length; i++) {
      searches ++;
      //console.log(data[i], num);
      if (data[i] === num){
        this.setState({
          searches: searches,
          message:`It took ${searches} searches to find Linear search`
        })
        return;
      }
    }
    if (searches === data.length ){
      this.setState({
        message:`Not found`
      })
    }

  }

  binarySearch = (array, value, start=0, end=array.length) => {
      //var start = start === undefined ? 0 : start;
      //var end = end === undefined ? array.length : end;

      if (start > end) {
          return -1;
      }

      const index = Math.floor((start + end) / 2);
      const item = array[index];

      this.counter++
      if (item === value) {
          return index;
      }
      else if (item < value) {
        return this.binarySearch(array, value, index + 1, end)
      }
      else if (item > value) {
        return this.binarySearch(array, value, start, index - 1);
      }
  };

  handleBinarySearch = () => {
    this.counter = 0
    const result  = this.binarySearch(sorted, parseInt(this.state.input))
    if (result>0){
      this.setState({
        searches: result+1,
        message:`It took ${this.counter+1} searches to find binary search`
      })
    }else{
        this.setState({
          message:`Not found  and took ${this.counter+1} searches`
        })
    }
  }


  render(){
    return(
      <div className='App'>
      <h1>DSA-Searching</h1>
      <h2>Numbers</h2>
      <p>89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5</p>
      <h2>Search</h2>
      <input onChange={this.handleChange } type='text' value={this.state.input} ></input>
      <button onClick={this.handleLinearSearch} >Linear Search</button>
      <button onClick={this.handleBinarySearch} >Binary Search</button>
      <div>
      {this.state.message}
      </div>

      </div>
    )
  }

}


export default App;
