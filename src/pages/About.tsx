import * as React from 'react';
import { Typography, Card, CardContent, CardActions, Button, Grid } from '@material-ui/core';

export class About extends React.Component {
  render() {
    return <Grid container>
      <Grid item sm={12}>
        <Typography variant='headline' component='h1' align='center'>Sobre nosostros</Typography>
      </Grid>

      <Grid item sm={6}>
        <Card>
          <CardContent>
            <Typography color='textSecondary'>
              Murloc Leader
            </Typography>
            <Typography variant='headline' component='h2'>
              pablo Martin
            </Typography>
            <Typography component='p' color='textSecondary'>
              Rascador de barriga profesional. En ocasiones piensa en hacer tests.<br />
              let yo = undefined
            </Typography>
          </CardContent>
          <CardActions>
            <a style={{ textDecoration: 'none' }} href='https://twitter.com/lunkito/'><Button style={{ color: 'white', background: '#006dbf' }} size='small'>Twitter</Button></a>
          </CardActions>
        </Card>
      </Grid>
      <Grid item sm={6}>
        <img
        style={{ width: '172px', height: '172px', borderRadius: '50%', position: 'relative', left: '50px' }}
        src='https://vignette.wikia.nocookie.net/doge/images/c/cd/Dogelin.jpeg/revision/latest?cb=20141215213304&path-prefix=es'
        alt='Foto de Pablo'/>
      </Grid>
      <Grid item sm={6}>
        <Card>
          <CardContent>
            <Typography color='textSecondary'>
              El que te apetezca
            </Typography>
            <Typography variant='headline' component='h2'>
              Angélica Ravelo
            </Typography>
            <Typography component='p' color='textSecondary'>
              Var forever LALA<br />
            </Typography>
          </CardContent>
          <CardActions>
            <a style={{ textDecoration: 'none' }} href='https://twitter.com/arianrhodgeli/'><Button style={{ color: 'white', background: '#006dbf' }} size='small'>Twitter</Button></a>
          </CardActions>
        </Card>
      </Grid>
      <Grid item sm={6}>
        <img
        style={{ width: '172px', height: '172px', borderRadius: '50%', position: 'relative', left: '50px' }}
        src='http://jp5.r0tt.com/l_dd10abb0-c75b-11e1-9274-815cb4b00005.jpg'
        alt='Foto de Angélica'/>
      </Grid>
    </Grid>;
  }
}