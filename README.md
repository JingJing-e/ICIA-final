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
## Back_MemberService
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
- #### 로그인 창 활성화 화면<br><br>
![image](https://user-images.githubusercontent.com/117874997/215289298-3d6edfe0-1d41-482c-ae87-c0a95a150ed9.png)

## Header.jsx 컴포넌트 (부분)

※ 로그인 회원(일반, 소셜(네이버,구글), 관리자)에 따라 다른 구성 

```javascript
{lstate === "" ? (  
        <FlexBox gap={15} align="center">
          <UtilText onClick={openModal}>로그인</UtilText>
          <UtilText onClick={()=>setMymodal(true)} >회원가입 </UtilText>
        </FlexBox>
      ) : (manager === "admin" ? (
        <FlexBox gap={15} align="center">
          <UtilText>{manager}님</UtilText>
          <UtilText onClick={managerPage}>관리자 페이지</UtilText>
          <UtilText onClick={onLogout}>로그아웃</UtilText>
        </FlexBox>
      ) : (naverState !== "" ? (
        <FlexBox gap={15} align="center">
          <UtilText onClick={() => {alert(`🤗 ${naverState}님 반갑습니다 🤗`)}}><img src={naverLogo} alt="naver" style={{marginTop:"7px", width:"30px"}}/></UtilText>
          <UtilText onClick={Mypage}>{naverState}님</UtilText>
          <UtilText onClick={onLogout2}>로그아웃</UtilText>
        </FlexBox>
      ) : (googleState !== "" ? (
        <FlexBox gap={15} align="center">
          <UtilText onClick={() => {alert(`🤗 ${googleState}님 반갑습니다 🤗`)}}><img src={googleLogo} alt="google" style={{marginTop:"9px", width:"40px", marginRight:"-5px"}}/></UtilText>
          <UtilText onClick={Mypage}>{googleState}님</UtilText>
          <UtilText onClick={onLogout2}>로그아웃</UtilText>
        </FlexBox>
      ) : (
        <FlexBox gap={15} align="center">
          <UtilText>{lstate}님</UtilText>
          <UtilText onClick={Mypage}>마이페이지</UtilText>
          <UtilText onClick={onLogout}>로그아웃</UtilText>
        </FlexBox>
      ))))}
```

- #### 일반회원 로그인 후 화면<br><br>
![image](https://user-images.githubusercontent.com/117874997/215312868-a38a23d0-ee6e-415a-93f6-b8537388dd5f.png)

- #### 네이버 로그인 후 화면<br><br>
![image](https://user-images.githubusercontent.com/117874997/215312945-5cc50583-9ff1-4de1-8ec9-a7351212f39f.png)

- #### 구글 로그인 후 화면<br><br>
![image](https://user-images.githubusercontent.com/117874997/215312918-93be6fff-b1b2-44e2-a83d-9591549cf2e6.png)

## ModalId.jsx 컴포넌트

※ 아이디 찾기
```javascript

const ModalId = ({ setSelectId, setModalOpen }) => {
    const [pwd, setPwd] = useState(false);
    const modalRef = useRef(null);
    const [ checkValue, setCheckValue ] = useState('');
    
    function checkOnlyOne(id) {
        let checkPick = document.getElementsByName('checkWrap');
        Array.prototype.forEach.call(checkPick, function (el) {
          el.checked = false;
        });
        id.target.checked = true;
        setCheckValue(id.target.defaultValue);
    }

    useEffect(() => {
        // 이벤트 핸들러 함수
        const handler = (event) => {
            // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
            if (!modalRef.current.contains(event.target)) {
                setSelectId(false);
            }
        };

        document.addEventListener('mousedown', handler);
        
        return () => {
            document.removeEventListener('mousedown', handler);
        };
    });

    const selectPwd = () => {
        setPwd(true);
    };

    const [sid, setSid] = useState("");

    const [id, setId] = useState({
        mname : "",
        mpid : "",
    })

    const onch = useCallback((e) => {

        const formObj = {
            ...id,
            [e.target.name] : e.target.value,
        };
        setId(formObj);
        console.log(formObj);
    }, [id]);

    const selectId = (e) => {
        e.preventDefault();
        axios
            .post("selectId" , id)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                {res.data === "일치하는 아이디가 없습니다." ? (setSid(res.data)) : (setSid("찾으려는 아이디 : " + res.data))}
            })
            .catch((err) => {alert('실패'); console.log(err)});
    }

    return (
        <div className="modal">
           <div ref={modalRef} className="container-two">
               <section className="user-input">
                   <img src={logo} alt="logo" className="ig2"/>
                   <div className="tx">가입할 때 작성한 정보를 입력해주세요 :)</div>
                   <hr className="hr"/>
                   <div className="radiv">
                    <div className="radiv1">
                        <input type="checkbox" checked name="checkWrap" onChange={(e) => checkOnlyOne(e)} className="inra1"/><span className="sp" name="checkWrap" onChange={(e) => checkOnlyOne(e)}>아이디찾기</span>
                    </div>
                    <div className="radiv2"> 
                        <input type="checkbox" name="checkWrap" onChange={(e) => checkOnlyOne(e)} onClick={selectPwd} className="inra2"/><span className="sp" onClick={selectPwd}>비밀번호 찾기</span>
                        {pwd && <ModalPwd setSelectId={setSelectId} setPwd={setPwd} setCheckValue={setCheckValue} setModalOpen={setModalOpen}/>}
                    </div>
                   </div>
                   <form onSubmit={selectId}>
                    <div className="log-other1">이름</div>
                    <input className="inp-id" onChange={onch} name="mname" type="text" maxLength="25" required placeholder="이름을 입력하세요."/>
                    <div className="log-other1">주민등록번호</div>
                        <input className="inp-id" onChange={onch} name="mpid" type="text" maxLength="13" required placeholder="- 를 제외한 13자리를 입력하세요."/>
                    <div className="tx2">{sid}</div>
                    <button type="submit" className="log-btnid">아이디 찾기</button>
                   </form>
                   <button className="log-btn-del" onClick={() => setSelectId(false)}>돌아가기</button>
               </section>
           </div>
        </div>        
    );
};

export default ModalId;
```
가입 시 작성한 이름과 주민등록번호를 쓰고 '아이디 찾기' 버튼을 클릭 해 데이터베이스에 일치하는 데이터가 없으면 없다는 문구와 일치하는 데이터가 있다면 아이디를 알려줍니다.

## Back_MemberController
```java
@ResponseBody
    @PostMapping("selectId")
    public String selectId(@RequestBody Member member){
        log.info("selectId()");
        log.info("" + member);
        return mServ.selectId(member);
    }
```
## Back_MemberService
```java
public String selectId(Member member) {
        log.info("selectId()");
        Member m = null;
        String msg = "";

        try {
            m = mRepo.findByMnameAndMpid(member.getMname(),member.getMpid());
            log.info("" + m);
            if (m != null){
                return m.getMid();
            }else {
                return msg = "일치하는 아이디가 없습니다.";
            }
        }catch (Exception e){
            e.printStackTrace();
            return msg = "일치하는 아이디가 없습니다.";
        }
    }
```
프론트에서 보낸 값으로 findBy~~ 함수를 이용해 데이터베이스에 일치하는 아이디가 있다면 아이디를 return, 없다면 없다는 문자열을 return 합니다.<br><br>
#### 아이디찾기 화면 <br><br>
![image](https://user-images.githubusercontent.com/117874997/215290054-025e4bc1-c952-41eb-aa3f-58decaaed7b7.png)

## ModalPwd.jsx 컴포넌트

※ 비밀번호 재설정_1
```javascript

const ModalPwd = ({ setSelectId, setPwd, setCheckValue, setModalOpen }) => {
    const modalRef = useRef(null);
    const [reset, setReset] = useState(false);
    const [findid, setFindid] = useState("");

    const [info, setInfo] = useState({
      mid : "",
      mphone : "" 
    })

    const onch = useCallback(e => {
      const formObj = {
        ...info,
        [e.target.name] : e.target.value,
      };
      setInfo(formObj);
      console.log(formObj);
    }, [info]);

    function checkOnlyOne(id) {
        let checkPick = document.getElementsByName('checkWrap');
        Array.prototype.forEach.call(checkPick, function (el) {
          el.checked = false;
        });
        id.target.checked = true;
        setCheckValue(id.target.defaultValue);
    }

    useEffect(() => {
        // 이벤트 핸들러 함수
        const handler = (event) => {
            // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
            if (!modalRef.current.contains(event.target)) {
                setSelectId(false);
            }
        };

        document.addEventListener('mousedown', handler);
        
        return () => {
            document.removeEventListener('mousedown', handler);
        };
    });

    const [dis, setDis] = useState(false);

        function onClickCertification() {
            /* 1. 가맹점 식별하기 */
            const { IMP } = window;
            IMP.init("???");    

            /* 2. 본인인증 데이터 정의하기 */
            const data = {
              merchant_uid: `mid_${new Date().getTime()}`,  // 주문번호
              company: 'WeddingDive',                    // 회사명 또는 URL
              carrier: '',                               // 통신사
            //   id: `${value}`,
              name: '',                                  // 이름
              phone: '',                        // 전화번호
              popup:true,
            };
      
            /* 4. 본인인증 창 호출하기 */
            IMP.certification(data, callback);
          }
      
          /* 3. 콜백 함수 정의하기 */
          function callback(response) {
            const {
              success,
              merchant_uid,
              error_msg,
            } = response;
      
            if (success) {
              setDis(true);
              alert('본인인증 성공');
            } else {
              alert(`본인인증 실패: ${error_msg}`);
            }
          }

    const resetPage = (e) => {
      e.preventDefault();

      const pwd1 = document.getElementById("input1");
      const pwd2 = document.getElementById("input2");

      if(pwd1.value == "" || pwd2.value == ""){
        return alert("빈 칸 안에 값을 입력하세요");
      }

      console.log(info);
      axios
        .post("/checkPwd" , info)
        .then((res) => {
          console.log(res.data);
          if(res.data === "조건에 일치하는 회원이 없습니다."){
            alert(res.data);
          }else {
            setFindid(res.data);
            setReset(true);
          }
        })
        .catch((err) => console.log(err));
    }

    return (
        <div className="modal">
           <div ref={modalRef} className="container-three">
               <section className="user-input">
                   <img src={logo} alt="logo" className="ig2"/>
                   <div className="tx">가입할 때 작성한 정보를 입력해주세요 :)</div>
                   <hr className="hr"/>
                   <div className="radiv">
                    <div className="radiv1">
                        <input type="checkbox" className="inra1" name="checkWrap" onChange={(e) => checkOnlyOne(e)} onClick={() => setPwd(false)}/><span className="sp" onClick={() => setPwd(false)}>아이디찾기</span>
                    </div>
                    <div className="radiv2"> 
                        <input type="checkbox" className="inra2" checked name="checkWrap" onChange={(e) => checkOnlyOne(e)} /><span className="sp">비밀번호 찾기</span>
                    </div>
                   </div>
                   <div className="log-other1">아이디</div>
                   <input className="inp-id" type="text" id="input1" name="mid" onChange={onch} maxLength="25" required placeholder="아이디를 입력하세요."/>
                   <div className="log-other1">핸드폰 번호</div>
                   <div>
                    <input className="phonenum" type="text" id="input2" name="mphone" onChange={onch} maxLength="11" required placeholder="핸드폰 번호를 입력하세요."/>
                   <button className="phonebtn" style={{lineHeight:'18px', paddingTop:'-25px'}} onClick={onClickCertification}>인증<br/>번호</button></div>
                   {dis === true ? (<button className="log-btnid" id="joinIn" onClick={resetPage}>비밀번호 재설정하기</button>) : ( <button className="log-btnid2" id="joinIn" disabled>비밀번호 재설정하기</button> )}
                   {/* //  <button className="log-btnid" id="joinIn" disabled onClick={resetPage}>비밀번호 재설정하기</button> */}
                   <button className="log-btn-del" onClick={() => setSelectId(false)}>돌아가기</button>
               </section>
               {reset && <ModalPwdReset setReset={setReset} setModalOpen={setModalOpen} findid={findid}/>}
           </div>
        </div>        
    );
};

export default ModalPwd;
```
가입 시 작성한 아이디와 핸드폰번호를 쓰고 '인증번호' 버튼을 클릭 해 인증확인 절차까지 밟아야 '비밀번호 재설정' 버튼의 비활성화가 풀리게 했습니다. 이후 작성한 정보와 일치하는
회원이 데이터베이스에 있을 경우, 그 회원의 아이디를 useState에 저장 후 비밀번호 재설정하는 모달창으로 이동합니다.

## Back_MemberController
```java
    @ResponseBody
    @PostMapping("checkPwd")
    public String checkPwd(@RequestBody Member member){
        log.info("checkPwd()");
        return mServ.checkPwd(member);
    }
```
## Back_MemberService
```java
        public String checkPwd(Member member) {
        log.info("checkPwd()");
        String msg = "";

        try {
            Member id = mRepo.findByMidAndMphone(member.getMid(),member.getMphone());
            log.info("조건에 일치하는 ID : " + id);
            if (id != null){
                return id.getMid();
            }else {
                return msg = "조건에 일치하는 회원이 없습니다.";
            }
        }catch (Exception e){
            e.printStackTrace();
            return msg = "조건에 일치하는 회원이 없습니다.";
        }
    }
```
프론트에서 보낸 값으로 findBy~~ 함수를 이용해 데이터베이스에 일치하는 아이디가 있다면 아이디를 return, 없다면 없다는 문자열을 return 합니다.<br><br>
#### 비밀번호 재설정 화면_1<br><br>
![image](https://user-images.githubusercontent.com/117874997/215290351-a523b48e-4068-4803-b931-a7a0e54866ce.png)

## ModalPwdReset.jsx 컴포넌트

※ 비밀번호 재설정_2
```javascript

const ModalPwdReset = ({ setSelectId, setReset, findid, setModalOpen }) => {
    const modalRef = useRef(null);
    
    useEffect(() => {
        // 이벤트 핸들러 함수
        const handler = (event) => {
            // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
            if (!modalRef.current.contains(event.target)) {
                setSelectId(false);
            }
        };

        document.addEventListener('mousedown', handler);
        
        return () => {
            document.removeEventListener('mousedown', handler);
        };
    });

    const vd = {
        paddingTop : "2px",
        paddingBottom: "17px",
        fontSize: "30px",
    }

    const [newpwd, setNewpwd] = useState({
        mid : findid,
        mpwd : ""
    })

    const onch = useCallback(e => {
        const formObj = {
            ...newpwd,
            mpwd : e.target.value
        };
        setNewpwd(formObj);
        console.log(formObj);
    });

    const check = () => {
        let pwd11 = document.getElementById("pwd11");
        let pwd22 = document.getElementById("pwd22");
        let pwdresult = document.getElementById("pwdresult");
        let cresult = document.getElementById("cresult");

        const pwdRegExpp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

        if(pwd11.value == ""){
            pwdresult.style.display="none";
        }else if(!pwdRegExpp.test(pwd11.value)){
            pwdresult.innerHTML="숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
            pwdresult.style.display="block";
            pwdresult.style.color="red";
        }else if(pwdRegExpp.test(pwd11.value)) {
            pwdresult.innerHTML=("안전한 비밀번호 입니다.");
            pwdresult.style.display="block";
            pwdresult.style.color="limeGreen";
        }
        
        if(pwd11.value == "" || pwd22.value==""){
            cresult.style.display="none";
        }else if(pwd11.value==pwd22.value){
            cresult.style.display="block";
            cresult.style.color="limeGreen";
            cresult.innerHTML="비밀번호가 일치합니다.";
        }else{
            cresult.style.display="block";
            cresult.style.color="red";
            cresult.innerHTML="비밀번호가 일치하지않습니다."
        }

    }

    const resetPwd = (e) => {
        e.preventDefault();
  
        let pwd1 = document.getElementById("pwd11");
        let pwd2 = document.getElementById("pwd22");
        
        if(pwd1.value == "" || pwd2.value == ""){
          return alert("빈 칸 안에 값을 입력하세요");
        }else if(pwd1.value !== pwd2.value){
          return alert("동일한 비밀번호를 입력하세요");
        }
  
        console.log(newpwd);
        axios
            .post("/resetPwd" , newpwd)
            .then((res) => {
                console.log(res.data);
                if(res.data === "성공"){
                    alert("새로운 비밀번호로 로그인해주세요");
                    setModalOpen(false);
                }
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className="modal">
           <div ref={modalRef} className="container-four">
               <section className="user-input">
                   <img src={logo} alt="logo" className="ig2"/>
                   <div className="tx">앞으로 사용할 비밀번호를 입력하세요 :)</div>
                   <hr className="hr"/>
                   <div>
                        <input type="checkbox" checked/><span className="sp2"> 비밀번호 재설정하기</span>
                    </div>
                   <div className="newPwd1">새로운 비밀번호</div>
                   <input className="inp-id" id="pwd11" onChange={(e) => {check(); onch(e)}} name="mpwd" type="password" required placeholder="비밀번호를 입력하세요."/>
                   <div id="pwdresult"></div>
                   <div className="newPwd2">비밀번호 확인</div>
                   <input className="inp-id" id="pwd22" onChange={check} type="password" required placeholder="다시 한번 입력해주세요."/>
                   <div id="cresult" style={{marginBottom:"15px"}}></div>
                   {/* <div style={vd}>💛💚💙💜🖤</div> */}
                   <button className="log-btnid" onClick={resetPwd}>재설정하기</button>
                   <button className="log-btn-del" onClick={() => setReset(false)}>돌아가기</button>
               </section>
           </div>
        </div>        
    );
};

export default ModalPwdReset;
```
재설정할 비밀번호를 조건식에 맞게 비밀번호 확인 input창 까지 동일하게 썼을때만 재설정이 완료됩니다.

## Back_MemberController
```java
    @ResponseBody
    @PostMapping("resetPwd")
    public String resetPwd(@RequestBody Member member){
        log.info("resetPwd()");
        return mServ.resetPwd(member);
    }
```
## Back_MemberService
```java
    public String resetPwd(Member member) {
        log.info("resetPwd()");
        Member dbMember = null;
        String msg = "";

        try {
            dbMember = mRepo.findById(member.getMid()).get();
            log.info("dbMember -> " + dbMember);
            if (dbMember != null){
                String newPwd = encoder.encode(member.getMpwd());
                dbMember.setMpwd(newPwd);
                mRepo.save(dbMember);
                msg = "성공";
            }else {
                msg = "실패";
            }
        }catch (Exception e){
            e.printStackTrace();
        }
        return msg;
    }
```
프론트에서 받아온 값으로 findBy~~ 함수를 이용해 재설정할 비밀번호를 암호화 한 후 save()를 이용해 update를 해줍니다.
#### 비밀번호 재설정 화면_2<br><br>
![image](https://user-images.githubusercontent.com/117874997/215290676-ea154b87-8e87-4ab2-98a5-03ab5be1d945.png)

## ServiceCenterInquiry.jsx 컴포넌트

※ 상담문의 페이지 (첫화면, 검색 후 화면)
```javascript

const df = (date) => moment(date).format("YYYY-MM-DD HH:mm");

const ServiceCenterInquiry = () => {
    const nav = useNavigate();
    let pnum = sessionStorage.getItem("pageNum");

    const [bitem, setBitem] = useState({});
    const [page, setPage] = useState({
      totalPage: 0,
      pageNum: 1,
    });
  
    //게시글 목록을 서버로부터 가져오는 함수
    let search

    const getList = (pnum) => {
        search = sessionStorage.getItem('search')
        console.log(search);

        axios
        .get("/ServiceList", { params: { pageNum: pnum, content : search, type: "serviceCenter" } })
        .then((res) => {
            setInput1("");

            console.log(res.data);
            const { bList, totalPage, pageNum } = res.data;
            setPage({ totalPage: totalPage, pageNum: pageNum });
            //console.log(totalPage);
            setBitem(bList);
            sessionStorage.setItem("pageNum", pageNum);
            // sessionStorage.setItem('pageNum', 1)

        })
        .catch((err) => console.log(err));
    };

    const getBoard = useCallback((bno) => {
        //보여질 게시글 번호를 localStorage에 저장(글번호 유지를 위해)

        let grade = sessionStorage.getItem("grade");

        if(grade != "admin"){
            let sign = prompt("게시글 비밀번호를 입력해주세요");

            const abc = {
                bno : bno,
                bpwd : sign,
            }
    
            if(sign !== null){
                console.log(abc);
                axios
                .post("SboardPwd", abc)
                .then((res) => {
                    console.log(res.data);
    
                    if(res.data === "일치"){
                        localStorage.setItem("bno", bno);
                        nav("/ServiceCenterDetail");
                    }else {
                        alert("다시 입력해주세요.");
                    }
                })
                .catch((err) => console.log(err));
            }
        }else {
            localStorage.setItem("bno", bno);
            nav("/ServiceCenterDetail");
        }

    }, []);

    //main 페이지가 화면에 보일 때 서버로부터 게시글 목록을 가져온다.
    useEffect(() => {
        sessionStorage.setItem('search', '')
        pnum !== null ? getList(pnum) : getList(1);
    } ,[]);

    //출력할 게시글 목록 작성
    let list = null;
    if (bitem.length === 0) {
        list = (
        <StableRow key={0}>
            <StableColumn span={4}>게시글이 없습니다.</StableColumn>
        </StableRow>
        );
    } else {
        list = Object.values(bitem).map((item,i) => (
        <StableRow key={item.bno}>
            {/* <StableColumn wd="w-10">{bitem.length-i}</StableColumn> */}
            <StableColumn wd="w-10">{(pnum - 1) * 10 + i+1}</StableColumn>
            <StableColumn wd="w-55">
            <div onClick={() => getBoard(item.bno)}>{item.btitle}&ensp;🔒</div>
            </StableColumn>
            <StableColumn wd="w-15">{item.bmid}</StableColumn>
            <StableColumn wd="w-20">{df(item.bdate)}</StableColumn>
        </StableRow>
        ));
    }

    const write = (e) => {
        e.preventDefault();

        const mid = sessionStorage.getItem("mid");

        if(mid === null){
            alert("로그인 후 가능한 기능입니다");
            return;
        }else{
            nav("/ServiceCenterWrite");
        }

    }

    const [input1, setInput1] = useState("");

    const onch = (e) => {
        setInput1(e.target.value);
        sessionStorage.setItem('search', e.target.value);
    };

    return (
        <div data-aos="fade-up">
            <Section title="상담문의게시판" style={{ height : "1000px"}}>
                <Stable hName={["NO", "제목", "작성자", "작성일"]}>{list}</Stable>
                <Paging page={page} getList={getList} />
                <div style={dv} >
                    <input style={input} onChange={onch} value={input1}/>
                    <Button style={searchBtn} onClick={() => getList(pnum, search)}>검색</Button>
                    <Button style={writeBtn} onClick={write}>글쓰기</Button>
                </div>
            </Section>
        </div>
    );
}; 
export default ServiceCenterInquiry;
```
- #### 첫 페이지 화면<br>
페이지에 들어가자마자 게시글 목록을 서버로부터 map함수를 이용해 가져와 출력합니다. 페이징 처리도 같이 합니다.
- #### 글 제목 검색 후 화면<br>
게시글의 제목 중, 검색 input 창 안의 내용이 포함 되어있는 게시글만 가져와 출력합니다. 페이징 처리도 같이 합니다.

## Back_BoardController
```java
    @GetMapping("ServiceList")
    public Map<String, Object> ServiceList(@RequestParam Integer pageNum, String content, String type, HttpSession session){
        log.info("ServiceList()");
        return bServ.getServiceList(pageNum,content,type);
    }
```
## Back_BoardService
```java
        public Map<String, Object> getServiceList(Integer pageNum, String content, String type) {
        log.info("getServiceList()");

        if(pageNum == null){//처음에 접속했을 때는 pageNum이 넘어오지 않는다.
            pageNum = 1;
        }

        int listCnt = 10; // 페이지당 보여질 게시글 갯수

        Map<String, Object> res = new HashMap<>();

        if(content.equals("")) {
            Pageable pb = PageRequest.of((pageNum - 1), listCnt, Sort.Direction.DESC, "bno");
            Page<Board> result = bRepo.findByBtype(type, pb);
            List<Board> bList = result.getContent();
            int totalPage = result.getTotalPages();

            res.put("bList", bList);
            res.put("pageNum", pageNum);
            res.put("totalPage", totalPage);
        }else{
            Pageable pb = PageRequest.of((pageNum - 1), listCnt, Sort.Direction.DESC,"bno");
            Page<Board> board = bRepo.findByBtitleContainingAndBtype(content, type, pb);
            List<Board> bList = board.getContent();
            int totalPage = board.getTotalPages();

            res.put("totalPage", totalPage);
            res.put("pageNum", pageNum);
            res.put("bList", bList);
        }
        return res;
    }
```
- #### 첫 페이지 화면<br>
처음 접속 시에만 임의로 pageNum에 1을 줘 1페이지로 이동하게 합니다. 프론트에서 넘겨준 값과 일치한 게시글들만 DESC(내림차순)으로 반환합니다.
- #### 글 제목 검색 후 화면<br>
findBy~~Containing을 이용해 프론트에서 넘겨준 값이 포함되어있는 게시글들만 DESC(내림차순)으로 반환합니다.<br>

#### 첫 화면<br>
![image](https://user-images.githubusercontent.com/117874997/215291950-f4a5b511-081f-4eda-bf61-ab81259ec376.png)

#### 글 제목 검색 후 화면<br>
![image](https://user-images.githubusercontent.com/117874997/215291978-37bc474b-55c2-4e9f-bcba-6fa26bb15acc.png)

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
