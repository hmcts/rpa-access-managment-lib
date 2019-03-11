/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import * as i0 from "@angular/core";
import * as i1 from "ngx-cookie";
export class HmctsrolesLibService {
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
/** @nocollapse */ HmctsrolesLibService.ngInjectableDef = i0.defineInjectable({ factory: function HmctsrolesLibService_Factory() { return new HmctsrolesLibService(i0.inject(i1.CookieService)); }, token: HmctsrolesLibService, providedIn: "root" });
if (false) {
    /** @type {?} */
    HmctsrolesLibService.prototype.cookieService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG1jdHNyb2xlcy1saWIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2htY3Rzcm9sZXMtbGliLyIsInNvdXJjZXMiOlsibGliL2htY3Rzcm9sZXMtbGliLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBVSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFlBQVksQ0FBQzs7O0FBSzNDLE1BQU07Ozs7SUFFSixZQUNVO1FBQUEsa0JBQWEsR0FBYixhQUFhO0tBQW9COzs7O0lBVXBDLFlBQVk7O1FBQ2pCLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQzs7UUFDZixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3QyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDO1lBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDL0IsTUFBTSxDQUFDLEtBQUssQ0FBQTs7OztZQXJCZixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFKUSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvb2tpZVNlcnZpY2UgfSBmcm9tICduZ3gtY29va2llJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEhtY3Rzcm9sZXNMaWJTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNvb2tpZVNlcnZpY2U6IENvb2tpZVNlcnZpY2UpIHsgfVxyXG5cclxuXHJcblxyXG4gIC8vIHB1YmxpYyBnZXRVc2VyUm9sZXMoKTogc3RyaW5nW10ge1xyXG4gIC8vICAgbGV0IHJvbGVzID0gWydyb2xlQScsICdyb2xlQicsICdyb2xlQyddXHJcbiAgLy8gICByZXR1cm4gcm9sZXNcclxuICAvLyB9XHJcblxyXG5cclxuICBwdWJsaWMgZ2V0VXNlclJvbGVzKCk6IHN0cmluZ1tdIHtcclxuICAgIGxldCByb2xlcyA9IFtdO1xyXG4gICAgbGV0IGNrID0gdGhpcy5jb29raWVTZXJ2aWNlLmdldCgnX19yb2xlc19fJyk7XHJcbiAgICBpZiAoY2sgIT0gbnVsbCkgcm9sZXMgPSBjay5zcGxpdCgnLCcpO1xyXG4gICAgY29uc29sZS5sb2coJ0BAQ09PS0lFOicsIHJvbGVzKVxyXG4gICAgcmV0dXJuIHJvbGVzXHJcblxyXG4gIH1cclxufVxyXG4iXX0=