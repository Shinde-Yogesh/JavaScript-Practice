//Higher order function
//the function depend on the next function
//the main part is it wait for the complete the passing arg to next function

const message = (greeting) => {
  if (greeting === "Morning") {
    return function (task) {
      //the wonderful morning with bright sun and yellow sky
      // der wundervolle Morgen mit strahlender Sonne und gelbem Himmel

      console.log(`hiii ${greeting}...${task}`);
    };
  } else if (greeting === "Evening") {
    return function (task) {
      //I like tea
      //Ich mag Tee
      console.log(`hiii ${greeting}...${task}`);
    };
  } else {
    return function () {
      //it means it is night
      // English meaning :-> beautiful stark with glory night
      console.log("Wunderschöne Nacht voller Glanz");
    };
  }
};

message("Morning")(
  "der wundervolle Morgen mit strahlender Sonne und gelbem Himmel"
);
message("Evening")("Ich mag Tee");
message()("");
