import React from "react";
import ReactDOM from "react-dom";
import { getYear, getDaysInYear, getDayOfYear } from "date-fns";
import styled from "styled-components";

const Wrapper = styled.div`
  font-family: sans-serif;
  text-align: center;
  color: #303030;
`;
const Title = styled.h1`
  color: #303030;
  text-decoration: underline;
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
    </Wrapper>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
