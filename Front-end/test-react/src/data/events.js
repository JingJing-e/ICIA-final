
import axios from 'axios'
import { useEffect } from 'react'
import Image1 from '../pages/Events/EventImage/EventImage1.jpg' 
import Image2 from '../pages/Events/EventImage/EventImage2.jpg' 
import Image3 from '../pages/Events/EventImage/EventImage3.jpg' 
import Image4 from '../pages/Events/EventImage/EventImage4.jpg' 


const events = [
  // {
  //   id: 1,
  //   image: Image1,
  //   title: '이벤트 1번',
  //   content: `앞이 오직 곳으로 가슴에 부패뿐이다. 심장의 청춘의 청춘이 만물은 가슴에 쓸쓸하랴? 청춘은 바이며, 청춘 심장은 쓸쓸한 원대하고, 노래하며 반짝이는 우리 아름다우냐? 청춘 못할 우는 황금시대를 낙원을 구하지 가장 뿐이다. 심장은 부패를 풍부하게 있는가? 가지에 기쁘며, 커다란 이상 인생에 끓는다. 목숨을 평화스러운 실로 청춘이 속잎나고, 열락의 내는 것이다.
  //   찬미를 아름답고 같으며, 청춘을 되려니와, 이것을 것은 이것이다. 인류의 위하여 이 이상 따뜻한 있다. 타오르고 따뜻한 귀는 말이다. 천지는 봄날의 옷을 우리 쓸쓸하랴? 두손을 관현악이며, 전인 꽃이 안고, 봄날의 곧 만천하의 있으랴?
  //   그들의 인생을 웅대한 있는 끝까지 듣는다. 실로 미인을 속에서 두기 끓는 길지 방지하는 것이다. 인생을 쓸쓸한 목숨이 인간의 인도하겠다는 우는 것이다. 황금시대의 이 이성은 이것이다. 이성은 청춘의 같이, 가장 귀는 거친 구하지 낙원을 것이다.보라, 것이다. 불어 내려온 노년에게서 사랑의 교향악이다.`
  // },
  // {
  //   id: 2,
  //   image: Image2,
  //   title: '이벤트 2번',
  //   content: `하나 노새, 잠, 부끄러운 까닭입니다. 잠, 당신은 소녀들의 별빛이 써 이름자 까닭입니다. 가을로 하나에 딴은 하나에 청춘이 가난한 풀이 별 까닭입니다.
  //   별 슬퍼하는 겨울이 하나에 봅니다. 청춘이 헤는 소학교 밤을 너무나 버리었습니다. 별 노루, 없이 아스라히 가난한 이름자를 오면 거외다.
  //   했던 나는 어머니, 새워 동경과 다하지 없이 않은 이름을 봅니다. 그리워 많은 하나에 이제 별들을 하나 있습니다.`
  // },
  // {
  //   id: 3,
  //   image: Image3,
  //   title: '이벤트 3번',
  //   content: `묻힌 노새, 너무나 가득 밤이 보고, 까닭입니다. 아스라히 별 이네들은 사람들의 있습니다.
  //   하늘에는 마리아 시와 오면 별빛이 듯합니다. 이름을 위에 멀리 별 하나에 가을 하나의 이런 노새, 봅니다. 무엇인지 언덕 내일 어머니, 쉬이 옥 소학교 있습니다. 하나에 불러 하나에 흙으로 잔디가 다하지 계십니다.
  //   묻힌 지나가는 별 많은 이제 봅니다. 잠, 이런 했던 까닭이요, 하나에 가난한 부끄러운 이름을 다 버리었습니다.`
  // },
  // {
  //   id: 4,
  //   image: Image4,
  //   title: '이벤트 4번',
  //   content: `나는 하나에 비둘기, 쓸쓸함과 없이 어머니, 까닭입니다. 비둘기, 했던 멀리 버리었습니다.
  //   겨울이 자랑처럼 언덕 봅니다. 보고, 덮어 경, 이런 위에 피어나듯이 이름과, 아름다운 거외다. 나의 피어나듯이 별이 위에 가을 벌써 어머님, 강아지, 까닭입니다. 하나에 같이 사람들의 쓸쓸함과 차 마리아 북간도에 그러나 지나고 봅니다.
  //   못 그리고 사랑과 하나의 우는 애기 남은 어머님, 프랑시스 듯합니다. 어머니 프랑시스 나의 까닭이요, 아침이 릴케 무성할 버리었습니다. 계집애들의 별이 노루, 애기 다 무덤 별빛이 거외다.`
  // }
]



export default events 
//   $.ajax({
//     url: "/event",
//     type: "get",
//     data: "new Array",
//     dataType: "res,data,eidx,length",
//     success: function(data){
//       console.ok();
//     },
//     error: function(){
//       console.error();
//     }
//   });


export const getEventById = (id) => {
  return events.filter(v => v.id === id).pop()
}