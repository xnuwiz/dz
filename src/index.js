import React, { Component } from "react";
import ReactDOM from "react-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "./index.css";
class App extends Component {
    state = {};
    render() {
    return (
        <React.Fragment>
        <MDBContainer>
            <MDBRow>
            <MDBCol md="9"><Event  title="Meeting with John" time="10:00" /></MDBCol>
            <MDBCol md="3"></MDBCol>
            <MDBCol md="9"><Event  title="Call with Ana" time="11:00" /></MDBCol>
            <MDBCol md="3"></MDBCol>
            </MDBRow>
        </MDBContainer>
        </React.Fragment>
    );
    }
}

class Event extends Component {
    state = {};
    render() {
    return (
      <React.Fragment>
          <h3>{this.props.time} - {this.props.title}</h3>
          <button>Change my title</button>
          <button onClick={(this.props.title = "New Title")}>Change my title</button>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
