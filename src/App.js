import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';

class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: props.start
    }
  }

  componentDidMount() {
    this.addInterval = setInterval(() => this.increase(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.addInterval);
  }

  increase() {
    this.setState((state, props) => ({
      time: parseInt(state.time) + 1
    }))
  }

  render() {
    return (
      <div>{this.state.time} Detik</div>
    )
  }
}

class Toggle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggleStatus: true
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(state => ({
      toggleStatus: !state.toggleStatus
    }))
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.toggleStatus ? 'ON' : 'OFF'}
        <p>Kondisi sekarang {this.state.toggleStatus ? 'Menyala' : 'Mati'}</p>
      </button>
    )
  }
}

// function Biodata(props){
//   return <span>umurnya {props.age}</span>
// }

// function Greeting(props){
//   return <h1>Halo {props.name} - <Biodata age= {props.age}></Biodata></h1>
// }

function Greeting(props) {
  return <h1>Halo {props.name} - umurnya {props.age}</h1>
}

function Clicker() {
  function handleClick(e) {
    alert("berhasil mengklik!")
    e.preventDefault()
  }

  return (
    <a href='http://lptq.umy.ac.id/' onClick={handleClick}>Klik Bro!</a>
  )
}

class Api extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => this.setState({ items: data }))
  }

  render() {
    const { items } = this.state

    return (
      <div>
        <ul>
          {items.map((item, index) =>
            <li key={index}>{item.name}</li>)}
        </ul>
      </div>
    )
  }
}

class Column extends React.Component {
  render() {
    return (
      <React.Fragment>
        <td>Data satu</td>
        <td>Data dua</td>
      </React.Fragment>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoItem: '',
      items: []
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      items: [...this.state.items, this.state.todoItem],
      todoItem: ''
    })
  }

  handleChange = (event) => {
    this.setState({
      todoItem: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Toggle />
        <Timer start="0" />
        <Timer start="5" />
        <Greeting name="Hilman" age="25" />
        <Clicker />
        <Api />
        <Column />
        <div>
          <form onSubmit={this.handleSubmit}>
            <input value={this.state.todoItem} onChange={this.handleChange}></input>
            <button>Add</button>
          </form>
          <List items={this.state.items} />
        </div>
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         {/* <Greeting/> */}
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
