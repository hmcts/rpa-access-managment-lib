import { Injectable, Directive, ViewContainerRef, TemplateRef, Input, ElementRef, Component, NgModule, defineInjectable, inject } from '@angular/core';
import { CookieService, CookieModule } from 'ngx-cookie';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class HmctsrolesLibService {
    /**
     * @param {?} cookieService
     */
    constructor(cookieService) {
        this.cookieService = cookieService;
    }
    /**
     * @return {?}
     */
    getUserRoles() {
        /** @type {?} */
        let roles = [];
        /** @type {?} */
        let ck = this.cookieService.get('__roles__');
        if (ck != null)
            roles = ck.split(',');
        console.log('@@COOKIE:', roles);
        return roles;
    }
}
HmctsrolesLibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
HmctsrolesLibService.ctorParameters = () => [
    { type: CookieService }
];
/** @nocollapse */ HmctsrolesLibService.ngInjectableDef = defineInjectable({ factory: function HmctsrolesLibService_Factory() { return new HmctsrolesLibService(inject(CookieService)); }, token: HmctsrolesLibService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class HmctsrolesLibComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
HmctsrolesLibComponent.decorators = [
    { type: Component, args: [{
                selector: 'hmcts-hmctsroles-lib',
                template: `
    <p>
      hmctsroles-lib works!
    </p>
  `,
                styles: []
            },] },
];
/** @nocollapse */
HmctsrolesLibComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class RolesDirective {
    /**
     * @param {?} viewContainerRef
     * @param {?} templateRef
     * @param {?} auth
     */
    constructor(viewContainerRef, templateRef, auth) {
        this.viewContainerRef = viewContainerRef;
        this.templateRef = templateRef;
        this.auth = auth;
        this.isVisible = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set roleAccess(value) {
        this._roleAccess = value;
        console.log('roleAccess: ', value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set roleAccessRoleList(value) {
        this._roleList = value;
        console.log('roleList: ', value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set roleAccessRoleSource(value) {
        this._roleSource = value;
        console.log('roleSource: ', value);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        let authorised;
        if (this._roleSource == 'cookie')
            this.roles = this.auth.getUserRoles();
        else
            this.roles = this._roleList;
        authorised = this.checkRoleisValid();
        if (authorised)
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        else
            this.viewContainerRef.clear();
    }
    /**
     * @return {?}
     */
    checkRoleisValid() {
        return this.roles.some(r => this._roleAccess.includes(r));
    }
}
RolesDirective.decorators = [
    { type: Directive, args: [{
                selector: "[roleAccess]"
            },] },
];
/** @nocollapse */
RolesDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: TemplateRef },
    { type: HmctsrolesLibService }
];
RolesDirective.propDecorators = {
    roleAccess: [{ type: Input }],
    roleAccessRoleList: [{ type: Input }],
    roleAccessRoleSource: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class UnlessRoleIncludesDirective {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class HmctsrolesLibModule {
}
HmctsrolesLibModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CookieModule.forRoot()
                ],
                declarations: [HmctsrolesLibComponent, RolesDirective, UnlessRoleIncludesDirective],
                exports: [HmctsrolesLibComponent, RolesDirective, UnlessRoleIncludesDirective]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { HmctsrolesLibService, HmctsrolesLibComponent, HmctsrolesLibModule, RolesDirective as ɵa, UnlessRoleIncludesDirective as ɵb };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG1jdHNyb2xlcy1saWIuanMubWFwIiwic291cmNlcyI6WyJuZzovL2htY3Rzcm9sZXMtbGliL2xpYi9obWN0c3JvbGVzLWxpYi5zZXJ2aWNlLnRzIiwibmc6Ly9obWN0c3JvbGVzLWxpYi9saWIvaG1jdHNyb2xlcy1saWIuY29tcG9uZW50LnRzIiwibmc6Ly9obWN0c3JvbGVzLWxpYi9saWIvZGlyZWN0aXZlcy9yb2xlcy5kaXJlY3RpdmUudHMiLCJuZzovL2htY3Rzcm9sZXMtbGliL2xpYi9kaXJlY3RpdmVzL3VubGVzcy1yb2xlLWluY2x1ZGVzLmRpcmVjdGl2ZS50cyIsIm5nOi8vaG1jdHNyb2xlcy1saWIvbGliL2htY3Rzcm9sZXMtbGliLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29va2llU2VydmljZSB9IGZyb20gJ25neC1jb29raWUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSG1jdHNyb2xlc0xpYlNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY29va2llU2VydmljZTogQ29va2llU2VydmljZSkgeyB9XHJcblxyXG5cclxuXHJcbiAgLy8gcHVibGljIGdldFVzZXJSb2xlcygpOiBzdHJpbmdbXSB7XHJcbiAgLy8gICBsZXQgcm9sZXMgPSBbJ3JvbGVBJywgJ3JvbGVCJywgJ3JvbGVDJ11cclxuICAvLyAgIHJldHVybiByb2xlc1xyXG4gIC8vIH1cclxuXHJcblxyXG4gIHB1YmxpYyBnZXRVc2VyUm9sZXMoKTogc3RyaW5nW10ge1xyXG4gICAgbGV0IHJvbGVzID0gW107XHJcbiAgICBsZXQgY2sgPSB0aGlzLmNvb2tpZVNlcnZpY2UuZ2V0KCdfX3JvbGVzX18nKTtcclxuICAgIGlmIChjayAhPSBudWxsKSByb2xlcyA9IGNrLnNwbGl0KCcsJyk7XHJcbiAgICBjb25zb2xlLmxvZygnQEBDT09LSUU6Jywgcm9sZXMpXHJcbiAgICByZXR1cm4gcm9sZXNcclxuXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2htY3RzLWhtY3Rzcm9sZXMtbGliJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPHA+XHJcbiAgICAgIGhtY3Rzcm9sZXMtbGliIHdvcmtzIVxyXG4gICAgPC9wPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG1jdHNyb2xlc0xpYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsIFZpZXdDb250YWluZXJSZWYsIFRlbXBsYXRlUmVmLCBJbnB1dCwgT25Jbml0XHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSG1jdHNyb2xlc0xpYlNlcnZpY2UgfSBmcm9tIFwiLi4vaG1jdHNyb2xlcy1saWIuc2VydmljZVwiO1xyXG5cclxuXHJcblxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW3JvbGVBY2Nlc3NdXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFJvbGVzRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAvLyBASW5wdXQoKSByb2xlQWNjZXNzOiBzdHJpbmc7XHJcbiAgLy8gQElucHV0KCkgcm9sZUFjY2Vzc3JvbGVMaXN0OiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgX3JvbGVBY2Nlc3M6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHNldCByb2xlQWNjZXNzKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3JvbGVBY2Nlc3MgPSB2YWx1ZTtcclxuICAgIGNvbnNvbGUubG9nKCdyb2xlQWNjZXNzOiAnLCB2YWx1ZSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBfcm9sZUxpc3Q6IHN0cmluZ1tdO1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHJvbGVBY2Nlc3NSb2xlTGlzdCh2YWx1ZTogc3RyaW5nW10pIHtcclxuICAgIHRoaXMuX3JvbGVMaXN0ID0gdmFsdWU7XHJcbiAgICBjb25zb2xlLmxvZygncm9sZUxpc3Q6ICcsIHZhbHVlKTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgcHJpdmF0ZSBfcm9sZVNvdXJjZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHJvbGVBY2Nlc3NSb2xlU291cmNlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3JvbGVTb3VyY2UgPSB2YWx1ZTtcclxuICAgIGNvbnNvbGUubG9nKCdyb2xlU291cmNlOiAnLCB2YWx1ZSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgaXNWaXNpYmxlID0gZmFsc2U7XHJcbiAgcm9sZXM6IGFueVtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgIHByaXZhdGUgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXHJcbiAgICBwcml2YXRlIGF1dGg6IEhtY3Rzcm9sZXNMaWJTZXJ2aWNlXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBsZXQgYXV0aG9yaXNlZFxyXG5cclxuICAgIGlmICh0aGlzLl9yb2xlU291cmNlID09ICdjb29raWUnKVxyXG4gICAgICB0aGlzLnJvbGVzID0gdGhpcy5hdXRoLmdldFVzZXJSb2xlcygpXHJcbiAgICBlbHNlXHJcbiAgICAgIHRoaXMucm9sZXMgPSB0aGlzLl9yb2xlTGlzdDtcclxuXHJcblxyXG4gICAgYXV0aG9yaXNlZCA9IHRoaXMuY2hlY2tSb2xlaXNWYWxpZCgpXHJcblxyXG4gICAgaWYgKGF1dGhvcmlzZWQpXHJcbiAgICAgIHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZVJlZilcclxuXHJcbiAgICBlbHNlXHJcbiAgICAgIHRoaXMudmlld0NvbnRhaW5lclJlZi5jbGVhcigpXHJcblxyXG4gIH1cclxuXHJcblxyXG4gIGNoZWNrUm9sZWlzVmFsaWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yb2xlcy5zb21lKHIgPT4gdGhpcy5fcm9sZUFjY2Vzcy5pbmNsdWRlcyhyKSlcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBPbkluaXQsIElucHV0LCBWaWV3Q29udGFpbmVyUmVmLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIbWN0c3JvbGVzTGliU2VydmljZSB9IGZyb20gJy4uL2htY3Rzcm9sZXMtbGliLnNlcnZpY2UnO1xyXG5cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIlt1bmxlc3NSb2xlXVwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVbmxlc3NSb2xlSW5jbHVkZXNEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSB1bmxlc3NSb2xlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcm9sZUxpc3Q6IHN0cmluZztcclxuICBASW5wdXQoKSByb2xlU291cmNlOiBzdHJpbmc7XHJcbiAgcm9sZXM6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVscjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgYXV0aDogSG1jdHNyb2xlc0xpYlNlcnZpY2VcclxuICApIHtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgbGV0IGF1dGhvcmlzZWRcclxuICAgIHRoaXMucm9sZXMgPSB0aGlzLnJvbGVMaXN0LnNwbGl0KCcsJylcclxuXHJcbiAgICBhdXRob3Jpc2VkID0gdGhpcy5jaGVja1JvbGVpc1ZhbGlkKClcclxuICAgIGNvbnNvbGUubG9nKCdhdXRoJywgYXV0aG9yaXNlZClcclxuICAgIGlmIChhdXRob3Jpc2VkKVxyXG4gICAgICB0aGlzLmVsci5uYXRpdmVFbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJ1xyXG5cclxuICAgIGVsc2VcclxuICAgICAgdGhpcy5lbHIubmF0aXZlRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnXHJcblxyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcbiAgY2hlY2tSb2xlaXNWYWxpZCgpIHtcclxuICAgIHJldHVybiB0aGlzLnJvbGVzLnNvbWUociA9PiB0aGlzLnVubGVzc1JvbGUuc3BsaXQoJywnKS5pbmNsdWRlcyhyKSlcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhtY3Rzcm9sZXNMaWJDb21wb25lbnQgfSBmcm9tICcuL2htY3Rzcm9sZXMtbGliLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJvbGVzRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3JvbGVzLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFVubGVzc1JvbGVJbmNsdWRlc0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy91bmxlc3Mtcm9sZS1pbmNsdWRlcy5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBDb29raWVNb2R1bGUgfSBmcm9tICduZ3gtY29va2llJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29va2llTW9kdWxlLmZvclJvb3QoKVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbSG1jdHNyb2xlc0xpYkNvbXBvbmVudCwgUm9sZXNEaXJlY3RpdmUsIFVubGVzc1JvbGVJbmNsdWRlc0RpcmVjdGl2ZV0sXHJcbiAgZXhwb3J0czogW0htY3Rzcm9sZXNMaWJDb21wb25lbnQsIFJvbGVzRGlyZWN0aXZlLCBVbmxlc3NSb2xlSW5jbHVkZXNEaXJlY3RpdmVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIbWN0c3JvbGVzTGliTW9kdWxlIHsgfVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0lBUUUsWUFDVTtRQUFBLGtCQUFhLEdBQWIsYUFBYTtLQUFvQjs7OztJQVVwQyxZQUFZOztRQUNqQixJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7O1FBQ2YsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDN0MsSUFBSSxFQUFFLElBQUksSUFBSTtZQUFFLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQy9CLE9BQU8sS0FBSyxDQUFBOzs7O1lBckJmLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUpRLGFBQWE7Ozs7Ozs7O0FDRHRCO0lBYUUsaUJBQWlCOzs7O0lBRWpCLFFBQVE7S0FDUDs7O1lBZEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRTs7OztHQUlUO2dCQUNELE1BQU0sRUFBRSxFQUFFO2FBQ1g7Ozs7Ozs7OztBQ1ZEOzs7Ozs7SUEyQ0UsWUFDVSxrQkFDQSxhQUNBO1FBRkEscUJBQWdCLEdBQWhCLGdCQUFnQjtRQUNoQixnQkFBVyxHQUFYLFdBQVc7UUFDWCxTQUFJLEdBQUosSUFBSTt5QkFORixLQUFLO0tBT1o7Ozs7O0lBL0JMLElBQ0ksVUFBVSxDQUFDLEtBQWE7UUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVB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