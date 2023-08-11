function saludar(name, edad) {
  if (edad > 18) {
    return "Buenas días " + name;
  } else {
    return "Hola " + name;
  }
}

export default saludar;
