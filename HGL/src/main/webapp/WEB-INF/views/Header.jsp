<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
    <% request.setCharacterEncoding("UTF-8"); %>
    <% response.setContentType("text/html; charset=UTF-8"); %>
    <%@page import="java.util.Calendar"%>
    
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<link rel="stylesheet" type="text/css" href="css/Header.css">
<script type="text/javascript" src="js/jquery-3.3.1.min.js"></script>
<script type="text/javascript">

function AdminMange(){
	var popupX = (window.screen.width / 2) - (440 / 2);
	// 만들 팝업창 좌우 크기의 1/2 만큼 보정값으로 빼주었음

	var popupY= (window.screen.height /2) - (310 / 2);
	// 만들 팝업창 상하 크기의 1/2 만큼 보정값으로 빼주었음
	window.open("AdminMangeForm.do","", 'width=440, height=310, left='+ popupX + ', top='+ popupY + ', screenX='+ popupX + ', screenY= '+ popupY);
	}

</script>

<body>
<%
Calendar cal =Calendar.getInstance();
//현재 년도
int year = cal.get(Calendar.YEAR);
//현재 월 (0~11)
int month = cal.get(Calendar.MONTH)+1;
%>
	<div>
		<div id="header">
		<div id="header2"><img src="image/sadad.png"></div>
			<div id="up">
				<div class="up2" id="up21"><a href="MainForm.do">홈버튼 로고</a></div>
				<div class="up2" id="up22">
					<div id="hgl"><strong>행</strong>복한
					<strong>가</strong>족의
					미<strong>래</strong></div>
				</div>
				<div class="up2" id="up23">${login.memberNickname} 님 환영합니다</div>
				<div class="up2" id="up24"><a href="memberLoginOut.do">로그아웃</a></div>
			</div>
			<div id="down">
				<div>
					<div onclick="location.href='MapHW.do'">카테고리지도&nbsp/</div>
					<div onclick="location.href='MapK.do'">&nbsp착한가게</div>
				</div>
				<div class="menu" id="admin">
					<div onclick="AdminMange()">관리자-회원제재</div>
					<div onclick="location.href='AdminSearchUserForm.do'">관리자-회원목록</div>
				</div>
				<div class="menu"><div class="col-md-3 col-sm-3 col-xs-6" id="btn"> <a href="#" class="btn btn-sm animated-button thar-three" id="btn2">홈페이지 소개</a></div></div>
				<div class="menu"><div class="col-md-3 col-sm-3 col-xs-6" id="btn"> <a href="MemberInfoForm.do?memberNo=${login.memberNo}" class="btn btn-sm animated-button thar-three" id="btn2">내정보</a></div></div>
				<div class="menu"><div class="col-md-3 col-sm-3 col-xs-6" id="btn"> <a href="CalListForm.do?memberId=${login.memberId }&year=<%=year %>&month=<%=month %>" class="btn btn-sm animated-button thar-three" id="btn2">캘린더</a></div></div>
				<div class="menu"><div class="col-md-3 col-sm-3 col-xs-6" id="btn"> <a href="FWLBList.do?nowpage=1" class="btn btn-sm animated-button thar-three" id="btn2">지도</a></div></div>
				<div class="menu"><div class="col-md-3 col-sm-3 col-xs-6" id="btn"> <a href="FWLList.do?memberNo=${login.memberNo}" class="btn btn-sm animated-button thar-three" id="btn2">위시리스트</a></div></div>
				<div class="menu"><div class="col-md-3 col-sm-3 col-xs-6" id="btn"> <a href="GGListForm.do" class="btn btn-sm animated-button thar-three" id="btn2">좋은글</a></div></div>
			</div>
		</div>
	</div>
</body>
</html>