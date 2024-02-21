const users=[];

const user1={
    id:1,
    name: 'kim',
    region: 'seoul'
}

const user2={
    id:2,
    name:'lee',
    region:'busan'
}

//create(생성)
users.push(user1);
users.push(user2);

// console.log(users.length);
// console.log(users);
for(let i=0; i<users.length; i++){
    if(users[i].id==1){
        users[i].name='park';
        console.log(users[i]);
    }
}

//지우고자 하는 값 인덱스로 표현
users.splice(0,1);
console.log(users);