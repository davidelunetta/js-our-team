// Creare un array di oggetti con le informazioni
let teamMembers = [
    {
      name: "Wayne Barnett",
      role: "Founder & CEO",
      foto: "wayne-barnett-founder-ceo.jpg"
    },
    {
      name: "Angela Caroll",
      role: "Chief Editor",
      foto: "angela-caroll-chief-editor.jpg"
    },
    {
      name: "Walter Gordon",
      role: "Office Manager",
      foto: "walter-gordon-office-manager.jpg"
    },
    {
      name: "Angela Lopez",
      role: "Social Media Manager",
      foto: "angela-lopez-social-media-manager.jpg"
    },
    {
      name: "Scott Estrada",
      role: "Developer",
      foto: "scott-estrada-developer.jpg"
    },
    {
      name: "Barbara Ramos",
      role: "Graphic Designer",
      foto: "barbara-ramos-graphic-designer.jpg"
    }
  ];
  
  let teamInfoElement = document.getElementById("team-info");

  // Creare e aggiungere le informazioni dei membri del team al DOM
  for (let i = 0; i < teamMembers.length; i++) {
      let memberInfo = document.createElement("div");
      memberInfo.innerHTML = "Name: " + teamMembers[i].name + "<br>" +
                            "Role: " + teamMembers[i].role + "<br>";

      let fotoElement = document.createElement("img");
      fotoElement.src = teamMembers[i].foto;
      fotoElement.alt = teamMembers[i].name + " - Foto";
      
      memberInfo.appendChild(fotoElement);
      teamInfoElement.appendChild(memberInfo);

      let separator = document.createElement("hr");
      teamInfoElement.appendChild(separator);
  }