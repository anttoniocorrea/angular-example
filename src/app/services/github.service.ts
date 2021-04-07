import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private REST_API_SERVER = "https://api.github.com/";

  constructor(private httpClient: HttpClient) { }

  public sendGetUserRequest(user: string) {
    return this.httpClient.get(this.REST_API_SERVER + "users/" + user);
  }
  public sendGetRepoRequest(user: string) {
    return this.httpClient.get(this.REST_API_SERVER + "users/" + user + "/repos");
  }
}
