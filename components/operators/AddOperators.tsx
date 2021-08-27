import React from 'react';
import styled from 'styled-components';

const AddOperators = () => {

    const Input = styled.input`
        border: 2px solid silver;
        border-radius: 2px;
        text-align: center;
        font-size: 1em;`

    
    return (
        <div>
            <form>
                <label>Ajout d'un nouveau operator:</label><br></br>
                <Input type="text" />
                <input type="submit" value="Ajouter" />
            </form>
        </div>
    );
}

export default AddOperators;
