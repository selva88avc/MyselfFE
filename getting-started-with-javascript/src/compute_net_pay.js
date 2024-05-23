/*

The calculateNetPayable() function should accept 3 inputs:
pricePerKilo, quantityInKilo and discountPercentage.

Calculate the net amount post discount that would be payable.

The function should return the computed value.

The function should return error message "Invalid Input Types, All Inputs Should Be of Type Number !!", 
for any non-numeric value passed to the function.

*/

module.exports = function calculateNetPayable(pricePerKilo, quantityInKilo, discountInPercentage) {
    if(typeof pricePerKilo=="number" && typeof quantityInKilo=="number" && typeof discountInPercentage=="number"){
        let quantity =  quantityInKilo* pricePerKilo*(100-discountInPercentage)/100;
        return `${quantity}`;
    } else {
        return "Invalid Input Types, All Inputs Should Be of Type Number !!";
    }
    
}