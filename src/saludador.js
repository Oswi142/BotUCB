function saludar(name,edad,genre,idioma) {
  if(idioma=="Español"){
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
  else{
    if(idioma=="Inglés")
    {
      if (edad > 18) {
        if(genre=="M"){
          return "Good morning Mr. " + name;
        }
        else{
          if(genre=="F"){
            return "Good morning Mrs. " + name;
          }
          else{
            return "Good morning " + name;
          }
        }
      } else {
        if(genre=="M"){
          return "Hello young " + name;
        }
        else{
          if(genre=="F"){
            return "Hello miss " + name;
          }
          else{
            return "Buenas días " + name;
          }
        }
      }
    }
    else{
      return "Bienvenido";
    }
  }
}

export default saludar;
