import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function Home() {
    return (
        <>
        <div className="content">
            <div className="card1">
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image="../../assets/homepage/bilie.jpg"
                    alt="Discos"
                    />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Listen Bilie Elish
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Bilie is the best artist int the rock
                        </Typography>
                        </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                </CardActions>
                </Card>

                <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image="../../assets/homepage/AcDc.jpg"
                    alt="green iguana"
                    />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            AcDc
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                        </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                </CardActions>
                </Card>

                <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image="../../assets/homepage/Cozinhando.jpeg"
                    alt="green iguana"
                    />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Cozinhando e cantando
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                        </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                </CardActions>
                </Card>

                <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image="../../assets/homepage/Discos.jpg"
                    alt="green iguana"
                    />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Moda Discol....
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                        </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                </CardActions>
                </Card>

                <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image="../../assets/homepage/FocoNoTrabalho.jpeg"
                    alt="green iguana"
                    />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Foco no trabalho.
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                        </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                </CardActions>
                </Card>

                <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image="../../assets/homepage/red_Hot.jpg"
                    alt="green iguana"
                    />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Red Hot Chili Peppers Californication
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                        </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                </CardActions>
                </Card>
            </div>

        </div>
            
        </>
    );
  }
  
export default Home;