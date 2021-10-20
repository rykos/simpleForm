import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { textSpanContainsPosition } from 'typescript';

class App extends Component<{}, { dropdownOptions: string[] | undefined }> {

  constructor(p: any) {
    super(p);
    this.state = {
      dropdownOptions: undefined
    };
  }

  componentDidMount() {
    this.initializeFormData();
  }

  async initializeFormData() {
    //Opoznienie imituje polaczanie ze zdalnym serwererm
    setTimeout(() => {
      fetch("https://localhost:5001/days")
        .then(res => res.json())
        .then(res => {
          this.setState({ dropdownOptions: res });
        }).catch(() => {
          alert("Could not fetch data from the server");
        });
    }, 200);
  }

  render() {
    if (!this.state.dropdownOptions) return <div className="App">Loading data from the server</div>
    else return (
      <div className="App">
        <form action="https://localhost:5001/messages" method="POST">
          <input type="text" name="Text" />
          <select name="Dropdown" id="Dropdown">
            {
              this.state.dropdownOptions?.map(x => {
                return <option key={x} value={x}>{x}</option>
              })
            }
          </select>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
