<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% request.setCharacterEncoding("UTF-8"); %>
<% response.setContentType("text/html; charset=UTF-8"); %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" type="text/css" href="css/FWLList.css">
<script type="text/javascript" src="js/jquery-3.3.1.min.js"></script>
<script type="text/javascript">

$(function(){
	$("input[type=checkbox]").click(function(){
		 var checkValue = $(this).val();
		 if($(this).is(":checked")){
			 var wishChk=confirm("위시리스트를 달성하셨나요?")
			 if(wishChk == true){
				 $.ajax({
		               type:"post",
		               url : "FWLSuccess.do",
		               data: {checkValue : checkValue},
		               success : function() {
		            	   alert("위시리스트 달성을 축하드립니다.");
		            	   location.reload();
		               },
		               error:function(){
		             	   alert("ajax error");
		               }
		            });
			 }else{
				 alert("취소되었습니다");
				 $(this).prop("checked","false");
			 }
		 
		 
		 }else{
			 var wishChk=confirm("취소하시겠습니까?")
			 if(wishChk == true){
				 $.ajax({
		               type:"post",
		               url : "FWLSuccessCancel.do",
		               data: {checkValue : checkValue},
		               success : function() {
		            	   alert("취소되었습니다.");
		            	   $(this).prop("checked","false");
		            	   location.reload();
		               },
		               error:function(){
		             	   alert("ajax error");
		               }
		            });
			 }else{
				 $(this).prop("checked","true");
			 }
		 }
	
	
	});
})

	function FWLinsert(){
		var popupX = (window.screen.width/2) - (600 / 2);
		var popupY= (window.screen.height/2)- (150);
		// 만들 팝업창 상하 크기의 1/2 만큼 보정값으로 빼주었음
		window.name="Parent";
		window.open("FWLInsertForm.do?memberNo="+${login.memberNo},"위시리스트추가하기", 'status=no, width=600, height=150, left='+ popupX + ', top='+ popupY + ', screenX='+ popupX + ', screenY= '+ popupY);
	}


</script>
</head>
<body>

	<div id="container">
	<div id="a"><%@ include file="/WEB-INF/views/Header.jsp"%></div>
		<div id="topbutton">
			<button type="button" onclick="location.href='FWLShare.do?memberNo='+${login.memberNo}+'&memberNickName=${login.memberNickname}'">공유하기</button>
			<button type="button" onclick="FWLinsert();" style="margin-left: 425px;">+위시리스트 추가하기</button>
		</div>
		
		<form>
		<table border="1" style="width:650px; margin: auto;">
			<tr>
				<th>달성</th>
				<th style="text-align: center;">위 시 리 스 트</th>
				<th></th>
			</tr>
				<c:choose>
					<c:when test="${empty FWLList}">
					<tr>
						<td></td>
						<td style="text-align: center;">등록된 위시리스트가 존재 하지 않습니다! 등록해주세요</td>
						<td></td>
					</tr>
					</c:when>
					<c:otherwise>
						<c:forEach items="${FWLList}" var="FwlDto">
						<tr>
							<c:choose>
								<c:when test="${FwlDto.fwlChk eq 'Y'}">
								<td><input type="checkbox" checked="checked" value="${FwlDto.fwlNo}"></td>
								</c:when>
								<c:otherwise>
								<td>	<input type="checkbox" value="${FwlDto.fwlNo}">	</td>
								</c:otherwise>
							</c:choose>
							<td>${FwlDto.fwlItem}</td>
							<td><button class="FWLDelete"><img class="FWLDelete-img" src="image/xButton.png"></button></td>
						</tr>
						</c:forEach>
					</c:otherwise>
				</c:choose>
		
			<tr>
				<td colspan="2">
					<input type="submit" value="달성여부 저장" style="float:right;"><!-- 추가하기하고 저장을 누르기위해서 -->
				</td>
				<td><input type="button" value="삭제"></td>
			</tr>
		</table>
		</form>	
	
	</div>
</body>
</html>