
"use client";
import { useState } from "react";
import Image from "next/image";

// Liste des projets
const projects = [
  {
    title: "Le Meilleur Reste À Venir",
    description:"Le Meilleur Reste À Venir est un jeu créé lors de l'Unijam 2024, avec pour thème Avenir. Les joueurs incarnent une machine de divination qui prédit l'avenir de ses clients à l'aide de cartes de tarot. En tant que programmeuse,j'ai contribué à la réalisation de ce jeu mêlant mystère et stratégie, où chaque tirage influence l'histoire.",
    images: ["MeilleurA.jpg", "MeilleurC.jpg", "MeilleurD.jpg","MeilleurB.png"],
    link: "https://helloss.itch.io/le-meilleur-reste-a-venir",
  },
  {
    title: "Keur Yaye Soda",
    description:"Dans le cadre d’un projet de groupe, nous avons développé une application web pour un restaurant, intégrant des fonctionnalités de réservation de table, commande en ligne et gestion du menu. J’étais en charge du développement back-end, en utilisant Node.js, Express et MongoDB",
    images: ["keur-yaye.png", "MeilleurC.jpg", "MeilleurD.jpg","MeilleurB.png"],
    link: "https://projet-final-three.vercel.app",
  },
  {
    title: "Faynara Mastour",
    description: "Site de vente de vêtements responsive, développé avec HTML, CSS et Bootstrap. Ce projet inclut une interface utilisateur conviviale permettant de naviguer facilement à travers différentes catégories de produits, de consulter des détails et d'ajouter des articles au panier. Le design est optimisé pour tous les types d'écrans, garantissant une expérience fluide sur desktop et mobile.",
    images: ["fay.png", "fay1.png", "fay2.png", "fay3.png", "fay4.png"],
    link: "https://khadija-diop.github.io/FAYNARA/",
},

  {
    title: "Crossy Road",
    description:"J'ai participé à la création d'un jeu vidéo inspiré de Crossy Road. En tant que programmeuse, j'ai pris en charge l'intégralité de la programmation du jeu, qui a été développé avec Unity. J'ai également contribué au game design pour rendre l'expérience captivante.",
    link: "https://drive.google.com/drive/folders/1znB9G0mLQKTdYqLlX0Qy8611p7zI908x?usp=sharing",
    images: ["Crossy.png"],
    video: "/CrossyRoad.mp4", // Ajout de la vidéo dans ce projet
  },
  {
    title: "Site de Chaussure",
    description: "Interface de commande pour un site de vente de chaussures, permettant aux utilisateurs d'ajouter des produits au panier, de les supprimer et de finaliser leurs achats. Ce projet inclut une gestion dynamique du panier d'achats et un design responsive pour une expérience utilisateur optimale sur différents appareils.",
    link: "https://khadija-diop.github.io/E-commerce-product-page/",
    images: ["sneakers.png"],
    // video: "/CrossyRoad.mp4", // Ajout de la vidéo dans ce projet
  },
  {
    title: "NoteHack",
    description: "NoteHack est une application de type CRUD permettant de gérer des blocs-notes en ligne. L'application offre une interface simple et intuitive, où l'utilisateur peut ajouter, modifier, supprimer et consulter des notes. Un des éléments distinctifs du projet est l'ajout de nuances de fond dynamiques, qui changent en fonction de l'interaction, offrant ainsi une expérience visuelle agréable et immersive.",
    link: "https://khadija-diop.github.io/NoteHack/",
    images: ["Crud.png", "crud2.png", "crud3.png"],
    // video: "/CrossyRoad.mp4", // Ajout de la vidéo dans ce projet
 },
 {
  title: "Dictionnaire",
  description: "Dictionnaire en ligne permettant de rechercher et de consulter les définitions de mots en anglais. L'application offre une interface simple et efficace pour chercher des mots et afficher leur signification ainsi que des exemples d'utilisation. Ce projet est conçu pour offrir une expérience rapide et fluide lors de la recherche de mots.",
  link: "https://khadija-diop.github.io/Dictionnaire/",
  images: ["dict.png"],
  // video: "/CrossyRoad.mp4", // Ajout de la vidéo dans ce projet
 },
  {
    title: "Clocktown Murders",
    description:"J'ai participé à la création d'un jeu de société original lors de la Game Jam 2024 au Ludomaker de Paris-Sorbonne à Saint-Denis. En collaboration avec deux autres personnes, nous avons conçu un jeu d'enquête immersif. J'ai travaillé en game design et narrative design pour construire une expérience captivante où les joueurs incarnent des enquêteurs dans une ville fictive.",
    images: ["clock2.jpg","clock0.jpg", "clock1.jpg"],
  },
 
];

// Modal Component

function Modal({ project, isOpen, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-4xl w-full m-4 max-h-screen overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          {/* Ajuster la taille de l'image */}
          <div className="h-[500px] overflow-hidden">
            <Image
              src={`/${project.images[currentImageIndex]}`}
              alt={`${project.title} image`}
              width={800}  // Augmenter la largeur de l'image
              height={500} // Augmenter la hauteur de l'image
              className="object-cover w-full h-full"
            />
          </div>

          {/* Flèche précédente */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 p-4">
            <button
              onClick={handlePrev}
              className="bg-white text-black p-2 rounded-full shadow-md"
              aria-label="Image précédente"
            >
              &lt;
            </button>
          </div>

          {/* Flèche suivante */}
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 p-4">
            <button
              onClick={handleNext}
              className="bg-white text-black p-2 rounded-full shadow-md"
              aria-label="Image suivante"
            >
              &gt;
            </button>
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-gray-900 mb-4">{project.title}</h3>
        <div className="text-gray-700 mb-4">{project.description}</div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-indigo-600 font-semibold underline"
        >
          Voir le projet
        </a>

        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-white/20 backdrop-blur-md p-2 rounded-full hover:bg-white/40 transition-all duration-300"
          aria-label="Fermer le modal"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

function ProjectCard({ project, onClick }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative">
        {/* Affichage de la vidéo si elle existe */}
        {project.video ? (
          <div className="h-48 overflow-hidden">
            <video
              className="object-cover w-full h-full"
              controls
              autoPlay
              muted
              loop
              aria-label="Vidéo du projet"
            >
              <source src={project.video} type="video/mp4" />
              Votre navigateur ne prend pas en charge la balise vidéo.
            </video>
          </div>
        ) : (
          <div className="h-48 overflow-hidden">
            <Image
              src={`/${project.images[currentImageIndex]}`}
              alt={`${project.title} image`}
              width={500}
              height={375}
              className="object-cover w-full h-full"
            />
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">{project.title}</h3>
        {/* La description est supprimée ici */}
      </div>
    </div>
  );
}


export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-5xl font-extrabold mb-8 text-center text-indigo-700 animate-fade-in">
        Mes projets
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <Modal
          project={selectedProject}
          isOpen={Boolean(selectedProject)}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

