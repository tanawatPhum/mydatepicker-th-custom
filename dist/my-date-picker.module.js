import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { MyDatePickerTH } from "./my-date-picker.component";
import { FocusDirective } from "./directives/my-date-picker.focus.directive";
export var MyDatePickerTHModule = (function () {
    function MyDatePickerTHModule() {
    }
    MyDatePickerTHModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule],
                    declarations: [MyDatePickerTH, FocusDirective],
                    exports: [MyDatePickerTH, FocusDirective]
                },] },
    ];
    MyDatePickerTHModule.ctorParameters = [];
    return MyDatePickerTHModule;
}());
//# sourceMappingURL=my-date-picker.module.js.map