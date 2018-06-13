import { action, observable } from 'mobx';

export class GraphStore {
  @observable graphs;

  @action getGraphs() {
    fetch('http://localhost:3000/graphs')
      .then(response => response.json())
      .then(jsonResponse => this.graphs = jsonResponse);
  }

  @action getGraph() {
    fetch('http://localhost:3000/graphs')
      .then(response => response.json())
      .then(jsonResponse => this.graphs = jsonResponse[0].data);
  }
}