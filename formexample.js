function validateForm(){
  var errorStr="<ul>";
  var flag=false;
  var empname=document.getElementById("empname").value;
  var empcode=document.getElementById("empcode").value;
 if(empname == ""){
     errorStr=errorStr+"<li>Employee name is required.</li>";
     flag =true;
 }
 if(empcode == ""){
    errorStr=errorStr+"<li>Employee code is required.</li>";
    flag=true;
}

var dept=document.getElementsByName("dept");
var deptStatus=false;
for(var i=0;i<dept.length;i++){
    if(dept[i].checked){
        deptStatus=true;
    }
}
if(!deptStatus){
    errorStr=errorStr+"<li>please Select Department.</li>";
    flag=true;
}
var day=document.getElementById("day");
 var daySelected=day.options[day.selectedIndex].value;
if(daySelected == -1){
    errorStr=errorStr+"<li> please select day.</li>";
    flag=true;
}
var month=document.getElementById("month");
 var monthSelected=month.options[month.selectedIndex].value;
if(monthSelected == -1){
    errorStr=errorStr+"<li> please select month.</li>";
    flag=true;
}
var year=document.getElementById("year");
 var yearSelected=year.options[year.selectedIndex].value;
if(yearSelected == -1){
    errorStr=errorStr+"<li> please select year.</li>";
    flag=true;
}


errorStr=errorStr+"</ul>";
if(flag){
    document.getElementById("error").innerHTML=errorStr;
}
else{
document.getElementById("frm").submit();
}
document.getElementById("error").innerHTML=errorStr;

}