import { LightningElement, api, wire } from "lwc";

import canAccessComponent from "@salesforce/apex/AccessControlController.canAccessComponent";

export default class AccessControl extends LightningElement {
    @api allowAccess;
    @api errorMessage;

    @wire(canAccessComponent, { allowAccess: "$allowAccess" }) access;
}
