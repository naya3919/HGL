<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
    <% request.setCharacterEncoding("UTF-8"); %>
    <% response.setContentType("text/html; charset=UTF-8"); %>
    
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Login.jsp</title>
</head>
<link rel="stylesheet" type="text/css" href="css/MemberLogin.css">
<style>
html { background: url("image/img.jpg") no-repeat center fixed;
 -webkit-background-size: cover;
 -moz-background-size: cover;
 -o-background-size: cover;
 background-size: cover;
 }
</style>
<script type="text/javascript" src="js/jquery-3.3.1.min.js"></script>
<script type="text/javascript">

$(document).ready(function() {
	/* $("#admin").hide(); */
});

function MemberSearch(){
	var popupX = (window.screen.width/2) - (440 / 2);
	var popupY= (window.screen.height/2)- (240/2);
	// 만들 팝업창 상하 크기의 1/2 만큼 보정값으로 빼주었음
	window.open("MemberSearch.do","", 'status=no, width=440, height=240, left='+ popupX + ', top='+ popupY + ', screenX='+ popupX + ', screenY= '+ popupY);
	}
	
$(function(){
	$("#b2").submit(function){
		  var returnVar = true;
		  var idVal = $("#inpid").val();
		  var pwVal = $("#inppw").val();
		  if (idVal == null || idVal == "") {
		  	  alertify.alert("아이디를 입력해주세요");
		    } else if (pwVal == null || pwVal == "") {
		  	  alertify.alert("비밀번호를 입력해주세요");
		    } else {
		       $.ajax({
		          url : "memberLoginChk.do",
		          data: "id=" + idVal+ "&pw="+ pwVal,
		          dataType : "text",
		          success : function(msg) {
		        	  var msgVal = $.trim(msg);
		        	  if( msgVal == "f")){
		    	  	 alert("ID와 비밀번호가 일치하지 않습니다.");
	                 returnVar = false;
		      			 }
		          }
		       })
		     if (!returnVar) {
         	  return false;
     	  		}
		   }
  });
})
	
	

</script>
<body>
	<div id="container">
	<div id="a"><%@ include file="/WEB-INF/views/Header.jsp"%></div>
	
	<div id="b">
		<div id="b1">
			<div>
			<img src="image/back.png" id="im1">
			</div>
			<form action="MemberLogin.do" id="b2">
				<div id="b3">
				<table align="center">
					<tr>
						<td>ID</td>
						<td><input type="text" name="memberId" id="inpid"></td>
					</tr>
					<tr>
						<td>PW</td>
						<td><input type="password" name="memberPw" id="inppw"></td>
					</tr>
					<tr>
						<td><br></td>
					</tr>
					<tr>
						<td colspan="2">
						<input type="submit" value="로그인">
		                <input type="button" value="ID / PW 찾기" onclick="MemberSearch()">
					    <input type="button" value="회원가입" onclick="location.href='MemberSignUpForm.do'">
					</td>
					</tr>
				</table>
				</div>
			</form>
		</div>
	</div>
	
	<div id="c"><%@ include file="/WEB-INF/views/Footer.jsp"%></div>
	</div>
</body>
</html>