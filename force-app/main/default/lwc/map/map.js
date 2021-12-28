import { LightningElement } from 'lwc';

export default class Map extends LightningElement {
    markers= [
        {
            location:{
                Country: 'Kenya',
                County: 'Kiambu',
                City: 'Thika',
                Street: 'General Kago Road'
            },
            title: 'School',
            description: 'This is where I went to school.',
            value: 'Sch'
        },
        {
            location: {
                Country: 'Kenya',
                County: 'Kiambu',
                City: 'Thika',
                Street: 'Section 2'
            },
            title: 'Residence',
            description: 'This is where I live',
            value: 'Home'
        },
        {
            location: {
                Country: 'Kenya',
                County: 'Laikipia',
                City: 'Nyahururu',
                Street: 'Gilgil-Nyahururu Road'
            },
            title: 'Parent\'s Residence',
            description: 'This is where my parents live',
            value: 'Parent\'s Home'
        }
    ]
    selectedMarkerValue = 'Home'
    handleSelectMarker(event) {
        this.selectedMarkerValue = event.target.selectedMarkerValue;
    }
}