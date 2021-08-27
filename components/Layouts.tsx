import React, { ReactNode } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';

type Props={
    children:ReactNode
}

const Layouts:React.FC<Props> = ({children}) => {
    return (
        <div>
            <NavBar/>
            {children}
            <Footer/>
        </div>
    );
}

export default Layouts;
