"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DataService = void 0;
var core_1 = require("@angular/core");
var DataService = /** @class */ (function () {
    function DataService() {
        this.text = "Suck dick like a pro you only have to pay 50$ we will teach you best way to suck your sons dick. is she a dauther, no problem we will handel it very well u can use pickle instead";
        this.blogs = [
            { id: 1, title: "Never Play with your Kid wrong anymore", blog: this.text, img: 'https://www.cbc.ca/parents/content/imgs/adopting-gay-dad.jpg' },
            { id: 2, title: "Your kid will never take your condoms anymore", blog: this.text, img: 'https://images.firstpost.com/wp-content/uploads/2013/04/YouTube_Amber.jpg?impolicy=website&width=320&height=180' },
            { id: 3, title: "How to use cock as a real Handle", blog: this.text, img: 'http://media.thisvid.com/contents/videos_screenshots/1292000/1292591/preview.mp4.jpg' },
            { id: 4, title: "Best blowjob you can ever do", blog: this.text, img: 'https://onegirlinlife.files.wordpress.com/2013/02/img_20130216_103953.jpeg' },
            { id: 5, title: "How to kill women corectly, 5 common mistakes", blog: this.text, img: 'https://i1.wp.com/news.bali-villa-arrangements.com/wp-content/uploads/2020/07/amarican-woman-dead.jpg?ssl=1' },
        ];
    }
    DataService.prototype.getAllBlogs = function () {
        return this.blogs;
    };
    DataService.prototype.getById = function (id) {
        for (var i = 0; i < this.blogs.length; i++) {
            if (id == this.blogs[i]['id']) {
                return this.blogs[i];
            }
        }
    };
    DataService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
