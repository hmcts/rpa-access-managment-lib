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
                //console.log('@@COOKIE:', roles)
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
                //console.log('auth', authorised)
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG1jdHNyb2xlcy1saWIudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9obWN0c3JvbGVzLWxpYi9saWIvaG1jdHNyb2xlcy1saWIuc2VydmljZS50cyIsIm5nOi8vaG1jdHNyb2xlcy1saWIvbGliL2htY3Rzcm9sZXMtbGliLmNvbXBvbmVudC50cyIsIm5nOi8vaG1jdHNyb2xlcy1saWIvbGliL2RpcmVjdGl2ZXMvcm9sZXMuZGlyZWN0aXZlLnRzIiwibmc6Ly9obWN0c3JvbGVzLWxpYi9saWIvZGlyZWN0aXZlcy91bmxlc3Mtcm9sZS1pbmNsdWRlcy5kaXJlY3RpdmUudHMiLCJuZzovL2htY3Rzcm9sZXMtbGliL2xpYi9obWN0c3JvbGVzLWxpYi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvb2tpZVNlcnZpY2UgfSBmcm9tICduZ3gtY29va2llJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEhtY3Rzcm9sZXNMaWJTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNvb2tpZVNlcnZpY2U6IENvb2tpZVNlcnZpY2UpIHsgfVxyXG5cclxuXHJcblxyXG4gIC8vIHB1YmxpYyBnZXRVc2VyUm9sZXMoKTogc3RyaW5nW10ge1xyXG4gIC8vICAgbGV0IHJvbGVzID0gWydyb2xlQScsICdyb2xlQicsICdyb2xlQyddXHJcbiAgLy8gICByZXR1cm4gcm9sZXNcclxuICAvLyB9XHJcblxyXG5cclxuICBwdWJsaWMgZ2V0VXNlclJvbGVzKCk6IHN0cmluZ1tdIHtcclxuICAgIGxldCByb2xlcyA9IFtdO1xyXG4gICAgbGV0IGNrID0gdGhpcy5jb29raWVTZXJ2aWNlLmdldCgnX19yb2xlc19fJyk7XHJcbiAgICBpZiAoY2sgIT0gbnVsbCkgcm9sZXMgPSBjay5zcGxpdCgnLCcpO1xyXG4gICAgLy9jb25zb2xlLmxvZygnQEBDT09LSUU6Jywgcm9sZXMpXHJcbiAgICByZXR1cm4gcm9sZXNcclxuXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2htY3RzLWhtY3Rzcm9sZXMtbGliJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIGhtY3Rzcm9sZXMtbGliIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBIbWN0c3JvbGVzTGliQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLCBWaWV3Q29udGFpbmVyUmVmLCBUZW1wbGF0ZVJlZiwgSW5wdXQsIE9uSW5pdFxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEhtY3Rzcm9sZXNMaWJTZXJ2aWNlIH0gZnJvbSBcIi4uL2htY3Rzcm9sZXMtbGliLnNlcnZpY2VcIjtcclxuXHJcblxyXG5cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIltyb2xlQWNjZXNzXVwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSb2xlc0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgLy8gQElucHV0KCkgcm9sZUFjY2Vzczogc3RyaW5nO1xyXG4gIC8vIEBJbnB1dCgpIHJvbGVBY2Nlc3Nyb2xlTGlzdDogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIF9yb2xlQWNjZXNzOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBzZXQgcm9sZUFjY2Vzcyh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9yb2xlQWNjZXNzID0gdmFsdWU7XHJcbiAgICBjb25zb2xlLmxvZygncm9sZUFjY2VzczogJywgdmFsdWUpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgX3JvbGVMaXN0OiBzdHJpbmdbXTtcclxuICBASW5wdXQoKVxyXG4gIHNldCByb2xlQWNjZXNzUm9sZUxpc3QodmFsdWU6IHN0cmluZ1tdKSB7XHJcbiAgICB0aGlzLl9yb2xlTGlzdCA9IHZhbHVlO1xyXG4gICAgY29uc29sZS5sb2coJ3JvbGVMaXN0OiAnLCB2YWx1ZSk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIHByaXZhdGUgX3JvbGVTb3VyY2U6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHNldCByb2xlQWNjZXNzUm9sZVNvdXJjZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9yb2xlU291cmNlID0gdmFsdWU7XHJcbiAgICBjb25zb2xlLmxvZygncm9sZVNvdXJjZTogJywgdmFsdWUpO1xyXG4gIH1cclxuXHJcblxyXG4gIGlzVmlzaWJsZSA9IGZhbHNlO1xyXG4gIHJvbGVzOiBhbnlbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBwcml2YXRlIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxyXG4gICAgcHJpdmF0ZSBhdXRoOiBIbWN0c3JvbGVzTGliU2VydmljZVxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgbGV0IGF1dGhvcmlzZWRcclxuXHJcbiAgICBpZiAodGhpcy5fcm9sZVNvdXJjZSA9PSAnY29va2llJylcclxuICAgICAgdGhpcy5yb2xlcyA9IHRoaXMuYXV0aC5nZXRVc2VyUm9sZXMoKVxyXG4gICAgZWxzZVxyXG4gICAgICB0aGlzLnJvbGVzID0gdGhpcy5fcm9sZUxpc3Q7XHJcblxyXG5cclxuICAgIGF1dGhvcmlzZWQgPSB0aGlzLmNoZWNrUm9sZWlzVmFsaWQoKVxyXG5cclxuICAgIGlmIChhdXRob3Jpc2VkKVxyXG4gICAgICB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMudGVtcGxhdGVSZWYpXHJcblxyXG4gICAgZWxzZVxyXG4gICAgICB0aGlzLnZpZXdDb250YWluZXJSZWYuY2xlYXIoKVxyXG5cclxuICB9XHJcblxyXG5cclxuICBjaGVja1JvbGVpc1ZhbGlkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucm9sZXMuc29tZShyID0+IHRoaXMuX3JvbGVBY2Nlc3MuaW5jbHVkZXMocikpXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT25Jbml0LCBJbnB1dCwgVmlld0NvbnRhaW5lclJlZiwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSG1jdHNyb2xlc0xpYlNlcnZpY2UgfSBmcm9tICcuLi9obWN0c3JvbGVzLWxpYi5zZXJ2aWNlJztcclxuXHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogXCJbdW5sZXNzUm9sZV1cIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgVW5sZXNzUm9sZUluY2x1ZGVzRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgdW5sZXNzUm9sZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHJvbGVMaXN0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcm9sZVNvdXJjZTogc3RyaW5nO1xyXG4gIHJvbGVzOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbHI6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIGF1dGg6IEhtY3Rzcm9sZXNMaWJTZXJ2aWNlXHJcbiAgKSB7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICAgIGxldCBhdXRob3Jpc2VkXHJcbiAgICB0aGlzLnJvbGVzID0gdGhpcy5yb2xlTGlzdC5zcGxpdCgnLCcpXHJcblxyXG4gICAgYXV0aG9yaXNlZCA9IHRoaXMuY2hlY2tSb2xlaXNWYWxpZCgpXHJcbiAgICAvL2NvbnNvbGUubG9nKCdhdXRoJywgYXV0aG9yaXNlZClcclxuICAgIGlmIChhdXRob3Jpc2VkKVxyXG4gICAgICB0aGlzLmVsci5uYXRpdmVFbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJ1xyXG5cclxuICAgIGVsc2VcclxuICAgICAgdGhpcy5lbHIubmF0aXZlRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnXHJcblxyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcbiAgY2hlY2tSb2xlaXNWYWxpZCgpIHtcclxuICAgIHJldHVybiB0aGlzLnJvbGVzLnNvbWUociA9PiB0aGlzLnVubGVzc1JvbGUuc3BsaXQoJywnKS5pbmNsdWRlcyhyKSlcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIbWN0c3JvbGVzTGliQ29tcG9uZW50IH0gZnJvbSAnLi9obWN0c3JvbGVzLWxpYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUm9sZXNEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvcm9sZXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IFVubGVzc1JvbGVJbmNsdWRlc0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy91bmxlc3Mtcm9sZS1pbmNsdWRlcy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ29va2llTW9kdWxlIH0gZnJvbSAnbmd4LWNvb2tpZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb29raWVNb2R1bGUuZm9yUm9vdCgpXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0htY3Rzcm9sZXNMaWJDb21wb25lbnQsIFJvbGVzRGlyZWN0aXZlLCBVbmxlc3NSb2xlSW5jbHVkZXNEaXJlY3RpdmVdLFxuICBleHBvcnRzOiBbSG1jdHNyb2xlc0xpYkNvbXBvbmVudCwgUm9sZXNEaXJlY3RpdmUsIFVubGVzc1JvbGVJbmNsdWRlc0RpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgSG1jdHNyb2xlc0xpYk1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiQ29va2llU2VydmljZSIsIkNvbXBvbmVudCIsIkRpcmVjdGl2ZSIsIlZpZXdDb250YWluZXJSZWYiLCJUZW1wbGF0ZVJlZiIsIklucHV0IiwiRWxlbWVudFJlZiIsIk5nTW9kdWxlIiwiQ29va2llTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFRRSw4QkFDVTtZQUFBLGtCQUFhLEdBQWIsYUFBYTtTQUFvQjs7OztRQVVwQywyQ0FBWTs7Ozs7Z0JBQ2pCLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQzs7Z0JBQ2YsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzdDLElBQUksRUFBRSxJQUFJLElBQUk7b0JBQUUsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7O2dCQUV0QyxPQUFPLEtBQUssQ0FBQTs7O29CQXJCZkEsYUFBVSxTQUFDO3dCQUNWLFVBQVUsRUFBRSxNQUFNO3FCQUNuQjs7Ozs7d0JBSlFDLGdCQUFhOzs7O21DQUR0Qjs7Ozs7OztBQ0FBO1FBYUU7U0FBaUI7Ozs7UUFFakIseUNBQVE7OztZQUFSO2FBQ0M7O29CQWRGQyxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjt3QkFDaEMsUUFBUSxFQUFFLHNEQUlUO3dCQUNELE1BQU0sRUFBRSxFQUFFO3FCQUNYOzs7O3FDQVZEOzs7Ozs7O0FDQUE7UUEyQ0Usd0JBQ1Usa0JBQ0EsYUFDQTtZQUZBLHFCQUFnQixHQUFoQixnQkFBZ0I7WUFDaEIsZ0JBQVcsR0FBWCxXQUFXO1lBQ1gsU0FBSSxHQUFKLElBQUk7NkJBTkYsS0FBSztTQU9aO1FBL0JMLHNCQUNJLHNDQUFVOzs7O2dCQURkLFVBQ2UsS0FBYTtnQkFD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