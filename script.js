const categories = {
  addons: {  
    images:["images/adds/Blue Heart Glasses.jpg","images/adds/Luxury Beige O Sunglasses.jpg","images/adds/Silver Rectangle Shades.jpg","images/adds/Snapback Trucker Cap.jpg","images/adds/télécharger.jpg","images/adds/Violet Trendy Hat.jpg"],
    index: 0,
    element: document.getElementById("addOns"),
    nextBtn: "0nextBtn",
    prevBtn: "0prevBtn",
  },
  tops: {
    images: ["images/tops/55.jpg","images/tops/i.jpg","images/tops/sweater exp.jpg"],
    index: 0,
    element: document.getElementById("tops"),
    nextBtn: "1nextBtn",
    prevBtn: "1prevBtn",
  },
  bottoms: {
    images: ["images/bottoms/6 MUST-HAVE PANTS for GIRLS _ Fashion Tips Tricks - Fashion Tips.jpg","images/bottoms/téléchargerr.jpg","images/bottoms/Roblox.jpg"],
    index: 0,
    element: document.getElementById("bottoms"),
    nextBtn: "2nextBtn",
    prevBtn: "2prevBtn",
  },
  shoes: {  
    images: ["images/shoes/15590307150.jpg","images/shoes/Cute White Bear Slipper.jpg","images/shoes/pp.jpg"],
    index: 0,
    element: document.getElementById("shoes"),
    nextBtn: "3nextBtn",
    prevBtn: "3prevBtn",
  },
};

// Fonction pour mettre à jour l’image affichée
function updateImage(categoryKey) {
  const category = categories[categoryKey];
  category.element.src = category.images[category.index];
}

// Initialisation des images
for (const cat in categories) {
  updateImage(cat);

  // Bouton "next"
  document.getElementById(categories[cat].nextBtn).addEventListener("click", () => {
    categories[cat].index = (categories[cat].index + 1) % categories[cat].images.length;
    updateImage(cat);
  });

  // Bouton "prev"
  document.getElementById(categories[cat].prevBtn).addEventListener("click", () => {
    categories[cat].index = (categories[cat].index - 1 + categories[cat].images.length) % categories[cat].images.length;
    updateImage(cat);
  });
}

// Fonction randomize
function randomize() {
  for (const cat in categories) {
    categories[cat].index = Math.floor(Math.random() * categories[cat].images.length);
    updateImage(cat);
  }
}
document.getElementById("random-btn").addEventListener("click", randomize);






