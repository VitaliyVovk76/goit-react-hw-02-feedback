import "./App.css";
import React, { Component } from "react";
import Container from "./components/Container";
import Section from "./components/Section";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Notification from "./components/Notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hendleClick = (key) => {
    this.setState((prevState) => ({ [key]: prevState[key] + 1 }));
  };

  countTotalFeedback = (arr) => {
    return arr.reduce((acc, value) => acc + +value, 0);
  };
  countPositiveFeedbackPercentage = (total, positive) => {
    const res = Math.round((100 / total) * positive);
    if (Number.isNaN(res)) {
      return 0;
    }
    return res;
  };
  render() {
    const { good, neutral, bad } = this.state;
    const valuesState = Object.values(this.state);
    const kaysState = Object.keys(this.state);
    const totalAmount = this.countTotalFeedback(valuesState);
    const positiveFeedback = this.countPositiveFeedbackPercentage(
      totalAmount,
      good
    );

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={kaysState}
            onLeaveFeedback={this.hendleClick}
          />
        </Section>
        <Section title="Statistics">
          {totalAmount !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalAmount}
              positivePercentage={positiveFeedback}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
