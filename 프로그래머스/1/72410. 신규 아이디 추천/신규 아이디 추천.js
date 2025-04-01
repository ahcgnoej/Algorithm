function solution(new_id) {
    var answer = '';
    var answer=new_id.toLowerCase()
    answer = answer.replace(/[^a-z0-9-_.]/g, "");
    answer = answer.replace(/\.{2,}/g, ".");
    answer = answer.replace(/^\.|\.$/g, "");
    if(answer===""){
        answer='a'
    }
    if(answer.length>15){
        answer=answer.slice(0,15);
        if(answer[14]==='.'){
            answer=answer.slice(0,14);
        }
    }
     while (answer.length < 3) {
        answer += answer[answer.length - 1];
    }
    return answer;
}
