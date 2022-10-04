import Card from '@mui/material/Card';
import './Home.css';
import Reprodutor from '../playlists/BilieElish';// fazer para cada album..
import ReprodutorBM from '../playlists/BossaNMarley';
import ReprodutorRH from '../playlists/RED_HOT';
import Footer from '../../components/Footer/Footer';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
// colocar o <Reprodutor/> em cada album...
function Home() {
    return (
        <>
            <div className="content" id='BoxCards1'>
                <div className="card1">
                    <Reprodutor/> 
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="140"
                            image={require('../../assets/homepage/bilie.jpg')}
                            alt="Bilie album"
                            />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    This is Bilie Elish
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Billie Eilish Pirate Baird O'Connell, 
                                mais conhecida como Billie Eilish, é uma cantora e compositora estadunidense. 
                                </Typography>
                                </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            Escutar playlist
                            </Button>
                        </CardActions>
                        </Card>
                </div>

                <div className="card2">
                    <ReprodutorBM/> 
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="140"
                            image={require('../../assets/homepage/bossa_NMarley.jpg')}
                            alt="Bilie album"
                            />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Bossa N'Marley
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                   É uma seleção dos classicos do Boby Marley cantados em ritimo de Bossa nova, 
                                   Bossa n' Marley inclui hinos para irmandade universal.
                                </Typography>
                                </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            Escutar playlist
                            </Button>
                        </CardActions>
                        </Card>
                </div>

                <div className="card3">
                    <ReprodutorRH/> 
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="140"
                            image={require('../../assets/homepage/red_Hot.jpg')}
                            alt="Bilie album"
                            />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    This is Red Hot 
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Red Hot Chili Peppers é uma banda de rock dos Estados Unidos formada em Los Angeles, Califórnia, em 13 de fevereiro de 1983.
                                </Typography>
                                </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            Escutar playlist
                            </Button>
                        </CardActions>
                        </Card>
                </div>

                <div className="card5">
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="140"
                            image={require('../../assets/homepage/slipknot.jpg')}
                            alt="Bilie album"
                            />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    This is Slipknot
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Slipknot é uma banda norte-americana de metal formada em Des Moines, Iowa, em 1995. Seu estilo musical é o nu metal,
                                </Typography>
                                </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            Escutar playlist
                            </Button>
                        </CardActions>
                        </Card>
                </div>

            </div>

            <div className="content" id='BoxCards1'>
                <div className="card1">
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="140"
                            image={require('../../assets/homepage/Treino.jpg')}
                            alt="Bilie album"
                            />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Bora treinar!
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Ganhe aquele incentivo na hora no treino da academia, corrida ou em casa! Melhores músicas para dar aquele gás!
                                </Typography>
                                </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            Escutar playlist
                            </Button>
                        </CardActions>
                        </Card>
                </div>

                <div className="card2">
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="140"
                            image={require('../../assets/homepage/number1.jpg')}
                            alt="Bilie album"
                            />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    This is Pabllo Vittar 
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Phabullo Rodrigues da Silva, conhecido por seu nome artístico Pabllo Vittar, é um cantor e drag queen brasileiro
                                </Typography>
                                </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            Escutar playlist
                            </Button>
                        </CardActions>
                        </Card>
                </div>

                <div className="card3">
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="140"
                            image={require('../../assets/homepage/bastille.jpg')}
                            alt="Bilie album"
                            />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    This is Bastille
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Bastille é uma banda de origem britânica formada em Londres, em 2010. Originalmente um projeto solo do cantor Dan Smith
                                </Typography>
                                </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            Escutar playlist
                            </Button>
                        </CardActions>
                        </Card>
                </div>

                <div className="card5">
                    <Card id='cardIt' sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="140"
                            image={require('../../assets/homepage/lastdino.webp')}
                            alt="Bilie album"
                            />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    This is Last Dinosaurs
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Last Dinosaurs é uma banda de rock indie australiana de Brisbane, Queensland. A banda é composta pelo vocalista e guitarrista Sean
                                </Typography>
                                </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            Escutar playlist
                            </Button>
                        </CardActions>
                        </Card>
                </div>

            </div>
            <div id="footer">
                <Footer/>
            </div>
            
            
        </>
    );
  }
  
export default Home;