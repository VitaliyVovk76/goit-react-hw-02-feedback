import React, { Component } from "react";
// import "./FeedbackOptions.css";
import s from "./FeedbackOptions.module.css";
import PropTypes from "prop-types";

class FeedbackOptions extends Component {
  changeCase = (str) => str.toUpperCase();
  render() {
    return (
      <div className={s.feedbackContainer}>
        {this.props.options.map((option, index) => (
          <button
            className={s.feedbackButton}
            key={index}
            type="button"
            onClick={() => this.props.onLeaveFeedback(option)}
          >
            {this.changeCase(option)}
          </button>
        ))}
      </div>
    );
  }
}
FeedbackOptions.propTypes = {
  option: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
export default FeedbackOptions;
