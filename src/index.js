import React from "react";
import ReactDOM from "react-dom";
import { getYear, getDaysInYear, getDayOfYear } from "date-fns";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: sans-serif;
  color: #303030;
`;
const Title = styled.h1`
  color: #303030;
  text-decoration: underline;
`;

const ProgressBar = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 50%;
`;

const Bar = styled.div.attrs({
  background: props => (props.active ? "#000" : "rgba(0, 0, 0, 0.5)")
})`
  width: 5px;
  height: 30px;
  background-color: ${props => props.background};
`;

function App() {
  const daysInCurrentYear = date => {
    return getDaysInYear(date);
  };

  const currentDayInCurrentYear = date => {
    return getDayOfYear(date);
  };

  const calculateYearPercentage = (yearDay, daysInYear) => {
    return parseInt((yearDay * 100) / daysInYear, 0);
  };

  const generateBars = percentage => {
    let bars = [];
    for (let i = 0; i < 100; i++) {
      bars.push(<Bar key={i} active={i < percentage} />);
    }
    return bars;
  };

  let currentDate = new Date();
  let year = getYear(currentDate);
  let yearDay = currentDayInCurrentYear(currentDate);
  let yearDays = daysInCurrentYear(currentDate);
  let yearPercentage = calculateYearPercentage(yearDay, yearDays);

  return (
    <Wrapper>
      <Title>Year Progress</Title>
      <h2>
        Day {yearDay} of {yearDays}
      </h2>
      <h2>
        You are in the {yearPercentage} % of {year}
      </h2>
      <ProgressBar>{generateBars(yearPercentage)}</ProgressBar>
    </Wrapper>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
