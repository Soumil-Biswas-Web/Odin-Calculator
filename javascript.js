// Driver Code
const buttons = document.querySelectorAll('button');

for (let button of buttons){
    button.addEventListener("click", function(e) {      //calculator logic
        let i = e.target.textContent;   
        console.log(i);
        let a,b,op = "";
        if (i == "+", "-", "/", "*"){   //dealing with operand input
            if (a == ""){
                if(i == "-"){
                    a = "0";
                    op = "-";
                }
            }
            else if (b != ""){          //dealing with negative numbers
                a = operate(a, b, op);
                b = "";
                display(a);
            }
            op = i;
        }
        else if (i == "="){             //dealing with "=" input
            if (b != ""){
                a = operate(a, b, op);
                b = "";
                display(a);
            }
        }
        else if (a == ""){              //dealing with numerial input
            a = a + i;
            display(a);
        }
        else b = b + i;
        display(b);
    });
}

function operate(a, b, op){
    a = Number(a);
    b = Number(b);
    if(op == "/") return a/b;
    else if (op == "*") return a*b;
    else if (op == "+") return a+b;
    else return a-b;
}

function display(number){
    const screen = document.querySelector(".screen");
    screen.setAttribute("textContent", number);
}