import React from "react";
import PupCard from "./PupCard";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const puppies = [
  {
    id: 1,
    name: "Bella",
    images: [
      "/images/pups/pup1c.jpeg",
      "/images/pups/pup1a.jpeg",
      "/images/pups/pup1b.jpeg",
      "/images/pups/pup1d.jpeg",
      "/images/pups/pup1e.jpeg",
    ],
    description: "Very playful and friendly.",
  },
  {
    id: 2,
    name: "Luna",
    images: [
      "/images/pups/pup2a.jpeg",
      "/images/pups/pup2b.jpeg",
      "/images/pups/pup2c.jpeg",
      "/images/pups/pup2d.jpeg",
      "/images/pups/pup2e.jpeg",
      "/images/pups/pup2f.jpeg",
    ],
    description: "Shy but affectionate.",
  },
  {
    id: 3,
    name: "Diego",
    images: [
      "/images/pups/pup3a.jpeg",
      "/images/pups/pup3b.jpeg",
      "/images/pups/pup3c.jpeg",
      "/images/pups/pup3d.jpeg",
      "/images/pups/pup3e.jpeg",
      "/images/pups/pup3f.jpeg",
      "/images/pups/pup3g.jpeg",
    ],
    description: "Loves to nap and cuddle.",
  },
  {
    id: 4,
    name: "Sophia",
    images: [
      "/images/pups/pup4a.jpeg",
      "/images/pups/pup4b.jpeg",
      "/images/pups/pup4c.jpeg",
      "/images/pups/pup4d.jpeg",
    ],
    description: "Active and enjoys walks.",
  },
  {
    id: 5,
    name: "Paloma",
    images: [
      "/images/pups/pup5a.jpeg",
      "/images/pups/pup5b.jpeg",
      "/images/pups/pup5c.jpeg",
      "/images/pups/pup5d.jpeg",
    ],
    description: "Curious and loves to explore.",
  },
  {
    id: 6,
    name: "Mateo",
    images: ["/images/pups/pup6a.jpeg"],
    description: "Gentle and loves kids.",
  },
  {
    id: 7,
    name: "Rico",
    images: ["/images/pups/pup7a.jpeg", "/images/pups/pup7b.jpeg"],
    description: "Calm and great with other pets.",
  },
  {
    id: 8,
    name: "Santo",
    images: ["/images/pups/pup8a.jpg"],
    description: "Affectionate and enjoys cuddles.",
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

const PhotoGallery = () => {
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
    </div>
  );
};

export default PhotoGallery;
