import React from "react";
import { connect } from "react-redux";

const Detail = ({ toDos }) => {
  return <h1>Detail</h1>;
};

const mapStateToProps = (state, ownProps) => {
  return { toDos: state };
};

export default connect(mapStateToProps)(Detail);
