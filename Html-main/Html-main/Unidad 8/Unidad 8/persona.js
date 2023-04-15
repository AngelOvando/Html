const persona = {
    nombre: "Angel",
    edad: "25",
    correoelectronico: "ovando.angel16@gmail.com",
    datosdepersona() {
      document.write(
        `Nombre de la persona: ${this.nombre} </br> Edad: ${this.edad} </br> Correo electronico: ${this.correoelectronico}`
      );
    },
  };
  console.log(persona.datosdepersona());