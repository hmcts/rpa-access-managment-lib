/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import * as i0 from "@angular/core";
import * as i1 from "ngx-cookie";
var HmctsrolesLibService = /** @class */ (function () {
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    HmctsrolesLibService.ctorParameters = function () { return [
        { type: CookieService }
    ]; };
    /** @nocollapse */ HmctsrolesLibService.ngInjectableDef = i0.defineInjectable({ factory: function HmctsrolesLibService_Factory() { return new HmctsrolesLibService(i0.inject(i1.CookieService)); }, token: HmctsrolesLibService, providedIn: "root" });
    return HmctsrolesLibService;
}());
export { HmctsrolesLibService };
if (false) {
    /** @type {?} */
    HmctsrolesLibService.prototype.cookieService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG1jdHNyb2xlcy1saWIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2htY3Rzcm9sZXMtbGliLyIsInNvdXJjZXMiOlsibGliL2htY3Rzcm9sZXMtbGliLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBVSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFlBQVksQ0FBQzs7OztJQU96Qyw4QkFDVTtRQUFBLGtCQUFhLEdBQWIsYUFBYTtLQUFvQjs7OztJQVVwQywyQ0FBWTs7Ozs7UUFDakIsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDOztRQUNmLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUM7WUFBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUMvQixNQUFNLENBQUMsS0FBSyxDQUFBOzs7Z0JBckJmLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBSlEsYUFBYTs7OytCQUR0Qjs7U0FNYSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29va2llU2VydmljZSB9IGZyb20gJ25neC1jb29raWUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSG1jdHNyb2xlc0xpYlNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY29va2llU2VydmljZTogQ29va2llU2VydmljZSkgeyB9XHJcblxyXG5cclxuXHJcbiAgLy8gcHVibGljIGdldFVzZXJSb2xlcygpOiBzdHJpbmdbXSB7XHJcbiAgLy8gICBsZXQgcm9sZXMgPSBbJ3JvbGVBJywgJ3JvbGVCJywgJ3JvbGVDJ11cclxuICAvLyAgIHJldHVybiByb2xlc1xyXG4gIC8vIH1cclxuXHJcblxyXG4gIHB1YmxpYyBnZXRVc2VyUm9sZXMoKTogc3RyaW5nW10ge1xyXG4gICAgbGV0IHJvbGVzID0gW107XHJcbiAgICBsZXQgY2sgPSB0aGlzLmNvb2tpZVNlcnZpY2UuZ2V0KCdfX3JvbGVzX18nKTtcclxuICAgIGlmIChjayAhPSBudWxsKSByb2xlcyA9IGNrLnNwbGl0KCcsJyk7XHJcbiAgICBjb25zb2xlLmxvZygnQEBDT09LSUU6Jywgcm9sZXMpXHJcbiAgICByZXR1cm4gcm9sZXNcclxuXHJcbiAgfVxyXG59XHJcbiJdfQ==