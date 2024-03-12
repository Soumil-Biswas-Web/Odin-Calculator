// Driver Code
const buttons = document.querySelectorAll('button');
var a = "";
var b = "";
var op = "";

for (let button of buttons){
    button.addEventListener("click", function(e) {      //calculator logic
        let i = e.target.textContent;   
        //console.log(i, typeof i);
        if (i == "+" || i == "-" || i == "/" || i == "*"){    //dealing with operand input
            if (a == ""){
                if(i == "-"){
                    a = "0";
                    op = "-";
                }
            }
            else if (b != ""){          //dealing with negative numbers
                a = operate(a, b, op);
                b = "";
                //console.log("displaying a from negative check")
                display(a);
            }
            op = i;
            display(a+" "+i);
        }
        else if (i == "="){             //dealing with "=" input
            if (b != ""){
                a = operate(a, b, op);
                b = "";
                //console.log("displaying a from result check")
                display(a);   
            }
        }
        else if (i == "Clear"){         //clear or backspace
            if (op == "") {
                a = a.slice(0, -1);
                console.log("a = ", a);
                display(a);
            }
            else {
                b = b.slice(0,-1);
                console.log("b = ", b);
                display(a+" "+op+" "+b);                
            }
        }
        else if (i == "AC"){            //AC: All Clear
            a = "";
            b = "";
            op = "";
            display("");
        }
        else if (op == ""){              //dealing with numerial input
            a = a + i;
            console.log("a = ", a);
            display(a);
        }
        else {
            b = b + i;
            console.log("b = ", b);
            display(a+" "+op+" "+b);
        }
    });
}

function operate(a, b, si){     //function for arithmetic operation
    a = Number(a);
    b = Number(b);
    if(si == "/") {
        if(b == 0){
            alert("no.");
            op = "";
            return "";
        }
        else return a/b;
    }
    else if (si == "*") return a*b;
    else if (si == "+") return a+b;
    else return a-b;
}

function display(number){       //function to display output on screen
    //console.log("sum is = ", number);
    const screen = document.querySelector(".screen");
    screen.textContent = number;
}