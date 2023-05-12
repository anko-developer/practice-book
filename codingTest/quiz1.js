function solution(t, p) {
  if (!(p.length >= 1 && p.length <= 18)) return;
  if (!(p.length <= t.length && t.length <= 10000)) return;
  if (!t.match(/^[0-9]+$/) || !p.match(/^[0-9]+$/) || t.match(/^0/) || p.match(/^0/)) return;

  let answer = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    const calc = t.substr(i, p.length);
    if (Number(calc) <= Number(p)) ++answer;
  }
  
  return answer;
}

solution('10203', '15');

// t 문자열의 length 만큼 돈다.
// p 문자열의 length 만큼 끊어서 반복문으로 돈다.

// t 문자열에서 substr(0, p.length), substr(1, p.length), substr(2, p.length) 처럼 반복문으로 돌려준다.
// 주의해야 할 점은 substr(0, p.length) 받아온 문자열이 p.length 길이보다 작으면 return 처리
