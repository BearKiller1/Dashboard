import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  text = "Suck dick like a pro you only have to pay 50$ we will teach you best way to suck your sons dick. is she a dauther, no problem we will handel it very well u can use pickle instead";
  blogs = [
    {id:1, title:"Never Play with your Kid wrong anymore", blog:this.text, img:'https://www.cbc.ca/parents/content/imgs/adopting-gay-dad.jpg'},
    {id:2, title:"Your kid will never take your condoms anymore", blog:this.text, img:'https://images.firstpost.com/wp-content/uploads/2013/04/YouTube_Amber.jpg?impolicy=website&width=320&height=180'},
    {id:3, title:"How to use cock as a real Handle", blog:this.text, img:'http://media.thisvid.com/contents/videos_screenshots/1292000/1292591/preview.mp4.jpg'},
    {id:4, title:"Best blowjob you can ever do", blog:this.text, img:'https://onegirlinlife.files.wordpress.com/2013/02/img_20130216_103953.jpeg'},
    {id:5, title:"How to kill women corectly, 5 common mistakes", blog:this.text, img:'https://i1.wp.com/news.bali-villa-arrangements.com/wp-content/uploads/2020/07/amarican-woman-dead.jpg?ssl=1'},
  ];
  constructor() { }
  getAllBlogs(){
    return this.blogs;
  }
  getById(id:any): any{
    for (let i = 0; i < this.blogs.length; i++) {
      if (id == this.blogs[i]['id']) {
        return this.blogs[i];
      }
    }
  }
}
