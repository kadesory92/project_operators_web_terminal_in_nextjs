import styled from 'styled-components';
import Link from 'next/link';

const FooterStyle = styled.div`
  background: #000;
  color: #fff;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
    return (
        <FooterStyle>
            <p>Copyright 2021 Bana-Tech</p>
        </FooterStyle>
    );
}

export default Footer;
