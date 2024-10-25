import { LightningElement, track } from 'lwc';

export default class Slider extends LightningElement {
    @track currentValue = 20; // Initial value
    @track maxValue = 72;     // Maximum value
    @track stepValue = 20;    // Step value

    get formattedValue() {
        return this.currentValue.toString(); // Display current value
    }

    handleSliderChange(event) {
        this.updateValue(event.target.value); // Update currentValue on change
        console.log(`Slider Changed: ${this.currentValue}`); // Log value for debugging
    }

    handleSliderInput(event) {
        // Prevent the default behavior of the range input
        event.preventDefault();
        this.updateValue(event.target.value); // Update currentValue on input
        console.log(`Slider Input: ${this.currentValue}`); // Log value for debugging
    }

    updateValue(value) {
        const intValue = Number(value); // Convert to number
        // Round to nearest step value (20) and ensure it doesn't exceed max value
        this.currentValue = Math.min(Math.round(intValue / this.stepValue) * this.stepValue, this.maxValue);
        // Manually set the input value to match the snapped value
        this.template.querySelector('input[type="range"]').value = this.currentValue;
    }

    connectedCallback() {
        console.log(`Initial Value: ${this.currentValue}`);
        console.log(`Max Value: ${this.maxValue}`);
        console.log(`Step Value: ${this.stepValue}`);
    }
}
