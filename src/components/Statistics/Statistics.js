import React from "react";
import s from "./Statistics.module.css";
import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={s.statisticsConstiner}>
      <p className="feedback__statistics">Good: {good}</p>
      <p className="feedback__statistics">Neutral: {neutral}</p>
      <p className="feedback__statistics">Bad: {bad}</p>
      <p className="feedback__statistics">Total: {total}</p>
      <p className="feedback__statistics">
        Positive feedback: {positivePercentage}%
      </p>
    </div>
  );
};

Statistics.protTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
