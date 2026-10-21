import styled from 'styled-components';
import Header from './Header';
import { demoMode } from '../apollo/client';
import Footer from './Footer';
import type { ReactNode } from 'react';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
`;

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Wrapper>
      <Header />
      {demoMode && <div style={{ padding: 12, textAlign: 'center', background: '#f1dfc1', color: '#513e23' }}>DEMO CATALOG — Fictional brands, instruments, prices and musicians</div>}
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
}
