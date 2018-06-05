import React, { Component } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom"
import DownloadPage from "./download-page"

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={DownloadPage}/>
      </Router>
    )
  }
}

export default App;
