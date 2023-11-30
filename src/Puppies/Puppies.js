import React from "react";
import PupCard from "../PupCard";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./Puppies.css";

const puppies = [
  {
    id: 1,
    name: "Bella, La Exploradora",
    images: [
      "/images/pups/pup1c.jpeg",
      "/images/pups/pup1a.jpeg",
      "/images/pups/pup1b.jpeg",
      "/images/pups/pup1d.jpeg",
      "/images/pups/pup1e.jpeg",
    ],
    description:
      "Bella aspira a ser la líder de la manada. Siempre está dispuesta a ser la primera en probar cosas nuevas y es toda una pequeña exploradora. Tiene un espíritu muy aventurero.",
  },
  {
    id: 2,
    name: "Luna, La Curiosa",
    images: [
      "/images/pups/pup2a.jpeg",
      "/images/pups/pup2b.jpeg",
      "/images/pups/pup2c.jpeg",
      "/images/pups/pup2d.jpeg",
      "/images/pups/pup2e.jpeg",
      "/images/pups/pup2f.jpeg",
    ],
    description:
      "Luna es una perra pequeña de color marrón claro y pelaje canela. Es enérgica, le encanta jugar y siempre está curiosa por su entorno.",
  },
  {
    id: 3,
    name: "Diego, El Bromista",
    images: [
      "/images/pups/pup3a.jpeg",
      "/images/pups/pup3b.jpeg",
      "/images/pups/pup3c.jpeg",
      "/images/pups/pup3d.jpeg",
      "/images/pups/pup3e.jpeg",
      "/images/pups/pup3f.jpeg",
      "/images/pups/pup3g.jpeg",
    ],
    description:
      "Diego es todo un amor. Siempre es el primero en venir a saludar y siempre quiere que lo recojan y lo mimen. También es muy juguetón con los otros cachorros y a menudo se le puede ver jugando mucho con su hermano Rico, el otro peludo marrón.",
  },
  {
    id: 4,
    name: "Sophia, La Sabia",
    images: [
      "/images/pups/pup4a.jpeg",
      "/images/pups/pup4b.jpeg",
      "/images/pups/pup4c.jpeg",
      "/images/pups/pup4d.jpeg",
    ],
    description:
      "Sofía es otra de las perras con marcas alrededor de los ojos, pero las suyas son un poco más tenues. Es un poco reservada pero parece muy sabia, y le encanta explorar nuevas áreas con su hermana Bella.",
  },
  {
    id: 5,
    name: "Paloma, La Observadora",
    images: [
      "/images/pups/pup5a.jpeg",
      "/images/pups/pup5b.jpeg",
      "/images/pups/pup5c.jpeg",
      "/images/pups/pup5d.jpeg",
    ],
    description:
      "Paloma es de un color beige claro como su mamá, es una de las perras más compactas y se ve un poco tímida, pero es que siempre está observando todo a su alrededor.",
  },
  {
    id: 6,
    name: "Mateo, El Que Retosa",
    images: ["/images/pups/pup6a.jpeg"],
    description:
      "Mateo es uno de los tres perros con marcas de ojo blanco y marrón y es muy extrovertido. Siempre anda buscando con quien retosar.",
  },
  {
    id: 7,
    name: "Rico, Rey De Los Jugetes",
    images: ["/images/pups/pup7a.jpeg", "/images/pups/pup7b.jpeg"],
    description:
      "Rico es uno de los dos perros marrones que son muy juguetones y sociables también con las personas. Le encanta la comida y los juguetes suaves de silicona. A menudo se le puede encontrar llevando dicho juguete en la boca.",
  },
  {
    id: 8,
    name: "Santo, Zenmaster",
    images: ["/images/pups/pup8a.jpg"],
    description:
      "Santo es un perro súper Zen, tiene una energía tranquila y calmante que influye positivamente en los otros perros. También, es completamente negro con cabello suave y lacio.",
  },
];

// const puppies = [
//   // Array of puppy objects, each with an id, name, image, and description
//   {
//     id: 1,
//     name: "Puppy 1",
//     images: ["images/pup1.jpg"],
//     description: "Very playful and friendly.",
//   },
//   {
//     id: 2,
//     name: "Puppy 2",
//     images: ["images/pup2.jpg"],
//     description: "Shy but affectionate.",
//   },
//   {
//     id: 3,
//     name: "Puppy 3",
//     images: ["images/pup3.jpg"],
//     description: "Shy but affectionate.",
//   },
//   {
//     id: 4,
//     name: "Puppy 4",
//     images: ["images/pup4.jpg"],
//     description: "Shy but affectionate.",
//   },
//   {
//     id: 5,
//     name: "Puppy 5",
//     images: ["images/pup1.jpg"],
//     description: "Shy but affectionate.",
//   },
//   {
//     id: 6,
//     name: "Puppy 6",
//     images: ["images/pup2.jpg"],
//     description: "Shy but affectionate.",
//   },
//   {
//     id: 7,
//     name: "Puppy 7",
//     images: ["images/pup3.jpg"],
//     description: "Shy but affectionate.",
//   },
//   {
//     id: 8,
//     name: "Puppy 8",
//     images: ["images/pup4.jpg"],
//     description: "Shy but affectionate.",
//   },

// ];

const Puppies = () => {
  return (
    <div>
      <h1>Los Cachorros</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
          justifyContent: "center", // This ensures that the items themselves are centered in the grid container
          gap: "1rem",
          padding: "1rem",
        }}
      >
        {puppies.map((puppy) => (
          <div
            key={puppy.id}
            style={{ width: "100%", maxWidth: "345px", margin: "0 auto" }}
          >
            {" "}
            <PupCard key={puppy.id} puppy={puppy} />
          </div>
        ))}
      </div>

      <div style={{ display: "grid", placeItems: "center" }}>
        <h1>Videos</h1>
        <div className="iframe-container" style={{ paddingBottom: "20px" }}>
          <iframe
            style={{ width: "100%", height: "100%", position: "absolute" }}
            src="https://www.youtube.com/embed/7DT1KyKvSj8?si=3WXymW0hMP_SENRm"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="iframe-container" style={{ paddingBottom: "20px" }}>
          <iframe
            style={{ width: "100%", height: "100%", position: "absolute" }}
            src="https://www.youtube.com/embed/bWMj-VaVKUo?si=UQgrN7yofq6fS2hm"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <h2>Más videos próximamente. Atención a este espacio! </h2>
      </div>
    </div>
  );
};

export default Puppies;
