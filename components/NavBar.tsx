import React from 'react';
import Link from 'next/link'
import styled from "styled-components"
import Head from 'next/head';

const Nav = styled.nav`
  height: 90px;
  background: #000;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: #fff;
  border-botom: 0.5 px solid black;
`;

const StyledLink = styled.a`
  padding: 0rem 2rem;
  hover
    background-color: #111;
`;

const Menu=styled.div`
text-align: right;
margin-right:0;
justify-content: space-evenly;`

const NavBar = () => {
    return (
        <>
            <Head>
            <title>Web Terminal for Operator</title>
            <link rel='icon' href='/favicon.ico' />
            </Head>
            <nav>
                <div>
                    <Link href='/' passHref>
                        <StyledLink>BANA-TECH APP</StyledLink>
                    </Link>
                </div>
                <Menu>
                    <Link href="/" passHref><StyledLink>Home</StyledLink></Link>
                    <Link href="/operators" passHref><StyledLink>Operators List</StyledLink></Link>
                    <Link href="/list-abonnment" passHref><StyledLink>List Abonnments</StyledLink></Link>
                    <Link href="/about" passHref><StyledLink>About</StyledLink></Link>
                </Menu>
            </nav>
        </>
        
    );
}

export default NavBar;
