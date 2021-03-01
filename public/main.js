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
				if(said != ""){
					
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