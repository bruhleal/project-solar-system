import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Title extends Component {
  render() {
    const { headline } = this.props;
    // console.log(this.props);
    return (
      <h2>{ headline }</h2>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string,
};

Title.defaultProps = { headline: [] };

export default Title;
