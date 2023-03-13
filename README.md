ICIA 최종프로젝트 Wedding Dive
---
프로젝트 기간 : 2022.12 ~ 2023.01 <br><br>
프로젝트 인원 : 6명<br><br>
사용 프로그램 : visual studio, intellj, Mysql<br><br>
사용 언어 : Html, CSS, JavaScript, React, Java<br>
## 환경 구성
IDE(통합개발환경) : IntelliJ Ultimate(유료 버전), Visual Studio Code<br><br>
프레임워크 : Spring Boot<br><br>
데이터베이스 : Mysql<br><br>
DB 접근 기술 : JPA<br><br>
View 템플릿 : React<br>
## 프로젝트 설명<br>
결혼하는 과정에 필요한 스드메, 신혼여행, 예식장 등 필요한걸 하나에 모아놓은 웨딩 중개 사이트입니다.<br> 

- #### 메인페이지 화면<br><br>
![image](https://user-images.githubusercontent.com/117874997/215312693-84f6a19e-68c2-48b6-9819-7d17f8b525db.png)

- #### ERD 구성<br><br>
![image](https://user-images.githubusercontent.com/117874997/215296621-de57e2fe-60a8-4aab-98e9-eb945509b133.png)

## 제가 구현한 기능으로는<br>
- 상세 견적 조회<br>
- 메인 페이지 팝업창<br>
- 마이페이지(내 정보 수정, 찜 목록(장바구니), 예약 확인(환불처리, 진행 상황))<br>
- 게시판(게시글 출력, 페이징 처리, session을 이용해 회원과 관리자의 기능 구분(글삭제, 댓글기능, 댓글삭제))<br>
- 회원가입<br>
## ModalBasic.jsx 컴포넌트

※ 상세 견적 조회

```javascript

export default (props) => {
    const [ttslider, setTtslider]= useState({
        ws:true,
        ss:false,
        ps:false,
        hs:false
    })
    const [pboxp, setPboxp] = useState({wprice:0,sprice:0,pprice:0,hprice:0,total:0});
    const [wchecked, setWchecked] = useState();
    const [sdmchecked, setSdmchecked] = useState();
    const [pchecked, setPchecked] = useState();
    const [hchecked, setHchecked] = useState();
    const [conditionData, setConditionData] = useState({
        wdate : "0001-01-01",
        wseoul : "데이터없음",
        wgyeong : "데이터없음",
        win : "데이터없음",
        wgang : "데이터없음",
        wje : "데이터없음",
        wdae : "데이터없음",
        wchungbuk : "데이터없음",
        wchungnam : "데이터없음",
        wbu : "데이터없음",
        wul : "데이터없음",
        wgyeongnam : "데이터없음",
        wdaegu : "데이터없음",
        wgyeongbuk : "데이터없음",
        wgwang : "데이터없음",
        wminprice : 0,
        wmaxprice: 0,
        wjeonnam : "데이터없음",
        wjeonbuk : "데이터없음",
        whole : "데이터없음",
        common : "데이터없음",
        trad : "데이터없음",
        hotel : "데이터없음",
        house : "데이터없음",
        church : "데이터없음",
        cathedral : "데이터없음",
        outdoor : "데이터없음",
        sdate : "0001-01-01",
        sseoul : "데이터없음",
        sgyeong : "데이터없음",
        sin : "데이터없음",
        sgang : "데이터없음",
        sje : "데이터없음",
        sdae : "데이터없음",
        schungbuk : "데이터없음",
        schungnam : "데이터없음",
        sbu : "데이터없음",
        sul : "데이터없음",
        sgyeongnam : "데이터없음",
        sdaegu : "데이터없음",
        sgyeongbuk : "데이터없음",
        sgwang : "데이터없음",
        sjeonnam : "데이터없음",
        sjeonbuk : "데이터없음",
        sminprice : 0,
        smaxprice: 0,
        pdate : "0001-01-01",
        pminprice : 0,
        pmaxprice: 0,
        hdate : "0001-01-01",
        hseoul : "해외",
        hgyeong : "데이터없음",
        hin : "데이터없음",
        hgang : "데이터없음",
        hje : "데이터없음",
        hdae : "데이터없음",
        hchungbuk : "데이터없음",
        hchungnam : "데이터없음",
        hbu : "데이터없음",
        hul : "데이터없음",
        hgyeongnam : "데이터없음",
        hdaegu : "데이터없음",
        hgyeongbuk : "데이터없음",
        hgwang : "데이터없음",
        hjeonnam : "데이터없음",
        hjeonbuk : "데이터없음",
        hminprice : 0,
        hmaxprice: 0  
    }
    );
    const [searchEstData, setSearchEstData] = useState(
        [{
            whidx :0,
            whprice : 0,
            whstr: "",
            whkind: "",
            whwcidx: "",
        }],
        [{
            sidx :0,
            scomp :"",
            sphone : "",
            sprice : 0,
            slocation : "",
            sstr: "",
            scomp: "",
        }],
        [{
            pidx :0,
            pphone : "",
            pprice : 0,
            pstr : '',
        }],
        [{
            hidx :0,
            hphone : "",
            hcost : 0,
            hstr: "",
            hlocation: "",
            hbramd: "",
        }]
    );
    
    
    const TRslider = () => {
        if(ttslider.ws===true){
            setTtslider({
                ...ttslider,
                ws:false,
                ss:true,
                ps:false,
                hs:false
            })
        }else if(ttslider.ss===true){
            setTtslider({
                ...ttslider,
                ws:false,
                ss:false,
                ps:true,
                hs:false,
            })
        }else if(ttslider.ps===true){
            setTtslider({
                ...ttslider,
                ws:false,
                ss:false,
                ps:false,
                hs:true,
            })
        }
    }
    const TLslider = () => {
        if(ttslider.hs===true){
            setTtslider({
                ...ttslider,
                ws:false,
                ss:false,
                ps:true,
                hs:false
            })
        }else if(ttslider.ps===true){
            setTtslider({
                ...ttslider,
                ws:false,
                ss:true,
                ps:false,
                hs:false,
            })
        }else if(ttslider.ss===true){
            setTtslider({
                ...ttslider,
                ws:true,
                ss:false,
                ps:false,
                hs:false,
            })
        }
    }

    
    const ClickLabel = (e) => {
        if(e.target.checked==false){
            setConditionData({
                ...conditionData,
                [e.target.name]: "데이터없음",
            })
        }else if(e.target.checked==true){
            setConditionData({
                ...conditionData,
                [e.target.name] : e.target.value
            })
        }
        console.log(e.target);
        console.log(conditionData);
        console.log(e.target.checked);
    }
    const ClickDate = (e) => {
        setConditionData({
            ...conditionData,
            [e.target.name] : e.target.value
        })

        const pnoRegExp = /^[0-9]{0,5}$/;


        if(!pnoRegExp.test(conditionData.hminprice)||!pnoRegExp.test(conditionData.hmaxprice)||!pnoRegExp.test(conditionData.sminprice)||!pnoRegExp.test(conditionData.smaxprice)||!pnoRegExp.test(conditionData.pminprice)||!pnoRegExp.test(conditionData.pmaxprice)||!pnoRegExp.test(conditionData.wminprice)||!pnoRegExp.test(conditionData.wmaxprice)){
            alert("5자리이내의 숫자만 입력해주세요.");
            e.target.value="";
        }
        console.log(e.target);
        console.log(conditionData);
    }

    const labelColor = (e) => {
        if(e.target.style.color=="black"){
            e.target.style.color="lightGray";
        }else {
            e.target.style.color="black"
        }
    }

    const postEst = () => {
        setPboxp({...pboxp,
            wprice:0,
            sprice:0,
            pprice:0,
            hprice:0,});
        console.log("ㅋㅋ"+pboxp);
        axios.post("/searchEstimate",JSON.stringify(conditionData),{params : conditionData})
        .then((response) => {
            console.log(response.data.p);
            console.log(response.data);
            setSearchEstData(response.data);
            console.log(searchEstData);
        })
        .catch((error) => {
            console.log(error);
        })
        console.log(searchEstData);
    }
    
    const rankingData0 =[
        { name: <span style={{fontSize:20, display:"flex", justifyContent:"space-around"}}>
        <div><input type="checkbox" style={{width:"20px", zoom: 2,verticalAlign:"-3px", display:"none"}} id="wchecked"  onClick={(e)=>{setTtslider({...ttslider, ws:true, ss:false, ps:false, hs:false});e.target.style.color="hotPink"}} value={1} checked/>{ttslider.ws ? <label id="wlabel" htmlFor='wchecked' style={{color:"hotPink", fontWeight:"bold"}}>웨딩홀</label>:<label id="wlabel" htmlFor='wchecked'>웨딩홀</label>}</div>
        <div><input type="checkbox" style={{width:"20px", zoom: 2,verticalAlign:"-3px", display:"none"}} id="sdmchecked" onClick={(e)=>{setTtslider({...ttslider, ws:false, ss:true, ps:false, hs:false});e.target.style.color="hotPink"}} value={1}/>{ttslider.ss ? <label id="slabel" htmlFor='sdmchecked' style={{color:"hotPink", fontWeight:"bold"}}>스드메</label>:<label id="slabel" htmlFor='sdmchecked'>스드메</label>}</div>
        <div><input type="checkbox" style={{width:"20px", zoom: 2,verticalAlign:"-3px", display:"none"}} id="pchecked" onClick={(e)=>{setTtslider({...ttslider, ws:false, ss:false, ps:true, hs:false});e.target.style.color="hotPink"}} value={1}/>{ttslider.ps ? <label id="plabel" htmlFor='pchecked' style={{color:"hotPink", fontWeight:"bold"}}>플래너</label>:<label id="plabel" htmlFor='pchecked'>플래너</label>}</div>
        <div><input type="checkbox" style={{width:"20px", zoom: 2,verticalAlign:"-3px", display:"none"}} id="hchecked" onClick={(e)=>{setTtslider({...ttslider, ws:false, ss:false, ps:false, hs:true});e.target.style.color="hotPink"}} value={1}/>{ttslider.hs ? <label id="hlabel" htmlFor='hchecked' style={{color:"hotPink", fontWeight:"bold"}}>허니문</label>:<label id="hlabel" htmlFor='hchecked'>허니문</label>}</div></span>,
        type: <div style={{textAlign:"left", fontSize:20, width:"100%", borderRight:"1px solid #0000000a"}}></div>
        },
    ]
    const rankingData1 = [
        { name: <span style={{fontSize:20}}>
            <span style={{display:"flex", justifyContent:"space-around"}}>
                <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="wseoul" name="wseoul" onChange={(e)=>{ ClickLabel(e)}}value={"서울"}  /><label onClick={(e) => labelColor(e)} htmlFor='wseoul' >서울</label></div>
                <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="wgyeong" name="wgyeong" onChange={(e)=>{ ClickLabel(e)}} value={"경기"}  /><label onClick={(e) => labelColor(e)} htmlFor='wgyeong'>경기</label></div>
                <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="win" name="win" onChange={(e)=>{ ClickLabel(e)}} value={"인천"}  /><label onClick={(e) => labelColor(e)} htmlFor='win'>인천</label></div>
                <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="wgang" name="wgang" onChange={(e)=>{ ClickLabel(e)}} value={"강원"}  /><label onClick={(e) => labelColor(e)} htmlFor='wgang'>강원</label></div>
                <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="wje"onChange={(e)=>{ ClickLabel(e)}} name="wje" value={"제주"}  /><label onClick={(e) => labelColor(e)} htmlFor='wje'>제주</label></div>
                <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="wdae"onChange={(e)=>{ ClickLabel(e)}} name="wdae" value={"대전"}  /><label onClick={(e) => labelColor(e)} htmlFor='wdae'>대전</label></div>
                <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="wchungbuk"onChange={(e)=>{ ClickLabel(e)}} name="wchungbuk" value={"충북"}  /><label onClick={(e) => labelColor(e)} htmlFor='wchungbuk'>충북</label></div>
                <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="wchungnam"onChange={(e)=>{ ClickLabel(e)}} name="wchungnam" value={"충남"}  /><label onClick={(e) => labelColor(e)} htmlFor='wchungnam'>충남</label></div>
            </span>
            <br/>
            <span style={{display:"flex", justifyContent:"space-around"}}>
                <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="wbu" onChange={(e)=>{ ClickLabel(e)}} name="wbu" value={"스위스"} /><label onClick={(e)=>labelColor(e)} htmlFor='wbu'>부산</label></div>
                <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="wul" onChange={(e)=>{ ClickLabel(e)}} name="wul" value={"체코"} /><label onClick={(e)=>labelColor(e)} htmlFor='wul'>울산</label></div>
                <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="wgyeongnam" onChange={(e)=>{ ClickLabel(e)}} name="wgyeongnam" value={"경남"} /><label onClick={(e)=>labelColor(e)} htmlFor='wgyeongnam'>경남</label></div>
                <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="wdaegu" onChange={(e)=>{ ClickLabel(e)}} name="wdaegu" value={"포르투갈"} /><label onClick={(e)=>labelColor(e)} htmlFor='wdaegu'>대구</label></div>
                <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="wgyeongbuk" onChange={(e)=>{ ClickLabel(e)}} name="wgyeongbuk" value={"경북"} /><label onClick={(e)=>labelColor(e)} htmlFor='wgyeongbuk'>경북</label></div>
                <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="wgwang" onChange={(e)=>{ ClickLabel(e)}} name="wgwang" value={"광주"} /><label onClick={(e)=>labelColor(e)} htmlFor='wgwang'>광주</label></div>
                <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="wjeonnam" onChange={(e)=>{ ClickLabel(e)}} name="wjeonnam" value={"전남"} /><label onClick={(e)=>labelColor(e)} htmlFor='wjeonnam'>전남</label></div>
                <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="wjeonbuk" onChange={(e)=>{ ClickLabel(e)}} name="wjeonbuk" value={"전북"} /><label onClick={(e)=>labelColor(e)} htmlFor='wjeonbuk'>전북</label></div>
            </span>
            </span>,
            type: <div style={{textAlign:"left", fontSize:20, width:"100%", height:"80px", lineHeight:"40px", borderRight:"1px solid #0000000a"}}>웨딩홀 &nbsp;위치</div>
        },
        { name: 
            <InputGroup><input type={"date"}style={{ marginLeft:-50, fontSize:"18px", border:"none", padding:"8px" ,textAlign:"center"}} name="wdate" onChange={(e)=>ClickDate(e)}></input></InputGroup>,
            type: <div style={{textAlign:"left", fontSize:20, width:"100%", lineHeight:"40px",borderRight:"1px solid #0000000a"}}>웨딩홀 &nbsp;날짜</div>
        },
        { name: <span style={{fontSize:20}}>
            <span style={{display:"flex", justifyContent:"space-around"}}>
                <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="whole" name="whole" onChange={(e)=>{ ClickLabel(e)}}value={"전체"}  /><label onClick={(e) => labelColor(e)} htmlFor='whole' >전체</label></div>
                <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="common" name="common" onChange={(e)=>{ ClickLabel(e)}} value={"일반"}  /><label onClick={(e) => labelColor(e)} htmlFor='common'>일반</label></div>
                <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="trad" name="trad" onChange={(e)=>{ ClickLabel(e)}} value={"전통혼례"}  /><label onClick={(e) => labelColor(e)} htmlFor='trad'>전통혼례</label></div>
                <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="hotel"onChange={(e)=>{ ClickLabel(e)}} name="hotel" value={"호텔"}  /><label onClick={(e) => labelColor(e)} htmlFor='hotel'>호텔</label></div>
                <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="house"onChange={(e)=>{ ClickLabel(e)}} name="house" value={"하우스"}  /><label onClick={(e) => labelColor(e)} htmlFor='house'>하우스</label></div>
                <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="church"onChange={(e)=>{ ClickLabel(e)}} name="church" value={"교회"}  /><label onClick={(e) => labelColor(e)} htmlFor='church'>교회</label></div>
                <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="cathedral"onChange={(e)=>{ ClickLabel(e)}} name="cathedral" value={"성당"}  /><label onClick={(e) => labelColor(e)} htmlFor='cathedral'>성당</label></div>
                <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="outdoor" name="outdoor" onChange={(e)=>{ ClickLabel(e)}} value={"야외"}  /><label onClick={(e) => labelColor(e)} htmlFor='outdoor'>야외</label></div>
            </span>
            </span>,
            type: <div style={{textAlign:"left", fontSize:20, width:"100%", height:"80px", lineHeight:"40px", borderRight:"1px solid #0000000a"}}>웨딩홀 &nbsp;타입</div>
        },
        {   name:<div style={{display:"flex", marginLeft:"50px", alignItems:"center"}}>
            <input type={"text"} style={{width:"30%", fontSize:"18px", border:"1px solid #ddd", padding:"8px", marginLeft:"100px"}} name="wminprice" maxLength={5} onChange={(e)=>ClickDate(e)}></input><h3 style={{ margin:"0 20px",width:"50px", marginLeft:"1%"}}>만원</h3><h3 style={{marginRight:"2%"}}> ~ </h3>
            <input type={"text"} style={{width:"30%", fontSize:"18px", border:"1px solid #ddd", padding:"8px"}} name="wmaxprice" maxLength={5} onChange={(e)=>ClickDate(e)}></input><h3 style={{marginLeft:"-1%",width:"100px"}}>만원</h3><Button onClick={() => {postEst()}} style={{ width:"100px",height:"70px", marginLeft:120,background:'#c9a3b6', borderRadius:'10px'}}>검색</Button>
            </div>,
            type: <div style={{textAlign:"left", fontSize:20, width:"100%", borderRight:"1px solid #0000000a"}}>웨딩홀 &nbsp;가격</div>},
        ]
    const rankingData2 =[
        { name: 
            <InputGroup><input type={"date"}style={{ marginLeft:-50, textAlign:"center", fontSize:"18px", border:"none", padding:"8px"}} name="sdate" onChange={(e)=>ClickDate(e)}></input></InputGroup>,
            type: <div style={{textAlign:"left", fontSize:20, width:"100%", lineHeight:"40px",borderRight:"1px solid #0000000a"}}>스드메 &nbsp;날짜</div>
        },
        { name: <span style={{fontSize:20}}>
            <span style={{display:"flex", justifyContent:"space-around"}}>
                <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="sseoul"onChange={(e)=>{ ClickLabel(e)}} name="sseoul" value={"서울"}  /><label onClick={(e)=>labelColor(e)} htmlFor='sseoul'>서울</label></div>
                <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="sgyeong"onChange={(e)=>{ ClickLabel(e)}} name="sgyeong" value={"경기"}  /><label onClick={(e)=>labelColor(e)} htmlFor='sgyeong'>경기</label></div>
                <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="sin"onChange={(e)=>{ ClickLabel(e)}} name="sin" value={"인천"}  /><label onClick={(e)=>labelColor(e)} htmlFor='sin'>인천</label></div>
                <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="sgang"onChange={(e)=>{ ClickLabel(e)}} name="sgang" value={"강원"}  /><label onClick={(e)=>labelColor(e)} htmlFor='sgang'>강원</label></div>
                <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="sje"onChange={(e)=>{ ClickLabel(e)}} name="sje" value={"제주"}  /><label onClick={(e)=>labelColor(e)} htmlFor='sje'>제주</label></div>
                <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="sdae"onChange={(e)=>{ ClickLabel(e)}} name="sdae" value={"대전"}  /><label onClick={(e)=>labelColor(e)} htmlFor='sdae'>대전</label></div>
                <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="schungbuk"onChange={(e)=>{ ClickLabel(e)}} name="schungbuk" value={"충북"}  /><label onClick={(e)=>labelColor(e)} htmlFor='schungbuk'>충북</label></div>
                <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="schungnam"onChange={(e)=>{ ClickLabel(e)}} name="schungnam" value={"충남"}  /><label onClick={(e)=>labelColor(e)} htmlFor='schungnam'>충남</label></div>
            </span>
            <br/>
            <span style={{display:"flex", justifyContent:"space-around"}}>
                <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="sbu" onChange={(e)=>{ ClickLabel(e)}} name="sbu" value={"부산"} /><label onClick={(e)=>labelColor(e)} htmlFor='sbu'>부산</label></div>
                <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="sul" onChange={(e)=>{ ClickLabel(e)}} name="sul" value={"울산"} /><label onClick={(e)=>labelColor(e)} htmlFor='sul'>울산</label></div>
                <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="sgyeongnam" onChange={(e)=>{ ClickLabel(e)}} name="sgyeongnam" value={"경남"} /><label onClick={(e)=>labelColor(e)} htmlFor='sgyeongnam'>경남</label></div>
                <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="sdaegu" onChange={(e)=>{ ClickLabel(e)}} name="sdaegu" value={"대구"} /><label onClick={(e)=>labelColor(e)} htmlFor='sdaegu'>대구</label></div>
                <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="sgyeongbuk" onChange={(e)=>{ ClickLabel(e)}} name="sgyeongbuk" value={"경북"} /><label onClick={(e)=>labelColor(e)} htmlFor='sgyeongbuk'>경북</label></div>
                <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="sgwang" onChange={(e)=>{ ClickLabel(e)}} name="sgwang" value={"광주"} /><label onClick={(e)=>labelColor(e)} htmlFor='sgwang'>광주</label></div>
                <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="sjeonnam" onChange={(e)=>{ ClickLabel(e)}} name="sjeonnam" value={"전남"} /><label onClick={(e)=>labelColor(e)} htmlFor='sjeonnam'>전남</label></div>
                <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="sjeonbuk" onChange={(e)=>{ ClickLabel(e)}} name="sjeonbuk" value={"전북"} /><label onClick={(e)=>labelColor(e)} htmlFor='sjeonbuk'>전북</label></div>
            </span>
            </span>,
            type: <div style={{textAlign:"left", fontSize:20, width:"100%", height:"80px", lineHeight:"40px", borderRight:"1px solid #0000000a"}}>스드메 &nbsp;위치</div>
        },
        { name:<div style={{display:"flex", marginLeft:"50px", alignItems:"center"}}>
            <input type={"text"} style={{width:"30%", fontSize:"18px", border:"1px solid #ddd", padding:"8px", marginLeft:"100px"}} name="sminprice" maxLength={5} onChange={(e)=>ClickDate(e)}></input><h3 style={{ margin:"0 20px",width:"50px", marginLeft:"1%"}}>만원</h3><h3 style={{marginRight:"2%"}}> ~ </h3>
            <input type={"text"} style={{width:"30%", fontSize:"18px", border:"1px solid #ddd", padding:"8px"}} name="smaxprice" maxLength={5} onChange={(e)=>ClickDate(e)}></input><h3 style={{marginLeft:"-1%",width:"100px"}}>만원</h3><Button onClick={() => {postEst()}} style={{ width:"100px",height:"70px", marginLeft:120, background:'#c9a3b6', borderRadius:'10px'}}>검색</Button>
            </div>,
            type: <div style={{textAlign:"left", fontSize:20, width:"100%", borderRight:"1px solid #0000000a"}}>스드메 &nbsp;가격</div>
    },]
    const rankingData3 = [
        { name: 
            <InputGroup><input type={"date"}style={{ marginLeft:-50, textAlign:"center", fontSize:"18px", border:"none", padding:"8px"}} name="pdate" onChange={(e)=>ClickDate(e)}></input></InputGroup>,
        type: <div style={{textAlign:"left", fontSize:20, width:"100%", lineHeight:"40px",borderRight:"1px solid #0000000a"}}>플래너 &nbsp;날짜</div>
        },
        { name:<div style={{display:"flex", marginLeft:"50px", alignItems:"center"}}>
            <input type={"text"} style={{width:"30%", fontSize:"18px", border:"1px solid #ddd", padding:"8px", marginLeft:"100px"}} name="pminprice" maxLength={5} onChange={(e)=>ClickDate(e)}></input><h3 style={{ margin:"0 20px",width:"50px", marginLeft:"1%"}}>만원</h3><h3 style={{marginRight:"2%"}}> ~ </h3>
            <input type={"text"} style={{width:"30%", fontSize:"18px", border:"1px solid #ddd", padding:"8px"}} name="pmaxprice" maxLength={5} onChange={(e)=>ClickDate(e)}></input><h3 style={{marginLeft:"-1%",width:"100px"}}>만원</h3><Button onClick={() => {postEst()}} style={{ width:"100px",height:"70px", marginLeft:120,background:'#c9a3b6', borderRadius:'10px'}}>검색</Button>
            </div>,
        type: <div style={{textAlign:"left", fontSize:20, width:"100%", borderRight:"1px solid #0000000a"}}>플래너 &nbsp;가격</div>
    },]
    const rankingData4 = [
    { name: 
        <InputGroup><input type={"date"}style={{ marginLeft:-50, textAlign:"center", fontSize:"18px", border:"none", padding:"8px"}} name="hdate" onChange={(e)=>ClickDate(e)}></input></InputGroup>,
        type: <div style={{textAlign:"left", fontSize:20, width:"100%",lineHeight:"40px" ,borderRight:"1px solid #0000000a"}}>허니문 &nbsp;날짜</div>
    },
    { name: <span style={{fontSize:20}}>
        <span style={{display:"flex", justifyContent:"space-around"}}>
            <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="hseoul"onChange={(e)=>{ ClickLabel(e)}} name="hseoul" value={"국내"} /><label onClick={(e)=>labelColor(e)} htmlFor='hseoul'>국내</label></div>
            <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="hgyeong"onChange={(e)=>{ ClickLabel(e)}} name="hgyeong" value={"태국"} /><label onClick={(e)=>labelColor(e)} htmlFor='hgyeong'>태국</label></div>
            <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="hin"onChange={(e)=>{ ClickLabel(e)}} name="hin" value={"발리"} /><label onClick={(e)=>labelColor(e)} htmlFor='hin'>발리</label></div>
            <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="hgang"onChange={(e)=>{ ClickLabel(e)}} name="hgang" value={"하와이"} /><label onClick={(e)=>labelColor(e)} htmlFor='hgang'>하와이</label></div>
            <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="hje"onChange={(e)=>{ ClickLabel(e)}} name="hje" value={"몰디브"} /><label onClick={(e)=>labelColor(e)} htmlFor='hje'>몰디브</label></div>
            <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="hdae"onChange={(e)=>{ ClickLabel(e)}} name="hdae" value={"칸쿤"} /><label onClick={(e)=>labelColor(e)} htmlFor='hdae'>칸쿤</label></div>
            <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="hchungbuk"onChange={(e)=>{ ClickLabel(e)}} name="hchungbuk" value={"파리"} /><label onClick={(e)=>labelColor(e)} htmlFor='hchungbuk'>파리</label></div>
            <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="hchungnam"onChange={(e)=>{ ClickLabel(e)}} name="hchungnam" value={"이태리"} /><label onClick={(e)=>labelColor(e)} htmlFor='hchungnam'>이태리</label></div>
        </span>
        <br/>
        <span style={{display:"flex", justifyContent:"space-around"}}>
            <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="hbu" onChange={(e)=>{ ClickLabel(e)}} name="hbu" value={"스위스"} /><label onClick={(e)=>labelColor(e)} htmlFor='hbu'>스위스</label></div>
            <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="hul" onChange={(e)=>{ ClickLabel(e)}} name="hul" value={"체코"} /><label onClick={(e)=>labelColor(e)} htmlFor='hul'>체코</label></div>
            <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="hgyeongnam"el onChange={(e)=>{ ClickLabel(e)}} name="hgyeongnam" value={"포르투갈"} /><label onClick={(e)=>labelColor(e)} htmlFor='hgyeongnam'>포르투갈</label></div>
            <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="hdaegu" onChange={(e)=>{ ClickLabel(e)}} name="hdaegu" value={"스페인"} /><label onClick={(e)=>labelColor(e)} htmlFor='hdaegu'>스페인</label></div>
            <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="hgyeongbuk" onChange={(e)=>{ ClickLabel(e)}} name="hgyeongbuk" value={"모리셔스"} /><label onClick={(e)=>labelColor(e)} htmlFor='hgyeongbuk'>모리셔스</label></div>
            <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="hgwang" onChange={(e)=>{ ClickLabel(e)}} name="hgwang" value={"괌"} /><label onClick={(e)=>labelColor(e)} htmlFor='hgwang'>괌</label></div>
            <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="hjeonnam" onChange={(e)=>{ ClickLabel(e)}} name="hjeonnam" value={"사이판"} /><label onClick={(e)=>labelColor(e)} htmlFor='hjeonnam'>사이판</label></div>
            <div><input type="checkbox" style={{width:"20px", zoom: 2, verticalAlign:"-3px", display:"none"}} id="hjeonbuk" onChange={(e)=>{ ClickLabel(e)}} name="hjeonbuk" value={"두바이"} /><label onClick={(e)=>labelColor(e)} htmlFor='hjeonbuk'>두바이</label></div>
        </span>
        </span>,
        type: <div style={{textAlign:"left", fontSize:20, width:"100%", height:"80px", lineHeight:"40px", borderRight:"1px solid #0000000a"}}>허니문 &nbsp;위치</div>
        },
        { name:<div style={{display:"flex", marginLeft:"50px", alignItems:"center"}}>
            <input type={"text"} style={{width:"30%", fontSize:"18px", border:"1px solid #ddd", padding:"8px", marginLeft:"100px"}} name="hminprice" maxLength={5} onChange={(e)=>ClickDate(e)}></input><h3 style={{ margin:"0 20px",width:"50px", marginLeft:"1%"}}>만원</h3><h3 style={{marginRight:"2%"}}> ~ </h3>
            <input type={"text"} style={{width:"30%", fontSize:"18px", border:"1px solid #ddd", padding:"8px"}} name="hmaxprice" maxLength={5} onChange={(e)=>ClickDate(e)}></input><h3 style={{marginLeft:"-1%",width:"100px"}}>만원</h3><Button onClick={() => {postEst()}} style={{ width:"100px",height:"70px", marginLeft:120,background:'#c9a3b6', borderRadius:'10px'}}>검색</Button>
            </div>,
        type: <div style={{textAlign:"left", fontSize:20, width:"100%", borderRight:"1px solid #0000000a"}}>허니문 &nbsp;가격 </div>
        },
  ]

  const { w, s, p, h } = searchEstData;


  return (
    <>
    <Section title="상세견적" style={props.style} titleSize={"xl"}>
        <div className='slbtn' onClick={TLslider} style={{fontSize:"50px", position:"absolute", left:"80px", top:"85%"}}>«</div>
        <div className='slbtn' onClick={TRslider} style={{fontSize:"50px", position:"absolute", right:"80px", top:"85%"}}>»</div>
        <ETable
            style={{ marginTop: 30, marginBottom: "-30px", minWidth:"100%", zIndex:"10"}}
            data-aos="fade-up"
            columns={[ //배열
            {//예시
                name: '타입',
                id: 'type',
            },
            {//예시
                name: '이름',
                id: 'name',
            },
            ]}
            dataSource={rankingData0}
        />
            { ttslider.ws ? <div id='tcontainer' style={{minWidth:"100%", height:"450px" , overflow:"hidden", position:"relative", boxSizing:"border-box"}}>
        <ETable id="t1"
            style={{ marginTop: 30, minWidth:"100%", position:"absolute", left:0, transition:"left 1s"}}
            data-aos="fade-up"
            columns={[ //배열
            {//예시
                name: '타입',
                id: 'type',
            },
            {//예시
                name: '이름',
                id: 'name',
            },
            ]}
            dataSource={rankingData1}
        />
                <ETable id="t2"
            style={{ marginTop: 30, minWidth:"100%", position:"absolute" , left:1500, transition:"left 1s"}}
            data-aos="fade-up"
            columns={[ //배열
            {//예시
                name: '타입',
                id: 'type',
            },
            {//예시
                name: '이름',
                id: 'name',
            },
            ]}
            dataSource={rankingData2}
        />
                <ETable id="t3"
            style={{ marginTop: 30, minWidth:"100%", position:"absolute", left:3000, transition:"left 1s"}}
            data-aos="fade-up"
            columns={[ //배열
            {//예시
                name: '타입',
                id: 'type',
            },
            {//예시
                name: '이름',
                id: 'name',
            },
            ]}
            dataSource={rankingData3}
        />
                <ETable id="t4"
            style={{ marginTop: 30, minWidth:"100%", position:"absolute" , left:4500, transition:"left 1s"}}
            data-aos="fade-up"
            columns={[ //배열
            {//예시
                name: '타입',
                id: 'type',
            },
            {//예시
                name: '이름',
                id: 'name',
            },
            ]}
            dataSource={rankingData4}
        /></div>
: ttslider.ss ? <div id='tcontainer' style={{minWidth:"100%", height:"450px" , overflow:"hidden", position:"relative", boxSizing:"border-box"}}>
<ETable id="t1"
    style={{ marginTop: 30, minWidth:"100%", position:"absolute", left:-1500, transition:"left 1s"}}
    data-aos="fade-up"
    columns={[ //배열
    {//예시
        name: '타입',
        id: 'type',
    },
    {//예시
        name: '이름',
        id: 'name',
    },
    ]}
    dataSource={rankingData1}
/>
        <ETable id="t2"
    style={{ marginTop: 30, minWidth:"100%", position:"absolute", left:0, transition:"left 1s"}}
    data-aos="fade-up"
    columns={[ //배열
    {//예시
        name: '타입',
        id: 'type',
    },
    {//예시
        name: '이름',
        id: 'name',
    },
    ]}
    dataSource={rankingData2}
/>
        <ETable id="t3"
    style={{ marginTop: 30, minWidth:"100%", position:"absolute", left:1500, transition:"left 1s"}}
    data-aos="fade-up"
    columns={[ //배열
    {//예시
        name: '타입',
        id: 'type',
    },
    {//예시
        name: '이름',
        id: 'name',
    },
    ]}
    dataSource={rankingData3}
/>
        <ETable id="t4"
    style={{ marginTop: 30, minWidth:"100%", position:"absolute", left:3000, transition:"left 1s"}}
    data-aos="fade-up"
    columns={[ //배열
    {//예시
        name: '타입',
        id: 'type',
    },
    {//예시
        name: '이름',
        id: 'name',
    },
    ]}
    dataSource={rankingData4}
/></div>
: ttslider.ps ? <div id='tcontainer' style={{minWidth:"100%", height:"450px" , overflow:"hidden", position:"relative", boxSizing:"border-box"}}>
<ETable id="t1"
    style={{ marginTop: 30, minWidth:"100%", position:"absolute", left:-3000, transition:"left 1s"}}
    data-aos="fade-up"
    columns={[ //배열
    {//예시
        name: '타입',
        id: 'type',
    },
    {//예시
        name: '이름',
        id: 'name',
    },
    ]}
    dataSource={rankingData1}
/>
        <ETable id="t2"
    style={{ marginTop: 30, minWidth:"100%", position:"absolute", left:-1500, transition:"left 1s"}}
    data-aos="fade-up"
    columns={[ //배열
    {//예시
        name: '타입',
        id: 'type',
    },
    {//예시
        name: '이름',
        id: 'name',
    },
    ]}
    dataSource={rankingData2}
/>
        <ETable id="t3"
    style={{ marginTop: 30, minWidth:"100%", position:"absolute", left:0, transition:"left 1s"}}
    data-aos="fade-up"
    columns={[ //배열
    {//예시
        name: '타입',
        id: 'type',
    },
    {//예시
        name: '이름',
        id: 'name',
    },
    ]}
    dataSource={rankingData3}
/>
        <ETable id="t4"
    style={{ marginTop: 30, minWidth:"100%", position:"absolute" , left:1500, transition:"left 1s"}}
    data-aos="fade-up"
    columns={[ //배열
    {//예시
        name: '타입',
        id: 'type',
    },
    {//예시
        name: '이름',
        id: 'name',
    },
    ]}
    dataSource={rankingData4}
/></div> 
: ttslider.hs ? <div id='tcontainer' style={{minWidth:"100%", height:"450px" , overflow:"hidden", position:"relative", boxSizing:"border-box"}}>
<ETable id="t1"
    style={{ marginTop: 30, minWidth:"100%", position:"absolute", left:-4500, transition:"left 1s"}}
    data-aos="fade-up"
    columns={[ //배열
    {//예시
        name: '타입',
        id: 'type',
    },
    {//예시
        name: '이름',
        id: 'name',
    },
    ]}
    dataSource={rankingData1}
/>
        <ETable id="t2"
    style={{ marginTop: 30, minWidth:"100%", position:"absolute", left:-3000, transition:"left 1s"}}
    data-aos="fade-up"
    columns={[ //배열
    {//예시
        name: '타입',
        id: 'type',
    },
    {//예시
        name: '이름',
        id: 'name',
    },
    ]}
    dataSource={rankingData2}
/>
        <ETable id="t3"
    style={{ marginTop: 30, minWidth:"100%", position:"absolute", left:-1500, transition:"left 1s"}}
    data-aos="fade-up"
    columns={[ //배열
    {//예시
        name: '타입',
        id: 'type',
    },
    {//예시
        name: '이름',
        id: 'name',
    },
    ]}
    dataSource={rankingData3}
/>
        <ETable id="t4"
    style={{ marginTop: 30, minWidth:"100%", position:"absolute" , left:0, transition:"left 1s"}}
    data-aos="fade-up"
    columns={[ //배열
    {//예시
        name: '타입',
        id: 'type',
    },
    {//예시
        name: '이름',
        id: 'name',
    },
    ]}
    dataSource={rankingData4}
/></div> : null}
    </Section>
    <EstimateResult eData={searchEstData} setPboxp={setPboxp} pboxp={pboxp}></EstimateResult>
    </>
  )
}
```
- #### 검색 테이블<br>
각 검색 조건의 input창에 onChange함수를 이용해 useState에 보관 후 '검색' 버튼 클릭시 axios를 사용해 JSON형태로 지정한 url로 보낸 후 intellij에서 받아 온 data들을 정렬해서 보여줍니다.<br>

## Back_EstimateController
```java
    @PostMapping("/searchEstimate")
    public Map SearchEstimate(String wdate, String wseoul, String wgyeong, String win, String wgang, String wje, String wdae, String wchungbuk, String wchungnam, String wbu, String wul, String wgyeongnam, String wdaegu, String wgyeongbuk, String wgwang, String wjeonnam, String wjeonbuk, String whole, String common, String trad, String hotel, String house, String church, String cathedral, String outdoor ,int wminprice, int wmaxprice, String sdate, String sseoul, String sgyeong, String sin, String sgang, String sje, String sdae, String schungbuk, String schungnam, String sbu, String sul, String sgyeongnam, String sdaegu, String sgyeongbuk, String sgwang, String sjeonnam, String sjeonbuk, int sminprice, int smaxprice, String pdate, int pminprice, int pmaxprice, String hdate, String hseoul, String hgyeong, String hin, String hgang, String hje, String hdae, String hchungbuk, String hchungnam, String hbu, String hul, String hgyeongnam, String hdaegu, String hgyeongbuk, String hgwang, String hjeonnam, String hjeonbuk, int hminprice, int hmaxprice){
        log.info("searchEstimate()");
//        log.info(wdate);
//        log.info(wseoul);
//        log.info(wgyeong);
//        log.info(win);
        Map last = eServ.searchEst(wdate, wseoul, wgyeong, win, wgang, wje, wdae, wchungbuk, wchungnam, wbu, wul, wgyeongnam, wdaegu, wgyeongbuk, wgwang, wjeonnam, wjeonbuk, whole, common, trad, hotel, house, church, cathedral, outdoor, wminprice, wmaxprice, sdate, sseoul, sgyeong, sin, sgang, sje, sdae, schungbuk, schungnam, sbu, sul, sgyeongnam, sdaegu, sgyeongbuk, sgwang, sjeonnam, sjeonbuk, sminprice, smaxprice, pdate, pminprice, pmaxprice, hdate, hseoul, hgyeong, hin, hgang, hje, hdae, hchungbuk, hchungnam, hbu, hul, hgyeongnam, hdaegu, hgyeongbuk, hgwang, hjeonnam, hjeonbuk, hminprice, hmaxprice);
        return last;
    }
    //searchEstimate end
```
## Back_EstimateService
```java
@Service
@Log
public class EstimateService {
    @Autowired
    private WeddingCompRepository wcRepo;
    @Autowired
    private WeddingHoleRepository whRepo;
    @Autowired
    private SDMRepository sRepo;
    @Autowired
    private PlannerRepository pRepo;
    @Autowired
    private HoneyMoonRepository hRepo;
    @Autowired
    private ReservationRepository rRepo;


    public Map searchEst(String wdate, String wseoul, String wgyeong, String win, String wgang, String wje, String wdae, String wchungbuk, String wchungnam, String wgyeongnam, String wdaegu, String wbu, String wul, String wgyeongbuk, String wgwang, String wjeonnam, String wjeonbuk, String whole, String common, String trad, String hotel, String house, String church, String cathedral, String outdoor, int wminprice, int wmaxprice, String sdate, String sseoul, String sgyeong, String sin, String sgang, String sje, String sdae, String schungbuk, String schungnam, String sbu, String sul, String sgyeongnam, String sdaegu, String sgyeongbuk, String sgwang, String sjeonnam, String sjeonbuk,  int sminprice, int smaxprice, String pdate, int pminprice, int pmaxprice, String hdate, String hseoul, String hgyeong, String hin, String hgang, String hje, String hdae, String hchungbuk, String hchungnam, String hbu, String hul, String hgyeongnam, String hdaegu, String hgyeongbuk, String hgwang, String hjeonnam, String hjeonbuk, int hminprice, int hmaxprice){
        List<WeddingComp> wcList;
        List<WeddingHall> whList = new ArrayList<>();
        List<Reservations> rwhList;
        List<WeddingHall> removewh = new ArrayList<>();
        List<SDM> sList;
        List<Reservations> rsList;
        List<SDM> removes = new ArrayList<>();
        List<Planner> pList;
        List<Reservations> rpList;
        List<Planner> removep = new ArrayList<>();
        List<HoneyMoon> hList;
        List<Reservations> rhList;
        List<HoneyMoon> removeh = new ArrayList<>();

        Map estData = new HashMap<>();
        log.info("날짜어떻게넘어옴?"+hdate);
        java.sql.Date cvtwdate = java.sql.Date.valueOf(wdate);
        java.sql.Date cvtsdate = java.sql.Date.valueOf(sdate);
        java.sql.Date cvtpdate = java.sql.Date.valueOf(pdate);
        java.sql.Date cvthdate = java.sql.Date.valueOf(hdate);
//        java.sql.Timestamp cvthdate = java.sql.Timestamp.valueOf(hdate+" 00:00:00");
            wcList = wcRepo.findBySWClocation(wseoul, wgyeong, win, wgang, wje, wdae, wchungbuk, wchungnam, wbu, wul, wgyeongnam, wdaegu, wgyeongbuk, wgwang, wjeonnam, wjeonbuk);
            log.info("이거시 서치결과"+wcList);
            for(WeddingComp wno : wcList){
                switch(whole){
                    case "데이터없음" :
                        if(common.equals("데이터없음") && trad.equals("데이터없음") && hotel.equals("데이터없음") && house.equals("데이터없음") && church.equals("데이터없음") && cathedral.equals("데이터없음") && outdoor.equals("데이터없음")){
                            whList.addAll(whRepo.findByWhwcidx3(wno.getWidx(), wminprice, wmaxprice));
                        }
                        else if(whRepo.findByWhwcidx2(wno.getWidx(), wminprice, wmaxprice, common, trad, hotel, house, church, cathedral, outdoor)!=null) {
                            whList.addAll(whRepo.findByWhwcidx2(wno.getWidx(), wminprice, wmaxprice, common, trad, hotel, house, church, cathedral, outdoor));
                        }
                        break;
                    case "전체" :
                        if(whRepo.findByWhwcidx3(wno.getWidx(), wminprice, wmaxprice)!=null) {
                            whList.addAll(whRepo.findByWhwcidx3(wno.getWidx(), wminprice, wmaxprice));
                        }
                    break;
                }
            }
            log.info("웨딩회사"+wcList);
            log.info("웨딩홀"+whList);

            rwhList = rRepo.findByRwhdate(cvtwdate);
            int index1=0;
            for(WeddingHall whno : whList){
                for(Reservations rno : rwhList){
                    if(rno.getRsidx()==whno.getWhidx()){
                        removewh.add(whList.get(index1));
                    }   //if end
                }   //for end
                index1++;
            }// for end
            whList.remove(removewh);
            log.info("웨딩홀에서 지역으로 검색해온 데이터에서 예약있는 데이터 제외한 결과"+whList);



            sList = sRepo.findBySSlocation(sseoul, sgyeong, sin, sgang, sje, sdae, schungbuk, schungnam, sbu, sul, sgyeongnam, sdaegu, sgyeongbuk, sgwang, sjeonnam, sjeonbuk, sminprice, smaxprice);
            log.info("이거시 서치결과"+sList);
        log.info(sList+"스드메");
            rsList = rRepo.findByRsdate(cvtsdate);
            int index2=0;
            for(SDM sno : sList){
                for(Reservations rno : rsList){
                    if(rno.getRsidx()==sno.getSidx()){
                        removes.add(sList.get(index2));
                    }   //if end
                }   //for end
                index2++;
            }// for end
            sList.removeAll(removes);
            log.info("스드메에서 지역으로 검색해온 데이터에서 예약있는 데이터 제외한 결과"+sList);




            pList = pRepo.findByPrice(pminprice, pmaxprice);
            log.info("이거시 서치결과"+pList);
        log.info(pList+"플래너");
            rpList = rRepo.findByRpdate(cvtpdate);
            int index3=0;
            for(Planner pno : pList){
                for(Reservations rno : rpList){
                    if(rno.getRpidx()==pno.getPidx()){
                        removep.add(pList.get(index3));
                    }   //if end
                }   //for end
                index3++;
            }// for end
            pList.removeAll(removep);
            log.info("스드메에서 지역으로 검색해온 데이터에서 예약있는 데이터 제외한 결과"+pList);


            hList = hRepo.findBySHlocation(hgyeong, hin, hgang, hje, hdae, hchungbuk, hchungnam, hbu, hul, hgyeongnam, hdaegu, hgyeongbuk, hgwang, hjeonnam, hjeonbuk, hminprice, hmaxprice);
log.info(hList+"허니문");
log.info(hseoul+"이거왜안되지?");
            if(hseoul.equals("국내")){
                List<HoneyMoon> hList2 = new ArrayList<>();
                hList2 = hRepo.findAllByHarrival(hseoul);
                hList.addAll(hList2);
                log.info("여기서안되나?"+hList);
            }
            rhList = rRepo.findByRhdate(cvthdate);
//            log.info("이거시 서치결과"+hList);
//            log.info("컨버팅된 결과" + cvthdate);
                int index4=0;
//                int index2=0;
            for(HoneyMoon hno : hList){
//                log.info("sadads"+hno);
//                log.info(""+hno.getHidx());
//                log.info("예약날짜"+rhList);
                for(Reservations rno : rhList){
                    if(rno.getRhidx()==hno.getHidx()){
//                        log.info("빼기전"+hList);
//                        log.info("빼기전"+hno);
//                        hList.remove(index1);
                        removeh.add(hList.get(index4));
//                        log.info("삭제할 목록"+removeh);
//                        log.info("after remove"+hList);
//                        hList.removeIf(item -> item.getHidx()==rno.getRhidx());
                    }   //if end
//                    log.info("포문 반복확인"+hList);
                }   //for end
                index4++;
            }// for end
            hList.removeAll(removeh);
        // if end
        log.info("스드메에서 지역으로 검색해온 데이터에서 예약있는 데이터 제외한 결과"+sList);
        log.info("허니문에서 지역으로 검색해온 데이터에서 예약있는 데이터 제외한 결과"+hList);

//        int i=0;
//        for(WeddingHall wno : whList){
//            for(SDM sno : sList){
//                for(Planner pno : pList){
//                    for(HoneyMoon hno : hList){
//                        int tcost = wno.getWhprice()+ sno.getSprice()+ pno.getPprice()+hno.getHcost();
//                        if(wno.getWhprice()+ sno.getSprice()+ pno.getPprice()+hno.getHcost()>= minprice && wno.getWhprice()+ sno.getSprice()+ pno.getPprice()+hno.getHcost()<= maxprice){
//                            estData.put(i,whList);
//                            i++;
//                            estData.put(i,sList);
//                            i++;
//                            estData.put(i,pList);
//                            i++;
//                            estData.put(i,hList);
//
//                        }   //if end
//                    }   //for end
//                }   //for end
//            }   //for end
//        }   //for end
        estData.put("w", whList);
        estData.put("s", sList);
        estData.put("p", pList);
        estData.put("h", hList);
        log.info("최종 데이터"+estData);
        return estData;
    }

    public Map<String, Object> estimateMain(String type, String location, int mincost, int maxcost) {
        log.info("estimateMain()");
        List<HoneyMoon> hm = new ArrayList<>();
        List<Planner> pl = new ArrayList<>();
        List<WeddingHall> wh = new ArrayList<>();
        List<SDM> sdm = new ArrayList<>();
        List<WeddingComp> wc = new ArrayList<>();
        Map<String, Object> eMain = new HashMap<>();

        try{
            switch(type){
                case "허니문":
                    hm = hRepo.estMainHm(location, mincost, maxcost);
                    break;
                case "플래너":
                    pl = pRepo.estMainpl(mincost, maxcost);
                    break;
                case "웨딩홀":
                    wc = wcRepo.findByWlocation(location);
                    if(!wc.isEmpty())
                        for(WeddingComp c : wc)
                            wh.add(whRepo.estMainWh(c.getWidx(),mincost, maxcost));
                    break;
                case "스드메":
                    sdm = sRepo.estMainWh(location, mincost, maxcost);
                    break;
            }
            log.info("검색 성공");

            eMain.put("hm", hm);
            eMain.put("pl", pl);
            eMain.put("wh", wh);
            eMain.put("sdm", sdm);
        }catch (Exception e){
            e.printStackTrace();
            log.info("검색 실패");
        }
        return eMain;
    }
}
```

    {
    SDM findBySidx(int sidx);

    @Query("SELECT s FROM SDM s WHERE (s.slocation Like %?1% or s.slocation Like %?2% or s.slocation Like %?3% or s.slocation Like %?4% or s.slocation Like %?5% or s.slocation Like %?6% or s.slocation Like %?7% or s.slocation Like %?8% or s.slocation Like %?9% or s.slocation Like %?10% or s.slocation Like %?11% or s.slocation Like %?12% or s.slocation Like %?13% or s.slocation Like %?14% or s.slocation Like %?15% or s.slocation Like %?16%) And (s.sprice between ?17 and ?18)")
    List<SDM> findBySSlocation(String sseoul, String sgyeong, String sin, String sgang, String sje, String sdae, String schungbuk, String schungnam, String sbu, String sul, String sgyeongnam, String daegu, String sgyeongbuk, String sgwang, String sjeonnam, String sjeonbuk, int wminprice, int wmaxprice);

    List<SDM> findByScompContaining(String str);

    @Query("SELECT s FROM SDM s WHERE((s.slocation=?1)AND(s.sprice>=?2)AND(s.sprice<=?3))")
    List<SDM> estMainWh(String slocation, int mincost, int maxcost);

    List<SDM> findAllBySidx(int sidx);

    SDM findByScompAndSphoneAndSstr(String scomp, String sphone, Object o);

    @Query("SELECT s FROM SDM s WHERE s.sstr IS NOT NULL")
    Page<SDM> findBySstr(Pageable pb);

    Page<SDM> findBySstrIsNull(Pageable pb);
}


    {
    List<Reservations> findByRmid(String rmid);

    @Query("Select rwh from Reservations rwh where( rwh.rdate=?1 and rwh.rtype='웨딩홀' )")
    List<Reservations> findByRwhdate(Date wdate);
    @Query("Select rs from Reservations rs where( rs.rdate=?1 and rs.rtype='스드메' )")
    List<Reservations> findByRsdate(Date sdate);
    @Query("Select rp from Reservations rp where( rp.rdate=?1 and rp.rtype='플래너')")
    List<Reservations> findByRpdate(Date pdate);
    @Query("Select rh from Reservations rh where( rh.rdate=?1 and rh.rtype='허니문')")
    List<Reservations> findByRhdate(Date hdate);

    List<Reservations> findByRtypeContaining(String str);

    List<Reservations> findByRmidContaining(String str);

    Reservations findByRsidx(int sidx);

    Reservations findByRhidx(int hidx);

    Reservations findByRwhidx(int whidx);

    Reservations findByRpidx(int pidx);

    List<Reservations> findByRtype(String rtype);

    int countByRwhidx(int whidx);

    int countByRmid(String mid);
    @Modifying
    @Transactional
    void deleteByRidx(int ridx);
    Reservations findByRidx(int ridx);

    Page<Reservations> findByRidxGreaterThan(int i, Pageable pb);
}

프론트에서 받아온 값을 매개변수로 받고 repository에서 쿼리문을 사용해 만든 함수 findByRsdate, findBySSlocation 등으로 데이터베이스에 일치하는 데이터를 가져온 후 데이터들을 카테고리별로 list에 담고 각 리스트들을 map에 담아서 return 합니다.<br><br>
- #### 검색 화면<br><br>
![image](https://user-images.githubusercontent.com/117874997/215289298-3d6edfe0-1d41-482c-ae87-c0a95a150ed9.png)

## EstimateItem.jsx 컴포넌트 (부분)

※ 로그인 회원, 비회원에 따라 다른 구성 

```javascript
const EstimateItem = ( {pboxp,setPboxp,w,s,p,h, ...props} ) => {
  const comma = (num) =>[num].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const id = sessionStorage.getItem("mid");
  const nextId = useRef(0);
  const [a, setA]= useState(false);
  const [tbox, setTbox]= useState(0);
  const clickTbox =()=>{setTbox(1)};
  const clickTbox2 = () => {setTbox(0);}
  // && pboxp.wprice!=w[e.target.id.substr(1)].whprice
  const dibBtn= () => {
    // axios.post("/ddibInsert" , null, {params:{dibData:encodeURI(dibData)}})
    axios.post("/ddibInsert" ,dibData)
    .then((res)=>{
      window.alert("찜딱콩");
      setA(false);
      setDibData([]);
    }).catch(err=>{setA(false);setDibData([]);});
  }
  const clickwItem = (e) => {
    if(id===undefined || id===null || id===""){
      window.alert("로그인 후 이용 가능한 서비스입니다.");
      return;
    }
    
    if(e.target.type==="submit"){
      let btnconfirm= window.confirm("찜하시겠습니까?");
      console.log(btnconfirm);
      if(btnconfirm===false){
        return;
      }
      else if(btnconfirm===true){
        setDibData([...dibData,{id:nextId.current ,dtype:"웨딩홀", dmid:id, dwhidx:w[e.target.id.substr(1)]?.whidx}]);
      }
      console.log(dibData);
      console.log(pboxp);
      setA(true);
      return;
    }

    const wc = document.getElementById("w"+e.target.id.substr(1));
    console.log("쫌"+wc.checked);
    console.log(w[e.target.id.substr(1)]);
      if(wc.checked==false){
      e.target.style.opacity=0.1;
        setPboxp({...pboxp, wprice:pboxp.wprice+w[e.target.id.substr(1)].whprice});
        setDibData([...dibData,{id:nextId.current ,dtype:"웨딩홀", dmid:id, dwhidx:w[e.target.id.substr(1)].whidx}]);
        console.log(dibData);
      }else{
        e.target.style.opacity=0;
        setPboxp({...pboxp, wprice:pboxp.wprice-w[e.target.id.substr(1)].whprice});
        for(let i=0; i<dibData.length; i=i+1){
        setDibData(dibData.filter(dibData => dibData.dwhidx!==w[e.target.id.substr(1)].whidx ));
        }
        console.log(dibData);
      }

  }
  
  const clicksItem = (e) => {
    if(id===undefined || id===null || id===""){
      window.alert("로그인 후 이용 가능한 서비스입니다.");
      return;
    }
    
    if(e.target.type==="submit"){
      let btnconfirm= window.confirm("찜하시겠습니까?");
      console.log(btnconfirm);
      if(btnconfirm===false){
        return;
      }else if(btnconfirm===true){
        setDibData([...dibData,{id:nextId.current ,dtype:"스드메", dmid:id, dsidx:s[e.target.id.substr(1)].sidx}]);
      }
      console.log(dibData);
      console.log(pboxp);
      setA(true);
      return;
    }


    const sc = document.getElementById("sd"+e.target.id.substr(1));
    console.log(e);
    console.log("sc1 체크여부 :"+sc.checked+"아이디: s"+e.target.id.substr(1));
    if(sc.checked==false){
      e.target.style.opacity=0.1;
        setPboxp({...pboxp, sprice:pboxp.sprice+s[e.target.id.substr(1)].sprice});
        setDibData([...dibData,{id:nextId.current ,dtype:"스드메", dmid:id, dsidx:s[e.target.id.substr(1)].sidx}]);
    }else{
      e.target.style.opacity=0;
        setPboxp({...pboxp, sprice:pboxp.sprice-s[e.target.id.substr(1)].sprice});
        for(let i=0; i<dibData.length; i=i+1){
          setDibData(dibData.filter(dibData => dibData.dsidx!==s[e.target.id.substr(1)].sidx ));
          }
    }
  }

  const clickpItem = (e) => {
    if(id===undefined || id===null || id===""){
      window.alert("로그인 후 이용 가능한 서비스입니다.");
      return;
    }
    
    if(e.target.type==="submit"){
      let btnconfirm= window.confirm("찜하시겠습니까?");
      console.log(btnconfirm);
      if(btnconfirm===false){
        return;
      }else if(btnconfirm===true){
        setDibData([...dibData,{id:nextId.current ,dtype:"플래너", dmid:id, dpidx:p[e.target.id.substr(1)].pidx}]);
      }
      console.log(dibData);
      console.log(pboxp);
      setA(true);
      return;
    }


    const pc = document.getElementById("pd"+e.target.id.substr(1));
    console.log("pcpc"+e.target.id.substr(1))
    console.log("pc1 체크여부 :"+pc.checked+"아이디: pd"+e.target.id.substr(1))
    if(pc.checked==false){
      e.target.style.opacity=0.1;
        setPboxp({...pboxp, pprice:pboxp.pprice+p[e.target.id.substr(1)].pprice});
        setDibData([...dibData,{id:nextId.current ,dtype:"플래너", dmid:id, dpidx:p[e.target.id.substr(1)].pidx}]);
    }else{
      e.target.style.opacity=0;
        setPboxp({...pboxp, pprice:pboxp.pprice-p[e.target.id.substr(1)].pprice});
        for(let i=0; i<dibData.length; i=i+1){
          setDibData(dibData.filter(dibData => dibData.dpidx!==p[e.target.id.substr(1)].pidx ));
        }
    }
  }

  const clickhItem = (e) => {
    if(id===undefined || id===null || id===""){
      window.alert("로그인 후 이용 가능한 서비스입니다.");
      return;
    }
    
    if(e.target.type==="submit"){
      let btnconfirm= window.confirm("찜하시겠습니까?");
      console.log(btnconfirm);
      if(btnconfirm===false){
        return;
      }else if(btnconfirm===true){
        setDibData([...dibData,{id:nextId.current ,dtype:"허니문", dmid:id, dhidx:h[e.target.id.substr(1)].hidx}]);
      }
      console.log(dibData);
      console.log(pboxp);
      setA(true);
      return;
    }


    const hc = document.getElementById("ho"+e.target.id.substr(1));
    if(hc.checked==false){
      e.target.style.opacity=0.1;
        setPboxp({...pboxp, hprice:pboxp.hprice+h[e.target.id.substr(1)].hcost});
        setDibData([...dibData,{id:nextId.current ,dtype:"허니문", dmid:id, dhidx:h[e.target.id.substr(1)].hidx}]);
    }else{
        e.target.style.opacity=0;
        setPboxp({...pboxp, hprice:pboxp.hprice-h[e.target.id.substr(1)].hcost});
        for(let i=0; i<dibData.length; i=i+1){
          setDibData(dibData.filter(dibData => dibData.dhidx!==h[e.target.id.substr(1)].hidx ));
        }
    }
  }
  const wItem = w?.map((wlist,a) => {
    return (
      <div data-aos="fade-up" style={{ }}>
      <FlexBox style={{width:"100%"}}>
      <div
      style={{
        width: '1395px',
        height: '550px',
        backgroundImage: `url(upload/${wlist.whimg2})`,
        backgroundSize: '1395px 550px',
        borderRadius: "7px"
      }}/>
      <div className='ehover' onClick={() => window.open('/collect/wedding-hall/', '_blank')}>{wlist.whstr}</div>
      </FlexBox>
      { pboxp.wprice !== 0 ?
      <><input type="checkBox" id={"w"+a} style={{display:"none"}}/><label htmlFor={'w'+a} id={"a"+a} className='pcheck' onClick={(e)=>clickwItem(e)}></label></>:<><input type="checkBox" checked={false} id={'w'+a} style={{display:"none"}}/><label htmlFor={'w'+a} id={"a"+a} className='pcheck' style={{opacity:0}} onClick={(e)=>clickwItem(e)}></label></>}
    <p style={{ marginTop: 10, marginBottom: "50px"}}>
      <Typhography size="md" font="medium" style={{display:"inline-block", width:"100%", padding:"20px 10px 25px 20px", borderBottom:"1px dotted lightGray"}}>
        <span key={a} style={{fontSize:"25px", fontWeight:'bold'}}>{wlist.whname}</span>
        <div style={{float:"right"}}>
        <span style={{fontSize:"25px", fontWeight:'bold', lineHeight:"65px", marginRight:"100px"}}>{comma(wlist.whprice)}만원</span>
          <Payment ptext={"예약하기💕"} width={"120px"} height={"100px"} wlist={wlist} background ={'#C3B6D9'} borderRadius={'10px'}></Payment>
          <Button id={"w"+a} onClick={(e)=>{clickwItem(e)}} style={{width:120, height:100, background:"lightgray", borderRadius:'10px', marginLeft:'10px'}}>찜하기💕</Button>
        </div>
        <span style={{fontSize:"20px", fontWeight:'bold', lineHeight:"40px"}}><br/>{wlist.whkind}</span>
      </Typhography>
    </p>
    </div>);
  })
  console.log(w);
  const sItem = s?.map((slist,b) => {
    return (
      <div data-aos="fade-up" style={{}}>
      <FlexBox style={{width:"700px" }}>
      <div
      style={{
        width: '650px',
        height: '350px',
        backgroundImage: `url(upload/${slist.simg2})`,
        backgroundSize: '650px 350px',
        borderRadius: "7px"
      }}/>
      <div className='ehover2' onClick={() => window.open('/collect/sdm/', '_blank')}>{slist.sstr}</div>
      </FlexBox>
      { pboxp.sprice !== 0 ?
      <><input type="checkbox" id={"sd"+b} style={{display:"none"}}/><label htmlFor={'sd'+b} id={"b"+b} className='ppcheck' onClick={(e)=>clicksItem(e)}></label></>:<><input type="checkbox" checked={false} id={"sd"+b} style={{display:"none"}}/><label htmlFor={"sd"+b} id={"b"+b} className='ppcheck' style={{}} onClick={(e)=>clicksItem(e)}></label></>}
    <p style={{ marginTop: 10, marginBottom: "50px" }}>
      <Typhography size="md" font="medium" style={{display:"inline-block", width:"92%", padding:"10px 0px 15px 20px", borderBottom:"1px dotted lightGray"}}>
        <span key={b} style={{fontSize:"23px", fontWeight:'bold'}}>{slist.scomp}</span>
        <div style={{float:"right"}}>
        <span style={{fontSize:"23px", fontWeight:'bold', lineHeight:"55px", marginRight:"10px"}}>{comma(slist.sprice)}만원</span>
          <Payment ptext={"예약하기💕"} width={"120px"} height={"100px"} slist={slist} background ={'#C3B6D9'} borderRadius={'10px'}></Payment>
          <Button id={"b"+b}  onClick={(e)=>{clicksItem(e)}} style={{width:120, height:100, background:"lightgray", borderRadius:'10px', marginLeft:'10px'}}>찜하기💕</Button>
        </div>
        <span style={{fontSize:"19px", fontWeight:'bold', lineHeight:"40px"}}><br/>{slist.slocation}</span>
      </Typhography>
    </p>
    </div>);
  })
  
  const pItem = p?.map((plist,c) => {
    return (
      <div data-aos="fade-up" style={{ }}>
      <FlexBox style={{width:"700px"}}>
      <div
      style={{
        width: '650px',
        height: '600px',
        backgroundImage: `url(upload/${plist.pimg})`,
        backgroundSize: '650px 600px',
        borderRadius: "7px"
      }}/>
      <div className='ehover3' onClick={() => window.open('/collect/honeymoon/', '_blank')}>{plist.pstr}</div>
      </FlexBox>
      { pboxp.pprice !==0 ?
     <><input type="checkbox" id={"pd"+c} style={{display:"none"}}/><label htmlFor={'pd'+c} id={"c"+c} className='ppcheck' onClick={(e)=>clickpItem(e)}></label></>:<><input type="checkbox" checked={false} id={"pd"+c} style={{display:"none"}}/><label htmlFor={"pd"+c} id={"c"+c} className='ppcheck' style={{opacity:0}} onClick={(e)=>clickpItem(e)}></label></>}
    <p style={{ marginTop: 10, marginBottom: "50px" }}>
      <Typhography size="md" font="medium" style={{display:"inline-block", width:"92%", padding:"10px 0px 15px 20px", borderBottom:"1px dotted lightGray"}}>
        <span key={c} style={{fontSize:"23px", fontWeight:'bold'}}>{plist.pname}</span>
        <div style={{float:"right"}}>
          <span style={{fontSize:"23px", fontWeight:'bold', lineHeight:"55px", marginRight:"10px"}}>{comma(plist.pprice)}만원</span>
          <Payment ptext={"예약하기💕"} width={"120px"} height={"100px"} plist={plist} background ={'#C3B6D9'} borderRadius={'10px'}></Payment>
          <Button  onClick={(e)=>{clickpItem(e)}} id={"c"+c} style={{width:120, height:100, background:"lightgray", borderRadius:'10px', marginLeft:'10px'}}>찜하기💕</Button>
        </div>
        <span style={{fontSize:"19px", fontWeight:'bold', lineHeight:"40px"}}><br/>{plist.pphone}</span>
      </Typhography>
    </p>
    </div>);
  })
  const hItem = h?.map((hlist,d) => {
    console.log(d);
    console.log(`url(upload/${hlist.himg})`);
    return (
      <div data-aos="fade-up" style={{ }}>
      <FlexBox style={{width:"100%"}}>
      <div
      style={{
        width: '1395px',
        height: '550px',
        backgroundImage: `url('upload/${hlist.himg2}')`,
        backgroundSize: '1395px 550px',
        backgroundRepeat : "no-repeat",
        borderRadius: "7px"
      }} />
      <div className='ehover' style={{overflow:"hidden"}} onClick={() => window.open('/collect/honeymoon/', '_blank')}>{hlist.hstr}</div>
      </FlexBox>
      { pboxp.hprice !=0 ?
       <><input type="checkBox" id={"ho"+d} style={{display:"none"}}/><label htmlFor={'ho'+d} id={"d"+d} className='pcheck' onClick={(e)=>clickhItem(e)}></label></>:<><input type="checkBox" checked={false} id={'ho'+d} style={{display:"none"}}/><label htmlFor={'ho'+d} id={"d"+d} className='pcheck' style={{opacity:0}} onClick={(e)=>clickhItem(e)}></label></>}
    <p style={{ marginTop: 10, marginBottom: "50px" }}>
      <Typhography size="md" font="medium" style={{display:"inline-block", width:"100%", padding:"20px 10px 25px 20px", borderBottom:"1px dotted lightGray"}}>
        <span key={d} style={{fontSize:"25px", fontWeight:'bold'}}>{hlist.hlocation}</span>
        <div style={{float:"right"}}>
        <span style={{fontSize:"25px", fontWeight:'bold', lineHeight:"65px", marginRight:"100px"}}>{comma(hlist.hcost)}만원</span>
          <Payment ptext={"예약하기💕"} width={"120px"} height={"100px"} hlist={hlist} background ={'#C3B6D9'} borderRadius={'10px'}></Payment>
          <Button  onClick={(e)=>{clickhItem(e)}} id={"d"+d} style={{width:120, height:100, background:"lightgray", borderRadius:'10px', marginLeft:'10px'}}>찜하기💕</Button>
        </div>
        <span style={{fontSize:"20px", fontWeight:'bold', lineHeight:"40px"}}><br/>{hlist.hbrand}</span>
      </Typhography>
    </p>
    </div>);
  })

  console.log("스드메"+sItem);
  console.log(pItem);
  console.log("허니문"+hItem);

  const [dibData, setDibData] = useState([]);
  console.log("")
  useEffect(()=> {
    console.log(dibData);
  },[dibData])

  useEffect(()=>{
    console.log(dibData);
    if(a===true){
      dibBtn();
    }
  },[a])


  return (
    <div style={{marginBottom:80, marginTop:70}}>
      {(wItem !== undefined && wItem?.length!==0) ? 
      <>
      <h1 style={{marginTop:"-50px",marginBottom:"40px", marginLeft:"10px"}}>웨딩홀</h1> 
      <div style={{marginBottom:"80px", display:"flex", flexWrap:"wrap"}}>{wItem}</div></>: null }
      {(sItem !== undefined && sItem?.length!==0) ?
      <>
      <h1 style={{marginTop:"-50px",marginBottom:"40px", marginLeft:"10px"}}>스드메</h1> 
      <div style={{marginBottom:"80px", display:"flex", flexWrap:"wrap"}}>{sItem}</div></>: null }
      {pItem !== undefined && pItem?.length!==0 ? 
      <>
      <h1 style={{marginBottom:"40px", marginLeft:"10px"}}>플래너</h1>
      <div style={{marginBottom:"80px", display:"flex", flexWrap:"wrap"}}>{pItem}</div></>: null }
      {hItem !== undefined && hItem?.length!==0 ? 
      <>
      <h1 style={{marginBottom:"40px", marginLeft:"10px"}}>허니문</h1>
      <div style={{marginBottom:"80px", display:"flex", flexWrap:"wrap"}}>{hItem}</div></>: null }
      { pboxp.wprice+pboxp.sprice+pboxp.pprice+pboxp.hprice != 0 ?  <>
        {tbox == 0 ? 
        <div id="pricebox" style={{background:"rgb(255, 252, 253)", opacity:"1" ,color:"black" ,height:365, width:400, position:"fixed", right:"100px", bottom:"50px", transition: "all 1s", fontSize:"20px", borderRadius:"10px"}}><div style={{width:"90%", margin:"0 auto", lineHeight:"50px", marginTop:"15px"}}><div onClick={clickTbox} style={{width:"20px", height:"20px", cursor:"pointer", position:"absolute", right:"-30px"}}>X</div><span style={{marginLeft:"10px"}}>웨딩홀</span><span style={{float:"right"}}>{comma(pboxp.wprice)}만원</span></div><div style={{width:"90%", margin:"0 auto", lineHeight:"50px"}}><span style={{marginLeft:"10px"}}>스드메</span><span style={{float:"right"}}>{comma(pboxp.sprice)}만원</span></div><div style={{width:"90%", margin:"0 auto", lineHeight:"50px"}}><span style={{marginLeft:"10px"}}>플래너</span><span style={{float:"right"}}>{comma(pboxp.pprice)}만원</span></div><div style={{width:"90%", height:"60px" ,borderBottom:"2px solid", margin:"0 auto", lineHeight:"50px"}}><span style={{marginLeft:"10px"}}>허니문</span> <span style={{float:"right"}}>{comma(pboxp.hprice)}만원</span></div><div style={{color:"red", width: "90%", margin:"0 auto", marginTop:"10px", lineHeight:"50px"}}><span style={{marginLeft:"10px"}}>합계 </span><span style={{float:"right"}}>{comma(pboxp.wprice+pboxp.sprice+pboxp.pprice+pboxp.hprice)}만원</span></div><div className='dib1' onClick={dibBtn}>전체 찜하기💕</div></div> : <div className='dib2' onClick={clickTbox2} style={{position:"fixed", bottom:"280px", right:"18px", fontSize:"40px"}}>💌</div>}</>:
      <><div id="pricebox" style={{background:"rgb(255, 248, 248)", opacity:"1" ,color:"black" ,height:365, width:400, position:"fixed", bottom:"50px", right:"-400px", transition: "all 1s", fontSize:"20px", borderRadius:"10px"}}><div style={{width:"90%", margin:"0 auto", lineHeight:"50px", marginTop:"15px"}}><div onClick={clickTbox} style={{width:"20px", height:"20px", cursor:"pointer", position:"absolute", right:"-30px"}}>X</div><span style={{marginLeft:"10px"}}>웨딩홀</span><span style={{float:"right"}}>{comma(pboxp.wprice)}만원</span></div><div style={{width:"90%", margin:"0 auto", lineHeight:"50px"}}><span style={{marginLeft:"10px"}}>스드메</span><span style={{float:"right"}}>{comma(pboxp.sprice)}만원</span></div><div style={{width:"90%", margin:"0 auto", lineHeight:"50px"}}><span style={{marginLeft:"10px"}}>플래너</span><span style={{float:"right"}}>{comma(pboxp.pprice)}만원</span></div><div style={{width:"90%", height:"60px" ,borderBottom:"2px solid", margin:"0 auto", lineHeight:"50px"}}><span style={{marginLeft:"10px"}}>허니문</span> <span style={{float:"right"}}>{comma(pboxp.hprice)}만원</span></div><div style={{color:"red", width: "90%", margin:"0 auto", marginTop:"10px", lineHeight:"50px"}}><span style={{marginLeft:"10px"}}>합계 </span><span style={{float:"right"}}>{comma(pboxp.wprice+pboxp.sprice+pboxp.pprice+pboxp.hprice)}만원</span></div><div className='dib1'>전체 찜하기💕</div></div>
      </>}
      </div>
  )
}

export default EstimateItem;
```
- #### 검색 결과<br>
받아온 data들을 정렬해서 띄워주고 상품을 클릭하면 선택한 상품들의 계산서가 나타나며 각 상품 찜하기, 선택 상품 찜하기 , 예약하기(결제(아임포트 결제 api 사용))를 할 수 있습니다.<br>


- #### 검색 전 화면<br><br>
![image](https://user-images.githubusercontent.com/117874997/215312868-a38a23d0-ee6e-415a-93f6-b8537388dd5f.png)

- #### 검색 후 화면<br><br>
![image](https://user-images.githubusercontent.com/117874997/215312945-5cc50583-9ff1-4de1-8ec9-a7351212f39f.png)

## Likes.jsx 컴포넌트

※ 찜하기
```javascript

export default () => {
  const comma = (num) =>[num].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const id = sessionStorage.getItem("mid");
  const nav = useNavigate();
    const inputBorder= useRef();
  const [dibData,setDibData] = useState([{}]);
  useEffect(()=>{
    axios.post("/searchDib", null, {params:{mid:id}})
    .then((res)=>{
      console.log(res.data);
      setDibData(res.data);
    })
  },[])
  
  const [likes, setLikes] = useState([
    // {name: "gd"},
    // {name: "gd"},
    // {name: "gd"},
  ])
  console.log(dibData);
  const {wh,sd,pl,ho} = dibData;
  useEffect(()=>{
    console.log(wh);
    let ls = [];
    if(wh!==undefined){
      for(let i=0; i<wh.length; i++){
        ls.push({dname: wh[i].whname, dtype: "웨딩홀", dprice: wh[i].whprice ,dwhidx:wh[i].whidx, dmid:id, bprice: wh[i].bprice ,dorder: i});
        setLikes(ls);
      }
    }
      if(sd!==undefined){
        for(let i=0; i<sd.length; i++){
          ls.push({dname: sd[i].scomp, dtype: "스드메", dprice: sd[i].sprice ,dsidx:sd[i].sidx, dmid:id, dorder: wh.length+i,});
          setLikes(ls);
        }
      }
      if(pl!==undefined){
        for(let i=0; i<pl.length; i++){
          ls.push({dname: pl[i].pname, dtype: "플래너", dprice: pl[i].pprice ,dpidx:pl[i].pidx, dmid:id, dorder: wh.length+sd.length+i,});
          setLikes(ls);
        }
      }
      if(ho!==undefined){
        for(let i=0; i<ho.length; i++){
          ls.push({dname: ho[i].hlocation, dtype: "허니문", dprice: ho[i].hcost ,dhidx:ho[i].hidx, dmid:id, dorder: wh.length+sd.length+pl.length+i,});
          setLikes(ls);
        }
      }
  },[wh],[sd],[pl],[ho]);
  // console.log({a})
  // likes.concat();
  // for(let i=1; i<3; i++){
  //   likes.concat({name: dd[i]});
  // }
  // console.log(likes)
  const [delData, setdelData] = useState([]);
  const [delbtn, setDelbtn] = useState(false);

  // const onRemoveHandler = (id) => () => {
  //   if (!window.confirm(`${likes[id].name} 을 찜 목록에서 삭제하시겠습니까?`)) return


  // }
  const [showData,setShowData]=useState([]);;
  useEffect(()=>{
    let tempShow = []
    console.log(likes);
    tempShow=likes.slice();
    console.log(tempShow)
      for(let i =0; i<tempShow.length; i++){
        tempShow[i]={...tempShow[i], dprice:comma(tempShow[i].dprice)}
    }
    setShowData(tempShow);
    console.log(showData);
  },[likes])


  useEffect(()=>{
    console.log("여기요오오"+delData);
    if(delbtn===true){
      axios.post("/deleteDib", delData)
      .then((res)=>{
        window.alert("힝 삭제됐어");
        setDelbtn(false);
        nav(0);
      });  
    }


    //버튼누를때 유즈스테이트 하나 바뀌게해서 만약에 그값이 바뀌면 axios 보낸다 해주면될듯
  },[delData,delbtn]);

  const [checkall,setCheckall] = useState(false);
  const [checkList, setCheckList] = useState([]);
  // useEffect(()=>{
  //   console.log(delData,checkall);
  // },[delData,checkall])
  let tempdelData = [];
  let tempcheckList = [];
  let tempallData= [];
  const onCheckboxChangeHandler = (e,index) => {
    console.log(checkList.length, likes.length);
    console.log(index);
    if (e.target.name!=="rperson" && e.target.name!=="rdatestart" && e.target.name!=="rdateend"){
      const val = Number(e.target.value)
      setCheckList(checkList.includes(val) ? checkList.filter((v) => v !== val) : [...checkList, val])
      console.log(val);
      console.log(checkList);
      {val ===-1&&checkall===false ? setCheckall(true): setCheckall(false)};
      if(val===-1&&delData.length!==likes.length){
        setCheckList([]);
        setdelData([]);
        setdelData(likes);
        console.log("제바아아알")
        console.log(delData);
        return;
      }else if(val===-1){
        // setCheckList(checkList.filter(v=> v !== val));
        setCheckall(false);
        setdelData([]);
        console.log(delData);
        return;
      }else if (val!==-1&&delData.length===likes.length){
        setCheckall(false);
        console.log(delData);
        console.log(checkList);
        for(let i = 0 ; i<likes.length; i++){
          tempcheckList.push(i);
        }
        tempcheckList.splice(val,1);
        setCheckList(tempcheckList);
        tempallData = delData.slice();
        tempallData.splice(val,1);
        setdelData(tempallData);
        return;
      }



      
      console.log(e.target.checked,checkall)
      console.log(likes[e.target.value].dtype, e.target.checked, checkall)
      if(likes[e.target.value].dtype==="웨딩홀"&&e.target.checked===true &&checkall===false){
        setdelData([...delData,{
          dtype:"웨딩홀",
          dmid:id,
          dwhidx:likes[e.target.value].dwhidx,
          dprice:likes[e.target.value].dprice,
          dname:likes[e.target.value].dname,
          dorder: index,
          bprice: likes[e.target.value].bprice
      }])}else if(likes[e.target.value].dtype==="웨딩홀"&&e.target.checked===false &&checkall===false){
        setdelData(delData.filter(delData=>delData.dwhidx!==likes[e.target.value].dwhidx))
      }
      if(likes[e.target.value].dtype==="스드메"&&e.target.checked===true &&checkall===false){
        console.log(likes[e.target.value].dsidx);
        setdelData([...delData,{
          dtype:"스드메",
          dmid:id,
          dsidx:likes[e.target.value].dsidx,
          dprice:likes[e.target.value].dprice,
          dname:likes[e.target.value].dname,
          dorder:index,
      }])}else if(likes[e.target.value].dtype==="스드메"&&e.target.checked===false &&checkall===false){
        setdelData(delData.filter(delData=>delData.dsidx!==likes[e.target.value].dsidx))
      }
      if(likes[e.target.value].dtype==="플래너"&&e.target.checked===true &&checkall===false){
        console.log(likes[e.target.value].dpidx);
        setdelData([...delData,{
        dtype:"플래너",
        dmid:id,
        dpidx:likes[e.target.value].dpidx,
        dprice:likes[e.target.value].dprice,
        dname:likes[e.target.value].dname,
        dorder:index,
      }])}else if(likes[e.target.value].dtype==="플래너"&&e.target.checked===false &&checkall===false){
        setdelData(delData.filter(delData=>delData.dpidx!==likes[e.target.value].dpidx))
      }
      if(likes[e.target.value].dtype==="허니문"&&e.target.checked===true &&checkall===false){
        console.log(likes[e.target.value].dhidx);
        setdelData([...delData,{
        dtype:"허니문",
        dmid:id,
        dhidx:likes[e.target.value].dhidx,
        dprice:likes[e.target.value].dprice,
        dname:likes[e.target.value].dname,
        dorder:index,
      }])}else if(likes[e.target.value].dtype==="허니문"&&e.target.checked===false &&checkall===false){
        setdelData(delData.filter(delData=>delData.dhidx!==likes[e.target.value].dhidx))
      }
    }


    if (e.target.name==="rperson" || e.target.name==="rdatestart" || e.target.name==="rdateend"){
      tempdelData=delData.slice();
      // console.log(delData.findIndex(d=>d.dorder===index));
      if(tempdelData.length!==0 &&e.target.name==="rperson"){
      tempdelData[delData.findIndex(d=>d.dorder===index)]={...tempdelData[delData.findIndex(d=>d.dorder===index)],[e.target.name]:parseInt(e.target.value)};
      setdelData(tempdelData);
      } else if(tempdelData.length!==0 &&e.target.name!=="rperson"){
        tempdelData[delData.findIndex(d=>d.dorder===index)]={...tempdelData[delData.findIndex(d=>d.dorder===index)],[e.target.name]:e.target.value};
        setdelData(tempdelData);
        }
      console.log(tempdelData);
      console.log(index);
      console.log(checkall)
    }
  }

  const borderChange = (e)=> {
    inputBorder.current.style.border="1px solid lightGray";
    inputBorder.current = e.target;
    inputBorder.current.style.border="1px solid black";
  }
  const personRegExp = /^[0-9]{0,4}$/;
  const dataConfirm= (e) =>{
    if(!personRegExp.test(inputBorder.current.value)){
      window.alert("0명 이상 입력해주세요");
      inputBorder.current.value="";
    }
  }
  console.log(delData);
  return (
    <div style={{ width: '100%' }}>
      <Table
        columns={[
          {
            name: checkall === false ? <input type="checkBox" checked={false} value={-1} onChange={(e)=>onCheckboxChangeHandler(e)}/>:<input type="checkBox" checked={true} value={-1} onChange={(e)=>onCheckboxChangeHandler(e)}/>,
            render: (v, index) => (
              checkall === true ? <input type="checkbox" value={index} onChange={(e)=>onCheckboxChangeHandler(e,index)} checked/> : checkall === false && checkList.indexOf(index) !== -1 ? <input type="checkbox" value={index} onChange={(e)=>onCheckboxChangeHandler(e,index)} checked/>:<input type="checkbox" value={index} onChange={(e)=>onCheckboxChangeHandler(e,index)}/>
            ),
          },
          {
            name: '등록번호',
            render: (v, index) => index + 1,
            style: {
              width: 80,
            },
          },
          {
            name: '타입',
            id: 'dtype',
          },
          {
            name: '상품명',
            id: 'dname',
          },
          {
            name: '예약일 선택',
            render: (v,index) => ( checkall===false ?( likes[index].dtype !== "허니문" && checkList.indexOf(index) === -1 ? <input type="date" name="rdatestart" onChange={(e)=>onCheckboxChangeHandler(e, index)} style={{width:"300px", fontSize:"16px", textAlign:"center", border:"none"}} disabled/> : likes[index].dtype !== "허니문" && checkList.indexOf(index) !== -1 ? <input type="date" name="rdatestart" onChange={(e)=>onCheckboxChangeHandler(e, index)} style={{width:"300px", fontSize:"16px", textAlign:"center", border:"none"}}/> : checkList.indexOf(index) === -1 ? <><input type="date" disabled onChange={(e)=>onCheckboxChangeHandler(e,index)} name="rdatestart" style={{width:"150px",fontSize:"16px", textAlign:"center", border:"none"}}/><span> ~ </span><input type="date" name='rdateend' disabled onChange={(e)=>onCheckboxChangeHandler(e,index)} style={{width:"150px",fontSize:"16px", textAlign:"center", border:"none"}}/></> :  <><input type="date" onChange={(e)=>onCheckboxChangeHandler(e,index)} name="rdatestart" style={{width:"150px",fontSize:"16px", textAlign:"center", border:"none"}}/><span> ~ </span><input type="date" name='rdateend' onChange={(e)=>onCheckboxChangeHandler(e,index)} style={{width:"150px",fontSize:"16px", textAlign:"center", border:"none"}}/></>)
            :( likes[index].dtype !== "허니문" ? <input type="date" name="rdatestart" onChange={(e)=>onCheckboxChangeHandler(e, index)} style={{width:"300px", fontSize:"16px", textAlign:"center", border:"none"}}/> : <><input type="date" onChange={(e)=>onCheckboxChangeHandler(e,index)} name="rdatestart" style={{width:"150px",fontSize:"16px", textAlign:"center", border:"none"}}/><span> ~ </span><input type="date" name='rdateend' onChange={(e)=>onCheckboxChangeHandler(e,index)} style={{width:"150px",fontSize:"16px", textAlign:"center", border:"none"}}/></>)),
            id: 'selectRdate',
          },
          {
            name: '1인 식대',
            render: (v,index) => likes[index].dtype === "웨딩홀"?<div type="text" name="bprice" style={{width:"50px", textAlign:"center"}}>{likes[index].bprice} 만원</div>: null,
            id: 'bprice',
          },
          {
            name: '인원 선택',
            render: (v,index) => ( checkall===false ?( likes[index].dtype === "웨딩홀" && checkList.indexOf(index) === -1 ?<><input type="text" disabled ref={inputBorder} onClick={(e)=>borderChange(e)} onChange={(e)=>{onCheckboxChangeHandler(e,index);dataConfirm(e)}} name="rperson" maxLength="4" style={{width:"50px", border:"1px solid lightGray", textAlign:"center"}}/><label style={{color:"black", marginLeft:"10px"}}>명</label></> : likes[index].dtype === "웨딩홀" && checkList.indexOf(index) !== -1 ?  <><input type="text" ref={inputBorder} onClick={(e)=>borderChange(e)} onChange={(e)=>{onCheckboxChangeHandler(e,index);dataConfirm(e)}} name="rperson" maxLength="4" style={{width:"50px", border:"1px solid lightGray", textAlign:"center"}}/><label style={{color:"black", marginLeft:"10px"}}>명</label></>:null)
            : ( likes[index].dtype === "웨딩홀" ?  <><input type="text" ref={inputBorder} onClick={(e)=>borderChange(e)} onChange={(e)=>{onCheckboxChangeHandler(e,index);dataConfirm(e)}} name="rperson" maxLength="4" style={{width:"50px", border:"1px solid lightGray", textAlign:"center"}}/><label style={{color:"black", marginLeft:"10px"}}>명</label></>:null)),
            id: 'selectPopu',
          },
          {
            name: '가격',
            render: (v,index) => likes[index].dtype === "웨딩홀" && (delData[delData.findIndex(d=>d.dorder===index)]?.rperson ===null || delData[delData.findIndex(d=>d.dorder===index)]?.rperson === undefined || delData[delData.findIndex(d=>d.dorder===index)]?.rperson === "")?<div type="text" name="dprice" style={{width:"100px", textAlign:"right"}}>{likes[index]?.dprice} 만원</div>: likes[index].dtype === "웨딩홀"&&(checkList.indexOf(index) !==-1||checkall)&&(delData[delData.findIndex(d=>d.dorder===index)]?.rperson !==null || delData[delData.findIndex(d=>d.dorder===index)]?.rperson !==undefined || delData[delData.findIndex(d=>d.dorder===index)]?.rperson !== "") ?<div type="text" name="dprice" style={{width:"100px", textAlign:"right"}}>{likes[index].dprice+delData[delData.findIndex(d=>d.dorder===index)].bprice*delData[delData.findIndex(d=>d.dorder===index)].rperson} 만원</div> : <div type="text" name="dprice" style={{width:"100px", textAlign:"right"}}>{likes[index].dprice} 만원</div>,
            id: 'dprice',
          },
        ]}
        dataSource={showData}
      />
      <div style={{float:"right", marginTop:'50px', width:200, display:"flex", justifyContent:"space-around"}}>
        <Button onClick={()=>setDelbtn(true)}>선택삭제</Button>
      <Payment ptext="결제하기" pData={delData} />
      </div>
    </div>
  )
}
```
'찜하기' 버튼을 클릭 해 선택한 상품 백으로 보내줍니다.

## Back_DibController
```java
@RestController
@Log
public class DibController {

    @Autowired
    private DibService  dServ;

    @PostMapping("/ddibInsert")
    public String ddibInsert (@RequestBody List<Dib> dibData){
        log.info("ddibInsert()");
        log.info("띱"+dibData);
        return dServ.ddibInsert(dibData);
    }
}
## Back_DibService
```java
@Service
@Log
public class DibService {
    @Autowired
    private DibRepository dRepo;
    @Autowired
    private WeddingHoleRepository whRepo;
    @Autowired
    private SDMRepository sRepo;
    @Autowired
    private PlannerRepository pRepo;
    @Autowired
    private HoneyMoonRepository hRepo;
    public String ddibInsert(List<Dib> dibData) {
        String res = null;
        try{
            for(Dib dList : dibData){
                dRepo.save(dList);
            }
            res="Success";
        }catch(Exception e){
            e.printStackTrace();
            res="Failed";
        }

        return res;
    }
}
```
프론트에서 보낸 값을 database에 저장해줍니다.<br><br>

- #### 상품 선택 후 화면<br><br>
![image](https://user-images.githubusercontent.com/117874997/215312918-93be6fff-b1b2-44e2-a83d-9591549cf2e6.png)

- #### 선택 상품 찜한 후 화면<br><br>
![image](https://user-images.githubusercontent.com/117874997/215312918-93be6fff-b1b2-44e2-a83d-9591549cf2e6.png)


※ 결제하기
```javascript

const Payment = ({ effect, deps, ptext, width, height, zIndex, wlist, slist, plist, hlist, pData,borderRadius,background,...props }) => {
  const nav = useNavigate();
  useEffect(() => {
    const jquery = document.createElement("script");
    jquery.src = "https://code.jquery.com/jquery-1.12.4.min.js";
    const iamport = document.createElement("script");
    iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
    document.head.appendChild(jquery);
    document.head.appendChild(iamport);
    return () => {
        document.head.removeChild(jquery); document.head.removeChild(iamport);
    }
  }, []);
  const id = sessionStorage.getItem("mid");
  const name = sessionStorage.getItem("mname");
  const phone = sessionStorage.getItem("mphone");
  const [data, setData] = useState({
    pg: 'html5_inicis.INIpayTest', // PG사 (필수항목)
    pay_method: 'card', // 결제수단 (필수항목)
    merchant_uid: `mid_${new Date().getTime()}`, // 결제금액 (필수항목)
    name: '결제 테스트', // 주문명 (필수항목)
    amount: '100', // 금액 (필수항목)
    custom_data: { name: '부가정보', desc: '세부 부가정보' },
    buyer_name: name, // 구매자 이름
    buyer_tel: phone, // 구매자 전화번호 (필수항목)
    buyer_email: null, // 구매자 이메일
    buyer_addr: null,
    buyer_postalcode: null,
  });

  const [reservData,setReservData] = useState([])
    

    useEffect(()=>{
      console.log("피데이터"+pData);
      console.log(pData);
      if(pData===undefined||pData.length===0){
        return;
      }
      if(pData!==undefined&&pData.length!==0){
        let tprice=0;
        for(let i =0; i<pData.length; i++){
          if(pData[i].dtype==="웨딩홀"){
            // for(let i =0; i<pData.length; i++){
              tprice=tprice+pData[i].dprice+pData[i].bprice*pData[i]?.rperson;
            // }
            console.log(pData[i].bprice);
          }else {
              tprice=tprice+pData[i].dprice;
        }
        }
        if(pData.length>1){
          console.log(tprice);
        setData({...data,
          amount:tprice,
          name: pData[0].dname+" 외"+(pData.length-1).toString()+"건",
        })}
        else if(pData.length===1){
          setData({...data,
            amount:tprice,
            name: pData[0].dname,
          })
        }
        console.log(tprice);

      }
        console.log(data.name)
      },[pData]);
  
    useEffect(()=>{
        if(wlist!==undefined){
        setData({...data,
          name:wlist.whname,
          amount:wlist.whprice,
        })}
    },[wlist]);
    
    useEffect(()=>{
      if(slist!==undefined){
      setData({...data,
        name:slist.scomp,
        amount:slist.sprice,
      })}
    },[slist]);

    useEffect(()=>{
      if(plist!==undefined){
      setData({...data,
        name:plist.pname,
        amount:plist.pprice,
      })}
  },[plist]);

    useEffect(()=>{
      if(hlist!==undefined){
      setData({...data,
        name:hlist.hlocation,
        amount:hlist.hcost,
      })}
    },[hlist]);

    let fiData = [];
    const [paybtn, setPayBtn]=useState(false);
    useEffect(()=>{
      if(reservData?.length===0||reservData===undefined||reservData?.length>pData?.length){
        return;
      }

      for(let i=0; i<pData?.length; i++){
        if(pData[i]?.dtype==="웨딩홀"){
            fiData.push({
            rwhidx: pData[i].dwhidx,
            rcost: pData[i].dprice,
            rmid:id,
            rimpuid: reservData[0].rimpuid,
            rtype:"웨딩홀",
            rstatus : "진행예정",
            rdatestart : pData[i].rdatestart,
            rperson : pData[i].rperson
          })}else if(pData[i]?.dtype==="스드메"){
            fiData.push({
            rsidx: pData[i].dsidx,
            rcost:pData[i].dprice,
            rmid:id,
            rimpuid: reservData[0].rimpuid,
            rtype:"스드메",
            rstatus : "진행예정",
            rdatestart : pData[i].rdatestart,
          })}else if(pData[i]?.dtype==="플래너"){
            fiData.push({
            rpidx: pData[i].dpidx,
            rcost:pData[i].dprice,
            rmid:id,
            rimpuid: reservData[0].rimpuid,
            rtype:"플래너",
            rstatus : "진행예정",
            rdatestart : pData[i].rdatestart,
          })}else if(pData[i]?.dtype==="허니문"){
            fiData.push({
            rhidx: pData[i].dhidx,
            rcost:pData[i].dprice,
            rmid:id,
            rimpuid: reservData[0].rimpuid,
            rtype:"허니문",
            rstatus : "진행예정",
            rdatestart : pData[i].rdatestart,
            rdateend : pData[i].rdateend,
          })}
      }
      console.log(reservData);
      if(fiData.length===0){
      // setReservData(fiData);
        fiData.push(reservData);
        fiData=fiData[0];
      }

      console.log(fiData);
      if(fiData.length!==0&&paybtn===true){
      axios.post("/insertReservation" , fiData)
      .then((res) => {console.log(res);
          fiData=null;
          setReservData([]);
          setPayBtn(false);
          nav(0);
        }
      ).catch((err)=>{
        fiData=[];
        setReservData([]);
        setPayBtn(false);
      });
    }
    },[paybtn])
  
const onClickPayment = () => {
  console.log(data)
  if(id===undefined || id===null || id===""){
    window.alert("로그인 후 이용 가능한 서비스입니다.");
    return;
  }
  if(pData?.length===0){
    window.alert("찜목록을 선택해주세요!")
    return;
  }
  console.log(pData)
  for(let i = 0; i<pData?.length; i++){
    switch(pData[i].dtype){
      case "웨딩홀":
        if(pData[i].rdatestart===undefined){
          window.alert("웨딩홀 예약일을 선택해주세요!");
          return;
        }else if(pData[i].rperson===undefined){
          window.alert("인원을 입력해주세요!");
          return;
        };
        break;
      case "스드메" :
        if(pData[i].rdatestart===undefined){
          window.alert("스드메 예약일을 선택해주세요!");
          return;
        };
        break;
      case "플래너" :
        if(pData[i].rdatestart===undefined){
          window.alert("플래너 예약일을 선택해주세요!");
          return;
        };
        break;
      case "허니문" :
        if(pData[i].rdatestart===undefined){
          window.alert("출발날짜를 선택해주세요!");
          return;
        } else if(pData[i].rdateend===undefined){
          window.alert("종료날짜를 선택해주세요!");
          return;
        }
        break;
    }
  }

    // imp51345423
    console.log(data);
  const { IMP } = window;
  IMP.init("imp18221811"); // 결제 데이터 정의
  IMP.request_pay(data, callback);  //data에는 결제를 위한 정보들을 담은 객체를 전달해야 합니다. 예를 들어, buyer_name(주문자명), amoun(결제 금액), pg(사용할 PG사), pay_method(결제수단) 등이 존재합니다.
  console.log(data);
}                                   //callback 정보를 이용해 결제창을 호출하고, 유저가 입력한 카드 정보들이 카드사 서버로 전달되어 인증을 거치고, 인증이 성공하면 인증키를 PG에 전달하는 등 복잡한 과정을 거친 후, 콜백 함수가 호출됩니다


  const callback = (response) => {
    const {success, error_msg, imp_uid, merchant_uid, pay_method, paid_amount, status} = response;
    const tokenData={
      "imp_uid" : imp_uid
    }

    if (success) {
      console.log(imp_uid);
      if(wlist!==undefined){
        setReservData([...reservData,{
          rwhidx: wlist.whidx,
          rcost:paid_amount,
          rmid:id,
          rimpuid: imp_uid,
          rtype:"웨딩홀",
          rstatus : "진행예정",
        }])
      }else if(slist!==undefined){
        setReservData([...reservData,{
          rsidx: slist.sidx,
          rcost:paid_amount,
          rmid:id,
          rimpuid: imp_uid,
          rtype:"스드메",
          rstatus : "진행예정",
        }])
      }else if(plist!==undefined){
        setReservData([...reservData,{
          rpidx: plist.pidx,
          rcost:paid_amount,
          rmid:id,
          rimpuid: imp_uid,
          rtype:"플래너",
          rstatus : "진행예정",
        }])
      }else if(hlist!==undefined){
        setReservData([...reservData,{
          rhidx: hlist.hidx,
          rcost:paid_amount,
          rmid:id,
          rimpuid: imp_uid,
          rtype:"허니문",
          rstatus : "진행예정",
        }])
      }

      if(pData?.length!==0&&pData!==undefined){
        // for(let i=0; i<pData.length; i++){
          if(pData[0]?.dtype==="웨딩홀"){
              setReservData([...reservData,{
                rhidx: pData[0].dwhidx,
                rcost: pData[0].dprice,
                rmid:id,
                rimpuid: imp_uid,
                rtype:"웨딩홀",
                rstatus : "진행예정",
              }])}else if(pData[0]?.dtype==="스드메"){
              setReservData([...reservData,{
                rhidx: pData[0].dsidx,
                rcost:pData[0].dprice,
                rmid:id,
                rimpuid: imp_uid,
                rtype:"스드메",
                rstatus : "진행예정",
              }])}else if(pData[0]?.dtype==="플래너"){
              setReservData([...reservData,{
                rhidx: pData[0].dpidx,
                rcost:pData[0].dprice,
                rmid:id,
                rimpuid: imp_uid,
                rtype:"플래너",
                rstatus : "진행예정",
              }])}else if(pData[0]?.dtype==="허니문"){
              setReservData([...reservData,{
                rhidx: pData[0].dhidx,
                rcost:pData[0].dhprice,
                rmid:id,
                rimpuid: imp_uid,
                rtype:"허니문",
                rstatus : "진행예정",
              }])}
          // }
      }
      
      window.alert('결제 성공');
      setPayBtn(true);
    } else {
      window.alert(`결제 실패 : ${error_msg}`);
    }
  }
  
  return (
    <>
      <span onClick={onClickPayment}><Button style={{width:`${width}`, height:`${height}`, zIndex:`${zIndex}`, background:`${background}`, borderRadius:`${borderRadius}`}}>{ptext}</Button></span>
    </>
   );
}
  
  export default Payment;
```
'예약하기' 버튼을 클릭 하면 결제 모듈이 나타나고 실제 결제가 진행 됩니다. 해당 상품의 이름과 가격이 모듈에 나타나도록 설정 했습니다.

## Back_PaymentController
```java
@CrossOrigin(origins ="http://localhost:3000")
@RestController
@Log
public class PaymentController {
        //    @Value("${pgmodule.imp_uid}")
    @Value("${pgmodule.imp_key}")
    public String imp_key;
    @Value("${pgmodule.imp_secret}")
    public String imp_secret;

    @Autowired
    PaymentService pServ;
        @PostMapping("/insertReservation")
    public String insertReservation(@RequestBody List<Reservations> reservations){
        log.info("insertReservation()");
        log.info(""+reservations);
        String msg=pServ.insertReservation(reservations);
        return msg;
    }

    @GetMapping("/myReservation")
    public Map myReservation(@RequestParam String mid){
        log.info("myReservation()");
        log.info(mid);
        return pServ.myReservation(mid);
    }

    @PostMapping("/TokenRequest")
    public String TokenRequest(@RequestBody Map refundData){
        log.info("이게 뭐게???"+refundData.get("imp_uid"));
        log.info("이게 뭐게???"+imp_secret);
        log.info("이게 뭐게???"+imp_key);
        String imp_uid = refundData.get("imp_uid").toString();
        log.info(imp_uid);
        String access=pServ.TokenRequest(imp_key, imp_secret);
        log.info("토큰"+access);
//        pServ.getBuyerInfo(imp_uid, access);
        String res=refundCall(imp_uid, access);
        pServ.getBuyerInfo(imp_uid, access);

        return res;
    }
//    tokenRequest end

    @PostMapping("/refundCall")
    public String refundCall(String imp_uid, String access){
        log.info("이얻앙ㅁㅁㄴ엄ㄴ안ㅁ안언ㅁ엄ㄴㅇ"+access);
        String res = pServ.refundCall(imp_uid, access);
        return res;
    }

    @PostMapping("delReserv")
    public String delReserv(@RequestBody Map delReserv){
        log.info("delReserv()");
        log.info("das"+delReserv.toString());
        String ridx= delReserv.get("ridx").toString();
        log.info(""+ridx);
        String res=pServ.delReserv(Integer.parseInt(ridx));
        return res;
    }

}
```
## Back_PaymentService
```java
        @Service
@Log
public class PaymentService {
    @Autowired
    PaymentRepository pRepo;
    @Autowired
    ReservationRepository rRepo;
    @Autowired
    DibRepository dRepo;
    @Autowired
    WeddingHoleRepository wRepo;
    @Autowired
    SDMRepository sRepo;
    @Autowired
    PlannerRepository planRepo;
    @Autowired
    HoneyMoonRepository hRepo;

    @Transactional
    public String inputData(Refund refund){
        log.info("inputData()");
        String res = null;
        log.info(refund.getMerchant_uid());
        try {
            pRepo.save(refund);
            res = "Ok";
        }catch (Exception e){
            e.printStackTrace();
            res = "Fail";
        }
        log.info(res);
        return res;
    }

    @PostMapping("/getBuyerInfo")
    public void getBuyerInfo(String imp_uid, String access){
        RestTemplate restTemplate= new RestTemplate();
        log.info("이얻앙ㅁㅁㄴ엄ㄴ안ㅁ안언ㅁ엄ㄴㅇ"+access);
        HttpHeaders headers= new HttpHeaders();
    //        headers.add(HttpHeaders.ACCESS_CONTROL_ALLOW_ORIGIN, "https://api.iamport.kr/");
    //        headers.ACCESS_CONTROL_ALLOW_ORIGIN("sdfdd", headers.add();)
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.add("Authorization", "Bearer "+access);

        Map<String, Object> body=new HashMap<>();
        body.put("imp_uid", imp_uid);
    //        body.put("imp_key", imp_key);
    //        body.put("imp_secret", imp_secret);
        Gson var = new Gson();
        String json= var.toJson(body);
        //
        try{
            HttpEntity<String> entity=new HttpEntity<>(json, headers);
            log.info("이게 뭐게???"+entity);
            log.info("이게 뭐게???"+entity.getBody());
            log.info("이게 뭐게???"+entity.getHeaders());
            log.info("이게 뭐게???"+entity.getClass());
            log.info("이게 뭐게???"+ JSONObject.class);
            ResponseEntity<String> buyerInfo=restTemplate.postForEntity("https://api.iamport.kr/payments/"+imp_uid, entity, String.class);

            System.out.println(buyerInfo+"fullBuyerInfo");
            System.out.println(buyerInfo.getBody()+"fullbuyerInfo");
    //            System.out.println(token.getStatusCode()+"getToken");
    //            System.out.println(token.getStatusCodeValue()+"getTokenValue");
    //            System.out.println(token.getBody()+"tokenBody");
    //            System.out.println(token.getBody().get("response")+"tokenBody");
        }catch (Exception e){
           e.printStackTrace();
        }
    }

    public String insertReservation(List<Reservations> reservations) {
        String msg=null;
        log.info("이게 정보다아아"+reservations.toString());
        try {
            for(Reservations rList : reservations) {
                rRepo.save(rList);
                switch (rList.getRtype()){
                    case "웨딩홀":
                        dRepo.deleteByDwhidxmid(rList.getRwhidx(), rList.getRmid());
                        break;
                    case "스드메":
                        dRepo.deleteByDsidxmid(rList.getRsidx(), rList.getRmid());
                        break;
                    case "플래너":
                        dRepo.deleteByDpidxmid(rList.getRpidx(), rList.getRmid());
                        break;
                    case "허니문":
                        dRepo.deleteByDhidxmid(rList.getRhidx(), rList.getRmid());
                        break;
                }
            }
            msg="성공";
        }
        catch(Exception e){
            e.printStackTrace();
            msg="실패";
        }
        return msg;
    }


    public Map myReservation(String mid) {
        List<Reservations> rList = new ArrayList<>();
        List<WeddingHall> wList= new ArrayList<>();
        List<SDM> sList= new ArrayList<>();
        List<Planner> pList= new ArrayList<>();
        List<HoneyMoon> hList= new ArrayList<>();
        Map tMap = new HashMap();
        try{
            rList = rRepo.findByRmid(mid);
            for(Reservations rno : rList){
                switch (rno.getRtype()){
                    case "웨딩홀":
                        wList.add(wRepo.findByWhidx(rno.getRwhidx()));
                        break;
                    case "스드메":
                        sList.add(sRepo.findBySidx(rno.getRsidx()));
                        break;
                    case "플래너":
                        pList.add(planRepo.findByPidx(rno.getRpidx()));
                        break;
                    case "허니문":
                        hList.add(hRepo.findByHidx(rno.getRhidx()));
                        break;
                }
            }
        log.info("돌리기전"+pList);
            for(Reservations rno : rList){
                switch(rno.getRtype()){
                    case "웨딩홀":
                        for(WeddingHall wno : wList){
                            if(wno.getWhidx()==rno.getRwhidx()){
                                wno.setWhrList(rno);
                            }
                        }
                        break;
                    case "스드메":
                        for(SDM sno : sList){
                            if(sno.getSidx()==rno.getRsidx()){
                                sno.setSrList(rno);
                            }
                        }
                        break;
                    case "플래너":
                        for(Planner pno : pList){
                            if(pno.getPidx()==rno.getRpidx()){
                                pno.setPrList(rno);
                            }
                        }
                        break;
                    case "허니문":
                        for(HoneyMoon hno : hList){
                            if(hno.getHidx()==rno.getRhidx()){
                                hno.setHrList(rno);
                            }
                        }
                        break;
                }
            }
                log.info("돌린후"+pList);
            tMap.put("rw", wList);
            tMap.put("rs", sList);
            tMap.put("rp", pList);
            tMap.put("rh", hList);


        }catch(Exception e){
            e.printStackTrace();
        }

        return tMap;
    }

    public String TokenRequest(String imp_key, String imp_secret) {
        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
//        headers.add(HttpHeaders.ACCESS_CONTROL_ALLOW_ORIGIN, "https://api.iamport.kr/");
//        headers.ACCESS_CONTROL_ALLOW_ORIGIN("sdfdd", headers.add("access","*",));
        headers.setContentType(MediaType.APPLICATION_JSON);

        Map<String, Object> body = new HashMap<>();
//        body.put("imp_uid", imp_uid);
        body.put("imp_key", imp_key);
        body.put("imp_secret", imp_secret);
        Gson var = new Gson();
        String json = var.toJson(body);
        String access = null;
        try {
            HttpEntity<String> entity = new HttpEntity<>(json, headers);
            log.info("이게 뭐게???" + entity);
            log.info("이게 뭐게???" + entity.getBody());
            log.info("이게 뭐게???" + entity.getHeaders());
            log.info("이게 뭐게???" + entity.getClass());
            log.info("이게 뭐게???" + JSONObject.class);
            ResponseEntity<String> token = restTemplate.postForEntity("https://api.iamport.kr/users/getToken", entity, String.class);

            System.out.println(token + "fullToken");
            System.out.println(token.getBody() + "fullToken");
//            System.out.println(token.getStatusCode()+"getToken");
////            System.out.println(token.getStatusCodeValue()+"getTokenValue");
////            System.out.println(token.getBody()+"tokenBody");
//            System.out.println(token.getBody().get("response")+"tokenBody");
            access = token.getBody().substring(53, 93);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return access;
    }


    public String refundCall(String imp_uid, String access) {
        RestTemplate restTemplate= new RestTemplate();
        String res = "Failed";
        HttpHeaders headers= new HttpHeaders();
//        headers.add(HttpHeaders.ACCESS_CONTROL_ALLOW_ORIGIN, "https://api.iamport.kr/");
//        headers.ACCESS_CONTROL_ALLOW_ORIGIN("sdfdd", headers.add();)
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.add("Authorization", "Bearer "+access);

        Map<String, Object> body=new HashMap<>();
        body.put("imp_uid", imp_uid);
//        body.put("imp_key", imp_key);
//        body.put("imp_secret", imp_secret);
        Gson var = new Gson();
        String json= var.toJson(body);
        try{
            HttpEntity<String> entity=new HttpEntity<>(json, headers);
            log.info("이게 뭐게???"+entity);
            log.info("이게 뭐게???"+entity.getBody());
            log.info("이게 뭐게???"+entity.getHeaders());
            log.info("이게 뭐게???"+entity.getClass());
            log.info("이게 뭐게???"+JSONObject.class);
            ResponseEntity<String> buyerInfo=restTemplate.postForEntity("https://api.iamport.kr/payments/cancel", entity, String.class);

            System.out.println("환불 성공");
            System.out.println(buyerInfo+"fullBuyerInfo");
            System.out.println(buyerInfo.getBody()+"fullbuyerInfo");
//            System.out.println(token.getStatusCode()+"getToken");
//            System.out.println(token.getStatusCodeValue()+"getTokenValue");
//            System.out.println(token.getBody()+"tokenBody");
//            System.out.println(token.getBody().get("response")+"tokenBody");
            res="Success";
        }catch (Exception e){
            e.printStackTrace();
        }
        return res;
    }

    public String delReserv(int ridx) {
        String res="Failed";
        Reservations rData = new Reservations();
        try{
            rData=rRepo.findByRidx(ridx);
            rData.setRstatus("환불완료");
            rRepo.save(rData);
            res="Success";
        }catch (Exception e){
            e.printStackTrace();
        }
        return res;
    }

}
```
프론트에서 보낸 값으로 결제가 성공했다면 데이터베이스에 해당 결제 상품을 저장해 줍니다.<br><br>
- #### 예약 버튼 클릭 후 화면<br><br>
![image](https://user-images.githubusercontent.com/117874997/215312918-93be6fff-b1b2-44e2-a83d-9591549cf2e6.png)


## 메인 페이지 팝업창

※ EventModal.jsx
```javascript

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const ModalBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

const ModalContainer = styled.div`
  z-index: 1001;
`;

const ModalContent = styled.div`
  width: 30vw;
  height: 35vw;
  margin: 0 100%;
  margin-bottom: 10px;
  border-radius: 10px;
  background-image: url(${(props)=>(props.eData ? "upload/"+props.eData : "upload/"+props.eData)});
  background-size: 30vw 35vw;
  background-repeat: no-repeat;
  background-position: center center;
`;

const ModalCloseWrapper = styled.div`
    width:100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 100%;
  p, label {
    cursor: pointer;
    color: white;
  },
  input {
    margin-right:5px
  }
`;

const EventModal = ({closeModal, closeModalUntilExpires, eData}) => {
  console.log(eData[0]);
  return (
    <Container>
      <ModalBackground />
      <ModalContainer>
        <ModalContent eData={eData[0]?.eimg}>
        </ModalContent>
        <ModalCloseWrapper>
          <label><input type={"checkBox"} onClick={closeModalUntilExpires}/>오늘 하루 더 이상 보지 않기</label>
          <p onClick={closeModal}>닫기 x</p>
        </ModalCloseWrapper>
      </ModalContainer>
    </Container>
  );
}

export default EventModal;
```
※ EventModalControll.jsx
```javascript

export default () => {
  const [eData, setEdata]= useState([]);
  useEffect(()=>{
    axios.get("/eventGet").then((res)=>{console.log(res); setEdata(res.data)}).catch(err=>console.log(err));
  },[])
  console.log(eData);
  const [openModal, setOpenModal] = useState(true);
  const [hasCookie, setHasCookie] = useState(true);
  const [appCookies, setAppCookies] = useCookies(); 

  const getExpiredDate = (days) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date;
  };

  const closeModalUntilExpires = () => {
    if (!appCookies) return;

    const expires = getExpiredDate(1);
    setAppCookies("MODAL_EXPIRES", true, { path: "/", expires });

    setOpenModal(false);
  };

  useEffect(() => {
    if (appCookies["MODAL_EXPIRES"]) return;
    console.log(appCookies["MODAL_EXPIRES"]);
    setHasCookie(false);
  }, []);
  

  return (
    <div>
      {openModal && !hasCookie && <EventModal closeModal={() => setOpenModal(false)} closeModalUntilExpires={closeModalUntilExpires} eData={eData} />}
    </div>
  );
}
```

- #### 메인 페이지 화면<br>
페이지에 들어가자마자 팝업창을 띄워줍니다. '오늘 하루 보지 않기' 버튼을 클릭했을때 쿠키를 사용해서 더 이상 팝업창이 뜨지 않도록 설정해주었습니다.

## ServiceCenterWrite.jsx 컴포넌트

※ 상담문의 글쓰기 (비회원은 글쓰기X)

```javascript
    const nav = useNavigate();
    const id = sessionStorage.getItem("mid");
  
    useEffect(() => {
        // const mid = sessionStorage.getItem("mid");

        if(id === null){
            alert("로그인 후 가능한 기능입니다");
            nav("/");
            // return;
        }
    })

    const [board, setBoard] = useState({
        btitle : "",
        bstr : "",
        bpwd : "",
        btype : "serviceCenter",
        // member : {mid : id}
        bmid : id,
    })
  
    const onch = useCallback(e => {
        const formObj = {
          ...board,
          [e.target.name] : e.target.value,
        };
        setBoard(formObj);
        console.log(formObj);
    }, [board]);
  
    const onWrite = (e) => {
        e.preventDefault();

        axios
            .post("/serviceCenterWrite" , board)
            .then((res) => {
                console.log(res.data);
                if(res.data === "성공"){
                    alert("게시글이 작성되었습니다.");
                    nav(-1);
                }
            })
            .catch((err) => console.log(err));
    }
    return (
        <>
        <Header/>
        <div data-aos="fade-up">
        <Section style={{width : "55%"}}>
            <div style={Main}>
            <span style={{display : "block", textAlign : "center", fontSize : "50px", padding : "0"}}>문의하기</span>
            <form style={Content} onSubmit={onWrite}>
                    <input style={Input} onChange={onch} name="btitle" placeholder="제목을 입력하세요." autoFocus required />
                    <textarea style={Textarea} onChange={onch} name="bstr" onScroll placeholder="게시글을 작성하세요." required/>
                    <input style={Input} onChange={onch} name="bpwd" placeholder="게시글 비밀번호를 입력하세요." required />
                <div style={Buttons}>
                    <Button type="submit" wsize="s-30" style={{width : "150px" , marginRight:"10px", backgroundColor : "#C9A3B6"}}>작성하기</Button>
                    <Button type="button" wsize="s-10" color="gray" onClick={() => nav(-1)} 
                        style={{width: "150px", backgroundColor : "#D3D3D3", fontSize : "18px"}}>취소하기</Button>
                </div>
            </form>    
            </div>
        </Section>
        </div>
        <Footer />
        </>
    );
}
```
상담문의게시판에서 글쓰기를 누르면 이 컴포넌트로 이동합니다. 문의게시판 특성 상 1:1문의를 원칙으로 해 게시글 비밀번호까지 써야 작성이 가능합니다.

## Back_BoardController
```java
    @PostMapping("serviceCenterWrite")
    public String serviceCenterWrite(@RequestBody Board board){
        log.info("serviceCenterWrite()");
        return bServ.serviceCenterWrite(board);
    }
```
## Back_BoardService
```java
    @Transactional
    public String serviceCenterWrite(Board board) {
        log.info("serviceCenterWrite()");
        String msg = "";

        try{
            bRepo.save(board);
            msg = "성공";
        }catch (Exception e){
            e.printStackTrace();
            msg = "실패";
        }
        return msg;
    }
```
작성한 내용을 데이터베이스에 save()함수를 이용해 insert 해줍니다.<br><br>
#### 글쓰기 화면<br><br>
![image](https://user-images.githubusercontent.com/117874997/215292380-30bab833-913b-45cc-8107-675322ae2ab0.png)

## ServiceCenterDetail.jsx 컴포넌트

※ 게시글 상세보기 ( 게시글 삭제(관리자만), 게시글 댓글 작성(관리자만), 게시글 댓글 삭제(관리자만) )

```javascript

const df = (date) => moment(date).format("YYYY-MM-DD HH:mm");
const df2 = (date) => moment(date).format("YYYY-MM-DD");

const ServiceCenterDetail = () => {
   
    const nav = useNavigate();
    const [board, setBoard] = useState({});

    const grade = sessionStorage.getItem("grade");
    const bn = localStorage.getItem("bno");

    const [comList, setComList] = useState({});

    useEffect(() => {
        const mid = sessionStorage.getItem("mid");
        console.log(comList);

        if(mid === null){
            alert("로그인 후 가능한 기능입니다");
            nav("/");
            return;
        }

        // console.log(bn); //게시글번호

        axios
        .get("/ServiceCenterDetail", {params: {bno:bn, type:"serviceCenter"} })
        .then((res) => {
            // console.log(res);
            // console.log(res.data);
            setBoard(res.data);
        })
        .catch((err) => console.log(err));

        axios
        .get("ScommentList", {params : {mentbno:bn}})
        .then((res) => {
            // console.log(res.data);
            setComList(res.data);
            
        })
        .catch((err) => console.log(err));

    }, []);

    const [comment, setComment] = useState({
        mentstr : "",
        mentmid : grade,
        mentbno : bn,
    });

    const {mentstr, mentmid, mentbno} = comment;

    const onch = (e) => {
        const Obj = {
            ...comment,
            [e.target.name] : e.target.value,
        }
        setComment(Obj);
    };

    const com = () => {
        // console.log(comment);

        if(comList == ""){
            axios
            .post("Swritecomment" , comment)
            .then((res) => {
                console.log(res.data);

                const Obj = {
                    mentstr : "",
                    mentmid : grade,
                    mentbno : bn,            
                }
                setComment(Obj);
            })
            .catch((err) => console.log(err));
        }else{
            alert("댓글은 최대 1개만 가능합니다.");
                const Obj = {
                    mentstr : "",
                    mentmid : grade,
                    mentbno : bn,            
                }
                setComment(Obj);
        }
        
    }

    const deleteComment = () => {
        // e.preventDefault();

        let confirm = window.confirm('삭제하시겠습니까?');
        
        if(confirm === true){
            console.log(comList);

            axios
                .post("deleteComment", comList)
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => console.log(err));
        }
    }

    const SboardDel = () => {
        let confirm = window.confirm("이 게시글을 삭제하시겠습니까?");

        if(confirm === true){

            if(comList == ""){
                axios
                .post("SboardDel", board)
                .then((res) => {
                    console.log(res.data);
                    if(res.data == "게시글 삭제 성공"){
                        alert("게시글이 삭제되었습니다.");
                        nav("/ServiceCenter");
                    }
                })
                .catch((err) => console.log(err));

            }else {
                axios
                .post("SboardDel", board)
                .then((res) => {
                    console.log(res.data);
                    if(res.data == "게시글 삭제 성공"){
                        alert("게시글이 삭제되었습니다.");
                        nav("/ServiceCenter");
                    }
                })
                .catch((err) => console.log(err));

                axios
                .post("deleteComment", comList)
                .then((res) => {
                    console.log(res.data);
                })
                .catch((err) => console.log(err));

            }
        }
    }

    return (
        <div>
            <Header />
            <EstimateBanner />
            <Section>
            <div className="SMain">
                <form className="SContent">
                    <div style={{marginTop:"-30px", marginBottom:"25px"}}>
                        <input style={{width:"1000px", height:"45px"}} readOnly
                        className="SInput" value={board.btitle}/>
                        <div className="Sinfo">
                            <span>NO.&nbsp;{board.bno}</span>
                            <span style={{paddingLeft : "110px"}}>작성자 &nbsp;: &nbsp;{board.bmid}</span>
                            <span>작성일 &nbsp;: &nbsp;{df(board.bdate)}</span>
                        </div>
                        <textarea style={{width: "1000px", height:"500px"}} onScroll readOnly
                        className="STextarea" placeholder="내용" value={board.bstr}/>
                    </div>
                    {grade === "admin" ? (
                        <div>
                            <Button type="button" onClick={()=>nav("/ServiceCenter")} style={{width:"150px", height:"50px", marginLeft:"400px", backgroundColor : "#C9A3B6"}}>목록</Button>
                            <Button type="button" onClick={SboardDel} style={{width:"150px", height:"50px", marginLeft:"300px"}}>게시글 삭제</Button>              
                        </div>
                    ) : (<Button type="button" onClick={()=>nav("/ServiceCenter")} style={{width:"150px", height:"50px", backgroundColor : "#C9A3B6"}}>목록</Button>)}
                </form>
                <form className="SContent">
                    <div style={{marginTop:"20px", display:"flex"}}>
                        {grade === "admin" ? (
                            <>
                                <input className="Sinputdiv" name="mentstr" value={mentstr} onChange={onch} />
                                <Button style={{width:"150px", height:"55px", backgroundColor : "#C9A3B6"}} onClick={com}>작성하기</Button>
                            </>
                        ) : (
                            <>
                                <input className="Sinputdiv" name="mentstr" readOnly placeholder="관리자만 쓸 수 있는 댓글입니다."/>
                                <Button style={{width:"150px", height:"55px",backgroundColor : "#C9A3B6"}} onClick={(e) => {e.preventDefault(); alert("관리자만 쓸 수 있는 댓글입니다.")}}>작성하기</Button>
                            </>
                        )}
                    </div>
                    {comList !== "" ? (
                    <div className="Sdivdiv">
                        <div className="Sdivbtn">
                            <div>
                                <span>관리자</span>
                            </div>
                            <div>
                                <span style={{marginRight:"15px"}}>{df2(comList.mentdate)}</span>
                                {grade === "admin" ? (<button style={{border:"none", background:"none", fontSize:"17px", color:"red", cursor:"pointer"}} onClick={deleteComment}>삭제하기</button>) : (null)}
                            </div>
                        </div>
                        <input className="Sinputre" value={comList.mentstr} />
                    </div>
                    ) : (
                    <div className="Sdivdiv">
                        <input className="Sinputre" style={{textAlign:"center"}} placeholder="댓글이 존재하지 않습니다." readOnly />
                    </div>
                    )}
                </form>
            </div>
            </Section>
            <Footer />
        </div>
    );
}
export default ServiceCenterDetail;
```
게시글 전체보기 화면에서 글 제목을 클릭했을 때 이동되는 상세페이지 컴포넌트입니다. 클릭한 글의 번호를 localStorage에 저장 후 해당하는 글의 상세페이지로 이동합니다. 클릭 시에 sessionStorage에서 grade값을 가져와 관리자인 경우에는 상세페이지 이동, 일반회원일 때는 글의 비밀번호를 작성해 일치할때만 이동하게 합니다. 1:1상담 게시판이기 때문에 댓글은 관리자만 달 수 있고 관리자일 경우에만 회원 게시글 삭제와 관리자 댓글을 삭제할 수 있게 했습니다.

- #### 해당 게시글 상세정보 가져오기
## Back_BoardController 
```java
    @GetMapping("ServiceCenterDetail")
    public Board ServiceCenterDetail(@RequestParam int bno, String type){
        log.info("ServiceCenterDetail()");
        return bServ.ServiceCenterDetail(bno, type);
    }
```
## Back_BoardService
```java
    public Board ServiceCenterDetail(int bno, String type) {
        log.info("ServiceCenterDetail()");
        Board board = null;

        try{
            board = bRepo.findByBnoAndBtype(bno,type);
            log.info("board 값 : " + board);

        }catch (Exception e){
            e.printStackTrace();
            board = null;
        }
        return board;
    }
```

- #### 해당 게시글 댓글 달기(관리자만)
## Back_BoardController 
```java
    @PostMapping("Swritecomment")
    public String Swritecomment(@RequestBody Comment comment){
        log.info("Swritecomment()");
        return bServ.Swritecomment(comment);
    }
```
## Back_BoardService
```java
    public String Swritecomment(Comment comment) {
        log.info("Swritecomment()");
        String msg = "";

        try {
            cRepo.save(comment);
            msg = "성공";
        }catch (Exception e){
            e.printStackTrace();
            msg = "실패";
        }
        return msg;
    }
```
- #### 해당 게시글 댓글 출력
## Back_BoardController 
```java
    @GetMapping("ScommentList")
    public Comment ScommentList(@RequestParam int mentbno){
        log.info("ScommentList()");
        return bServ.ScommentList(mentbno);
    }
```
## Back_BoardService
```java
    public Comment ScommentList(int mentbno) {
        log.info("ScommentList()");
        Comment comment = null;

        try{
            comment = cRepo.findByMentbno(mentbno);

        }catch (Exception e){
            e.printStackTrace();
        }

        return comment;
    }
```
- #### 해당 게시글 댓글 삭제(관리자만)
## Back_BoardController 
```java
    @PostMapping("deleteComment")
    public String deleteComment(@RequestBody Comment comment){
        log.info("deleteComment()");
        return bServ.deleteComment(comment);
    }
```
## Back_BoardService
```java
    public String deleteComment(Comment comment) {
        log.info("deleteComment()");
        String msg = "";

        try {
            cRepo.delete(comment);
            msg = "성공";
        }catch (Exception e){
            e.printStackTrace();
            msg = "실패";
        }

        return msg;
    }
```

#### 회원이 본인 글 확인할 때<br><br>
![image](https://user-images.githubusercontent.com/117874997/215292806-d22fa74f-871a-4cc9-8768-c35f1e763052.png)

#### 관리자가 회원 글 확인할 때<br><br>
![image](https://user-images.githubusercontent.com/117874997/215292887-60fa539a-a17b-4a2b-a565-99c30033d526.png)

## WedNews.jsx 컴포넌트

※ 웨딩 뉴스 ( 글쓰기와 상세보기는 위의 상담게시판과 많이 겹쳐 코드를 제외했습니다 )
```javascript

const df = (date) => moment(date).format("YYYY-MM-DD HH:mm");

const WedNews = () => {
    const nav = useNavigate();
    let pnum = sessionStorage.getItem("pageNum");
    const grade = sessionStorage.getItem("grade");

    const [bitem, setBitem] = useState({});

    const [flist, setFlist] = useState([
        {
          image: "",
        },
      ]);
    

    const { bdate, bfList, bmid, bno, bstr, btitle, btype } = bitem;

    const [page, setPage] = useState({
      totalPage: 0,
      pageNum: 1,
    });
      
    //게시글 목록을 서버로부터 가져오는 함수
    const getList = (pnum) => {

        axios
        .get("/newsList", { params: { pageNum: pnum, type: "News" } })
        .then((res) => {
            console.log(res.data);
            const { bList, totalPage, pageNum } = res.data;
            setPage({ totalPage: totalPage, pageNum: pageNum });
            setBitem(bList);
            sessionStorage.setItem("pageNum", pageNum);
        })
        .catch((err) => console.log(err));

        // console.log(bitem);
        axios
        .get("/newsListImg", { params : { type : "News" } })
        .then((res) => {
            console.log(res.data);

            let prevFid = -1;

            if (res.data.length > 0) {
                let newFileList = [];
                for (let i = 0; i < res.data.length; i++) {
                    console.log(res.data[i]);
                    if (res.data[i].fid === prevFid) continue;
                    const newFile = {
                        image: "upload/" + res.data[i].fsysname,
                    };
                    newFileList.push(newFile);
                    prevFid = res.data[i].fid;
                }
                // console.log(newFileList);
                setFlist(newFileList);
            }
        })
        .catch((err) => console.log(err));
    };

    const getBoard = useCallback((bno) => {
        //보여질 게시글 번호를 localStorage에 저장(글번호 유지를 위해)
            localStorage.setItem("bno", bno);
            nav("/WedNewsDetail");
    }, []);

    //main 페이지가 화면에 보일 때 서버로부터 게시글 목록을 가져온다.
    useEffect(() => {
        // pnum !== null ? getList(pnum) : getList(1);
        getList(1);
        } ,[]);

    //출력할 게시글 목록 작성
    let list = null;
    if (bitem.length === 0) {
        list = (<div>뉴스가 존재하지 않습니다.</div>);
    } else {
        list = Object.values(bitem).map((item) => (
            <>
                <div key={item.bno} style={{height:"180px",overflow:"hidden",}}>
                    <h1 style={{cursor:"pointer"}} onClick={() => getBoard(item.bno)}>{item.btitle}</h1>
                    <div style={{height:"90px",overflow:"hidden",marginTop:"5px",marginBottom:"5px",cursor:"pointer"}} onClick={() => getBoard(item.bno)}>{item.bstr}</div>
                    <span>🐥 {item.bmid} 기자  ㅣ {df(item.bdate)}</span>
                </div>
                <hr/>
            </>
    ));
    }

    const viewFlist = flist.map((v, i) => {
        console.log(v);
        return (
            <>
                <div key={i} style={{height:"180px",marginTop:"3px", marginBottom:"-3px"}}>
                {v.image && <img src={v.image} style={{width:"240px",height:"170px",cursor:"pointer"}} alt="preview-img" />}
                </div>
                <hr/>
            </>
        );
      });
    
    const write = (e) => {
        e.preventDefault();
        nav("/WedNewsWrite");
    }

    return (
            <div data-aos="fade-up">
                <Section title="웨딩뉴스" style={{width:"1100px", height : "1880px", marginBottom:"-60px"}}>
                    <div style={dv} >
                        {grade === "admin" ? (<Button style={writeBtn} onClick={write}>뉴스 쓰기</Button>) : (null)}
                    </div>
                    <div style={{display:"flex", alignItems:"center", marginTop:"-500px", height:"1200px"}}>
                        <div style={{marginRight:"10px", marginTop:"70px", height:"250px"}}>{viewFlist}</div>
                        <div style={{marginTop:"70px", height:"250px", width:"850px"}}>{list}</div>
                    </div>
                    {/* <div style={{marginTop:"500px", width:"100%", height:"300px"}}>
                        <Paging page={page} getList={getList} />
                        <div style={dv} >
                            {grade === "admin" ? (<Button style={writeBtn} onClick={write}>뉴스 쓰기</Button>) : (null)}
                        </div>
                    </div> */}
                </Section>
            </div>
    );
}    
export default WedNews;
```
사진을 불러오고 출력하는거 이외에는 상담문의게시판과 동일합니다. 뉴스 페이지가 처음 열렸을 때 데이터베이스의 file 테이블에서 type이 "News"인 파일만 가져옵니다. 각 게시글 앞에 대표사진 1개만 불러오기 위해 if문에 continue를 이용해 flist에 넣은 후 map()을 이용해 각 해당 뉴스와 뉴스에 맞는 대표사진을 출력합니다.

## Back_BoardController
```java
    @GetMapping("newsListImg")
    public List<Files> newsListImg(@RequestParam String type){
        log.info("newsListImg()");
        return bServ.newsListImg(type);
    }
```
## Back_BoardService
```java
    public List<Files> newsListImg(String type) {
        log.info("newsListImg()");

        List<Files> bfList = bfRepo.findByFtype(type);
        return bfList;
    }
```

#### 뉴스 전체출력 화면<br><br>
![image](https://user-images.githubusercontent.com/117874997/215294422-d28516c6-9b0a-4463-907f-43b5bda73d82.png)

#### 뉴스 작성화면 (상담게시판과 겹치는 부분이 많아 이미지만 첨부합니다.)<br><br>
![image](https://user-images.githubusercontent.com/117874997/215294135-269530f1-ad47-4c9e-bc89-856738f66daf.png)

#### 뉴스 상세보기 화면_1(상담게시판과 겹치는 부분이 많아 이미지만 첨부합니다.)<br><br>
![image](https://user-images.githubusercontent.com/117874997/215294274-09444e9d-3881-4b0b-ab0f-5b435ebc5bdb.png)

#### 뉴스 상세보기 화면_2(상담게시판과 겹치는 부분이 많아 이미지만 첨부합니다.)<br><br>
![image](https://user-images.githubusercontent.com/117874997/215294304-21a03e7f-78be-42c0-b50a-42bbfbecb028.png)

## ChattingBot.jsx 컴포넌트

※ 챗봇 라이브러리 
```javascript

const ChattingBot = ({img, setImg}) => {
    const steps = [
        {
            id: '0', 
            message : '안녕하세요 회원님💙 Wedding Dive 챗봇입니다.',
            trigger: '1',
        },
        {
            id: '1',
            message : '준비가 되셨다면 시작버튼을 눌러 주세요.',
            trigger: '2',
            // end:true
        },
        {
            id: '2',
            options: [
              { value: 1, label: '시작하기', trigger: '3' }
            ],
        },
        {
            id: '3',
            options : [
                { value: 1, label: '자주 묻는 질문', trigger: '4'},
            ]
        },
        {
            id: '4',
            options : [
                {value: 1, label: '왜 Wedding Dive인가요? 💕', trigger:'5'},
                {value: 2, label: '예식 사진촬영시 친구는 몇명이 적당한가요? 💕', trigger: '6'},
                {value: 3, label: '드레스를 잘 고르는 법이 있나요? 💕', trigger: '7'},
                {value: 4, label: '신혼여행 준비는 언제쯤 하는 게 좋나요? 💕', trigger: '10'},
                {value: 5, label: '신랑님 체크사항 💕', trigger:'12'},
                {value: 6, label: '신부님 체크사항 💕', trigger:'17'},
                {value: 7, label: '차은우 전화번호 💕', trigger:'18'},
                {value: 8, label: '추가 다른 문의는❔💕', trigger:'19'}
            ]
        },
        {
            id: '5',
            message : '결혼하고 싶은 우리 모두의\n소망을 담아 만들었습니다.',
            trigger:'99'
        },
        {
            id: '6',
            message : '적게는 18명에서 많게는\n25명까지 줄을 섭니다.',
            trigger:'99'
        },
        {
            id: '7',
            message : '기본적으로 드레스를 결정하실 때엔 신부님 체형의 단점은 커버해주고 장점은 부각시켜 주는 드레스를 선택해야 합니다.\n\n 하체에 콤플렉스가 있는 신부님의 경우 허리라인은 살려주고 하체 라인이 돋보이지 않게 가려줄 A라인이나 벨라인 드레스가 어울리며\n\n키가 크고 골반이 있으신 분들은 머메이드 라인이 어울립니다.',
            trigger: '99',
        },
        {
            id:'10',
            message : '보통 허니문을 예약하시는 평균적인 시기는 출발 6개월 전이지만 예식 날짜와 예식장 결정이 되시면 바로 준비하셔야 합니다.\n\n 왜냐!! 허니문 비용을 가장 효과적으로 줄일 수 있는 방법이 바로 항공권이기 때문이에요.',
            trigger: '99',
        },
        {
            id:'12',
            message:'- 구두 색깔과 같은 목이 긴 양말 착용\n\n- 식장에 디피해 놓을 액자를 받지 못하였다면 예식 당일 반드시 수령\n\n- 웨딩카와 웨딩카에 장식이 되어있는지 체크\n\n- 주례자와 사회자 도착 여부 확인\n\n- 여행가방과 지갑 등을 미리 식구나 친구에게 부탁하여 웨딩카에 넣어 두었는지 확인',
            trigger:'99',
        },
        {
            id:'17',
            message:'- 충분한 휴식, 숙면, 신부님을 도와줄 친구 섭외',
            trigger:'99',
        },
        {
            id:'18',
            message:'010 - 1111 - 1111입니다.', 
            trigger:'99',
        },
        {
            id:'19',
            message:'자세한 1:1 문의는 아래 링크를 클릭하세요!',
            trigger:'20',
        },
        {   
            id:'20',
            component : (
                <a href="/ServiceCenter" style={{color:'white', marginLeft:'5px', fontSize:'17px'}}>1:1 문의하러 가기</a>
            ),
            trigger: '99',
        },
        {
            id: 'jb',
            component : (
                <img src={jb} style={{width:"280px", height:"300px"}}/>
            ),
            trigger:'99'
        },
        {
            id: '99',
            options: [
            { value: 1, label: '처음으로', trigger: '3'},
            { value: 2, label: '종료하기', trigger: '100'},
            ]
        },
        {
            id: '100',
            message : '감사합니다.\n좋은 하루 되세요 :)',
            end : true
        },
    ]

    const theme = {
        background: '#f5f8fb',
        fontFamily: 'Helvetica Neue',
        // headerBgColor: '#EF6C00',
        headerBgColor : '#F7ECEC',
        // FontWeight : '200',
        // headerFontColor: '#fff',
        headerFontColor : 'black',
        headerFontSize: '15px',
        // botBubbleColor: '#EF6C00',
        botBubbleColor : '#EBF7FF',
        botFontColor: '#black',
        userBubbleColor: 'white',
        userFontColor: 'black',
    };
    
    return (
        <>
        <h3 style={xbtn} onClick={() => setImg(!img)}>✖</h3>
        <ThemeProvider theme={theme} >
            <ChatBot steps={steps} 
            headerTitle="Wedding Dive 채팅봇"
            placeholder="채팅이 불가능한 채널입니다."
            botDelay={500} userDelay={500} style={st}
            // 인풋 검색창 스타일
            // inputStyle={{position : "fixed", bottom : "0"}}
            // 봇 아바타 스타일
            avatarStyle={{width : '46px', background:'#EBF7FF'}} 
            // avatarStyle={{width : '180px', height:'180px'}} 
            // 선택 버튼 스타일
            bubbleOptionStyle={{width : '330px', background : '#F7ECEC', color:'black'}} 
            contentStyle={{width:"415px"}} 
            customStyle={{background:"#DB8383", width:"338px", }}
            />
        </ThemeProvider>
        </>
    );    
}
export default ChattingBot;
```
react-simple-chatbot 라이브러리를 이용해 자주 묻는 질문은 챗봇을 통해 대답하고 그 외의 질문은 버튼을 통해 상담문의게시판으로 이동하게 만들었습니다.

#### 챗봇_1<br><br>
![image](https://user-images.githubusercontent.com/117874997/215295149-b59b4a7e-ca2f-4b0c-a3c2-6efb53d0f263.png)

#### 챗봇_2<br><br>
![image](https://user-images.githubusercontent.com/117874997/215295157-d921bf64-3243-4aed-a013-bad28517331d.png)

#### 챗봇_3<br><br>
![image](https://user-images.githubusercontent.com/117874997/215295169-277858a8-70ee-46d1-ab66-3d6bf59d78ec.png)

마치며
---
#### 소감<br><br>
프로젝트를 시작하기 전 리액트를 3~4일 정도만 배웠어서 코드 자체가 번잡한 부분이 많은것 같습니다. 더 열심히 해서 점점 나아지는 모습 기대해주세요. 이 프로젝트는 저에게는 많은 경험이 되었고, 저의 부족한 부분과 제가 할 수 있는 부분을 구별할 수 있는 능력을 가지게 해주었다고 생각합니다. 그렇기에 부족한 부분은 더 공부하고, 할 수 있는 부분은 까먹지 않게 노력해야 될것 같습니다.
