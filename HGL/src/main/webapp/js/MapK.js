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
			seoul.setAttribute( "name", 'kindcity' );
			gyeonggi.style.display = "none";
			gyeonggi.setAttribute( "name", "" );
			incheon.style.display = "none";
			incheon.setAttribute( "name", "" );
			gangwon.style.display = "none";
			gangwon.setAttribute( "name", "" );
			chungbuk.style.display = "none";
			chungbuk.setAttribute( "name", "" );
			chungnam.style.display = "none";
			chungnam.setAttribute( "name", "" );
			daejeon.style.display = "none";
			daejeon.setAttribute( "name", "" );
			gyeongbug.style.display = "none";
			gyeongbug.setAttribute( "name", "" );
			daegu.style.display = "none";
			daegu.setAttribute( "name", "" );
			ulsan.style.display = "none";
			ulsan.setAttribute( "name", "" );
			gyeongnam.style.display = "none";
			gyeongnam.setAttribute( "name", "" );
			busan.style.display = "none";
			busan.setAttribute( "name", "" );
			jeonbug.style.display = "none";
			jeonbug.setAttribute( "name", "" );
			jeonnam.style.display = "none";
			jeonnam.setAttribute( "name", "" );
			gwangju.style.display = "none";
			gwangju.setAttribute( "name", "" );
			jeju.style.display = "none";
			jeju.setAttribute( "name", "" );
			break;
			
		case "경기도" :
			seoul.style.display = "none";
			seoul.setAttribute( "name", "" );
			gyeonggi.style.display = "";
			gyeonggi.setAttribute( "name", 'kindcity' );
			incheon.style.display = "none";
			incheon.setAttribute( "name", "" );
			gangwon.style.display = "none";
			gangwon.setAttribute( "name", "" );
			chungbuk.style.display = "none";
			chungbuk.setAttribute( "name", "" );
			chungnam.style.display = "none";
			chungnam.setAttribute( "name", "" );
			daejeon.style.display = "none";
			daejeon.setAttribute( "name", "" );
			gyeongbug.style.display = "none";
			gyeongbug.setAttribute( "name", "" );
			daegu.style.display = "none";
			daegu.setAttribute( "name", "" );
			ulsan.style.display = "none";
			ulsan.setAttribute( "name", "" );
			gyeongnam.style.display = "none";
			gyeongnam.setAttribute( "name", "" );
			busan.style.display = "none";
			busan.setAttribute( "name", "" );
			jeonbug.style.display = "none";
			jeonbug.setAttribute( "name", "" );
			jeonnam.style.display = "none";
			jeonnam.setAttribute( "name", "" );
			gwangju.style.display = "none";
			gwangju.setAttribute( "name", "" );
			jeju.style.display = "none";
			jeju.setAttribute( "name", "" );
			break;
			
		case "인천광역시" :
			seoul.style.display = "none";
			seoul.setAttribute( "name", "" );
			gyeonggi.style.display = "none";
			gyeonggi.setAttribute( "name", "" );
			incheon.style.display = "";
			incheon.setAttribute( "name", 'kindcity' );
			gangwon.style.display = "none";
			gangwon.setAttribute( "name", "" );
			chungbuk.style.display = "none";
			chungbuk.setAttribute( "name", "" );
			chungnam.style.display = "none";
			chungnam.setAttribute( "name", "" );
			daejeon.style.display = "none";
			daejeon.setAttribute( "name", "" );
			gyeongbug.style.display = "none";
			gyeongbug.setAttribute( "name", "" );
			daegu.style.display = "none";
			daegu.setAttribute( "name", "" );
			ulsan.style.display = "none";
			ulsan.setAttribute( "name", "" );
			gyeongnam.style.display = "none";
			gyeongnam.setAttribute( "name", "" );
			busan.style.display = "none";
			busan.setAttribute( "name", "" );
			jeonbug.style.display = "none";
			jeonbug.setAttribute( "name", "" );
			jeonnam.style.display = "none";
			jeonnam.setAttribute( "name", "" );
			gwangju.style.display = "none";
			gwangju.setAttribute( "name", "" );
			jeju.style.display = "none";
			jeju.setAttribute( "name", "" );
			break;
		case "강원도" :
			seoul.style.display = "none";
			seoul.setAttribute( "name", "" );
			gyeonggi.style.display = "none";
			gyeonggi.setAttribute( "name", "" );
			incheon.style.display = "none";
			incheon.setAttribute( "name", "" );
			gangwon.style.display = "";
			gangwon.setAttribute( "name", 'kindcity' );
			chungbuk.style.display = "none";
			chungbuk.setAttribute( "name", "" );
			chungnam.style.display = "none";
			chungnam.setAttribute( "name", "" );
			daejeon.style.display = "none";
			daejeon.setAttribute( "name", "" );
			gyeongbug.style.display = "none";
			gyeongbug.setAttribute( "name", "" );
			daegu.style.display = "none";
			daegu.setAttribute( "name", "" );
			ulsan.style.display = "none";
			ulsan.setAttribute( "name", "" );
			gyeongnam.style.display = "none";
			gyeongnam.setAttribute( "name", "" );
			busan.style.display = "none";
			busan.setAttribute( "name", "" );
			jeonbug.style.display = "none";
			jeonbug.setAttribute( "name", "" );
			jeonnam.style.display = "none";
			jeonnam.setAttribute( "name", "" );
			gwangju.style.display = "none";
			gwangju.setAttribute( "name", "" );
			jeju.style.display = "none";
			jeju.setAttribute( "name", "" );
			break;
		case "충청북도" :
			seoul.style.display = "none";
			seoul.setAttribute( "name", "" );
			gyeonggi.style.display = "none";
			gyeonggi.setAttribute( "name", "" );
			incheon.style.display = "none";
			incheon.setAttribute( "name", "" );
			gangwon.style.display = "none";
			gangwon.setAttribute( "name", "" );
			chungbuk.style.display = "";
			chungbuk.setAttribute( "name", "kindcity" );
			chungnam.style.display = "none";
			chungnam.setAttribute( "name", "" );
			daejeon.style.display = "none";
			daejeon.setAttribute( "name", "" );
			gyeongbug.style.display = "none";
			gyeongbug.setAttribute( "name", "" );
			daegu.style.display = "none";
			daegu.setAttribute( "name", "" );
			ulsan.style.display = "none";
			ulsan.setAttribute( "name", "" );
			gyeongnam.style.display = "none";
			gyeongnam.setAttribute( "name", "" );
			busan.style.display = "none";
			busan.setAttribute( "name", "" );
			jeonbug.style.display = "none";
			jeonbug.setAttribute( "name", "" );
			jeonnam.style.display = "none";
			jeonnam.setAttribute( "name", "" );
			gwangju.style.display = "none";
			gwangju.setAttribute( "name", "" );
			jeju.style.display = "none";
			jeju.setAttribute( "name", "" );
			break;
		case "충청남도" :
			seoul.style.display = "none";
			seoul.setAttribute( "name", "" );
			gyeonggi.style.display = "none";
			gyeonggi.setAttribute( "name", "" );
			incheon.style.display = "none";
			incheon.setAttribute( "name", "" );
			gangwon.style.display = "none";
			gangwon.setAttribute( "name", "" );
			chungbuk.style.display = "none";
			chungbuk.setAttribute( "name", "" );
			chungnam.style.display = "";
			chungnam.setAttribute( "name", "kindcity" );
			daejeon.style.display = "none";
			daejeon.setAttribute( "name", "" );
			gyeongbug.style.display = "none";
			gyeongbug.setAttribute( "name", "" );
			daegu.style.display = "none";
			daegu.setAttribute( "name", "" );
			ulsan.style.display = "none";
			ulsan.setAttribute( "name", "" );
			gyeongnam.style.display = "none";
			gyeongnam.setAttribute( "name", "" );
			busan.style.display = "none";
			busan.setAttribute( "name", "" );
			jeonbug.style.display = "none";
			jeonbug.setAttribute( "name", "" );
			jeonnam.style.display = "none";
			jeonnam.setAttribute( "name", "" );
			gwangju.style.display = "none";
			gwangju.setAttribute( "name", "" );
			jeju.style.display = "none";
			jeju.setAttribute( "name", "" );
			break;
		case "대전광역시" :
			seoul.style.display = "none";
			seoul.setAttribute( "name", "" );
			gyeonggi.style.display = "none";
			gyeonggi.setAttribute( "name", "" );
			incheon.style.display = "none";
			incheon.setAttribute( "name", "" );
			gangwon.style.display = "none";
			gangwon.setAttribute( "name", "" );
			chungbuk.style.display = "none";
			chungbuk.setAttribute( "name", "" );
			chungnam.style.display = "none";
			chungnam.setAttribute( "name", "" );
			daejeon.style.display = "";
			daejeon.setAttribute( "name", "kindcity" );
			gyeongbug.style.display = "none";
			gyeongbug.setAttribute( "name", "" );
			daegu.style.display = "none";
			daegu.setAttribute( "name", "" );
			ulsan.style.display = "none";
			ulsan.setAttribute( "name", "" );
			gyeongnam.style.display = "none";
			gyeongnam.setAttribute( "name", "" );
			busan.style.display = "none";
			busan.setAttribute( "name", "" );
			jeonbug.style.display = "none";
			jeonbug.setAttribute( "name", "" );
			jeonnam.style.display = "none";
			jeonnam.setAttribute( "name", "" );
			gwangju.style.display = "none";
			gwangju.setAttribute( "name", "" );
			jeju.style.display = "none";
			jeju.setAttribute( "name", "" );
			break;
		case "세종특별자치시" :
			seoul.style.display = "none";
			seoul.setAttribute( "name", "" );
			gyeonggi.style.display = "none";
			gyeonggi.setAttribute( "name", "" );
			incheon.style.display = "none";
			incheon.setAttribute( "name", "" );
			gangwon.style.display = "none";
			gangwon.setAttribute( "name", "" );
			chungbuk.style.display = "none";
			chungbuk.setAttribute( "name", "" );
			chungnam.style.display = "none";
			chungnam.setAttribute( "name", "" );
			daejeon.style.display = "none";
			daejeon.setAttribute( "name", "" );
			gyeongbug.style.display = "none";
			gyeongbug.setAttribute( "name", "" );
			daegu.style.display = "none";
			daegu.setAttribute( "name", "" );
			ulsan.style.display = "none";
			ulsan.setAttribute( "name", "" );
			gyeongnam.style.display = "none";
			gyeongnam.setAttribute( "name", "" );
			busan.style.display = "none";
			busan.setAttribute( "name", "" );
			jeonbug.style.display = "none";
			jeonbug.setAttribute( "name", "" );
			jeonnam.style.display = "none";
			jeonnam.setAttribute( "name", "" );
			gwangju.style.display = "none";
			gwangju.setAttribute( "name", "" );
			jeju.style.display = "none";
			jeju.setAttribute( "name", "" );
			break;	
		case "경상북도" :
			seoul.style.display = "none";
			seoul.setAttribute( "name", "" );
			gyeonggi.style.display = "none";
			gyeonggi.setAttribute( "name", "" );
			incheon.style.display = "none";
			incheon.setAttribute( "name", "" );
			gangwon.style.display = "none";
			gangwon.setAttribute( "name", "" );
			chungbuk.style.display = "none";
			chungbuk.setAttribute( "name", "" );
			chungnam.style.display = "none";
			chungnam.setAttribute( "name", "" );
			daejeon.style.display = "none";
			daejeon.setAttribute( "name", "" );
			gyeongbug.style.display = "";
			gyeongbug.setAttribute( "name", "kindcity" );
			daegu.style.display = "none";
			daegu.setAttribute( "name", "" );
			ulsan.style.display = "none";
			ulsan.setAttribute( "name", "" );
			gyeongnam.style.display = "none";
			gyeongnam.setAttribute( "name", "" );
			busan.style.display = "none";
			busan.setAttribute( "name", "" );
			jeonbug.style.display = "none";
			jeonbug.setAttribute( "name", "" );
			jeonnam.style.display = "none";
			jeonnam.setAttribute( "name", "" );
			gwangju.style.display = "none";
			gwangju.setAttribute( "name", "" );
			jeju.style.display = "none";
			jeju.setAttribute( "name", "" );
			break;
		case "대구광역시" :
			seoul.style.display = "none";
			seoul.setAttribute( "name", "" );
			gyeonggi.style.display = "none";
			gyeonggi.setAttribute( "name", "" );
			incheon.style.display = "none";
			incheon.setAttribute( "name", "" );
			gangwon.style.display = "none";
			gangwon.setAttribute( "name", "" );
			chungbuk.style.display = "none";
			chungbuk.setAttribute( "name", "" );
			chungnam.style.display = "none";
			chungnam.setAttribute( "name", "" );
			daejeon.style.display = "none";
			daejeon.setAttribute( "name", "" );
			gyeongbug.style.display = "none";
			gyeongbug.setAttribute( "name", "" );
			daegu.style.display = "";
			daegu.setAttribute( "name", "kindcity" );
			ulsan.style.display = "none";
			ulsan.setAttribute( "name", "" );
			gyeongnam.style.display = "none";
			gyeongnam.setAttribute( "name", "" );
			busan.style.display = "none";
			busan.setAttribute( "name", "" );
			jeonbug.style.display = "none";
			jeonbug.setAttribute( "name", "" );
			jeonnam.style.display = "none";
			jeonnam.setAttribute( "name", "" );
			gwangju.style.display = "none";
			gwangju.setAttribute( "name", "" );
			jeju.style.display = "none";
			jeju.setAttribute( "name", "" );
			break;
		case "울산광역시" :
			seoul.style.display = "none";
			seoul.setAttribute( "name", "" );
			gyeonggi.style.display = "none";
			gyeonggi.setAttribute( "name", "" );
			incheon.style.display = "none";
			incheon.setAttribute( "name", "" );
			gangwon.style.display = "none";
			gangwon.setAttribute( "name", "" );
			chungbuk.style.display = "none";
			chungbuk.setAttribute( "name", "" );
			chungnam.style.display = "none";
			chungnam.setAttribute( "name", "" );
			daejeon.style.display = "none";
			daejeon.setAttribute( "name", "" );
			gyeongbug.style.display = "none";
			gyeongbug.setAttribute( "name", "" );
			daegu.style.display = "none";
			daegu.setAttribute( "name", "" );
			ulsan.style.display = "";
			ulsan.setAttribute( "name", "kindcity" );
			gyeongnam.style.display = "none";
			gyeongnam.setAttribute( "name", "" );
			busan.style.display = "none";
			busan.setAttribute( "name", "" );
			jeonbug.style.display = "none";
			jeonbug.setAttribute( "name", "" );
			jeonnam.style.display = "none";
			jeonnam.setAttribute( "name", "" );
			gwangju.style.display = "none";
			gwangju.setAttribute( "name", "" );
			jeju.style.display = "none";
			jeju.setAttribute( "name", "" );
			break;
		case "경상남도" :
			seoul.style.display = "none";
			seoul.setAttribute( "name", "" );
			gyeonggi.style.display = "none";
			gyeonggi.setAttribute( "name", "" );
			incheon.style.display = "none";
			incheon.setAttribute( "name", "" );
			gangwon.style.display = "none";
			gangwon.setAttribute( "name", "" );
			chungbuk.style.display = "none";
			chungbuk.setAttribute( "name", "" );
			chungnam.style.display = "none";
			chungnam.setAttribute( "name", "" );
			daejeon.style.display = "none";
			daejeon.setAttribute( "name", "" );
			gyeongbug.style.display = "none";
			gyeongbug.setAttribute( "name", "" );
			daegu.style.display = "none";
			daegu.setAttribute( "name", "" );
			ulsan.style.display = "none";
			ulsan.setAttribute( "name", "" );
			gyeongnam.style.display = "";
			gyeongnam.setAttribute( "name", "kindcity" );
			busan.style.display = "none";
			busan.setAttribute( "name", "" );
			jeonbug.style.display = "none";
			jeonbug.setAttribute( "name", "" );
			jeonnam.style.display = "none";
			jeonnam.setAttribute( "name", "" );
			gwangju.style.display = "none";
			gwangju.setAttribute( "name", "" );
			jeju.style.display = "none";
			jeju.setAttribute( "name", "" );
			break;
		case "부산광역시" :
			seoul.style.display = "none";
			seoul.setAttribute( "name", "" );
			gyeonggi.style.display = "none";
			gyeonggi.setAttribute( "name", "" );
			incheon.style.display = "none";
			incheon.setAttribute( "name", "" );
			gangwon.style.display = "none";
			gangwon.setAttribute( "name", "" );
			chungbuk.style.display = "none";
			chungbuk.setAttribute( "name", "" );
			chungnam.style.display = "none";
			chungnam.setAttribute( "name", "" );
			daejeon.style.display = "none";
			daejeon.setAttribute( "name", "" );
			gyeongbug.style.display = "none";
			gyeongbug.setAttribute( "name", "" );
			daegu.style.display = "none";
			daegu.setAttribute( "name", "" );
			ulsan.style.display = "none";
			ulsan.setAttribute( "name", "" );
			gyeongnam.style.display = "none";
			gyeongnam.setAttribute( "name", "" );
			busan.style.display = "";
			busan.setAttribute( "name", "kindcity" );
			jeonbug.style.display = "none";
			jeonbug.setAttribute( "name", "" );
			jeonnam.style.display = "none";
			jeonnam.setAttribute( "name", "" );
			gwangju.style.display = "none";
			gwangju.setAttribute( "name", "" );
			jeju.style.display = "none";
			jeju.setAttribute( "name", "" );
			break;
		case "전라북도" :
			seoul.style.display = "none";
			seoul.setAttribute( "name", "" );
			gyeonggi.style.display = "none";
			gyeonggi.setAttribute( "name", "" );
			incheon.style.display = "none";
			incheon.setAttribute( "name", "" );
			gangwon.style.display = "none";
			gangwon.setAttribute( "name", "" );
			chungbuk.style.display = "none";
			chungbuk.setAttribute( "name", "" );
			chungnam.style.display = "none";
			chungnam.setAttribute( "name", "" );
			daejeon.style.display = "none";
			daejeon.setAttribute( "name", "" );
			gyeongbug.style.display = "none";
			gyeongbug.setAttribute( "name", "" );
			daegu.style.display = "none";
			daegu.setAttribute( "name", "" );
			ulsan.style.display = "none";
			ulsan.setAttribute( "name", "" );
			gyeongnam.style.display = "none";
			gyeongnam.setAttribute( "name", "" );
			busan.style.display = "none";
			busan.setAttribute( "name", "" );
			jeonbug.style.display = "";
			jeonbug.setAttribute( "name", "kindcity" );
			jeonnam.style.display = "none";
			jeonnam.setAttribute( "name", "" );
			gwangju.style.display = "none";
			gwangju.setAttribute( "name", "" );
			jeju.style.display = "none";
			jeju.setAttribute( "name", "" );
			break;
		case "전라남도" :
			seoul.style.display = "none";
			seoul.setAttribute( "name", "" );
			gyeonggi.style.display = "none";
			gyeonggi.setAttribute( "name", "" );
			incheon.style.display = "none";
			incheon.setAttribute( "name", "" );
			gangwon.style.display = "none";
			gangwon.setAttribute( "name", "" );
			chungbuk.style.display = "none";
			chungbuk.setAttribute( "name", "" );
			chungnam.style.display = "none";
			chungnam.setAttribute( "name", "" );
			daejeon.style.display = "none";
			daejeon.setAttribute( "name", "" );
			gyeongbug.style.display = "none";
			gyeongbug.setAttribute( "name", "" );
			daegu.style.display = "none";
			daegu.setAttribute( "name", "" );
			ulsan.style.display = "none";
			ulsan.setAttribute( "name", "" );
			gyeongnam.style.display = "none";
			gyeongnam.setAttribute( "name", "" );
			busan.style.display = "none";
			busan.setAttribute( "name", "" );
			jeonbug.style.display = "none";
			jeonbug.setAttribute( "name", "" );
			jeonnam.style.display = "";
			jeonnam.setAttribute( "name", "kindcity" );
			gwangju.style.display = "none";
			gwangju.setAttribute( "name", "" );
			jeju.style.display = "none";
			jeju.setAttribute( "name", "" );
			break;
		case "광주광역시" :
			seoul.style.display = "none";
			seoul.setAttribute( "name", "" );
			gyeonggi.style.display = "none";
			gyeonggi.setAttribute( "name", "" );
			incheon.style.display = "none";
			incheon.setAttribute( "name", "" );
			gangwon.style.display = "none";
			gangwon.setAttribute( "name", "" );
			chungbuk.style.display = "none";
			chungbuk.setAttribute( "name", "" );
			chungnam.style.display = "none";
			chungnam.setAttribute( "name", "" );
			daejeon.style.display = "none";
			daejeon.setAttribute( "name", "" );
			gyeongbug.style.display = "none";
			gyeongbug.setAttribute( "name", "" );
			daegu.style.display = "none";
			daegu.setAttribute( "name", "" );
			ulsan.style.display = "none";
			ulsan.setAttribute( "name", "" );
			gyeongnam.style.display = "none";
			gyeongnam.setAttribute( "name", "" );
			busan.style.display = "none";
			busan.setAttribute( "name", "" );
			jeonbug.style.display = "none";
			jeonbug.setAttribute( "name", "" );
			jeonnam.style.display = "none";
			jeonnam.setAttribute( "name", "" );
			gwangju.style.display = "";
			gwangju.setAttribute( "name", "kindcity" );
			jeju.style.display = "none";
			jeju.setAttribute( "name", "" );
			break;
		case "제주도" :
			seoul.style.display = "none";
			seoul.setAttribute( "name", "" );
			gyeonggi.style.display = "none";
			gyeonggi.setAttribute( "name", "" );
			incheon.style.display = "none";
			incheon.setAttribute( "name", "" );
			gangwon.style.display = "none";
			gangwon.setAttribute( "name", "" );
			chungbuk.style.display = "none";
			chungbuk.setAttribute( "name", "" );
			chungnam.style.display = "none";
			chungnam.setAttribute( "name", "" );
			daejeon.style.display = "none";
			daejeon.setAttribute( "name", "" );
			gyeongbug.style.display = "none";
			gyeongbug.setAttribute( "name", "" );
			daegu.style.display = "none";
			daegu.setAttribute( "name", "" );
			ulsan.style.display = "none";
			ulsan.setAttribute( "name", "" );
			gyeongnam.style.display = "none";
			gyeongnam.setAttribute( "name", "" );
			busan.style.display = "none";
			busan.setAttribute( "name", "" );
			jeonbug.style.display = "none";
			jeonbug.setAttribute( "name", "" );
			jeonnam.style.display = "none";
			jeonnam.setAttribute( "name", "" );
			gwangju.style.display = "none";
			gwangju.setAttribute( "name", "" );
			jeju.style.display = "";
			jeju.setAttribute( "name", "kindcity" );
			break;
	}
}