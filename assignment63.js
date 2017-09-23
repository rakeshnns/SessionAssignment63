    // Global Variable Declaration
    var inparr = [];
	  var pharr = [];
	  var charr = [];
	  var nmarr = [];
	  var maarr = [];
	  var avgarr = [];
	  var totarr = [];
	  var gradearr = [];  
      var ns = 0;
      var text;

    //Function definition for submit()- Invoked on click on Submit button
    function submit(){
      //Variable declartion
	  var ph = 0;
	  var ch = 0;
	  var ma = 0;
	  var nm = ' ';
	  var x;
	  var y;
	  var inputtxt = "";
	  var err = "N";
	  var tot = 0;
	  var avg = 0;
	  var grade = "";
	

	  x  = document.getElementById("message");
	  y  = document.getElementsByTagName("input");
	  ph = document.getElementById("phy").value;
	  ch = document.getElementById("che").value;
	  ma = document.getElementById("mat").value;
	  nm = document.getElementById("nam").value;
      // resetting all INPUT tags to white
	  for(var i =0;i< y.length;i++){
		y[i].style.backgroundColor = "white";
	  }
      
      x.innerHTML = '';
      //Input parameter checking..
	  if (ph < 0 || ph > 100 || ph == ""){
        inputtxt    += "**Physics mark should between 0 - 100";
		x.innerHTML = inputtxt;
		x.style.color = "red";
		document.getElementById("phy").style.backgroundColor = "lightpink";
		inputtxt += "<br>";
		err = "Y";

	  }if (ch < 0 || ch > 100 || ch == ""){

		inputtxt    += "**Chemistry mark should between 0 - 100";
		x.innerHTML = inputtxt;
		x.style.color = "red";
		document.getElementById("che").style.backgroundColor = "lightpink";
		inputtxt += "<br>";
        err = "Y";
	  }if (ma < 0 || ma > 100 || ma == ""){

		inputtxt    += "**Maths mark should between 0 - 100";
		x.innerHTML = inputtxt;
		x.style.color = "red";
		document.getElementById("mat").style.backgroundColor = "lightpink";
		inputtxt += "<br>";
        err = "Y";
	  }if (nm == ''){

		inputtxt    += "**Student Name cannot be blanks.";
		x.innerHTML = inputtxt;
		x.style.color = "red";
		document.getElementById("nam").style.backgroundColor = "lightpink";
		inputtxt += "<br>";
        err = "Y";
	  }
    // IF no error in iputs then execute
     if (err == "N"){
        tot = parseInt(ph) + parseInt(ch) + parseInt(ma);
        avg = tot/3;
        if(ph<35 || ch<35 || ma<35){
        	grade = "Fail";
        }else if(avg>=35 && avg<=50){
        	grade = "E";
        }else if(avg>50 && avg<=60){
        	grade = "D";
        }else if(avg>60 && avg<=70){
        	grade = "C";
        }else if(avg>70 && avg<=80){
        	grade = "B";
        }else if(avg>80 && avg<=95){
        	grade = "A";
        }else if(avg>95 && avg<=100){
        	grade = "A+";
        }

        arrayinput();  //Function to store value inputed by User.
        display();     //Function to diplay the inputed data onscreen. 

        resetfn();     //Function to reset all variable before next submit.
     }
    //Function definition for arrayinput()
     function arrayinput(){

       pharr.push(ph);
       charr.push(ch);
       maarr.push(ma);
       avgarr.push(avg);
       totarr.push(tot);
       nmarr.push(nm);
       gradearr.push(grade);
       ns = pharr.length;
     }
    //Function definition for resetfn()
    function resetfn(){
      nm ="";
      ph=0;
      ch=0;
      ma=0;
      tot=0;
      avg=0;
      grade="";
      
      for(var i =0;i< y.length;i++){
		y[i].value = "";
	  }

     }
    //Function definition for display()
     function display(){
      //Table creation
      text = "<table>";
      text += "<tr>";
      text += "<th>Student Name</th><th>Physics</th><th>Chemistry</th><th>Mathematics</th><th>Total</th>\
      <th>Average</th><th>Grade</th>";
      text += "</tr>";
      for(var i=0;i<ns;i++){
      	text += "<tr>";
      	text += "<td>"+nmarr[i]+"</td>"
      	text += "<td>"+pharr[i]+"</td>"
      	text += "<td>"+charr[i]+"</td>"
      	text += "<td>"+maarr[i]+"</td>"
      	text += "<td>"+totarr[i]+"</td>"
      	text += "<td>"+avgarr[i]+"</td>"
      	text += "<td>"+gradearr[i]+"</td>"
      	text += "</tr>";
      }
      text += "</table>";
      //Displaying table on DOM
      document.getElementById("result").innerHTML = text;

     }
	
	} 