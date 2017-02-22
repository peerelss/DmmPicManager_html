"use strict";
function displayDate(){
    document.getElementById("demo").innerHTML=Date();
    var head=document.getElementById("head").value;
    var name=document.getElementById("name").value;
    var from=document.getElementById("from").value;
    var to=document.getElementById("to").value;
   // var end=document.getElementById("end").value;
   var end="pl.jpg"
    if(head==""||name==""||from==""||to==""||end==""){
        document.getElementById("demo").innerHTML="输入有误,请重新输入";
        return;
    }
    var url=head+name+from+to+end;
    document.title=name+from+"__"+to;

    window.console.log(url);
    var pNode = document.createElement("p");
    pNode.textContent = "新建一个P节点";
    //  document.getElementById("images").appendChild(pNode);
    var images=document.getElementById("images");
    images.innerHTML="";
    var i=0;
    name="/"+name;
    for(i=from/1;i<=to/1;i++){
        var pNode1 = document.createElement("p");
        pNode1.textContent =name+ i.toString();
        images.appendChild(pNode1);
        images.appendChild(document.createElement("br"));
        var imageNode=document.createElement("img");
        if(0<i&&i<10){
             imageNode.src=head+name+"00"+i+name+"00"+i+end;
        }else if(9<i&&i<100){
             imageNode.src=head+name+"0"+i+name+"0"+i+end;
        }else{
             imageNode.src=head+name+i+name+i+end;
        }

        window.console.log(imageNode.src);
        images.appendChild(imageNode);
        images.appendChild(document.createElement("br"));

    }
}

