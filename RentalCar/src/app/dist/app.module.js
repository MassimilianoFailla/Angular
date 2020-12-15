"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var slider_1 = require("@angular/material/slider");
var icon_1 = require("@angular/material/icon");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var button_1 = require("@angular/material/button");
var app_component_1 = require("./app.component");
var animations_1 = require("@angular/platform-browser/animations");
var button_component_1 = require("./button/button.component");
var table_component_1 = require("./table/table.component");
var ng2_search_filter_1 = require("ng2-search-filter");
var forms_1 = require("@angular/forms");
var select_1 = require("@angular/material/select");
var ngx_pagination_1 = require("ngx-pagination");
var pagination_pipe_1 = require("./pipe/pagination.pipe");
var search_filter_pipe_1 = require("./pipe/search-filter.pipe");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                button_component_1.ButtonComponent,
                table_component_1.TableComponent,
                pagination_pipe_1.PaginationPipe,
                search_filter_pipe_1.SearchFilterPipe,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                slider_1.MatSliderModule,
                icon_1.MatIconModule,
                button_1.MatButtonModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                select_1.MatSelectModule,
                ng2_search_filter_1.Ng2SearchPipeModule,
                forms_1.FormsModule,
                ngx_pagination_1.NgxPaginationModule,
            ],
            exports: [],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
