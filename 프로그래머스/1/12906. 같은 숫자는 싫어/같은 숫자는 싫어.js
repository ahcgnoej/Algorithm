function solution(arr)
{
    let answer = [];
    let s=arr[0];
    answer.push(arr[0])
    for(let i=1; i<arr.length; i++){
        if(s!==arr[i]){
            answer.push(arr[i])
        }
        s=arr[i]
    }
    
    return answer;
}