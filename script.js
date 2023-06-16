const a = document.getElementById("input_message")
// console.log(a)
a.addEventListener("keydown",function(event){
    if(event.key=="Enter"){
        task();
    }
})
function task(){
     document.getElementById("output_message").innerHTML = a.value;
     console.log(a.value)
     a.value = ""
}

