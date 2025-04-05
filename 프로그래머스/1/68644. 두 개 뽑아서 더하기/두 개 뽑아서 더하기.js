function solution(numbers) {
    var answer = [];
    for(let i=0; i<numbers.length; i++){
        for(let j=i+1; j<numbers.length; j++){
            let num=numbers[i]+numbers[j];
            answer.push(num)
        }
    }
    answer = [...new Set(answer)]
    answer.sort((a, b) => a - b);
    return answer;
}