"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RegisterComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(Obj, route, router) {
        this.Obj = Obj;
        this.route = route;
        this.router = router;
        this.registerGroup = new forms_1.FormGroup({
            mail: new forms_1.FormControl(''),
            username: new forms_1.FormControl(''),
            gender: new forms_1.FormControl(''),
            password: new forms_1.FormControl(''),
            repeat: new forms_1.FormControl('')
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.regist = function () {
        var _this = this;
        this.data = this.registerGroup.value;
        if (this.data.password == this.data.repeat) {
            this.Obj.singUp(this.data.username, this.data.password, this.data.mail, this.data.gender).subscribe(function (tmp) {
                console.log(tmp);
                _this.router.navigate(["../login"], { relativeTo: _this.route });
            });
        }
        else {
            alert("reoeat password correctly");
        }
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.scss']
        })
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
