"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ChatService = void 0;
var core_1 = require("@angular/core");
var ChatService = /** @class */ (function () {
    function ChatService(http) {
        this.http = http;
        this.msglink = "http://localhost/loginExample/API/messages.php";
        this.postmsglink = "http://localhost/loginExample/API/post.messages.php";
    }
    ChatService.prototype.addMsg = function (ID, message) {
        var api_key = localStorage.getItem("token");
        alert(api_key);
        return this.http.get(this.postmsglink + '?api_key=' + api_key + '&message=' + message + '&to=' + ID);
    };
    ChatService.prototype.getComents = function () {
        var api_key = localStorage.getItem("token");
        return this.http.get(this.msglink + '?api_key=' + api_key);
    };
    ChatService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ChatService);
    return ChatService;
}());
exports.ChatService = ChatService;
