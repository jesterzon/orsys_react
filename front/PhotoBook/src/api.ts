import {User} from './redux/slices/authentication.slice';
import {sleep} from './utils';

export interface LoginForm {
  login: string;
  password: string;
}
class Api {
  public async connect(loginForm: LoginForm): Promise<User> {
    await sleep(2000);
    const response = await fetch('http://10.0.2.2:3000/api/connect', {
      method: 'POST',
      body: JSON.stringify(loginForm),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const status = response.status;
    if (status !== 200) {
      throw new Error('oups...');
    }
    const user: User = await response.json();
    return user;
  }

  public async disconnect(){
    const response = fetch('http://10.0.2.2:3000/api/disconnect', {
      method: 'POST',
    });
  }

  public async isConnected() : Promise<User | undefined>{
    await sleep(2000);
    const response = await fetch('http://10.0.2.2:3000/api/is-connected');
    const status = response.status;
    if (status !== 200) {
     return undefined;
    }
    const user: User = await response.json();
    return user;
  }
}
const api = new Api();
export default api;
