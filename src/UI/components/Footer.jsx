import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2, // добавляем отступы
      }}
    >
      <Typography variant="h6" component="div">
      Электронная галерея 
      </Typography>
      <Typography variant="body2" component="div">
        © 2024  Веб-сайт: Электронная галерея. Все права защищены.
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: 2, // добавляем отступ сверху
        }}
      >
      </Box>
    </Box>
  );
}

export default Footer;
