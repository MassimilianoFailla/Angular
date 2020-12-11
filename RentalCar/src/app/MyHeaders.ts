import { StringMap } from "@angular/compiler/src/compiler_facade_interface";

export class MyHeaders {

    key: string;
    label: string;

    constructor(key: string, label: string) {
        this.key = key;
        this.label = label;
    }

}