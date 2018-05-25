/* 
   function idChkConfirm() { // id중복체크를를 우선적으로 하게 하는 기능.
      var chk = document.getElementsByName("userId")[0].title;
      if (chk == "n") {
         alert("아이디 중복체크를 해주세요");
         document.getElementsByName("userId")[0].focus();
      }
   }*/


	function snsChecked() { //문자알림서비스 확인창
		var retVal = confirm("문자알림을 받으시겠습니까?\n매달 1일, 부모님께 안부를 물어보도록 유도하는 알림문자가 발송되며,\n캘린더에 일정 추가 시 일정 알림을 체크하면 \n해당 일정 날짜의 하루 전에 알림 문자가 발송됩니다.");

		if (retVal == true) {
			$("input[class=checkbox]").prop("checked", true);
		} else {
			$("input[class=checkbox]").prop("checked", false);
		}
	}

	function showSub(obj){ //주소 셀렉트박스
		var seoul = document.getElementById("seoul");
		var gyeonggi = document.getElementById("gyeonggi");
		var incheon = document.getElementById("incheon");
		var gangwon = document.getElementById("gangwon");
		var chungbuk = document.getElementById("chungbuk");
		var chungnam = document.getElementById("chungnam");
		var daejeon = document.getElementById("daejeon");
		var gyeongbug = document.getElementById("gyeongbug");
		var daegu = document.getElementById("daegu");
		var ulsan = document.getElementById("ulsan");
		var gyeongnam = document.getElementById("gyeongnam");
		var busan = document.getElementById("busan");
		var jeonbug = document.getElementById("jeonbug");
		var jeonnam = document.getElementById("jeonnam");
		var gwangju = document.getElementById("gwangju");
		var jeju = document.getElementById("jeju");
		
		switch(obj){
			case "서울특별시" :
				seoul.style.display = "";
				gyeonggi.style.display = "none";
				incheon.style.display = "none";
				gangwon.style.display = "none";
				chungbuk.style.display = "none";
				chungnam.style.display = "none";
				daejeon.style.display = "none";
				gyeongbug.style.display = "none";
				daegu.style.display = "none";
				ulsan.style.display = "none";
				gyeongnam.style.display = "none";
				busan.style.display = "none";
				jeonbug.style.display = "none";
				jeonnam.style.display = "none";
				gwangju.style.display = "none";
				jeju.style.display = "none";
				break;
			case "경기도" :
				seoul.style.display = "none";
				gyeonggi.style.display = "";
				incheon.style.display = "none";
				gangwon.style.display = "none";
				chungbuk.style.display = "none";
				chungnam.style.display = "none";
				daejeon.style.display = "none";
				gyeongbug.style.display = "none";
				daegu.style.display = "none";
				ulsan.style.display = "none";
				gyeongnam.style.display = "none";
				busan.style.display = "none";
				jeonbug.style.display = "none";
				jeonnam.style.display = "none";
				gwangju.style.display = "none";
				jeju.style.display = "none";
				break;
			case "인천광역시" :
				seoul.style.display = "none";
				gyeonggi.style.display = "none";
				incheon.style.display = "";
				gangwon.style.display = "none";
				chungbuk.style.display = "none";
				chungnam.style.display = "none";
				daejeon.style.display = "none";
				gyeongbug.style.display = "none";
				daegu.style.display = "none";
				ulsan.style.display = "none";
				gyeongnam.style.display = "none";
				busan.style.display = "none";
				jeonbug.style.display = "none";
				jeonnam.style.display = "none";
				gwangju.style.display = "none";
				jeju.style.display = "none";
				break;
			case "강원도" :
				seoul.style.display = "none";
				gyeonggi.style.display = "none";
				incheon.style.display = "none";
				gangwon.style.display = "";
				chungbuk.style.display = "none";
				chungnam.style.display = "none";
				daejeon.style.display = "none";
				gyeongbug.style.display = "none";
				daegu.style.display = "none";
				ulsan.style.display = "none";
				gyeongnam.style.display = "none";
				busan.style.display = "none";
				jeonbug.style.display = "none";
				jeonnam.style.display = "none";
				gwangju.style.display = "none";
				jeju.style.display = "none";
				break;
			case "충청북도" :
				seoul.style.display = "none";
				gyeonggi.style.display = "none";
				incheon.style.display = "none";
				gangwon.style.display = "none";
				chungbuk.style.display = "";
				chungnam.style.display = "none";
				daejeon.style.display = "none";
				gyeongbug.style.display = "none";
				daegu.style.display = "none";
				ulsan.style.display = "none";
				gyeongnam.style.display = "none";
				busan.style.display = "none";
				jeonbug.style.display = "none";
				jeonnam.style.display = "none";
				gwangju.style.display = "none";
				jeju.style.display = "none";
				break;
			case "충청남도" :
				seoul.style.display = "none";
				gyeonggi.style.display = "none";
				incheon.style.display = "none";
				gangwon.style.display = "none";
				chungbuk.style.display = "none";
				chungnam.style.display = "";
				daejeon.style.display = "none";
				gyeongbug.style.display = "none";
				daegu.style.display = "none";
				ulsan.style.display = "none";
				gyeongnam.style.display = "none";
				busan.style.display = "none";
				jeonbug.style.display = "none";
				jeonnam.style.display = "none";
				gwangju.style.display = "none";
				jeju.style.display = "none";
				break;
			case "대전광역시" :
				seoul.style.display = "none";
				gyeonggi.style.display = "none";
				incheon.style.display = "none";
				gangwon.style.display = "none";
				chungbuk.style.display = "none";
				chungnam.style.display = "none";
				daejeon.style.display = "";
				gyeongbug.style.display = "none";
				daegu.style.display = "none";
				ulsan.style.display = "none";
				gyeongnam.style.display = "none";
				busan.style.display = "none";
				jeonbug.style.display = "none";
				jeonnam.style.display = "none";
				gwangju.style.display = "none";
				jeju.style.display = "none";
				break;
			case "세종특별자치시" :
				seoul.style.display = "none";
				gyeonggi.style.display = "none";
				incheon.style.display = "none";
				gangwon.style.display = "none";
				chungbuk.style.display = "none";
				chungnam.style.display = "none";
				daejeon.style.display = "none";
				gyeongbug.style.display = "none";
				daegu.style.display = "none";
				ulsan.style.display = "none";
				gyeongnam.style.display = "none";
				busan.style.display = "none";
				jeonbug.style.display = "none";
				jeonnam.style.display = "none";
				gwangju.style.display = "none";
				jeju.style.display = "none";
				break;	
			case "경상북도" :
				seoul.style.display = "none";
				gyeonggi.style.display = "none";
				incheon.style.display = "none";
				gangwon.style.display = "none";
				chungbuk.style.display = "none";
				chungnam.style.display = "none";
				daejeon.style.display = "none";
				gyeongbug.style.display = "";
				daegu.style.display = "none";
				ulsan.style.display = "none";
				gyeongnam.style.display = "none";
				busan.style.display = "none";
				jeonbug.style.display = "none";
				jeonnam.style.display = "none";
				gwangju.style.display = "none";
				jeju.style.display = "none";
				break;
			case "대구광역시" :
				seoul.style.display = "none";
				gyeonggi.style.display = "none";
				incheon.style.display = "none";
				gangwon.style.display = "none";
				chungbuk.style.display = "none";
				chungnam.style.display = "none";
				daejeon.style.display = "none";
				gyeongbug.style.display = "none";
				daegu.style.display = "";
				ulsan.style.display = "none";
				gyeongnam.style.display = "none";
				busan.style.display = "none";
				jeonbug.style.display = "none";
				jeonnam.style.display = "none";
				gwangju.style.display = "none";
				jeju.style.display = "none";
				break;
			case "울산광역시" :
				seoul.style.display = "none";
				gyeonggi.style.display = "none";
				incheon.style.display = "none";
				gangwon.style.display = "none";
				chungbuk.style.display = "none";
				chungnam.style.display = "none";
				daejeon.style.display = "none";
				gyeongbug.style.display = "none";
				daegu.style.display = "none";
				ulsan.style.display = "";
				gyeongnam.style.display = "none";
				busan.style.display = "none";
				jeonbug.style.display = "none";
				jeonnam.style.display = "none";
				gwangju.style.display = "none";
				jeju.style.display = "none";
				break;
			case "경상남도" :
				seoul.style.display = "none";
				gyeonggi.style.display = "none";
				incheon.style.display = "none";
				gangwon.style.display = "none";
				chungbuk.style.display = "none";
				chungnam.style.display = "none";
				daejeon.style.display = "none";
				gyeongbug.style.display = "none";
				daegu.style.display = "none";
				ulsan.style.display = "none";
				gyeongnam.style.display = "";
				busan.style.display = "none";
				jeonbug.style.display = "none";
				jeonnam.style.display = "none";
				gwangju.style.display = "none";
				jeju.style.display = "none";
				break;
			case "부산광역시" :
				seoul.style.display = "none";
				gyeonggi.style.display = "none";
				incheon.style.display = "none";
				gangwon.style.display = "none";
				chungbuk.style.display = "none";
				chungnam.style.display = "none";
				daejeon.style.display = "none";
				gyeongbug.style.display = "none";
				daegu.style.display = "none";
				ulsan.style.display = "none";
				gyeongnam.style.display = "none";
				busan.style.display = "";
				jeonbug.style.display = "none";
				jeonnam.style.display = "none";
				gwangju.style.display = "none";
				jeju.style.display = "none";
				break;
			case "전라북도" :
				seoul.style.display = "none";
				gyeonggi.style.display = "none";
				incheon.style.display = "none";
				gangwon.style.display = "none";
				chungbuk.style.display = "none";
				chungnam.style.display = "none";
				daejeon.style.display = "none";
				gyeongbug.style.display = "none";
				daegu.style.display = "none";
				ulsan.style.display = "none";
				gyeongnam.style.display = "none";
				busan.style.display = "none";
				jeonbug.style.display = "";
				jeonnam.style.display = "none";
				gwangju.style.display = "none";
				jeju.style.display = "none";
				break;
			case "전라남도" :
				seoul.style.display = "none";
				gyeonggi.style.display = "none";
				incheon.style.display = "none";
				gangwon.style.display = "none";
				chungbuk.style.display = "none";
				chungnam.style.display = "none";
				daejeon.style.display = "none";
				gyeongbug.style.display = "none";
				daegu.style.display = "none";
				ulsan.style.display = "none";
				gyeongnam.style.display = "none";
				busan.style.display = "none";
				jeonbug.style.display = "none";
				jeonnam.style.display = "";
				gwangju.style.display = "none";
				jeju.style.display = "none";
				break;
			case "광주광역시" :
				seoul.style.display = "none";
				gyeonggi.style.display = "none";
				incheon.style.display = "none";
				gangwon.style.display = "none";
				chungbuk.style.display = "none";
				chungnam.style.display = "none";
				daejeon.style.display = "none";
				gyeongbug.style.display = "none";
				daegu.style.display = "none";
				ulsan.style.display = "none";
				gyeongnam.style.display = "none";
				busan.style.display = "none";
				jeonbug.style.display = "none";
				jeonnam.style.display = "none";
				gwangju.style.display = "";
				jeju.style.display = "none";
				break;
			case "제주도" :
				seoul.style.display = "none";
				gyeonggi.style.display = "none";
				incheon.style.display = "none";
				gangwon.style.display = "none";
				chungbuk.style.display = "none";
				chungnam.style.display = "none";
				daejeon.style.display = "none";
				gyeongbug.style.display = "none";
				daegu.style.display = "none";
				ulsan.style.display = "none";
				gyeongnam.style.display = "none";
				busan.style.display = "none";
				jeonbug.style.display = "none";
				jeonnam.style.display = "none";
				gwangju.style.display = "none";
				jeju.style.display = "";
				break;
		}
   }
	
	$(function(){
		      $("input[name=memberId").on("change",function() {
		            var idVal = $("input[name=memberId]").val();
		            if(idVal==null || idVal==""){
		            	 $("#useId").css("display", "none");
	                     $("#unId").css("display", "none");   	
		            }else{
		            	  $.ajax({
				               type:"post",
				               url : "IDChk.do",
				               data:"id="+idVal,
				               success : function(res) {
				                  var r = $.trim(res);
				                  if (r == "t") {  
				                     $("#useId").css("display", "inline");
				                     $("#unId").css("display", "none");
				                  }else{
				                	 $("#unId").css("display", "inline");
				                	 $("#useId").css("display", "none");
				                  }
				               }
				            });
		            }
		         })
		         
		          $("input[name=memberNickname").on("change",function() {
		            var nickVal = $("input[name=memberNickname]").val();
		            if(nickVal==null || nickVal==""){
		            	 $("#useNick").css("display", "none");
	                     $("#unNick").css("display", "none");   	
		            }else{
		            $.ajax({
		               type:"post",
		               url : "nickNameChk.do",
		               data:"nickName="+nickVal,
		               success : function(res) {
		                  var r = $.trim(res);
		                  if (r == "t") {  
		                     $("#useNick").css("display", "inline");
		                     $("#unNick").css("display", "none");
		                  }else{
		                	 $("#unNick").css("display", "inline");
		                	 $("#useNick").css("display", "none");
		                  }
		               }
		            });
		            }
		         })
		         
		          $("input[name=memberEmail").on("change",function() {
		            var emailVal = $("input[name=memberEmail]").val();
		            if(emailVal==null || emailVal==""){
		            	 $("#useEmail").css("display", "none");
	                     $("#unEmail").css("display", "none");   	
		            }else{
		            $.ajax({
		               type:"post",
		               url : "emailChk.do",
		               data:"email="+emailVal,
		               success : function(res) {
		                  var r = $.trim(res);
		                  if (r == "t") {  
		                     $("#useEmail").css("display", "inline");
		                     $("#unEmail").css("display", "none");
		                  }else{
		                	 $("#unEmail").css("display", "inline");
		                	 $("#useEmail").css("display", "none");
		                  }
		               }
		            });
		            }
		         })
		         
		          $("input[name=memberPw").on("change",function() {
		            var pwVal = $("input[name=memberPw]").val();
		            if(pwVal==null || pwVal==""){
		            	 $("#usePw").css("display", "none");
	                     $("#unPw").css("display", "none");   	
		            }else{
		            $.ajax({
		               type:"post",
		               url : "pwChk.do",
		               data:"pw="+pwVal,
		               success : function(res) {
		                  var r = $.trim(res);
		                  if (r == "t") {  
		                     $("#usePw").css("display", "inline");
		                     $("#unPw").css("display", "none");
		                  }else{
		                	 $("#unPw").css("display", "inline");
		                	 $("#usePw").css("display", "none");
		                  }
		               }
		            });
		            }
		         })
		         
		          $("input[name=userChkpw").on("change",function() {
		        	  var pwVal = $("input[name=memberPw]").val();
		        	  var pwValChk = $("input[name=userChkpw]").val();
		        	  if(pwValChk==null || pwValChk==""){
			            	 $("#useOnemore").css("display", "none");
		                     $("#unOnemore").css("display", "none");   	
			            }else{
			            	if(pwVal == pwValChk){
			            		$("#useOnemore").css("display", "inline");
			            		$("#unOnemore").css("display", "none");
			            	}else{
			            		$("#unOnemore").css("display", "inline");
			            		$("#useOnemore").css("display", "none");  
			            	}
			            }
		         })
		      
	
	
	
	
	
	})