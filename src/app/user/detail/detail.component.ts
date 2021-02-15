import { Component, OnInit } from '@angular/core';

import {ActivatedRoute } from '@angular/router';
import {DataService} from '../data.service';
import {ChatService} from '../chat.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  message:any;
  data:any;
  id:any;
  comments:any;

  constructor(
    private route:ActivatedRoute, 
    private Obj:DataService,
    private chat:ChatService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.data = this.Obj.getById(this.id);
    this.chat.getComents(this.id).subscribe( (tmp:any) =>{
      console.log(tmp);
    });
  }
  comment(text:any){
    this.message = text.target.value;
  }

  addComent(){
    this.chat.addMsg(this.id, this.message);
  }
}
