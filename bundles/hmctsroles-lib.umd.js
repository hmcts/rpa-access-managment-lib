(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-cookie')) :
    typeof define === 'function' && define.amd ? define('hmctsroles-lib', ['exports', '@angular/core', 'ngx-cookie'], factory) :
    (factory((global['hmctsroles-lib'] = {}),global.ng.core,null));
}(this, (function (exports,i0,i1) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var HmctsrolesLibService = (function () {
        function HmctsrolesLibService(cookieService) {
            this.cookieService = cookieService;
        }
        /**
         * @return {?}
         */
        HmctsrolesLibService.prototype.getUserRoles = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var roles = [];
                /** @type {?} */
                var ck = this.cookieService.get('__roles__');
                if (ck != null)
                    roles = ck.split(',');
                console.log('@@COOKIE:', roles);
                return roles;
            };
        HmctsrolesLibService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        HmctsrolesLibService.ctorParameters = function () {
            return [
                { type: i1.CookieService }
            ];
        };
        /** @nocollapse */ HmctsrolesLibService.ngInjectableDef = i0.defineInjectable({ factory: function HmctsrolesLibService_Factory() { return new HmctsrolesLibService(i0.inject(i1.CookieService)); }, token: HmctsrolesLibService, providedIn: "root" });
        return HmctsrolesLibService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var HmctsrolesLibComponent = (function () {
        function HmctsrolesLibComponent() {
        }
        /**
         * @return {?}
         */
        HmctsrolesLibComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        HmctsrolesLibComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'hmcts-hmctsroles-lib',
                        template: "\n    <p>\n      hmctsroles-lib works!\n    </p>\n  ",
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        HmctsrolesLibComponent.ctorParameters = function () { return []; };
        return HmctsrolesLibComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var RolesDirective = (function () {
        function RolesDirective(viewContainerRef, templateRef, auth) {
            this.viewContainerRef = viewContainerRef;
            this.templateRef = templateRef;
            this.auth = auth;
            this.isVisible = false;
        }
        Object.defineProperty(RolesDirective.prototype, "roleAccess", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._roleAccess = value;
                console.log('roleAccess: ', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RolesDirective.prototype, "roleAccessRoleList", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._roleList = value;
                console.log('roleList: ', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RolesDirective.prototype, "roleAccessRoleSource", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._roleSource = value;
                console.log('roleSource: ', value);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        RolesDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var authorised;
                if (this._roleSource == 'cookie')
                    this.roles = this.auth.getUserRoles();
                else
                    this.roles = this._roleList;
                authorised = this.checkRoleisValid();
                if (authorised)
                    this.viewContainerRef.createEmbeddedView(this.templateRef);
                else
                    this.viewContainerRef.clear();
            };
        /**
         * @return {?}
         */
        RolesDirective.prototype.checkRoleisValid = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return this.roles.some(function (r) { return _this._roleAccess.includes(r); });
            };
        RolesDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: "[roleAccess]"
                    },] },
        ];
        /** @nocollapse */
        RolesDirective.ctorParameters = function () {
            return [
                { type: i0.ViewContainerRef },
                { type: i0.TemplateRef },
                { type: HmctsrolesLibService }
            ];
        };
        RolesDirective.propDecorators = {
            roleAccess: [{ type: i0.Input }],
            roleAccessRoleList: [{ type: i0.Input }],
            roleAccessRoleSource: [{ type: i0.Input }]
        };
        return RolesDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var UnlessRoleIncludesDirective = (function () {
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
            { type: i0.Directive, args: [{
                        selector: "[unlessRole]"
                    },] },
        ];
        /** @nocollapse */
        UnlessRoleIncludesDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: HmctsrolesLibService }
            ];
        };
        UnlessRoleIncludesDirective.propDecorators = {
            unlessRole: [{ type: i0.Input }],
            roleList: [{ type: i0.Input }],
            roleSource: [{ type: i0.Input }]
        };
        return UnlessRoleIncludesDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var HmctsrolesLibModule = (function () {
        function HmctsrolesLibModule() {
        }
        HmctsrolesLibModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            i1.CookieModule.forRoot()
                        ],
                        declarations: [HmctsrolesLibComponent, RolesDirective, UnlessRoleIncludesDirective],
                        exports: [HmctsrolesLibComponent, RolesDirective, UnlessRoleIncludesDirective]
                    },] },
        ];
        return HmctsrolesLibModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.HmctsrolesLibService = HmctsrolesLibService;
    exports.HmctsrolesLibComponent = HmctsrolesLibComponent;
    exports.HmctsrolesLibModule = HmctsrolesLibModule;
    exports.ɵa = RolesDirective;
    exports.ɵb = UnlessRoleIncludesDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG1jdHNyb2xlcy1saWIudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9obWN0c3JvbGVzLWxpYi9saWIvaG1jdHNyb2xlcy1saWIuc2VydmljZS50cyIsIm5nOi8vaG1jdHNyb2xlcy1saWIvbGliL2htY3Rzcm9sZXMtbGliLmNvbXBvbmVudC50cyIsIm5nOi8vaG1jdHNyb2xlcy1saWIvbGliL2RpcmVjdGl2ZXMvcm9sZXMuZGlyZWN0aXZlLnRzIiwibmc6Ly9obWN0c3JvbGVzLWxpYi9saWIvZGlyZWN0aXZlcy91bmxlc3Mtcm9sZS1pbmNsdWRlcy5kaXJlY3RpdmUudHMiLCJuZzovL2htY3Rzcm9sZXMtbGliL2xpYi9obWN0c3JvbGVzLWxpYi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvb2tpZVNlcnZpY2UgfSBmcm9tICduZ3gtY29va2llJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEhtY3Rzcm9sZXNMaWJTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNvb2tpZVNlcnZpY2U6IENvb2tpZVNlcnZpY2UpIHsgfVxyXG5cclxuXHJcblxyXG4gIC8vIHB1YmxpYyBnZXRVc2VyUm9sZXMoKTogc3RyaW5nW10ge1xyXG4gIC8vICAgbGV0IHJvbGVzID0gWydyb2xlQScsICdyb2xlQicsICdyb2xlQyddXHJcbiAgLy8gICByZXR1cm4gcm9sZXNcclxuICAvLyB9XHJcblxyXG5cclxuICBwdWJsaWMgZ2V0VXNlclJvbGVzKCk6IHN0cmluZ1tdIHtcclxuICAgIGxldCByb2xlcyA9IFtdO1xyXG4gICAgbGV0IGNrID0gdGhpcy5jb29raWVTZXJ2aWNlLmdldCgnX19yb2xlc19fJyk7XHJcbiAgICBpZiAoY2sgIT0gbnVsbCkgcm9sZXMgPSBjay5zcGxpdCgnLCcpO1xyXG4gICAgY29uc29sZS5sb2coJ0BAQ09PS0lFOicsIHJvbGVzKVxyXG4gICAgcmV0dXJuIHJvbGVzXHJcblxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdobWN0cy1obWN0c3JvbGVzLWxpYicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxwPlxyXG4gICAgICBobWN0c3JvbGVzLWxpYiB3b3JrcyFcclxuICAgIDwvcD5cclxuICBgLFxyXG4gIHN0eWxlczogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIEhtY3Rzcm9sZXNMaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLCBWaWV3Q29udGFpbmVyUmVmLCBUZW1wbGF0ZVJlZiwgSW5wdXQsIE9uSW5pdFxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEhtY3Rzcm9sZXNMaWJTZXJ2aWNlIH0gZnJvbSBcIi4uL2htY3Rzcm9sZXMtbGliLnNlcnZpY2VcIjtcclxuXHJcblxyXG5cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIltyb2xlQWNjZXNzXVwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSb2xlc0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgLy8gQElucHV0KCkgcm9sZUFjY2Vzczogc3RyaW5nO1xyXG4gIC8vIEBJbnB1dCgpIHJvbGVBY2Nlc3Nyb2xlTGlzdDogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIF9yb2xlQWNjZXNzOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBzZXQgcm9sZUFjY2Vzcyh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9yb2xlQWNjZXNzID0gdmFsdWU7XHJcbiAgICBjb25zb2xlLmxvZygncm9sZUFjY2VzczogJywgdmFsdWUpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgX3JvbGVMaXN0OiBzdHJpbmdbXTtcclxuICBASW5wdXQoKVxyXG4gIHNldCByb2xlQWNjZXNzUm9sZUxpc3QodmFsdWU6IHN0cmluZ1tdKSB7XHJcbiAgICB0aGlzLl9yb2xlTGlzdCA9IHZhbHVlO1xyXG4gICAgY29uc29sZS5sb2coJ3JvbGVMaXN0OiAnLCB2YWx1ZSk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIHByaXZhdGUgX3JvbGVTb3VyY2U6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHNldCByb2xlQWNjZXNzUm9sZVNvdXJjZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9yb2xlU291cmNlID0gdmFsdWU7XHJcbiAgICBjb25zb2xlLmxvZygncm9sZVNvdXJjZTogJywgdmFsdWUpO1xyXG4gIH1cclxuXHJcblxyXG4gIGlzVmlzaWJsZSA9IGZhbHNlO1xyXG4gIHJvbGVzOiBhbnlbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBwcml2YXRlIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxyXG4gICAgcHJpdmF0ZSBhdXRoOiBIbWN0c3JvbGVzTGliU2VydmljZVxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgbGV0IGF1dGhvcmlzZWRcclxuXHJcbiAgICBpZiAodGhpcy5fcm9sZVNvdXJjZSA9PSAnY29va2llJylcclxuICAgICAgdGhpcy5yb2xlcyA9IHRoaXMuYXV0aC5nZXRVc2VyUm9sZXMoKVxyXG4gICAgZWxzZVxyXG4gICAgICB0aGlzLnJvbGVzID0gdGhpcy5fcm9sZUxpc3Q7XHJcblxyXG5cclxuICAgIGF1dGhvcmlzZWQgPSB0aGlzLmNoZWNrUm9sZWlzVmFsaWQoKVxyXG5cclxuICAgIGlmIChhdXRob3Jpc2VkKVxyXG4gICAgICB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMudGVtcGxhdGVSZWYpXHJcblxyXG4gICAgZWxzZVxyXG4gICAgICB0aGlzLnZpZXdDb250YWluZXJSZWYuY2xlYXIoKVxyXG5cclxuICB9XHJcblxyXG5cclxuICBjaGVja1JvbGVpc1ZhbGlkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucm9sZXMuc29tZShyID0+IHRoaXMuX3JvbGVBY2Nlc3MuaW5jbHVkZXMocikpXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT25Jbml0LCBJbnB1dCwgVmlld0NvbnRhaW5lclJlZiwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSG1jdHNyb2xlc0xpYlNlcnZpY2UgfSBmcm9tICcuLi9obWN0c3JvbGVzLWxpYi5zZXJ2aWNlJztcclxuXHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogXCJbdW5sZXNzUm9sZV1cIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgVW5sZXNzUm9sZUluY2x1ZGVzRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgdW5sZXNzUm9sZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHJvbGVMaXN0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcm9sZVNvdXJjZTogc3RyaW5nO1xyXG4gIHJvbGVzOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbHI6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIGF1dGg6IEhtY3Rzcm9sZXNMaWJTZXJ2aWNlXHJcbiAgKSB7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICAgIGxldCBhdXRob3Jpc2VkXHJcbiAgICB0aGlzLnJvbGVzID0gdGhpcy5yb2xlTGlzdC5zcGxpdCgnLCcpXHJcblxyXG4gICAgYXV0aG9yaXNlZCA9IHRoaXMuY2hlY2tSb2xlaXNWYWxpZCgpXHJcbiAgICBjb25zb2xlLmxvZygnYXV0aCcsIGF1dGhvcmlzZWQpXHJcbiAgICBpZiAoYXV0aG9yaXNlZClcclxuICAgICAgdGhpcy5lbHIubmF0aXZlRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbidcclxuXHJcbiAgICBlbHNlXHJcbiAgICAgIHRoaXMuZWxyLm5hdGl2ZUVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJ1xyXG5cclxuICB9XHJcblxyXG5cclxuXHJcblxyXG4gIGNoZWNrUm9sZWlzVmFsaWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yb2xlcy5zb21lKHIgPT4gdGhpcy51bmxlc3NSb2xlLnNwbGl0KCcsJykuaW5jbHVkZXMocikpXHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIbWN0c3JvbGVzTGliQ29tcG9uZW50IH0gZnJvbSAnLi9obWN0c3JvbGVzLWxpYi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSb2xlc0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9yb2xlcy5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBVbmxlc3NSb2xlSW5jbHVkZXNEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvdW5sZXNzLXJvbGUtaW5jbHVkZXMuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgQ29va2llTW9kdWxlIH0gZnJvbSAnbmd4LWNvb2tpZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvb2tpZU1vZHVsZS5mb3JSb290KClcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW0htY3Rzcm9sZXNMaWJDb21wb25lbnQsIFJvbGVzRGlyZWN0aXZlLCBVbmxlc3NSb2xlSW5jbHVkZXNEaXJlY3RpdmVdLFxyXG4gIGV4cG9ydHM6IFtIbWN0c3JvbGVzTGliQ29tcG9uZW50LCBSb2xlc0RpcmVjdGl2ZSwgVW5sZXNzUm9sZUluY2x1ZGVzRGlyZWN0aXZlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG1jdHNyb2xlc0xpYk1vZHVsZSB7IH1cclxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJDb29raWVTZXJ2aWNlIiwiQ29tcG9uZW50IiwiRGlyZWN0aXZlIiwiVmlld0NvbnRhaW5lclJlZiIsIlRlbXBsYXRlUmVmIiwiSW5wdXQiLCJFbGVtZW50UmVmIiwiTmdNb2R1bGUiLCJDb29raWVNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQVFFLDhCQUNVO1lBQUEsa0JBQWEsR0FBYixhQUFhO1NBQW9COzs7O1FBVXBDLDJDQUFZOzs7OztnQkFDakIsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDOztnQkFDZixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDN0MsSUFBSSxFQUFFLElBQUksSUFBSTtvQkFBRSxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUE7Z0JBQy9CLE9BQU8sS0FBSyxDQUFBOzs7b0JBckJmQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7Ozt3QkFKUUMsZ0JBQWE7Ozs7bUNBRHRCOzs7Ozs7O0FDQUE7UUFhRTtTQUFpQjs7OztRQUVqQix5Q0FBUTs7O1lBQVI7YUFDQzs7b0JBZEZDLFlBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsc0JBQXNCO3dCQUNoQyxRQUFRLEVBQUUsc0RBSVQ7d0JBQ0QsTUFBTSxFQUFFLEVBQUU7cUJBQ1g7Ozs7cUNBVkQ7Ozs7Ozs7QUNBQTtRQTJDRSx3QkFDVSxrQkFDQSxhQUNBO1lBRkEscUJBQWdC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