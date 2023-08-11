function saludar(name, edad,genre) {
  if (edad > 18) {
    if(genre=="M"){
      return "Buenas días señor " + name;
    }
    else{
      if(genre=="F"){
        return "Buenas días señora " + name;
      }
      else{
        return "Buenas días " + name;
      }
    }
  } else {
    if(genre=="M"){
      return "Buenas días joven " + name;
    }
    else{
      if(genre=="F"){
        return "Buenas días señorita " + name;
      }
      else{
        return "Buenas días " + name;
      }
    }
  }
}

export default saludar;
