/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input } from '@angular/core';
import { HmctsrolesLibService } from '../hmctsroles-lib.service';
var UnlessRoleIncludesDirective = /** @class */ (function () {
    function UnlessRoleIncludesDirective(elr, auth) {
        this.elr = elr;
        this.auth = auth;
    }
    /**
     * @return {?}
     */
    UnlessRoleIncludesDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var authorised;
        this.roles = this.roleList.split(',');
        authorised = this.checkRoleisValid();
        console.log('auth', authorised);
        if (authorised)
            this.elr.nativeElement.style.visibility = 'hidden';
        else
            this.elr.nativeElement.style.visibility = 'visible';
    };
    /**
     * @return {?}
     */
    UnlessRoleIncludesDirective.prototype.checkRoleisValid = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.roles.some(function (r) { return _this.unlessRole.split(',').includes(r); });
    };
    UnlessRoleIncludesDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[unlessRole]"
                },] },
    ];
    /** @nocollapse */
    UnlessRoleIncludesDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: HmctsrolesLibService }
    ]; };
    UnlessRoleIncludesDirective.propDecorators = {
        unlessRole: [{ type: Input }],
        roleList: [{ type: Input }],
        roleSource: [{ type: Input }]
    };
    return UnlessRoleIncludesDirective;
}());
export { UnlessRoleIncludesDirective };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5sZXNzLXJvbGUtaW5jbHVkZXMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaG1jdHNyb2xlcy1saWIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy91bmxlc3Mtcm9sZS1pbmNsdWRlcy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFVLEtBQUssRUFBaUMsTUFBTSxlQUFlLENBQUM7QUFDcEcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0lBYS9ELHFDQUNVLEtBQ0E7UUFEQSxRQUFHLEdBQUgsR0FBRztRQUNILFNBQUksR0FBSixJQUFJO0tBR2I7Ozs7SUFHRCw4Q0FBUTs7O0lBQVI7O1FBRUUsSUFBSSxVQUFVLENBQUE7UUFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBRXJDLFVBQVUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTtRQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQTtRQUMvQixFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUM7WUFDYixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQTtRQUVwRCxJQUFJO1lBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUE7S0FFdEQ7Ozs7SUFLRCxzREFBZ0I7OztJQUFoQjtRQUFBLGlCQUVDO1FBREMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUF0QyxDQUFzQyxDQUFDLENBQUE7S0FDcEU7O2dCQXRDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7aUJBQ3pCOzs7O2dCQU5tQixVQUFVO2dCQUNyQixvQkFBb0I7Ozs2QkFRMUIsS0FBSzsyQkFDTCxLQUFLOzZCQUNMLEtBQUs7O3NDQVhSOztTQU9hLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT25Jbml0LCBJbnB1dCwgVmlld0NvbnRhaW5lclJlZiwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSG1jdHNyb2xlc0xpYlNlcnZpY2UgfSBmcm9tICcuLi9obWN0c3JvbGVzLWxpYi5zZXJ2aWNlJztcclxuXHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogXCJbdW5sZXNzUm9sZV1cIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgVW5sZXNzUm9sZUluY2x1ZGVzRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgdW5sZXNzUm9sZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHJvbGVMaXN0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcm9sZVNvdXJjZTogc3RyaW5nO1xyXG4gIHJvbGVzOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbHI6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIGF1dGg6IEhtY3Rzcm9sZXNMaWJTZXJ2aWNlXHJcbiAgKSB7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICAgIGxldCBhdXRob3Jpc2VkXHJcbiAgICB0aGlzLnJvbGVzID0gdGhpcy5yb2xlTGlzdC5zcGxpdCgnLCcpXHJcblxyXG4gICAgYXV0aG9yaXNlZCA9IHRoaXMuY2hlY2tSb2xlaXNWYWxpZCgpXHJcbiAgICBjb25zb2xlLmxvZygnYXV0aCcsIGF1dGhvcmlzZWQpXHJcbiAgICBpZiAoYXV0aG9yaXNlZClcclxuICAgICAgdGhpcy5lbHIubmF0aXZlRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbidcclxuXHJcbiAgICBlbHNlXHJcbiAgICAgIHRoaXMuZWxyLm5hdGl2ZUVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJ1xyXG5cclxuICB9XHJcblxyXG5cclxuXHJcblxyXG4gIGNoZWNrUm9sZWlzVmFsaWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yb2xlcy5zb21lKHIgPT4gdGhpcy51bmxlc3NSb2xlLnNwbGl0KCcsJykuaW5jbHVkZXMocikpXHJcbiAgfVxyXG5cclxufVxyXG4iXX0=