function validateform(){  
  var name=document.myform.name.value;  
  var password=document.myform.password.value; 
  var name1=document.myform.name1.value;  
  var name2=document.myform.name2.value;  
    
  if (name==null || name==""){  
    alert("Name can't be blank");  
    return false;  
  }
  if (name1==null || name1==""){  
    alert("Course can't be blank");  
    return false;  
  }
  if (name2==null || name2==""){  
    alert("hobby can't be blank");  
    return false;  
  }
  if(password.length<6){  
    alert("Password must be at least 6 characters long.");  
    return false;
  }
}
text= prompt("please enter student or parents ")
if (text === "student") {
 window.location.href = "file:///C:/Users/17621/Desktop/%E6%95%99%E8%82%B2%E7%BD%91%E7%AB%99/dist/course%20details.html";
}
else if (text === "parent") {
 window.location.href = "file:///C:/Users/17621/Desktop/%E6%95%99%E8%82%B2%E7%BD%91%E7%AB%99/dist/index.html";
}
