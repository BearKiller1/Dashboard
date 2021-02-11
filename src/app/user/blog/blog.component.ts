import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  data:any;
  constructor(private Obj:DataService) { }

  ngOnInit(): void {
    this.data = this.Obj.getAllBlogs();
  }

}
