import { authFetch } from './fetch';
import { Article } from './redux/slices/article.slice';
import {User} from './redux/slices/authentication.slice';
import {sleep} from './utils';
export const domain = 'http://10.0.2.2:3000';
export const apiUrl = `${domain}/api`;

export interface LoginForm {
  login: string;
  password: string;
}
class Api {
  public async addNewArticle(article: Article) {
    const url = apiUrl + '/articles';
    console.log('url: ', url);

    const response = await authFetch(url, {
      method: 'POST',
      body: JSON.stringify(article),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
  }

  public async getArticles(): Promise<Article[]> {
    const response = await authFetch(apiUrl + '/articles');
    return await response.json();
  }

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
