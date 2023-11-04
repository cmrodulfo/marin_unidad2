function add() {
    let input1 = parseFloat(document.getElementById("input1").value);
    let input2 = parseFloat(document.getElementById("input2").value);
    let result = input1 + input2;
    
    document.getElementById("result").value = result.toFixed(2);
    }
    
    function subtract() {
    let input1 = parseFloat(document.getElementById("input1").value);
    let input2 = parseFloat(document.getElementById("input2").value);
    let result = input1 - input2;
    
    document.getElementById("result").value = result.toFixed(2);
    }
    
    function multiply() {
    let input1 = parseFloat(document.getElementById("input1").value);
    let input2 = parseFloat(document.getElementById("input2").value);
    let result = input1 * input2;
    
    document.getElementById("result").value = result.toFixed(2);
    }
    
    function divide() {
    let input1 = parseFloat(document.getElementById("input1").value);
    let input2 = parseFloat(document.getElementById("input2").value);
    let result = input1 / input2;
    
    document.getElementById("result").value = result.toFixed(2);
    }
    
    function clearFields() {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("result").value = "";
    }