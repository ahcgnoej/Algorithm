let number = ['zero','one','two','three','four','five','six','seven','eight','nine']
function solution(s) {
    let answer ='';
    let arr = '';
    
    for(let i=0; i<s.length; i++){
        if(isNaN(s[i])==false){
            answer+=s[i]
        }else {
            arr+=s[i];
            if(number.includes(arr)){
                answer+=number.indexOf(arr);
                arr='';
            }
        }
        
    }
    return Number(answer);
}