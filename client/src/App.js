import './App.css';
import logo from './logo.png'
import React ,{Component} from 'react'
import ApolloCLient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Launches from './components/Launches'
import Launch from './components/Launch'

const client =new ApolloCLient({
  uri:'/graphql',
  opts:{
    credentials:'same-origin'
  }
})

class App extends Component{
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="container">
            <img src={logo} alt="SpaceX" style={{width:300, display:'block' ,margin:'auto'}}></img>
            <Route exact path="/" component={Launches}></Route>
            <Route exact path="/launch/:flight_number" component={Launch}></Route>
          </div>
        </Router>    
      </ApolloProvider>
    )
  }  
}
export default App;
