function output(){
	console.log(this.responseText)
	//var get = nl2br(this.responseText)
	//document.getElementById("writer").innerHTML += get;
	txt = this.responseText;
	if(txt != ""){
		document.getElementById("setter").value += txt;
		writeit(document.getElementById("setter"))
	}else{
		document.getElementById("setter").value += "Command Not Found \n";
		writeit(document.getElementById("setter"))
		writeit(document.getElementById("setter"))
	}
}

function doout(txt){
	//return txt.replace(/\n/g, '<br /><i class="fa fa-terminal" aria-hidden="true"></i><span style="color: white; font-family: ubuntu;"></span>');
	return txt.replace(/\n/g, '<span style="color: white; font-family: ubuntu;"></span><br />');
}


var cursor = $("#cursor");
		var setter = $("#setter");
		var writer = $("#writer");
		var terminal = $("#terminal");
		$(cursor).css("left", "0px");
		function nl2br(txt){
			//console.log(txt)
			return txt.replace(/\n/g, '<br /><i class="fa fa-terminal" aria-hidden="true"></i><span style="color: #4878c0;">~</span><span style="color: white;">$ </span>');
		}
		function writeit(from, e){
			e = e || window.event;
			var w = $(writer);
			var tw = from.value;
			w.html(nl2br(tw));
		}
		function writeiit(from, e){
			e = e || window.event;
			var w = $(writer);
			var tw = from.value;
			w.html(nl2brr(tw));
		}
		function moveIt(count, e){
			e = e || window.event;
			var keycode = e.keyCode || e.which;
			if(keycode == 37 && parseInt($(cursor).css("left")) >= (0-((count-1)*10))){
				$(cursor).css("left", parseInt($(cursor).css("left")) - 10 + "px");
			} else if(keycode == 39 && (parseInt($(cursor).css("left")) + 10) <= 0){
				$(cursor).css("left", parseInt($(cursor).css("left")) + 10 + "px");
			}
		}
        function blink(){ 
            if($(cursor).css("display") == "none"){ 
                $(cursor).css("display","inline");
            } else {
            	$(cursor).css("display","none");
            }
        }
        setInterval("blink()", 500);
        $(terminal).click(function(){
        	$(setter).focus();
        });
        $(setter).keydown(function(event){
			moveIt(this.value.length, event);
			writeit(this, event);
		});
		$(setter).keyup(function(event){
			var get = document.getElementById("setter").value.replace(/\r\n|\r|\n/g,"\\n")
			if(get.slice(-2) == "\\n"){
				//new line
				var arr = get.split("\\n");
				var said = arr[arr.length-2];
				if(said != "" && said.includes("cd") == false && said.includes("ls") == false){
					var oReq = new XMLHttpRequest();
					oReq.addEventListener("load", output);
					oReq.open("GET", "ajax.php?shell=" + said);
					oReq.send();
				}else if(said.includes("cd")){
					if(said == "cd /" || said == "cd C:" || said == "cd c:"){
						localStorage.setItem("path", "/")
					}else{
						var input = said.substring(3)
						if(localStorage.getItem("path") == null){
							localStorage.setItem("path", input)
						}else{
							var inp = localStorage.getItem("path")
							var putout = inp + "/" + input;
							localStorage.setItem("path", putout);
						}
					}
					console.log(localStorage.getItem("path"))
				}else if(said.includes("ls")){
					var treq = new XMLHttpRequest();
					treq.addEventListener("load", output);
					treq.open("GET", "ajax.php?path=" + localStorage.getItem("path"));
					treq.send();
				}
			}
			moveIt(this.value.length, event);
			writeit(this, event);
		});
		$(setter).keypress(function(event){
			$('#terminal__body').scrollTop($('#terminal__body')[0].scrollHeight);
			writeit(this, event);
			$('#terminal__body').scrollTop($('#terminal__body')[0].scrollHeight);
		});