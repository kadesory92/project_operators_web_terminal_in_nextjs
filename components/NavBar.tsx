import React from 'react';
import Link from 'next/link'
import styled from "styled-components"

const Title =styled.h1`
    font-size:1.5em;
    font-family: fangsong, "Lucida Console", Courier, monospace;
    text-align:center;
    position:relative;
    z-index:2;`;

const Container = styled.div`
    display: flex;
    justify-content:space-evenly;
    align-items: center;
    height:90px;
    color: white;
    background-color: #131A22;
    
    a{
        text-decoration:none;
        color:blue;
        font-size:18px;
        padding:3px;
        margin-right:5px;
        border : 1px solid black ;
        position:relative;
        text-align:right;
        :visited{text-decoration:none; color:#ff00ff;font-weight:bold;};
        :hover{text-decoration:underline; color:blue;};
        :active{text-decoration:none; color:#00ff00;font-style:italic;};
        :link{text-decoration:none; color:#ff0000;};
    }`



const NavBar = () => {
    return (
        <Container>
            <Title>Web Terminal for operators !</Title>
            <nav>
                <Link href="/"><a>Home</a></Link>
                <Link href="/operators"><a>Operators List</a></Link>
                <Link href="/"><a>List Abonnments</a></Link>
                <Link href="/about"><a>About</a></Link>
            </nav>
        </Container>
    );
}

export default NavBar;
