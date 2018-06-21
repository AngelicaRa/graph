import { action, observable } from 'mobx';
import * as sa from 'superagent';

export class GraphStore {
  @observable graphs;

  @action getAllGraphs() {
    fetch('http://localhost:3000/graphs/' + sessionStorage.getItem('token'))
      .then(response => response.json())
      .then(jsonResponse => this.graphs = jsonResponse);
  }

  @action getFirstGraph() {
    fetch('http://localhost:3000/graphs/' + sessionStorage.getItem('token'))
      .then(response => response.json())
      .then(jsonResponse => this.graphs = jsonResponse[0].data);
  }

  @action sendGraph() {
    sa.post('http://localhost:3000/graphs')
      .end(response => response.json());
  }
}