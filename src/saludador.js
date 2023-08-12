function saludar(name,edad,genre,idioma,tiempo) {
  if(tiempo=="Mañana"){
    if(idioma=="Español"){
      if (edad > 18) {
        if(genre=="M"){
          return "Buenos días señor " + name;
        }
        else{
          if(genre=="F"){
            return "Buenos días señora " + name;
          }
          else{
            return "Buenos días " + name;
          }
        }
      } else {
        if(genre=="M"){
          return "Buenos días joven " + name;
        }
        else{
          if(genre=="F"){
            return "Buenos días señorita " + name;
          }
          else{
            return "Buenos días " + name;
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
              return "Good morning " + name;
            }
          }
        }
      }
    }
  }
  if(tiempo=="Tarde"){
    if(idioma=="Español"){
      if (edad > 18) {
        if(genre=="M"){
          return "Buenas tardes señor " + name;
        }
        else{
          if(genre=="F"){
            return "Buenas tardes señora " + name;
          }
          else{
            return "Buenas tardes " + name;
          }
        }
      } else {
        if(genre=="M"){
          return "Buenas tardes joven " + name;
        }
        else{
          if(genre=="F"){
            return "Buenas tardes señorita " + name;
          }
          else{
            return "Buenas tardes " + name;
          }
        }
      }
    }
    else{
      if(idioma=="Inglés")
      {
        if (edad > 18) {
          if(genre=="M"){
            return "Good afternoon Mr. " + name;
          }
          else{
            if(genre=="F"){
              return "Good afternoon Mrs. " + name;
            }
            else{
              return "Good afternoon " + name;
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
              return "Good afternoon " + name;
            }
          }
        }
      }
    }
  }
  if(tiempo=="Noche"){
    if(idioma=="Español"){
      if (edad > 18) {
        if(genre=="M"){
          return "Buenas noches señor " + name;
        }
        else{
          if(genre=="F"){
            return "Buenas noches señora " + name;
          }
          else{
            return "Buenas noches " + name;
          }
        }
      } else {
        if(genre=="M"){
          return "Buenas noches joven " + name;
        }
        else{
          if(genre=="F"){
            return "Buenas noches señorita " + name;
          }
          else{
            return "Buenas noches " + name;
          }
        }
      }
    }
    else{
      if(idioma=="Inglés")
      {
        if (edad > 18) {
          if(genre=="M"){
            return "Good night Mr. " + name;
          }
          else{
            if(genre=="F"){
              return "Good night Mrs. " + name;
            }
            else{
              return "Good night " + name;
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
              return "Good night " + name;
            }
          }
        }
      }
    }
  }
}

export default saludar;
