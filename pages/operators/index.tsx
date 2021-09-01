import { InferGetStaticPropsType } from 'next'
import React, { useState } from 'react';
import {Container} from '../../styles/componentsStyle/styleOperatorIndex'

const Operators = ({listOperators}:any) => {

  const [dataOperator, setDataOperator]=useState(listOperators);
  const [nameOperator, setNameOperator]=useState<string>('');

  const handlerSubmit= async () => {
    const response = await fetch('/api/operator', {
      method: 'POST',
      body: JSON.stringify({ nameOperator }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    console.log(data);
    setDataOperator(data)
  }


    return (
        <Container>
            <div>
                <label>Operators list :</label>
                <ul>
                    {dataOperator.map((op:any) => (
                    <li key={op.id}>
                        <div>
                        <span>{op.name}</span>
                        </div>
                    </li>
                    ))}
                </ul>
            </div>
            <div>
              <form onSubmit={handlerSubmit}> 
                  <label>Ajout d'un nouveau operator:</label><br></br>
                  <input value={nameOperator}  type="text" onChange={e=>setNameOperator(e.target.value)}/>
                  <input type="submit" value="Add New Operator"/>
              </form>
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