function Voiture(vimmatriculation, vcouleur, vpoids, vpuissance, vcapacite, vplaces, vassure, vniveau = 5)
{

////////////////////////// Initialisation Variables
    var immatriculation = "";
    var couleur = "";
    var poids = 0;
    var puissance = 0;
    var capacite = 0;
    var niveau = 0;
    var places = 0;
    var assure = false;
    
////////////////////////// Getters & Setters

    ///// Immatriculation
    this.getImmatriculation = function() {
        return immatriculation;
    }
    ///
    var setImmatriculation = function(newImmatriculation) {
        if (!newImmatriculation) {
            throw Error(" -- Immatriculation: Champ requis -- ");
        }
        else if (newImmatriculation.length < 2) {
            throw new Error(" -- Immatriculation: Saisie incorrecte. Pas assez de caractères -- ");
        }
        else {
            immatriculation = newImmatriculation;
        }
    }
    ///// Couleur
    this.getCouleur = function() {
        return couleur;
    }
    ///
    var setCouleur = function(newCouleur) {
        if (!newCouleur) {
            throw Error(" -- Couleur: Champ requis -- ");
        }
        else if (newCouleur.length < 2) {
            throw new Error(" -- Couleur: Saisie incorrecte. Pas assez de caractères -- ");
        }
        else if (!isNaN(newCouleur)) {
            throw new Error(" -- Couleur: Pas de chiffre pour décrire la couleur -- ");
        }
        else {
            couleur = newCouleur;
        }
    }

    ///// Poids    
    this.getPoids = function() {
        return poids;
    }
    ///
    var setPoids = function(newPoids) {
        if (!newPoids) {
            throw Error(" -- Poids: Champ requis -- ");
        }
        else if (newPoids.length < 2) {
            throw new Error(" -- Poids: Saisie incorrecte. Pas assez de caractères -- ");
        }
        else if (isNaN(newPoids)) {
            throw new Error(" -- Poids: Chiffres uniquement -- ");
        }
        else {
            poids = newPoids;
        }
    }

    ///// Puissance
    this.getPuissance = function() {
        return puissance;
    }
    ///
    var setPuissance = function(newPuissance) {
        if (!newPuissance) {
            throw Error(" -- Puissance: Champ requis -- ");
        }
        else if (newPuissance.length < 2) {
            throw new Error(" -- Puissance: Saisie incorrecte. Pas assez de caractères -- ");
        }
        else if (isNaN(newPuissance)) {
            throw new Error(" -- Puissance: Chiffres uniquement -- ");
        }
        else {
            puissance = newPuissance;
        }
    }

    ///// Capacité
    this.getCapacite = function() {
        return capacite;
    }
    ///
    var setCapacite = function(newCapacite) {
        if (!newCapacite) {
            throw Error(" -- Capacite: Champ requis -- ");
        }
        else if (newCapacite.length > 1) {
            throw new Error(" -- Capacite: Aucun minivan disponible. Max 9 places -- ");
        }
        else if (isNaN(newCapacite)) {
            throw new Error(" -- Capacite: Chiffres uniquement -- ");
        }
        else {
            capacite = newCapacite;
        }
    }

    ///// Niveau d'essence
    this.getNiveau = function() {
        return niveau;
    }
    ///
    var setNiveau = function(newNiveau) {
        if (!newNiveau) {
            throw new Error(" -- Niveau: Champs requis -- ");
        }
        else if (isNaN(newNiveau)) {
            throw new Error(" -- Niveau: Chiffres uniquement -- ");
        }
        else {
            niveau = newNiveau;
        }
    }

    ///// Places
    this.getPlaces = function() {
        return places;
    }
    ///
    var setPlaces = function(newPlaces) {
        if (!newPlaces) {
            throw Error(" -- Places: Champ requis -- ");
        }
        else if (newPlaces.length > 1) {
            throw new Error(" -- Places: Aucun minivan disponible. Max 9 places -- ");
        }
        else if (isNaN(newPlaces)) {
            throw new Error(" -- Places: Chiffres uniquement -- ");
        }
        else {
            places = newPlaces;
        }
    }

    ///// Assurance
    this.getAssure = function() {
        return assure;
    }
    ///
    var setAssure = function(newAssure) {
        if (newAssure != true && newAssure != false) {
            throw new Error(" -- Assurance: Le véhicule est-il assuré ? -- ")
        }
        else {
            assure = newAssure;
        }
    }

////////////////////////// Calls    
    setImmatriculation(vimmatriculation);
    setCouleur(vcouleur);
    setPoids(vpoids);
    setPuissance(vpuissance);
    setCapacite(vcapacite);
    setPlaces(vplaces);
    setAssure(vassure);
    setNiveau(vniveau);


////////////////////////// Méthode repeindre()
    this.repeindre = function(newCouleur) {
        if(!newCouleur || !isNaN(newCouleur)) {
            throw new Error("Veuillez renseigner une couleur");
        }
        else if (this.couleur == newCouleur) {
            console.log("Merci du rafraîchissement !");
        }
        else if (this.couleur != newCouleur) {
            couleur = newCouleur;
            console.log("Wouhou ! Je suis magnifique en "+ couleur +" !");
        }
    }


////////////////////////// Méthode mettreEssence()
    this.mettreEssence = function(newQuantite) {
        if(!newQuantite || isNaN(newQuantite)) {
            throw new Error("Veuillez renseigner une quantité");
        }
        else if(this.niveau + newQuantite > newQuantite) {
            console.log("Attention, tu vas mettre trop d'essence !");
        }
        else {
            console.log("Merci de m'avoir donné "+newQuantite+ " litres !")
            niveau = newQuantite;
        }
    }


////////////////////////// Méthode seDeplacer()
    this.seDeplacer = function(distance,vmoy) {
        var conso = 0;
        if(vmoy < 50) {
            conso = 10;
        }
        else if(vmoy > 50 && vmoy < 90) {
            conso = 5;
        }
        else if(vmoy > 90 && vmoy < 130) {
            conso = 8;
        }
        else if(vmoy > 130) {
            conso = 12;
        }

        var litreConso = (distance*conso)/100;

        if(!distance || !vmoy || isNaN(distance) || isNaN(vmoy)) {
            throw new Error("Veuillez renseigner une distance et une vitesse moyenne");
        }
        else if(litreConso > niveau) {
            console.log("Attention, tu n'as pas assez d'essence !");
        }
        else {
            niveau = niveau - litreConso;
            console.log("Ton trajet est possible ! Il te restera "+niveau+" L d'essence");
        }
    }

    this.toString = function() {
        console.log("Votre voiture "+couleur+" immatriculée : "+ immatriculation +" a comme puissance : "+puissance+"ch et il reste "+niveau+" litres d'essence.");
    }
}