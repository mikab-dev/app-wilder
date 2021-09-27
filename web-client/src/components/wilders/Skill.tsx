import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import { WilderSkills } from "../types/types";

const Votes = styled.span`
  /* Center the content */
  align-items: center;
  display: flex;
  justify-content: center;
  color: ${({ children }) => (children! >= 5 ? "white" : "#212121")};

  /* Colors */
  background-color: ${({ children }) =>
    children! >= 5 ? "#77DD66" : "#f76c6c"};

  /* Rounded border */
  border-radius: 9999px;
  height: 20px;
  width: 20px;
`;

const SkillContainer = styled.li`
  margin: 4px 0;
  display: flex;
  justify-content: space-around;
  border: #f76c6c 1px solid;
  border-radius: 4px;
  padding: 2px;
`;

type Props = {
  title: WilderSkills;
  votes: WilderSkills;
};

const Skill = ({ title, votes }: Props) => {
  return (
    <SkillContainer>
      {title}
      <Votes>{votes}</Votes>
    </SkillContainer>
  );
};
export const SkillPropType = {
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
};

export default Skill;
