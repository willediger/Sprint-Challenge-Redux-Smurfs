import React, { Component } from "react";

import SmurfForList from "./SmurfForList";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getSmurfs } from "../actions";

import "./App.css";

class Smurfs extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    return (
      <div className="smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Link to={`/smurfs/${smurf.id}`} key={smurf.id}>
                <SmurfForList
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                />
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs
});

export default withRouter(
  connect(
    mapStateToProps,
    { getSmurfs }
  )(Smurfs)
);
