const Numbers=document.querySelectorAll('#number');
const Operations=document.querySelectorAll('#operation');
const Display=document.querySelector('#total');
                               
Numbers.forEach((number)=>{
    number.addEventListener('click',()=>{
        // console.log(number.innerHTML);
        if (Display.value==0) {
            Display.value=number.innerHTML;
        } else {            
            Display.value+=number.innerHTML;
        };
    });
});
Operations.forEach((operation)=>{
    operation.addEventListener('click',()=>{
        // console.log(number.innerHTML);
        if (Display.value!=='0') {            
            Display.value+=operation.innerHTML;
        };
    });
});

function Calculate() {
    const Cal=eval(Display.value);
    Display.value=Cal;    
};

function Clear() {
    Display.value='0';
};