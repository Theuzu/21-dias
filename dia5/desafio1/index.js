let num1 = parseInt(prompt("Insira o primeiro número"));
let num2 = parseInt(prompt("Insira o segundo número"));
let operacao = parseInt(prompt(
  "Selecione a operação matemática a ser realizada:" +
    "\n1 = +; \n2 = -; \n3 = *, \n4 = /"
));


switch (operacao) {
  case 1:
    console.log(num1 + "+" + num2 + "=" + (num1 + num2));
    break;
  case 2:
    console.log(num1 + "-" + num2 + "=" + (num1 - num2));
    break;
  case 3:
    console.log(num1 + "*" + num2 + "=" + num1 * num2);
    break;
  case 4:
    console.log(num1 + "/" + num2 + "=" + num1 / num2);
    break;
}
