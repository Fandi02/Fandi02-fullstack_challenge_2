function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);
  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  for (car in cars){
    if (cars[car].available == true) {
      result.push(cars[car]);
    }
  }
  
  // for (let i = 0; i <= cars.length-1; i++) {
  //   if (cars[i].available == true) {
  //     result.push(cars[i]);
  //   }
  // }

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
