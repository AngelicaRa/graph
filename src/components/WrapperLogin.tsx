import * as React from 'react';
import { inject } from 'mobx-react';


@inject('loginStore')
export class WrapperLog extends React.Component {
  renderPublic() {

  }

  renderPrivate() {

  }

  render() {
    return <div></div>;
  }
}