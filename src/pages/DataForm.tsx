import * as React from 'react';
import { TextField, Button, Typography, Grid } from '@material-ui/core';
import { GraphStore } from '../stores/GraphStore';
import { inject, observer } from 'mobx-react';
import { Logo } from '../components/Logo';
import { FileUpload } from '@material-ui/icons';

const style: any = {
  input: {
    marginLeft: '20px',
    marginRight: '20px',
    display: 'block',
  },
  button: {
    marginLeft: '20px',
    marginRight: '20px',
    display: 'block',
    background: '#63c98C'
  },
  form: {
    display: 'flex',
    placeItems: 'center',
    width: '100%',
    height: '100%'
  }
};

export interface DataFormProps {
  graphStore?: GraphStore;
}

export interface DataFormState {
  file: File;
}

@inject('graphStore')
@observer
export class DataForm extends React.Component<DataFormProps, DataFormState> {
  constructor(props) {
    super(props);

    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFile(event) {
    this.setState({file: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.graphStore.sendGraph();
  }

  render() {
    return <Grid item sm={12}>
      <Logo width='600px' height='350px'/>
      <form method='POST' autoComplete='off' style={{ position: 'relative', top: '-40px'}} >
        <Typography variant='headline' style={{ textAlign: 'center' }}>Introduce tus datos</Typography>
        <Button variant='raised' component='label' style={{ marginLeft: '190px', marginTop: '20px', background: '#63c98C', color: 'white' }}>
          <FileUpload />
          <input onClick={this.handleFile} style={{ display: 'none' }} type='file' name='file' id='file' />
        </Button>
        <Button variant='raised' onClick={this.handleSubmit} type='submit' style={{ marginLeft: '30px', marginTop: '20px', background: '#63c98C' }}>
          <Typography variant='subheading' style={{ color: 'white'}} >Guardar</Typography>
        </Button>
      </form>
    </Grid>;
  }
}