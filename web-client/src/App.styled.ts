import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 24px;
`;
export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #f76c6c;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: #f76c6c;
`;

export const Header = styled.header`
  background-color: #f76c6c;
  color: #fff;
`;

export const SkillsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Card = styled.article`
  margin-top: 10px;
  padding: 20px;
  border: 1px solid #c9c9c9;
  border-radius: 7px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);

  img {
    border-radius: 7px 7px 0 0;
    margin-bottom: 20px;
    max-width: 100%;
    height: auto;
  }
  ul,
  p {
    color: #757575;
    line-height: 1.5;
  }

  h3 em {
    padding: 0.25em;
    background-color: #eddbff;
    border-radius: 4px;
  }

  h3,
  h4 {
    color: #f76c6c;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: start;
  }
`;

export const AddWilderCard = styled(Card)`
  background-color: #aeaeae;
  img {
    margin-top: 47px;
  }
`;

export const CardRow = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 32%);
  justify-content: space-between;
`;

export const Footer = styled.footer`
  border-top: 2px solid #f76c6c;
`;

export const Input = styled.input`
  max-width: 100%;
  padding: 11px 13px;
  background: #f9f9fa;
  margin-bottom: 0.9rem;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`;
const jump = keyframes`
  from{
    transform: translateY(0)
  }
  to{
    transform: translateY(-3px)
  }
`;

export const Button = styled.button`
  max-width: 100%;
  padding: 11px 13px;
  color: ${(props) => props.theme.color};
  font-weight: 600;
  text-transform: uppercase;
  background: ${(props) => props.theme.bg};
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: ${(props) => props.theme.color};
    color: ${(props) => props.theme.bg};
    animation: ${jump} 0.2s ease-out forwards;
  }
`;

export const DeleteContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
// export const Text = styled.p`
//     word-wrap: ${props => props.wordBreak ? “break-word” : “inherit”}`;
