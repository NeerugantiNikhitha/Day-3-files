function populateCity()
{
    var xhr= new XMLHttpRequest();
    xhr.open('GET','state-city.json',true);
    xhr.responseType="text";
    xhr.send();

    xhr.onload=function()
    {
        if(xhr.status==200)
        {
           var data=JSON.parse(xhr.responseText);
           //console.log(data);
           var state=document.getElementById("state").value;
           console.log(data.Karnataka);
           var cityHtml="";
           if(state=="Karnataka")
           {
             for(var i=0; i<data.Karnataka.length; i++)
             {
                 cityHtml = cityHtml+"<option>"+data.Karnataka[i]+"</option>";
             }
           
           }
           document.getElementById("city").innerHTML = cityHtml;

           if(state=="Maharashtra")
           {
             for(var i=0; i<data.Maharashtra.length; i++)
             {
                 cityHtml = cityHtml+"<option>"+data.Maharashtra[i]+"</option>";
             }
           
           }
           document.getElementById("city").innerHTML = cityHtml;

           if(state=="AndhraPradesh")
           {
             for(var i=0; i<data.AndhraPradesh.length; i++)
             {
                 cityHtml = cityHtml+"<option>"+data.AndhraPradesh[i]+"</option>";
             }
           
           }
           document.getElementById("city").innerHTML = cityHtml;

           if(state=="Telangana")
           {
             for(var i=0; i<data.Telangana.length; i++)
             {
                 cityHtml = cityHtml+"<option>"+data.Telangana[i]+"</option>";
             }
           
           }
           document.getElementById("city").innerHTML = cityHtml;

           if(state=="Jammu Kashmir")
           {
             for(var i=0; i<data["Jammu Kashmir"].length; i++)
             {
                 cityHtml = cityHtml+"<option>"+data["Jammu Kashmir"][i]+"</option>";
             }
           
           }
           document.getElementById("city").innerHTML = cityHtml;

           if(state=="TamilNadu")
           {
             for(var i=0; i<data.TamilNadu.length; i++)
             {
                 cityHtml = cityHtml+"<option>"+data.TamilNadu[i]+"</option>";
             }
           
           }
           document.getElementById("city").innerHTML = cityHtml;

           if(state=="WestBengal")
           {
             for(var i=0; i<data.WestBengal.length; i++)
             {
                 cityHtml = cityHtml+"<option>"+data.WestBengal[i]+"</option>";
             }
           
           }
           document.getElementById("city").innerHTML = cityHtml;
        }
    }
}
