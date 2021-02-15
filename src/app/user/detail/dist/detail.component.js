"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DetailComponent = void 0;
var core_1 = require("@angular/core");
var DetailComponent = /** @class */ (function () {
    function DetailComponent(route, Obj, chat) {
        this.route = route;
        this.Obj = Obj;
        this.chat = chat;
    }
    DetailComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get('id');
        this.data = this.Obj.getById(this.id);
        this.comments = this.chat.getComents();
    };
    DetailComponent.prototype.comment = function (text) {
        this.message = text.target.value;
    };
    DetailComponent.prototype.addComent = function () {
        this.chat.addMsg(this.id, this.message);
    };
    DetailComponent = __decorate([
        core_1.Component({
            selector: 'app-detail',
            templateUrl: './detail.component.html',
            styleUrls: ['./detail.component.scss']
        })
    ], DetailComponent);
    return DetailComponent;
}());
exports.DetailComponent = DetailComponent;
