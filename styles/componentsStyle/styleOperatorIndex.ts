
import styled from 'styled-components';
import { fontFamily, fontSize, gray2, accent1, gray5 } from '../../styles/styles';

export const Container = styled.div`
width: 800px;
height:70vh;
margin: 30px auto;
font-family: ${fontFamily};
font-size: ${fontSize};
color: ${gray2};
ul {
  list-style: none;
  padding: 0px 20px;
  background-color: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top: 3px solid ${accent1};
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
  li {
    padding: 10px 0px;
    border-top: 1px solid ${gray5};
    text-align:center;
    :first-of-type {
      border-top: none;
    }
  }
}
`;