<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% request.setCharacterEncoding("UTF-8"); %>
<% response.setContentType("text/html; charset=UTF-8"); %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%@ include file="/WEB-INF/views/Header.jsp"%>

	<h2 style="text-align: center">${dto.fwlbWriter} 님의 위시리스트입니다</h2>
	<div style="width: 800px; min-height:700px; height: 100%; margin: auto; border:1px solid pink;" >
		<div style="margin-bottom: 30px;"><br>		
			<div style="float: right;">공유일<fmt:formatDate value="${dto.fwlbDate}" pattern="yyyy-MM-dd" /></div><br>
			<div style="float:right">작성자 ${dto.fwlbWriter}</div><br><br>
			
			<div style="text-align:center; margin:auto; width: 700px; min-height: 500px; height: 100%; border-top: 2px solid black; border-bottom: 2px solid black;">
				<table style="text-align:center;">
					<tr>
						<th>항      목</th>
					</tr>
					<c:forEach items="${fwlList}" var="FwlDto">
					<tr>
						<c:choose>
							<c:when  test="${FwlDto.fwlChk eq 'Y'}">
								<td><b>${FwlDto.fwlItem}</b></td>
							</c:when>
							<c:otherwise>
								<td>${FwlDto.fwlItem}</td>
							</c:otherwise>
						</c:choose>
					</tr>
					</c:forEach>
				</table>
			</div>
			<div style="margin: auto; width: 700px;">
				<button type="button" onclick="location.href='FWLBList.do?nowpage=1'">목록으로</button>
				<c:if test="${login.memberNickname eq dto.fwlbWriter}">
				<button type="button" style="float:right" onclick="location.href='FWLBDelete.do?fwlbNo=${dto.fwlbNo}'">삭제하기</button>				
				</c:if>
			</div>
		</div>
		
		<!-- 댓글창 -->
		
		<div class="qaUpdate" id="commentBox" style="border:1px dotted green; margin-bottom: 40px;">
	
			<c:if test="${!empty fwlbcmList}">
				<c:forEach items="${fwlbcmList}" var="fwlbcmDto">
					<div style="width:600px; margin: auto;  margin-top: 20px;">
						<span>작성자: ${fwlbcmDto.fwlbcmWriter}</span>
						<span style="float:right;">작성일:　<fmt:formatDate value="${fwlbcmDto.fwlbcmDate}" pattern="yyyy-MM-dd"/></span>
	       			<div style="border-bottom: 1px solid #BDBDBD; margin-bottom: 10px; margin-top: 15px;"> ${fwlbcmDto.fwlbcmCont}</div>
	      		<c:if test="${fwlbcmDto.fwlbcmWriter eq login.memberNickname}">	
	      			<button type="button" style="float:right;" onclick="location.href='FWLBCMDelete.do?fwlbcmNo=${fwlbcmDto.fwlbcmNo}&fwlbWriter=${dto.fwlbWriter}&count=0'" >삭제</button>
				</c:if>
				</div>
				</c:forEach>	
			</c:if>
	
	
	
			<div style="margin:auto; width: 600px; margin-bottom: 10px;"><br>
				<h3>댓글작성</h3>
				<form action="FWLBCMInsert.do">
				<input type="hidden" name="fwlbNo" value="${dto.fwlbNo}" >
				<input type="hidden" name="fwlbWriter" value="${dto.fwlbWriter}">
				<input type="hidden" name="count" value="0"/>
				<input type="text" name="fwlbcmWriter" value="${login.memberNickname}" style="margin-bottom: 10px;" readonly="readonly"><br>
				<textarea name="fwlbcmCont" placeholder="입력할 댓글을 작성해주세요" style="width: 500px; height:120px; overflow:visible; resize:none;"></textarea>
				<button style="width:80px; height:50px; vertical-align:top;">댓글작성</button>
				</form>
			</div>
		</div>
	</div>
	<%@ include file="/WEB-INF/views/Footer.jsp"%>
</body>
</html>