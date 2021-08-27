import { InferGetStaticPropsType } from 'next'
import React from 'react';
import AddOperators from '../../components/operators/AddOperators';
import styled from 'styled-components';
import { fontFamily, fontSize, gray2, accent1, gray5 } from '../../styles/styles';

const Operators = ({listOperators}:any) => {

const Container = styled.div`
  width: 800px;
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


    return (
        <Container>
            <div>
                <label>Operators list :</label>
            {/* <ul>
                    {listOperators.map((op:any) => (
                        <li key={op.id}>{op.name}</li>
                    ))}
                </ul> */}

                <ul>
                    {listOperators.map((op:any) => (
                    <li key={op.id}>
                        <div>
                        <span>{op.name}</span>
                        </div>
                    </li>
                    ))}
                </ul>

            </div>
            <div>
             <AddOperators />
            </div>
        </Container>
    );
}

export default Operators;


type Data = {
    id: number
    name: string
  }
  
  export const getStaticProps = async () => {
    const res = await fetch('http://localhost:3000/api/operators')
    const data: Data[] = await res.json()
  
    return {
      props: {listOperators:data}
    }
  }