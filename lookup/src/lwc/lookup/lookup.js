import {LightningElement, track, api} from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import fetchRecords from '@salesforce/apex/LookupController.fetchRecords';

export default class Lookup extends LightningElement {

    @api label;
    @api recordName;
    @api isRequired;
    @api isReadonly;
    @api objectApiName;
    @api whereClause;
    @api fieldSetName;
    @api iconName;
    @api secondField;

    @track records = [];
    @track recordResetIconVisible = false;
    @track noRecordsFound = false;

    dropdownClassClick = 'slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click';
    dropdownClassOpen = 'slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open';
    @track recordClass = this.dropdownClassClick;

    handleSearch(event){
        this.recordName = event.target.value;
        fetchRecords({
            objectApiName: this.objectApiName,
            recordName: this.recordName,
            fieldSetName: this.fieldSetName,
            whereClause: this.whereClause
        })
            .then(result => {
                this.records = result;

            })
            .catch(error =>{
                const event = new ShowToastEvent({
                    title: 'Error',
                    message: error.message,
                    variant: 'error',
                });
                this.dispatchEvent(event);

            });
        this.recordClass = this.records.length  > 0 ?  this.dropdownClassOpen : this.dropdownClassClick;
        this.noRecordsFound = this.records.length === 0;
    }

    setSelectedRecord(event){
        this.recordId = event.currentTarget.dataset.id;
        this.recordName = event.currentTarget.dataset.name;
        this.recordClass = this.dropdownClassClick;
        this.isReadonly = true;
        this.recordResetIconVisible = true;
        this.handleLookupChange();
    }
    clearSelectedRecord(){
        this.recordId = '';
        this.recordName = '';
        this.recordResetIconVisible = false;
        this.isReadonly = false;
        this.recordClass = this.dropdownClassClick;
        this.handleLookupChange();

    }

    handleLookupChange(){
        const lookupchanged = new CustomEvent("lookupchanged", {
            detail: {
                id: this.recordId,
                name: this.recordName
            } 
        });

        this.dispatchEvent(lookupchanged);
    }
}