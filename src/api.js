const seededRandom = function (seed) {
  var m = 2**35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
      return (s = s * a % m) / m;
  };
}

const fetchAPI = function(date) {

  let result = [];
  let random = seededRandom(date.getDate());

  for(let i = 17; i <= 23; i++) {
    let time = '';
    if(random() < 0.5) {
      time = i + ':00';
      result.push({value: time, label: time});
    }
    if(random() < 0.5) {
      time = i + ':30';
      result.push({value: time, label: time});
    }
  }
  return result;
};

const submitAPI = function(formData) {
  return true;
};

export { fetchAPI, submitAPI };
