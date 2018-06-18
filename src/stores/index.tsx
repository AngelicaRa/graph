import { GraphStore } from './GraphStore';
import { LoginStore } from './LoginStore';

const stores = {
  graphStore: new GraphStore(),
  loginStore: new LoginStore()
};

export default stores;