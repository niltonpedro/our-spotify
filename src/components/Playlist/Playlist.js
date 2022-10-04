import * as React from 'react';
import './Playlist.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import bilie from '../../assets/homepage/bilie.jpg';
import acdc from '../../assets/homepage/AcDc.jpg';
import bastille from '../../assets/homepage/bastille.jpg';
import bossaMarley from '../../assets/homepage/bossaMarley.jpg';
import lastdino from '../../assets/homepage/lastdino.webp';
import number1 from '../../assets/homepage/number1.jpg';
import redHot from '../../assets/homepage/red_Hot.jpg';
import slipknot from '../../assets/homepage/slipknot.jpg';


export default function Playlist() {
    const dadosPlays = [
        {
            id: 1,
            title: 'this is bilie Elish', 
            description: 'Billie Eilish Pirate Baird OConnell,mais conhecida como Billie Eilish, é uma cantora e compositora estadunidense.', 
            callAction: 'Escutar Playlist bilie!',
            image: bilie
        },
        {
            id: 2,
            title: 'Bossa NMarley', 
            description: 'É uma seleção dos classicos do Boby Marley cantados em ritmo de Bossa nova, Bossa n Marley inclui hinos para irmandade universal.', 
            callAction: 'Escutar Playlist BossaNmarley!',
            image: bossaMarley
        },
        {
            id: 3,
            title: 'this is Red Hot', 
            description: 'Billie Eilish Pirate Baird OConnell,mais conhecida como Billie Eilish, é uma cantora e compositora estadunidense.', 
            callAction: 'Escutar Playlist bilie!',
            image: redHot
        },
        ,
        {
            id: 4,
            title: 'this ACDC', 
            description: 'Billie Eilish Pirate Baird OConnell,mais conhecida como Billie Eilish, é uma cantora e compositora estadunidense.', 
            callAction: 'Escutar Playlist bilie!',
            image: acdc
        },
        ,
        {
            id: 5,
            title: 'this is Bastile', 
            description: 'Billie Eilish Pirate Baird OConnell,mais conhecida como Billie Eilish, é uma cantora e compositora estadunidense.', 
            callAction: 'Escutar Playlist bilie!',
            image: bastille
        },
        {
            id: 6,
            title: 'this is Last Dinassour', 
            description: 'Last dinoussaur is Baird OConnell,mais conhecida como Billie Eilish, é uma cantora e compositora estadunidense.', 
            callAction: 'Escutar Playlist bilie!',
            image: lastdino
        },
        {
            id: 7,
            title: 'this is Pablo Vittar', 
            description: 'Billie Eilish Pirate Baird OConnell,mais conhecida como Billie Eilish, é uma cantora e compositora estadunidense.', 
            callAction: 'Escutar Playlist bilie!',
            image: number1
        },
        {
            id: 8,
            title: 'this is Slipknot', 
            description: 'Billie Eilish Pirate Baird OConnell,mais conhecida como Billie Eilish, é uma cantora e compositora estadunidense.', 
            callAction: 'Escutar Playlist bilie!',
            image: slipknot
        },

    ]

   return(
    // <div>
        <div className="cardlist"> 
            {dadosPlays.map((play, index) => (
                <Card sx={{ maxWidth: 345 }} className="uniqueCard" key={index} >
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image={play.image}
                        alt="Bilie album"
                        />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {play.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {play.description} 
                            </Typography>
                            </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            {play.callAction}
                        </Button>
                    </CardActions>
                </Card>
            ))}
                
        </div>
    // </div>
   );
};

