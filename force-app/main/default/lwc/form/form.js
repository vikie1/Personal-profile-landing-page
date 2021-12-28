import { LightningElement } from 'lwc';
import OBJECT from '@salesforce/schema/CustomerInfo__c'
import NAME from '@salesforce/schema/CustomerInfo__c.Name__c'
import EMAIL from '@salesforce/schema/CustomerInfo__c.Email__c'
import PHONE from '@salesforce/schema/CustomerInfo__c.Phone__c'

export default class Form extends LightningElement {

    object = OBJECT;
    fields = [NAME,EMAIL,PHONE];
}
