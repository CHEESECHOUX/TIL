// reduce로 두 배열을 객체로 만드려고 했는데... 모르겠슴
function solution(genres, plays) {

  let album = genres.reduce((acc, curr, idx) => {
    acc[curr] = plays[idx];
    return acc;
  }, new Object);
  console.log(album);
}


// 정답 봄
function solution(genres, plays) {
  let answer = [];
  let map = new Map();

  // 장르별 재생 수 누적
  for (let i = 0; i < genres.length; i++) {
    if (map.has(genres[i])) {
      map.set(genres[i], map.get(genres[i] + plays[i]));
    } else {
      map.set(genres[i], plays[i]);
    }
  }
  console.log(map);
  let thisGenresSongs = []

  while(map.size > 0) {
    let max = [...map.entries()].reduce((a, b) => a[1] > b[1] ? a : b)[0]; // 가장 많이 재생된 장르

    // 가장 많이 재생된 장르와 같은 장르만 thisGenreSongs에 저장
    genres.filter((genres, index) => {
      if (genres === max) {
        thisGenresSongs.push(plays[index]);
      }
    });
    thisGenresSongs.sort((a, b) => b - a).splice(2); // 내림차순으로 정리해서 2개까지만 저장
    
    // 가장 많이 재생된 장르 곡들의 재생 수가 같다면
    if(thisGenresSongs[0] === thisGenresSongs[1]) {
      plays.map((play, index) => {
        if(thisGenresSongs[0] === play) {
          answer.push(index);
        }
      })
      thisGenresSongs = [];
    } else { 
      // 가장 많이 재생된 장르 중 가장 많이 재생된 곡의 고유번호를 answer에 저장(push)후 해당 곡 제거(shift)
      while(thisGenresSongs.length > 0) {
        for (let i = 0; i < plays.length; i++) {
          if(plays[i] === thisGenresSongs[0]) {
            answer.push(i);
          }
        }
        thisGenresSongs.shift();
      }
    }
    map.delete(max); // 가장 많이 재생된 장르 제거
  }
  return answer;
}

console.log(solution(["classic", "pop", "classic", "classic", "pop"],[500, 600, 150, 800, 2500]))
