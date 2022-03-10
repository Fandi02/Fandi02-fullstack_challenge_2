function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];
  let condition;
  let container = [];
  
  // Tulis code-mu disini
  do {
    condition = false;
    for (let i = 0; i <= result.length-2; i++) {
      if (result[i].year > result[i+1].year) {
        container = result[i];
        result[i] = result[i+1];
        result[i+1] = container;
        condition = true;
      } 
    }
  } while(condition)
  
  // Rubah code ini dengan array hasil sorting secara ascending
  return result;
}
