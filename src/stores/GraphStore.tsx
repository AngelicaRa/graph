import { action, observable } from 'mobx';
import * as sa from 'superagent';

export class GraphStore {
  @observable graphs;

  @action getAllGraphs() {
    // return new Promise((resolve, reject) => {
    //   fetch('http://localhost:3000/graphs/' + sessionStorage.getItem('token'))
    //     .then(response => response.json())
    //     .then(jsonResponse => {
    //       this.graphs = jsonResponse;
    //       resolve(jsonResponse);
    //     });
    // });
    fetch('https://api.easygraph.me/graphs/' + localStorage.getItem('token'))
      .then(response => response.json())
      .then(jsonResponse => {
        this.graphs = jsonResponse;
        console.log('Graphs en store actualizadas');
    });
  }

  @action getFirstGraph() {
    fetch('https://api.easygraph.me/graphs/' + localStorage.getItem('token'))
      .then(response => response.json())
      .then(jsonResponse => this.graphs = jsonResponse[0].data);
  }

  @action sendGraph() {
    sa.post('https://api.easygraph.me/graphs')
      .end(response => response.json());
  }
}
