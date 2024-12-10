import React from "react";
import Grid from "@mui/material/Grid";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import img1 from "./image/Voitenko.webp";
import { useSelector } from "react-redux";

const ContactPage = () => {
  const creators = useSelector((state) => state.carts.creators);
  return (
    <Grid
      container
      item
      xs="12"
      md="12"
      spacing={2}
      direction="row"
      justifyContent="space-around"
      alignItems="stretch"
      sx={{
        display: "flex",
        flexDirection: "row",
        height: "100%",
        width: "100%",
        marginTop: "80px",
      }}
    >
      {creators.map((item) => (
        <Card
          sx={{
            height: "350px",
            width: "350px",
            boxShadow: 1, // Добавляем тень по умолчанию
            borderRadius: "10px",
          }}
        >
          <CardMedia
            sx={{ height: "210px", width: "350px" }}
            image={item.avatar}
            title="Картинка"
          />
          <CardContent>
            <Typography variant="h6" sx={{ fontFamily: "Playfair Display" }}>
              ФИО: {item.name}
            </Typography>
            <Typography variant="h6" sx={{ fontFamily: "Playfair Display" }}>
              Вклад в проект: {item.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Grid>
  );
};

export default ContactPage;
