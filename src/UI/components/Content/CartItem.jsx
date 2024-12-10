  import React, { useState } from 'react';
  import Grid from '@mui/material/Grid';
  import { Card, CardContent, CardMedia, Typography, Dialog, DialogTitle, DialogContent, DialogActions, IconButton } from '@mui/material';
  import CloseIcon from '@mui/icons-material/Close';
  import styles from '../Text.module.css'; // Импорт CSS-модуля

  export default function CartItem({ img, description, author, texnika, size}) {
    
    const [open, setOpen] = useState(false); // Состояние для отслеживания открытого ли модальное окно

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <Grid item xs='12' md='3'>
        <Card sx={{ 
            height: '100%', 
            width: '100%', 
            boxShadow: 1, // Добавляем тень по умолчанию
            borderRadius:'10px',
            '&:hover': { // Эффект при наведении
              boxShadow: 5, // Увеличиваем тень при наведении
              cursor:'pointer'
            }
          }}>
          <CardMedia
            sx={{ height: 200}}
            image={img}
            title="Картинка"
            onClick={handleOpen} // Открываем модальное окно при клике на картинку
          />
          <CardContent>
            <Typography variant='h6' sx={{fontFamily:'Playfair Display'}}>Техника: {texnika}</Typography>
            <Typography variant='h6' sx={{fontFamily:'Playfair Display'}}>Размер: {size}</Typography>
            <Typography variant='h6' sx={{fontFamily:'Playfair Display' }}>Автор: {author}</Typography>
          </CardContent>
        </Card>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle className={styles.text}>Подробнее о товаре</DialogTitle>
          <DialogContent>
            <img src={img} alt="Детальное изображение" style={{ width: '100%', height: 'auto' }} />
            <Typography variant="body1" className={styles.text}>Описание: {description}</Typography>
            <Typography variant="body1" className={styles.text}>Автор: {author}</Typography>
          </DialogContent>
          <DialogActions>
            <IconButton
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
              }}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </DialogActions>
        </Dialog>
      </Grid>
    );
  }
