import React from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import pencil from "./pencil.png";
import "./App.css";

import { deleteSmurf } from "../actions/index";

const SingleSmurf = props => {
  const deleteSmurf = event => {
    event.preventDefault();
    props.deleteSmurf(smurf.id).then(() => props.history.push("/smurfs"));
  };

  const updateSmurf = event => {
    event.preventDefault();
    props.history.push(`/smurfs/${smurf.id}/update`);
  };

  let smurf = null;
  if (props.smurfs) {
    smurf = props.smurfs.find(smurf => `${smurf.id}` === props.match.params.id);
  }

  if (!smurf) {
    return <h2>Loading smurf data...</h2>;
  }

  return (
    <div className="smurf-container">
      <div className="smurf-buttons">
        <span className="delete-span" onClick={deleteSmurf}>
          X
        </span>
        <img
          className="edit-button"
          onClick={updateSmurf}
          src={pencil}
          alt="edit"
        />
      </div>

      <div className="smurf smurf-div">
        <div className="smurf-info">
          <p className="smurf-p">Name: {smurf.name}</p>
          <p className="smurf-p">Age: {smurf.age}</p>
          <p className="smurf-p">Height: {smurf.height}</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs
});

const mapDispatchToProps = dispatch => ({
  deleteSmurf: id => dispatch(deleteSmurf(id))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SingleSmurf)
);
