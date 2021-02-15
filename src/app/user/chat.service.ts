import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  msglink = "http://localhost/loginExample/API/messages.php";
  postmsglink = "http://localhost/loginExample/API/post.messages.php";

  constructor(private http:HttpClient) { }

  addMsg(ID:number,message:any): any{
    var api = localStorage.getItem("token");
    alert(api);
    return this.http.get(this.postmsglink + '?api_key=' + api + '&message=' + message + '&to=' + ID);
  }

  getComents(id:any): any{
    var api_key = localStorage.getItem("token");
    return this.http.get(this.msglink + '?api_key=' + api_key);
  }
}
