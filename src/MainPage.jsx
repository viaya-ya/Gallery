import React from 'react'
import classes from './MainPage.module.css'
import Container from '@mui/material/Container'
import { Typography, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import  picture1 from './image/1.webp'
import  picture2 from './image/2.webp'
import  picture3 from './image/3.webp'
import  picture4 from './image/4.webp'
import  picture5 from './image/5.webp'
import  picture6 from './image/6.webp'

export default function MainPage() {
  return (
    <div className={classes.style}>
      <Container style={{ marginTop: '110px'}}>
        <Grid container>

            <Grid item sx={{ display: 'flex', gap: '80px' }}>
            <Box style={{ display: 'flex', gap: '10px', cursor: 'pointer' }}>
            <CardMedia
              component="img"
              image={picture1}
              alt="Описание изображения"
              sx={{
                width: '190px',
                height: '280px',
                transform: 'rotate(-30deg)',
                margin: '-10px',
                zIndex: 1, // Устанавливаем начальное значение zIndex
                borderRadius:'10px',
                ':hover': {
                  boxShadow: '0 0 10px rgba(0,0,0,0.5)', // Добавляет тень при наведении
                  zIndex: 2, // Увеличиваем значение zIndex при наведении
                },
              }}
            />

            <CardMedia
              component="img"
              image={picture2}
              alt="Описание изображения"
              sx={{
                width: '170px',
                height: '240px',
                transform: 'rotate(-10deg)',
                zIndex: 1, // Устанавливаем начальное значение zIndex
                borderRadius:'10px',
                ':hover': {
                  boxShadow: '0 0 10px rgba(0,0,0,0.5)', // Добавляет тень при наведении
                  zIndex: 2, // Увеличиваем значение zIndex при наведении
                },
              }}
            />

            <CardMedia
              component="img"
              image={picture3}
              alt="Описание изображения"
              sx={{
                width: '200px',
                height: '290px',
                transform: 'rotate(50deg)',
                margin: '-10px',
                zIndex: 1, // Устанавливаем начальное значение zIndex
                borderRadius:'10px',
                ':hover': {
                  boxShadow: '0 0 10px rgba(0,0,0,0.5)', // Добавляет тень при наведении
                  zIndex: 2, // Увеличиваем значение zIndex при наведении
                },
              }}
            />
          </Box>
          <Typography sx={{ marginTop:'20px', marginLeft:'30px', textAlign:'center',lineHeight: '1.8',fontFamily:'Playfair Display'}}>Наша цель - просвещение населения в области культуры с помощью популяризации искусства крымских художников с помощью цифровых технологий в интернет-пространстве.</Typography>
            </Grid>

            <Grid item  sx={{ display: 'flex', gap: '80px', marginTop:'70px' }}>
            <Typography sx={{ marginTop:'70px', marginRight:'10px', textAlign:'center',lineHeight: '2',fontFamily:'Playfair Display'}}>Мы помогаем малоизвестным художникам, у нас каждый посетитель сможет ознакомиться с творчеством крымских художников.</Typography>
          <Box style={{ display: 'flex', gap: '10px', cursor: 'pointer', float: 'right' }} >
            <CardMedia
              component="img"
              image={picture4}
              alt="Описание изображения"
              sx={{
                width: '190px',
                height: '280px',
                transform: 'rotate(-60deg)',
                margin: '-10px',
                zIndex: 1, // Устанавливаем начальное значение zIndex
                borderRadius:'10px',
                ':hover': {
                  boxShadow: '0 0 10px rgba(0,0,0,0.5)', // Добавляет тень при наведении
                  zIndex: 2, // Увеличиваем значение zIndex при наведении
                },
              }}
            />

            <CardMedia
              component="img"
              image={picture5}
              alt="Описание изображения"
              sx={{
                width: '170px',
                height: '240px',
                transform: 'rotate(-10deg)',
                zIndex: 1, // Устанавливаем начальное значение zIndex
                borderRadius:'10px',
                ':hover': {
                  boxShadow: '0 0 10px rgba(0,0,0,0.5)', // Добавляет тень при наведении
                  zIndex: 2, // Увеличиваем значение zIndex при наведении
                },
              }}
            />

            <CardMedia
              component="img"
              image={picture6}
              alt="Описание изображения"
              sx={{
                width: '200px',
                height: '290px',
                transform: 'rotate(10deg)',
                margin: '-10px',
                zIndex: 1, // Устанавливаем начальное значение zIndex
                borderRadius:'10px',
                marginBottom:'30px',
                ':hover': {
                  boxShadow: '0 0 10px rgba(0,0,0,0.5)', // Добавляет тень при наведении
                  zIndex: 2, // Увеличиваем значение zIndex при наведении
                },
              }}
            />
          </Box>
            </Grid>
        </Grid>

        {/* <Box style={{ display: 'flex', gap: '80px' }}>
          
        </Box>


        <Box style={{ display: 'flex', gap: '80px', marginTop:'70px' }} className={classes.style}>
         
        </Box>  */}

      </Container>
    </div>
  )
}
