import {LightningElement,api} from 'lwc';

export default class LookupSecondField extends LightningElement {

    @api record;
    @api fieldApiName;

    get field(){
        return this.record[this.fieldApiName];
    }
}