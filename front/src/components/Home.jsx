import React from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Avatar,
} from "@material-ui/core";

const Home = ({ articles }) => {
  return (
    <Grid
      spacing={1}
      container
      direction="row"
      justify="space-evenly"
      alignItems="flex-start"
    >
      {articles &&
        articles.map((article) => {
          return (
            <Grid container item xs={12} sm={4} spacing={1}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="IMAGEN"
                    height="140"
                    image="https://neilpatel.com/wp-content/uploads/2017/08/blog.jpg"
                    title="Articulo blog"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {article.articleTitle}
                    </Typography>

                    <Grid
                      spacing={1}
                      container
                      direction="row"
                      justify="flex-start"
                      alignItems="flex-start"
                    >
                      {article.articleAuthor.map((author) => {
                        return (
                          <Grid container item xs={6} spacing={1}>
                            <Avatar
                              alt="Remy Sharp"
                              src="https://media.gettyimages.com/photos/punk-portrait-picture-id939681086?s=612x612" //{author.profilePicture}
                            />
                            <Typography>
                              {author.firstName} {author.lastName}
                            </Typography>
                          </Grid>
                        );
                      })}
                    </Grid>

                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {article.articleDescription}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
    </Grid>
  );
};

export default Home;
