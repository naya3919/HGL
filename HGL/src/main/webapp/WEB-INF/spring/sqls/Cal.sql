-- CAL SEQUENCE SQL
DROP SEQUENCE CALNO_SEQ;
CREATE SEQUENCE CALNO_SEQ;

--CAL TABLE SQL
DROP TABLE CAL;
CREATE TABLE CAL
(
    MEMBERID    VARCHAR2(200)    NOT NULL, 
    CALNO       NUMBER           NOT NULL, 
    CALTITLE    VARCHAR2(200)    NOT NULL, 
    CALSCH      VARCHAR2(200)    NOT NULL, 
    CALDATE     DATE             NOT NULL, 
    CALMEMO     VARCHAR2(200)    NULL, 
    CALSMS      VARCHAR2(20)     NULL, 
    CONSTRAINT CAL_PK PRIMARY KEY (CALNO),
    CONSTRAINT CAL_SMS_CHK CHECK(CALSMS IN ('Y','N'))
);

INSERT INTO CAL VALUES('a', CALNO_SEQ.NEXTVAL, '향은이 생일', '19910621', SYSDATE, '향은이 생일입니당', 'Y');


INSERT INTO CAL VALUES('a', CALNO_SEQ.NEXTVAL, '향은이 생일', '20180621', SYSDATE, '향은이 생일입니당', 'Y');
INSERT INTO CAL VALUES('a', CALNO_SEQ.NEXTVAL, '최정현 생일', '20181031', SYSDATE, '내생일임', 'Y');

SELECT *
		FROM
			(SELECT (ROW_NUMBER() OVER(PARTITION BY SUBSTR(CALSCH,1,8) ORDER BY CALSCH)) RN,CALNO,MEMBERID,CALTITLE,CALMEMO,CALSCH,CALDATE
			FROM CAL
			WHERE MEMBERID = 'a' AND SUBSTR(CALSCH,1,6)='201806')
		WHERE RN BETWEEN 1 AND 3

		select * from cal;