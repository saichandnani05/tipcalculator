document.getElementById('tipForm').addEventListener('input', function(e) {
    const billTotal = parseFloat(document.getElementById('billTotal').value);
    const tipPercentage = parseInt(document.getElementById('tipPercentage').value, 10);
    
    // Update the tip percentage display text field
    document.getElementById('tipPercentageDisplay').value = `${tipPercentage}%`;

    if (isNaN(billTotal)) {
        alert("Please enter a valid number for the bill total.");
        return;
    }

    // Calculate the tip amount
    const tipAmount = billTotal * (tipPercentage / 100);
    // Calculate the total bill with tip
    const totalWithTip = billTotal + tipAmount;
    
    // Update the disabled input fields
    document.getElementById('tipAmount').value = tipAmount.toFixed(2);
    document.getElementById('totalWithTip').value = totalWithTip.toFixed(2);
});
