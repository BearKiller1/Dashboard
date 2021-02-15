"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthorizeService = void 0;
var core_1 = require("@angular/core");
var AuthorizeService = /** @class */ (function () {
    function AuthorizeService(http) {
        this.http = http;
        this.loginlink = "http://localhost/loginExample/API/login.php";
        this.signuplink = "http://localhost/loginExample/API/signup.php";
    }
    AuthorizeService.prototype.singUp = function (user, pwd, mail, gender) {
        return this.http.get(this.signuplink + '?username=' + user + '&password=' + pwd + '&email=' + mail + '&gender=' + gender);
    };
    ;
    AuthorizeService.prototype.login = function (user, pwd) {
        return this.http.get(this.loginlink + '?username=' + user + '&password=' + pwd).subscribe(function (tmp) {
            localStorage.setItem("token", tmp.result);
        });
    };
    AuthorizeService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthorizeService);
    return AuthorizeService;
}());
exports.AuthorizeService = AuthorizeService;
