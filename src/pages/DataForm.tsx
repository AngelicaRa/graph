import * as React from 'react';
import { TextField, Button, Typography, Grid } from '@material-ui/core';
import { GraphStore } from '../stores/GraphStore';
import { inject, observer } from 'mobx-react';

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
      <form method='POST' autoComplete='off' >
        <label>
          <Typography variant='headline'>Introduce tus datos</Typography>
          <input type='file' name='data' id='data' onChange={this.handleFile}/>
        </label>
        <input type='submit' value='Dibujar'/>
      </form>
    </Grid>;
  }
}