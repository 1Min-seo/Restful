//모듈 추출
const express=require('express');

//서버 생성/실행
const app=express();

//서버준비
app.listen(3300,()=>{
    console.log('Server is running http://localhost:3300');
});

app.use(express.urlencoded({
    extended:false
}));
//

//요청처리//
let userCounter=0;
const users=[];

//사용자 전체 정보 조회
app.get('/user',(request,response)=>{
    response.send(users);
});

//조건조회(사용자 id)
app.get('/user/:id',(request, response)=>{
    //id 추출한 다음에 해당 id의 user를 검색해서 클라이언트로 전송
    const id = request.params.id; // 이게 없었어요
    //id 값 추출
    let member={};
    for(let i=0; i<users.length; i++){
        if(users[i].id==id){
            console.log(users[i]);
            member=users[i];
        }
    }

    //응답
    response.send(member);
})

//데이터추가
app.post('/user',(request, response)=>{
    const body=request.body;

    if(!body.name)
        return response.status(400).send('name error')
    
    
    const member={
        id:userCounter++,
        name:body.name,
        region:body.region
    }
    users.push(member);
    response.send(member);
});

//데이터수정
app.put('/user/:id',(request, response)=>{
    let id=request.params.id;
    let body=request.body;
    let member={};
    for(let i=0; i<users.length; i++){
        if(users[i].id==id){
            users[i].name=body.name;
            users[i].region=body.region;
            member=users[i];
        }
    }
    response.send(member)
});

//데이터삭제
app.delete('/user/:id',(request, response)=>{
    let id=request.params.id;
    let index=0;

    for(let i=0; i<users.length; i++){
        if(users[i].id==id){
            index=i;
        }
    }
    const member=users.splice(index,1);
    response.send(member)
});
