function filter() {
    let correctWhiteList = [];
    let whiteList = ['alinaTheBest@gmail.ru', 'myCatShelly@mail.ru', 'myMom@vk.ru', 'iAmTired@skill.ru', 'awfulday@day.ru']
    let blackList = ['iAmTired@skill.ru','awfulday@day.ru']
    
    for ( let email of whiteList) {
      if (!blackList.includes(email)) {
        correctWhiteList.push(email);
      }
    }
    return correctWhiteList;
  }
  console.log(filter());