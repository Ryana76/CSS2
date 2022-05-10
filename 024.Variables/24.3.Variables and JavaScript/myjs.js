var r = document.querySelector(':root');
function myFuncGet(){
    var rs = getComputedStyle(r);
    alert("The value of --blue is: " + rs.getPropertyValue('--blue'));
}
function myFuncSet(){
    r.style.setProperty('--blue', 'skyblue');
}