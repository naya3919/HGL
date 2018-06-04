--FWL SEQUENCE SQL
DROP SEQUENCE FWLNO_SEQ;
CREATE SEQUENCE FWLNO_SEQ;

--FWL TABLE SQL
DROP TABLE FWL;
CREATE TABLE FWL
(
    MEMBERNO    NUMBER           NOT NULL, 
    FWLNO       NUMBER           NOT NULL, 
    FWLITEM     VARCHAR2(200)    NOT NULL, 
    FWLCHK      VARCHAR2(20)     NOT NULL, 
    CONSTRAINT FWL_PK PRIMARY KEY (FWLNO),
    CONSTRAINT FWL_FK FOREIGN KEY (MEMBERNO) REFERENCES MEMBER (MEMBERNO),
    CONSTRAINT FWL_CHK CHECK(FWLCHK IN ('Y','N'))
);

SELECT * FROM FWL;
INSERT INTO FWL VALUES(41, FWLNO_SEQ.NEXTVAL, '맛있는거 먹으러 가기', 'N');

-------------------------------------------------------------------------

-- FWLB SEQUENCE SQL
DROP SEQUENCE FWLBNO_SEQ;
CREATE SEQUENCE FWLBNO_SEQ;

-- FWLB TABLE SQL
DROP TABLE FWLB;
CREATE TABLE FWLB
(
    FWLBNO         NUMBER            NOT NULL, 
    FWLBWRITER     VARCHAR2(100)     NOT NULL, 
    FWLBTITLE      VARCHAR2(200)     NOT NULL, 
    FWLBCONT       VARCHAR2(4000)    NOT NULL, 
    FWLBREADCNT    NUMBER            NOT NULL, 
    FWLBDATE       DATE              NOT NULL, 
    CONSTRAINT FWLB_PK PRIMARY KEY (FWLBNO)
)

INSERT INTO FWLB VALUES(FWLBNO_SEQ.NEXTVAL, '관리자', '관리자 님의 위시리스트 입니다.', '맛있는거 먹으러 가기', 0, SYSDATE);

SELECT * FROM FWLB;

--------------------------------------------------

-- FWLBCM SEQUENCE SQL
DROP SEQUENCE FWLBCMNO_SEQ;
CREATE SEQUENCE FWLBCMNO_SEQ;

-- FWLBCM TABLE SQL
DROP TABLE FWLBCM;
CREATE TABLE FWLBCM
(
    FWLBNO          NUMBER            REFERENCES  FWLB(FWLBNO) ON DELETE CASCADE,
    FWLBCMNO        NUMBER            NOT NULL, 
    FWLBCMWRITER    VARCHAR2(100)     NOT NULL, 
    FWLBCMCONT      VARCHAR2(1000)    NOT NULL, 
    FWLBCMDATE      DATE              NOT NULL, 
    CONSTRAINT FWLBCM_PK PRIMARY KEY (FWLBCMNO)
);

INSERT INTO FWLBCM VALUES(1, FWLBCMNO_SEQ.NEXTVAL, '관리자', '응원할게요!', SYSDATE);

SELECT * FROM FWLBCM;



