/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input } from '@angular/core';
import { HmctsrolesLibService } from '../hmctsroles-lib.service';
export class UnlessRoleIncludesDirective {
    /**
     * @param {?} elr
     * @param {?} auth
     */
    constructor(elr, auth) {
        this.elr = elr;
        this.auth = auth;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        let authorised;
        this.roles = this.roleList.split(',');
        authorised = this.checkRoleisValid();
        console.log('auth', authorised);
        if (authorised)
            this.elr.nativeElement.style.visibility = 'hidden';
        else
            this.elr.nativeElement.style.visibility = 'visible';
    }
    /**
     * @return {?}
     */
    checkRoleisValid() {
        return this.roles.some(r => this.unlessRole.split(',').includes(r));
    }
}
UnlessRoleIncludesDirective.decorators = [
    { type: Directive, args: [{
                selector: "[unlessRole]"
            },] },
];
/** @nocollapse */
UnlessRoleIncludesDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HmctsrolesLibService }
];
UnlessRoleIncludesDirective.propDecorators = {
    unlessRole: [{ type: Input }],
    roleList: [{ type: Input }],
    roleSource: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    UnlessRoleIncludesDirective.prototype.unlessRole;
    /** @type {?} */
    UnlessRoleIncludesDirective.prototype.roleList;
    /** @type {?} */
    UnlessRoleIncludesDirective.prototype.roleSource;
    /** @type {?} */
    UnlessRoleIncludesDirective.prototype.roles;
    /** @type {?} */
    UnlessRoleIncludesDirective.prototype.elr;
    /** @type {?} */
    UnlessRoleIncludesDirective.prototype.auth;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5sZXNzLXJvbGUtaW5jbHVkZXMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaG1jdHNyb2xlcy1saWIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy91bmxlc3Mtcm9sZS1pbmNsdWRlcy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFVLEtBQUssRUFBaUMsTUFBTSxlQUFlLENBQUM7QUFDcEcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFNakUsTUFBTTs7Ozs7SUFPSixZQUNVLEtBQ0E7UUFEQSxRQUFHLEdBQUgsR0FBRztRQUNILFNBQUksR0FBSixJQUFJO0tBR2I7Ozs7SUFHRCxRQUFROztRQUVOLElBQUksVUFBVSxDQUFBO1FBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUVyQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUE7UUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUE7UUFDL0IsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDO1lBQ2IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUE7UUFFcEQsSUFBSTtZQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFBO0tBRXREOzs7O0lBS0QsZ0JBQWdCO1FBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7S0FDcEU7OztZQXRDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7YUFDekI7Ozs7WUFObUIsVUFBVTtZQUNyQixvQkFBb0I7Ozt5QkFRMUIsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIE9uSW5pdCwgSW5wdXQsIFZpZXdDb250YWluZXJSZWYsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhtY3Rzcm9sZXNMaWJTZXJ2aWNlIH0gZnJvbSAnLi4vaG1jdHNyb2xlcy1saWIuc2VydmljZSc7XHJcblxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW3VubGVzc1JvbGVdXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFVubGVzc1JvbGVJbmNsdWRlc0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIHVubGVzc1JvbGU6IHN0cmluZztcclxuICBASW5wdXQoKSByb2xlTGlzdDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHJvbGVTb3VyY2U6IHN0cmluZztcclxuICByb2xlczogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxyOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBhdXRoOiBIbWN0c3JvbGVzTGliU2VydmljZVxyXG4gICkge1xyXG5cclxuICB9XHJcblxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICBsZXQgYXV0aG9yaXNlZFxyXG4gICAgdGhpcy5yb2xlcyA9IHRoaXMucm9sZUxpc3Quc3BsaXQoJywnKVxyXG5cclxuICAgIGF1dGhvcmlzZWQgPSB0aGlzLmNoZWNrUm9sZWlzVmFsaWQoKVxyXG4gICAgY29uc29sZS5sb2coJ2F1dGgnLCBhdXRob3Jpc2VkKVxyXG4gICAgaWYgKGF1dGhvcmlzZWQpXHJcbiAgICAgIHRoaXMuZWxyLm5hdGl2ZUVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nXHJcblxyXG4gICAgZWxzZVxyXG4gICAgICB0aGlzLmVsci5uYXRpdmVFbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSdcclxuXHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuICBjaGVja1JvbGVpc1ZhbGlkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucm9sZXMuc29tZShyID0+IHRoaXMudW5sZXNzUm9sZS5zcGxpdCgnLCcpLmluY2x1ZGVzKHIpKVxyXG4gIH1cclxuXHJcbn1cclxuIl19