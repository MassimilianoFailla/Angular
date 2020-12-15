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
        this.operation = new core_1.EventEmitter();
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
        this.selectedPage = 0;
    };
    // ordinamento per le varie colonne
    // tslint:disable-next-line:typedef
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
    // filtro(){
    //   this.data = this.data.filter((p: any) => p[this.selectedFilter].toString().includes(this.searched));
    // }
    // tslint:disable-next-line:typedef
    TableComponent.prototype.op = function (operation) {
        this.operation.emit(operation);
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
    __decorate([
        core_1.Output()
    ], TableComponent.prototype, "operation");
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
