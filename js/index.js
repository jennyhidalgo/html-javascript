var myFunction = (num1,num2) => {
    alert(num1+num2);
    document.getElementById("demo")
        .innerHTML = num1.toString ()+ "+" + num2.toString() + "=" + (num1+num2).toString();
}   