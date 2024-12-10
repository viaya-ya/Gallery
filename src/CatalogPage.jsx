import React, { useState } from 'react';
import { Container } from '@mui/material';
import Search from './UI/components/Search';
import CartList from './UI/components/Content/CartList';
import Burger from './UI/components/Burger.jsx';



export default function CatalogPage({ setSnackOpen, carts }) {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <Container>
      <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', gap:'100px' }}>
        <Burger />
        <Search value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      </div>
      <CartList carts={carts} snackOpen={() => setSnackOpen(true)}  searchQuery={searchQuery} />
    </Container>
  );
}
