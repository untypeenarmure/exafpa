var auto1 = new Voiture("FN-722-JM",'noire',1300,130,60,5,true,40);

try {
    auto1.toString();
    auto1.mettreEssence(30);
    auto1.repeindre("rouge");
    auto1.seDeplacer(300,100);
    auto1.toString();
}
catch(e) {
    console.error(e.message);
}
// Champ vide
try {
    var auto2 = new Voiture();
} catch(e) {
    console.error(e.message);
}
// Saisie trop courte
try {
    var auto2 = new Voiture("Immat","a");
} catch(e) {
    console.error(e.message);
}
// Mauvais caractères (comme Paul !)
try {
    var auto2 = new Voiture("Immat", "Blouge", "quatorze");
} catch(e) {
    console.error(e.message);
}
// Controle Boolean
try {
    var auto2 = new Voiture("Immat", "Blouge", 850, 130, 60, 5);
} catch(e) {
    console.error(e.message);
}

try {
    auto1.toString();
    auto1.mettreEssence(30);
    auto1.repeindre("rouge");
    auto1.seDeplacer(500,100);
    auto1.toString();
}
catch(e) {
    console.error(e.message);
}

// Controle mettreEssence() - valeur vide ou mauvaise valeur
try {
    auto1.mettreEssence();
} catch(e) {
    console.error(e.message);
}
// Controle seDeplacer() - valeur vide ou mauvaise valeur
try {
    auto1.seDeplacer("Oui");
} catch(e) {
    console.error(e.message);
}
// Controle repeindre() - valeur vide ou mauvaise valeur
try {
    auto1.repeindre();
} catch(e) {
    console.error(e.message);
}