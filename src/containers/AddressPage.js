import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddressPage extends Component {
  render() {
    return (
      <h1>Address</h1>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressPage);
