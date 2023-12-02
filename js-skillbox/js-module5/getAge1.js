function getAge(birthYear) {;
    var now = new Date();
    var currentYear = now.getFullYear();
    return currentYear - birthYear;
  }
    
  console.log(getAge(2004));