//모듈 추출
const express=require('express');

//서버 생성
const app=express();

//request 이벤트 리스너 설정
app.use((request, response)=>{
    response.send('<h1>Hello express</h1>');
});

//서버 실행
app.listen(3300, ()=>{
    console.log('Server running at http://localhost:3300');
})