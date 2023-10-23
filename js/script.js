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
  
  // Stampare le informazioni su console
  for (let i = 0; i < teamMembers.length; i++) {
    console.log("Name: " + teamMembers[i].name);
    console.log("Role: " + teamMembers[i].role);
    console.log("Foto: " + teamMembers[i].foto);
    console.log(""); // Aggiunge una riga vuota per separare le informazioni dei membri del team
  }
  