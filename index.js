  let num1 =Number(prompt("Enter the first number"));
    let num2 =Number(prompt("Enter the second number"));
    let choice =Number(prompt(`Enter "1" for Add and"2" for Subtraction`));
    let result=0;
    if(choice ===1)
    {
     result = num1 +num2;
     console.log(result);
    }
    else if(choice ===2)
    {
      result = num1 - num2;
      console.log(result);
    }
    else{
      alert("You have choices between 1 and 2 only...");
    }