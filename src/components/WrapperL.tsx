import * as React from 'react';
import { inject } from 'mobx-react';


@inject('loginStore')
export class WrapperL extends React.Component {
  constructor(props) {
    super(props);

    this.renderPrivate = this.renderPrivate.bind(this);
    this.renderPublic = this.renderPublic.bind(this);
  }
  renderPublic() {}
  renderPrivate() {}

  render() {
    return <div></div>;
  }
}