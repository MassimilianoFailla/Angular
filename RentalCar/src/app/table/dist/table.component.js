"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TableComponent = void 0;
var core_1 = require("@angular/core");
var _ = require("lodash");
var TableComponent = /** @class */ (function () {
    function TableComponent() {
    }
    TableComponent.prototype.ngOnInit = function () {
        // configurazione dell'ordinamento
        this.orderConfig = this.tableConfig.order.orderType;
        if (this.tableConfig.order.orderType === 'asc') {
            this.data = _.orderBy(this.data, [this.tableConfig.order.defaultColumn], ['asc']);
            this.orderConfig = 'asc';
            this.icon = 'arrow_drop_down';
        }
        else {
            this.data = _.orderBy(this.data, [this.tableConfig.order.defaultColumn], ['desc']);
            this.orderConfig = 'desc';
            this.icon = 'arrow_drop_up';
        }
        // paginazione
        this.perPage = this.tableConfig.pagination.itemPerPage;
        this.selectedPage = 1;
    };
    // ordinamento per le varie colonne
    TableComponent.prototype.sort = function (key) {
        if (this.orderType === 'desc') {
            this.data = _.orderBy(this.data, [key], ['asc']);
            this.orderType = 'asc';
            this.icon = 'arrow_drop_down';
        }
        else {
            this.data = _.orderBy(this.data, [key], ['desc']);
            this.icon = 'arrow_drop_up';
            this.orderType = 'desc';
        }
    };
    TableComponent.prototype.filtro = function () {
        var _this = this;
        this.data = this.data.filter(function (p) { return p[_this.selectedFilter].toString().includes(_this.searched); });
    };
    __decorate([
        core_1.Input()
    ], TableComponent.prototype, "tableConfig");
    __decorate([
        core_1.Input()
    ], TableComponent.prototype, "data");
    __decorate([
        core_1.Input()
    ], TableComponent.prototype, "orderConfig");
    __decorate([
        core_1.Input()
    ], TableComponent.prototype, "icon");
    __decorate([
        core_1.Input()
    ], TableComponent.prototype, "searchConfig");
    __decorate([
        core_1.Input()
    ], TableComponent.prototype, "paginationConfig");
    TableComponent = __decorate([
        core_1.Component({
            selector: 'app-table',
            templateUrl: './table.component.html',
            styleUrls: ['./table.component.css']
        })
    ], TableComponent);
    return TableComponent;
}());
exports.TableComponent = TableComponent;
