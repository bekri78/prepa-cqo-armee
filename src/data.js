const questions = [
  {
    questionText:
      "Quel est l'organisme qui coordonne les actions de communication institutionnelle du ministère des armées ?",
    questionOptions: [
      { reponseChoix: "La DICOM", isCorrect: false },
      { reponseChoix: "La SIG", isCorrect: false },
      { reponseChoix: "La DICoD", isCorrect: true },
      { reponseChoix: "ECPAD", isCorrect: false },
    ],
  },
  {
    questionText:
      "Dans les Ministères autres que le MinArm, qui est en charge de la communication ?",
    questionOptions: [
      { reponseChoix: "EMA COM", isCorrect: false },
      { reponseChoix: "Les DIRCOMS respectifs", isCorrect: true },
      { reponseChoix: "Les commandants de base", isCorrect: false },
      { reponseChoix: "Les VASP", isCorrect: false },
    ],
  },
  {
    questionText:
      "Un journaliste vous contacte pour une ITW dans une semaine, que devez-vous faire ?",
    questionOptions: [
      {
        reponseChoix: "Lui répondre rapidement pour ne pas le faire attendre",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Briefer son unité sur la potentielle arrivée de ce journaliste",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Contacter l'officier communication et mon CDU afin d'être autorisé à s'exprimer et de préparer l'interview le cas échéant",
        isCorrect: true,
      },
      {
        reponseChoix: "Demander une autorisation d'interview par le CEMA",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "Quel est le média d'information le plus consulté par les français ?",
    questionOptions: [
      { reponseChoix: "La radio", isCorrect: false },
      { reponseChoix: "La télévision", isCorrect: true },
      { reponseChoix: "TIKTOK", isCorrect: false },
      { reponseChoix: "Instagram", isCorrect: false },
    ],
  },
  {
    questionText: "Quand un interview commence-t-il ?",
    questionOptions: [
      { reponseChoix: "Dès la présence du journaliste", isCorrect: true },
      {
        reponseChoix:
          "Au premier échange, de n’importe quelle nature qu’il soit",
        isCorrect: false,
      },
      {
        reponseChoix: "Lorsque le journaliste pose sa première question",
        isCorrect: false,
      },
      { reponseChoix: "Au café avant l’entretien", isCorrect: false },
    ],
  },
  {
    questionText: "Quels sont les deux types de crise ?",
    questionOptions: [
      { reponseChoix: "Sous-jacente et Spontanée", isCorrect: false },
      { reponseChoix: "Latente et Imprévue", isCorrect: false },
      { reponseChoix: "Souterraine et Imprévisible", isCorrect: false },
      { reponseChoix: "Sous-jacente et Imprévue", isCorrect: true },
    ],
  },
  {
    questionText:
      "Quel service communique les informations relatives à l'emploi des forces ?",
    questionOptions: [
      { reponseChoix: "Le CIRFA", isCorrect: false },
      { reponseChoix: "La DICoD", isCorrect: true },
      { reponseChoix: "Le SIRPA", isCorrect: false },
      { reponseChoix: "La DIRCOM", isCorrect: false },
    ],
  },
  {
    questionText:
      "Quand est signée la déclaration des devoirs et des droits des journalistes ?",
    questionOptions: [
      { reponseChoix: "En 2012", isCorrect: false },
      { reponseChoix: "En 1980", isCorrect: false },
      { reponseChoix: "En 1972", isCorrect: false },
      { reponseChoix: "En 1971", isCorrect: true },
    ],
  },
  {
    questionText: "Que signifie l'acronyme SIRPA ?",
    questionOptions: [
      {
        reponseChoix: "Section d’Informations et de Reproductions des Armées",
        isCorrect: false,
      },
      {
        reponseChoix: "Section d'Inspection et de Réparation des Pays Alliés",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Service d'Informations et de Relations Publiques des Armées",
        isCorrect: true,
      },
      {
        reponseChoix: "Service de désinformation et de Relations Publiques",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "À partir de quel pourcentage de revenu la carte d'identité des journalistes professionnels est-elle attribuée ?",
    questionOptions: [
      {
        reponseChoix: "À partir de 51% des revenus liés au journalisme",
        isCorrect: true,
      },
      {
        reponseChoix: "À partir de 80% des revenus liés au journalisme",
        isCorrect: false,
      },
      { reponseChoix: "Jamais", isCorrect: false },
      {
        reponseChoix: "À partir de 61% des revenus liés au journalisme",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "Sur une base aérienne de type XXI, quel pôle n’est pas intégré dans l’état-major fonctionnel ?",
    questionOptions: [
      { reponseChoix: "Le pole sécurité protection", isCorrect: false },
      { reponseChoix: "Le pole appui commandement", isCorrect: false },
      {
        reponseChoix: "Le pole interface soutiens/maitrise des activités",
        isCorrect: false,
      },
      { reponseChoix: "Le pôle commandement", isCorrect: true },
    ],
  },
  {
    questionText: "Que signifie CDAOA ?",
    questionOptions: [
      {
        reponseChoix:
          "Commandement de détection aérienne et des opérations aériennes",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Commandement de la défense aérienne et de l’organisation aérienne ",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Commandement de la défense aérienne et des opérations aériennes",
        isCorrect: true,
      },
      {
        reponseChoix:
          "Commandement de la défense aérienne et de l’organisation des airs ",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "Que signifie LPM ?",
    questionOptions: [
      { reponseChoix: "Loi de prévention militaire", isCorrect: false },
      { reponseChoix: "Législation de programmation", isCorrect: false },
      { reponseChoix: "Loi de programmation militaire", isCorrect: true },
      { reponseChoix: "Loi de programmation managériale", isCorrect: false },
    ],
  },
  {
    questionText: "Que définit le livre blanc ?",
    questionOptions: [
      {
        reponseChoix: "Il définit la préparation globale des armées en France",
        isCorrect: false,
      },
      {
        reponseChoix: "Il définit les prochaines missions des armées",
        isCorrect: false,
      },
      {
        reponseChoix: "Il définit les scénarios de projections ",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Il définit la stratégie globale de défense et de sécurité nationale de la France",
        isCorrect: true,
      },
    ],
  },
  {
    questionText: "Quel est le commandement organique de l’armée de l’air ?",
    questionOptions: [
      {
        reponseChoix: "Le commandement des forces opérationnelles stratégiques",
        isCorrect: false,
      },
      {
        reponseChoix: "Le commandement des forces terrestres",
        isCorrect: false,
      },
      {
        reponseChoix: "Le commandement tactique interarmées",
        isCorrect: false,
      },
      { reponseChoix: "Le commandement des forces aériennes", isCorrect: true },
    ],
  },
  {
    questionText: "Quelles sont les 3 grandes missions de l’armée de l’air ?",
    questionOptions: [
      {
        reponseChoix: "Protection / Dissuasion / Intervention",
        isCorrect: true,
      },
      {
        reponseChoix: "Protection / Déploiement / Action immediate",
        isCorrect: false,
      },
      { reponseChoix: "Protection / Déploiement / Action", isCorrect: false },
      { reponseChoix: "Défense / Dissuasion / Intervention", isCorrect: false },
    ],
  },
  {
    questionText:
      "Sur une base aérienne type XXI, de qui relève l’officier sécurité adjoint base ?",
    questionOptions: [
      { reponseChoix: "Du Pole appui commandement", isCorrect: false },
      { reponseChoix: "Du Pole maitrise des risques", isCorrect: false },
      { reponseChoix: "Du groupe de sécurité protection", isCorrect: false },
      { reponseChoix: "Du Pole sécurité protection", isCorrect: true },
    ],
  },
  {
    questionText: "A quoi correspond deux barres jaunes sur le grade ?",
    questionOptions: [
      { reponseChoix: "Capitaine", isCorrect: false },
      { reponseChoix: "Sergent-Chef", isCorrect: false },
      { reponseChoix: "Lieutenant", isCorrect: true },
      { reponseChoix: "Major", isCorrect: false },
    ],
  },
  {
    questionText:
      "Par qui sont menés les opérations concernant les éléments Air de la composante aéroportée de la dissuasion nucléaire française ?",
    questionOptions: [
      { reponseChoix: "Le CDAOA", isCorrect: false },
      { reponseChoix: "Le CEMAA", isCorrect: false },
      { reponseChoix: "Le CFAS", isCorrect: true },
      { reponseChoix: "Le CFA", isCorrect: false },
    ],
  },
  {
    questionText:
      "En topographie, quel nom porte une courbe de niveau en trait discontinu ?",
    questionOptions: [
      { reponseChoix: "Intercalaire", isCorrect: true },
      { reponseChoix: "Intervalle", isCorrect: false },
      { reponseChoix: "Perpendiculaire", isCorrect: false },
      { reponseChoix: "Segment", isCorrect: false },
    ],
  },
  {
    questionText: "A quoi correspond le triangle du feu ?",
    questionOptions: [
      { reponseChoix: "Combustible + Froid + Comburant", isCorrect: false },
      { reponseChoix: "Combustible + Chaleur + Eau", isCorrect: false },
      { reponseChoix: "Combustible + Chaleur + Pierre", isCorrect: false },
      { reponseChoix: "Combustible + Chaleur + Comburant", isCorrect: true },
    ],
  },
  {
    questionText: "Quel est le nombre de victoires de Fonck ?",
    questionOptions: [
      { reponseChoix: "53", isCorrect: false },
      { reponseChoix: "20", isCorrect: false },
      { reponseChoix: "75", isCorrect: true },
      { reponseChoix: "45", isCorrect: false },
    ],
  },
  {
    questionText: "Quelles sont les valeurs de l’Armée de l’Air ?",
    questionOptions: [
      {
        reponseChoix: "Respect / Importance / Service / Excellence",
        isCorrect: false,
      },
      {
        reponseChoix: "Respect / Intégrité / Service / Excellence",
        isCorrect: true,
      },
      {
        reponseChoix: "Respect / Intégrité / Service / Exploit",
        isCorrect: false,
      },
      {
        reponseChoix: "Respect / Importance / Service / Excellence",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "Quelle est la fonction du Ministre des Armées ?",
    questionOptions: [
      {
        reponseChoix: "Il détermine et conduit la politique de la nation",
        isCorrect: false,
      },
      {
        reponseChoix: "Il est responsable de la défense nationale",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Il est responsable de l’exécution de la politique militaire",
        isCorrect: true,
      },
      {
        reponseChoix: "Il est compétent pour déclarer la guerre",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "L’armée de l’air n’est pas composé de :",
    questionOptions: [
      { reponseChoix: "C130 Hercules", isCorrect: false },
      { reponseChoix: "C135 FR", isCorrect: false },
      { reponseChoix: "A400 M", isCorrect: false },
      { reponseChoix: "C17", isCorrect: true },
    ],
  },
  {
    questionText:
      "Quels sont les actes élémentaires (actes réflexes du combattant) ?",
    questionOptions: [
      {
        reponseChoix: "Se déplacer / Se poster / Utiliser son arme",
        isCorrect: true,
      },
      {
        reponseChoix: "Se poster / Se déplacer / Utiliser son arme",
        isCorrect: false,
      },
      {
        reponseChoix: "Se poster / Utiliser son arme / Se suicider",
        isCorrect: false,
      },
      {
        reponseChoix: "Se déplacer / Utiliser son arme / Se poster ",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "Pour survivre en terrain hostile, il y a 4 priorités",
    questionOptions: [
      {
        reponseChoix: "S’hydrater / Se protéger / se nourrir / Se signaler",
        isCorrect: false,
      },
      {
        reponseChoix: "S’enterrer / Se signaler / Se nourrir / Attendre",
        isCorrect: false,
      },
      {
        reponseChoix: "Se protéger / Se signaler / S’hydrater / Se nourrir",
        isCorrect: true,
      },
      {
        reponseChoix:
          "Se protéger / Ne pas s’hydrater / Ne pas se nourrir / Se signaler",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "Quelles sont les parties les plus importantes du FAMAS ?",
    questionOptions: [
      {
        reponseChoix:
          "Corps du fusil / Ensemble mobile / Goupille d’armement / Crosse / Poignée garde main",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Corps du fusil / Ensemble mobile / Coupleur tactique /Crosse / Poignée garde main",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Corps du fusil / Ensemble mobile / Boitier mécanisme / Crosse / Poignée garde main",
        isCorrect: true,
      },
      {
        reponseChoix:
          "Corps du fusil / Ensemble mobile / Boitier mécanisme / Crosse / Eotech",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "Quelles sont les parties les plus importantes du PAMAS ?",
    questionOptions: [
      {
        reponseChoix: "Carcasse / Rack / Canon / Ressort / Coupleur / Chargeur",
        isCorrect: false,
      },
      {
        reponseChoix: "Carcasse / Glissière / Canon / Ressort / Chargeur",
        isCorrect: true,
      },
      {
        reponseChoix:
          "Corps du pistolet / Glissière / Percuteur / Ressort / Chargeur",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Carcasse / Glissière / Bloc détente / Ressort / Chargeur",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "Quel est le calibre du FAMAS ?",
    questionOptions: [
      { reponseChoix: "9.20", isCorrect: false },
      { reponseChoix: "6.50", isCorrect: false },
      { reponseChoix: "5.556", isCorrect: false },
      { reponseChoix: "5.56", isCorrect: true },
    ],
  },
  {
    questionText: "Quelle est la portée utile du PAMAS ?",
    questionOptions: [
      { reponseChoix: "100", isCorrect: false },
      { reponseChoix: "50", isCorrect: true },
      { reponseChoix: "70", isCorrect: false },
      { reponseChoix: "40", isCorrect: false },
    ],
  },
  {
    questionText:
      "Quelle est la règle de sécurité numéro 3 concernant l’armement ?",
    questionOptions: [
      {
        reponseChoix: "Être sûr de son objectif et de son environnement",
        isCorrect: false,
      },
      {
        reponseChoix: "Mettre son chargeur, pointer son camarade, le rassurer",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Garder l’index hors de la détente tant que les organes de visée ne sont pas sur l’objectif",
        isCorrect: true,
      },
      {
        reponseChoix:
          "Toutes les armes doivent être considérées comme chargées",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "Ou se trouve l’éjecteur sur le PAMAS ?",
    questionOptions: [
      { reponseChoix: "Sur le canon ", isCorrect: false },
      { reponseChoix: "Sur la carcasse", isCorrect: true },
      { reponseChoix: "Sur la platine", isCorrect: false },
      { reponseChoix: "Sur le système de percussion", isCorrect: false },
    ],
  },
  {
    questionText: "Quelle est la portée utile du PAMAS ?",
    questionOptions: [
      { reponseChoix: "100", isCorrect: false },
      { reponseChoix: "50", isCorrect: true },
      { reponseChoix: "70", isCorrect: false },
      { reponseChoix: "40", isCorrect: false },
    ],
  },
  {
    questionText: "Quelle est la composition d’une grenade ?",
    questionOptions: [
      {
        reponseChoix: "Artifice d’engagement / Corps / Cuirasse",
        isCorrect: false,
      },
      { reponseChoix: "Chargement / Métal / Corp", isCorrect: false },
      {
        reponseChoix: "Artifice d’amorçage / Corps / Chargement",
        isCorrect: true,
      },
      {
        reponseChoix: "Goupille / Artifice d’amorçage / Corps",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "A quoi servent les procédures de transmission ?",
    questionOptions: [
      {
        reponseChoix:
          "A conserver l’exactitude, la rapidité, et la sécurité de l’information",
        isCorrect: true,
      },
      {
        reponseChoix:
          "A maîtriser les flux de communication et l’exécution des ordres",
        isCorrect: false,
      },
      {
        reponseChoix: "A concentrer l’activité des transmissions",
        isCorrect: false,
      },
      {
        reponseChoix: "A neutraliser les capacités de communication ennemie",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "A quoi correspond l’indicatif ? ",
    questionOptions: [
      {
        reponseChoix: "C’est un ensemble de chiffres et de mots",
        isCorrect: false,
      },
      { reponseChoix: "C’est un ensemble d’expressions", isCorrect: false },
      {
        reponseChoix: "C’est un ensemble de lettres et de chiffres",
        isCorrect: true,
      },
      {
        reponseChoix: "C’est une phrase prononcée distinctement",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "Quels sont les régimes d’exploitation de transmissions ?",
    questionOptions: [
      {
        reponseChoix: "Ecoute totale / Ecoute permanente / Silence",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Ecoute permanente / Ecoute permanente par la seule station directrice / Vacations",
        isCorrect: true,
      },
      {
        reponseChoix:
          "Ecoute à large spectre / Ecoute en flux tendu / Vacations",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Ecoute longue portée / Ecoute moyenne portée / Ecoute courte portée ",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "Quels sont les régimes d’emploi des transmissions ?",
    questionOptions: [
      { reponseChoix: "Stop / Discrétion / Ligne ouverte", isCorrect: false },
      { reponseChoix: "Liberté / Discrétion / Silence", isCorrect: true },
      { reponseChoix: "Liberté / Maintien / Stand-by", isCorrect: false },
      { reponseChoix: "Ouverture / Maintien / Fermeture", isCorrect: false },
    ],
  },
  {
    questionText:
      "Quelle est l’une des responsabilités principales du directeur de tir ?",
    questionOptions: [
      { reponseChoix: "Percevoir les munitions", isCorrect: false },
      { reponseChoix: "Distribuer les munitions", isCorrect: false },
      { reponseChoix: "Vérifier les armes des tireurs", isCorrect: false },
      { reponseChoix: "Faire appliquer la sécurité", isCorrect: true },
    ],
  },
  {
    questionText: "Que désigne la ligne de mire ?",
    questionOptions: [
      {
        reponseChoix:
          "Une ligne imaginaire passant par l’œilleton et le guidon",
        isCorrect: false,
      },
      {
        reponseChoix: "Une ligne imaginaire passant par l’œil et l’objectif ",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Une ligne imaginaire passant par l’œil, le cran de mire, le guidon, et l’objectif",
        isCorrect: true,
      },
      {
        reponseChoix: "Une ligne imaginaire passant par l’œil et le guidon",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "En topographie, a quoi correspond 1 degré ? ",
    questionOptions: [
      { reponseChoix: "360 minutes ", isCorrect: false },
      { reponseChoix: "60 minutes", isCorrect: true },
      { reponseChoix: "40 minutes", isCorrect: false },
      { reponseChoix: "120 minutes", isCorrect: false },
    ],
  },
  {
    questionText: "En topographie, a quoi correspond 1/10000 ?",
    questionOptions: [
      { reponseChoix: "1 cm = 100 m", isCorrect: true },
      { reponseChoix: "1 cm = 250 m", isCorrect: false },
      { reponseChoix: "10 cm = 100 m", isCorrect: false },
      { reponseChoix: "5 cm = 100 m", isCorrect: false },
    ],
  },
  {
    questionText: "En topographie, à quoi correspond les coordonnées MGRS ?",
    questionOptions: [
      {
        reponseChoix: "Coordonnées de désignation d’artillerie",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Coordonnées réglementaires en opération, qui permet une cartographie unique pour les forces alliées",
        isCorrect: true,
      },
      {
        reponseChoix:
          "Coordonnées civiles globales utilisées pour les voies aériennes",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Coordonnées réglementaires en opération, réservées aux forces américaines",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "En topographie, quels sont les types de projection existants ?",
    questionOptions: [
      {
        reponseChoix:
          "Mercator classique / Universal Transversalle Mercator / Lambert",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Mercator complexe / Universal Transverse Mercator / Lambert",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Mercator classique / Universal Transverse Mercator / Fuseau horaire",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Mercator classique / Universal Transverse Mercator / Lambert",
        isCorrect: true,
      },
    ],
  },
  {
    questionText:
      "En topographie, donner les valeurs hectométriques de la coordonnée 32 U MU 97918 81920 ?",
    questionOptions: [
      { reponseChoix: "97 et 81", isCorrect: false },
      { reponseChoix: "8 et 0", isCorrect: false },
      { reponseChoix: "9 et 9", isCorrect: true },
      { reponseChoix: "M et U", isCorrect: false },
    ],
  },
  {
    questionText: "En topographie, à quoi correspond le nivellement ? ",
    questionOptions: [
      { reponseChoix: "Représentation en couleur du relief", isCorrect: false },
      { reponseChoix: "Représentation alignée du relief", isCorrect: false },
      {
        reponseChoix:
          "Représentation en couleur et conventionnelle du relief  ",
        isCorrect: false,
      },
      {
        reponseChoix: "Représentation plane et conventionnelle du relief",
        isCorrect: true,
      },
    ],
  },
  {
    questionText: "En topographie, à quoi correspond la planimétrie ?",
    questionOptions: [
      {
        reponseChoix:
          "Détails naturels et artificiels caractéristiques relevées sur le terrain, relief exclu",
        isCorrect: true,
      },
      {
        reponseChoix:
          "Détails naturels relevés sur le terrain, relief inclus, eau exclue",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Détails naturels relevés sur le terrain, détails artificiels et relief exclus",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Détails artificiels relevés sur le terrain, détails naturels et relief exclus ",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "En topographie, à quoi correspond le BDR ?",
    questionOptions: [
      {
        reponseChoix: "Boussole / Déplacement / Reconnaissance",
        isCorrect: false,
      },
      { reponseChoix: "Boussole / Distance / Rendez-vous", isCorrect: false },
      { reponseChoix: "Bordure / Distance / Relief", isCorrect: false },
      { reponseChoix: "Boussole / Distance / Relief", isCorrect: true },
    ],
  },
  {
    questionText: "En topographie, à quoi correspond l’azimut géographique ?",
    questionOptions: [
      {
        reponseChoix: "Angle entre le nord magnétique et une direction donnée",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Angle entre le nord géographique et une direction donnée ",
        isCorrect: true,
      },
      {
        reponseChoix:
          "Angle entre le nord géographique et le nord de la boussole",
        isCorrect: false,
      },
      {
        reponseChoix: "Angle entre le nord magnétique et sa position GPS",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "A quoi correspond le DPIFA ?",
    questionOptions: [
      {
        reponseChoix:
          "Direction / Point à indiquer / Itinéraire / Format / Action en fin de mouvement",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Déploiement / Point à atteindre / Itinéraire / Formation / Action en début de mouvement",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Direction / Point à atteindre / Itinéraire / Formation / Action en fin de mouvement ",
        isCorrect: true,
      },
      {
        reponseChoix:
          "Direction / Point à atteindre / Itinéraire / Formation en essaim / Action en fin de mouvement ",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "A quoi correspond le MOICP (Ordre de déplacement) ?",
    questionOptions: [
      {
        reponseChoix:
          "Mission / Objectif / Itinéraire / Conduite à tenir / Place du chef de groupe",
        isCorrect: true,
      },
      {
        reponseChoix:
          "Mission / Objectif / Itinéraire / Conduite à tenir / Place des unités latérales",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Mission / Ordres / Itinéraire / Conduite à tenir / Place du chef de groupe",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Mission / Opération / Itinéraire / Conduite à tenir / Place du chef de groupe",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "Quelles qualifications sont nécessaires pour être directeur de tir ?",
    questionOptions: [
      { reponseChoix: "Être Officier avec un CATI 2", isCorrect: false },
      {
        reponseChoix:
          "Être Officier OU Sous-Officier avec uniquement un CATI 1",
        isCorrect: false,
      },
      { reponseChoix: "Être Sous-Officier avec un CATI 2", isCorrect: false },
      {
        reponseChoix: "Ouverte aux Officiers et Sous-Officiers avec un CATI 2",
        isCorrect: true,
      },
    ],
  },
  {
    questionText: "Que célèbre-t-on le 11 Septembre ?",
    questionOptions: [
      { reponseChoix: "Les attentats de 2001", isCorrect: false },
      { reponseChoix: "La mort de Guynemer", isCorrect: true },
      { reponseChoix: "Le Général Valin", isCorrect: false },
      { reponseChoix: "L’anniversaire de Moby", isCorrect: false },
    ],
  },
  {
    questionText: "Quelle est la masse maximum du Rafale F3 ?",
    questionOptions: [
      { reponseChoix: "23 t", isCorrect: false },
      { reponseChoix: "24,5 t", isCorrect: true },
      { reponseChoix: "23,5 t", isCorrect: false },
      { reponseChoix: "24 t", isCorrect: false },
    ],
  },
  {
    questionText: "Quel est le radar du Rafale F3 ?",
    questionOptions: [
      { reponseChoix: "RBE2+OSF", isCorrect: true },
      { reponseChoix: "AESA", isCorrect: false },
      { reponseChoix: "RDY", isCorrect: false },
      { reponseChoix: "Antilope V", isCorrect: false },
    ],
  },
  {
    questionText:
      "Quelle phrase est incorrecte dans la définition: Être militaire ? ",
    questionOptions: [
      {
        reponseChoix:
          "Armé et protégeant les citoyens, le militaire défend les sites stratégiques tout en respectant son devoir de réserve",
        isCorrect: true,
      },
      {
        reponseChoix:
          "Il accomplit sa mission avec volonté de gagner et de vaincre, si nécessaire au péril de sa vie",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Membre d’une équipe solidaire et fraternelle, il agit avec honneur, franchise et loyauté",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Fier de son engagement, il est, toujours et partout, un ambassadeur de son escadron, de l’armée de l’air et de la France",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "A quoi correspond le CEMA ?",
    questionOptions: [
      {
        reponseChoix: "Il est responsable de la défense nationale",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Placé sous l’autorité du président et du gouvernement, il est le conseillé militaire du gouvernement ",
        isCorrect: true,
      },
      {
        reponseChoix:
          "Il est le responsable de l’exécution de la politique militaire",
        isCorrect: false,
      },
      {
        reponseChoix: "Il est compétent pour déclarer la guerre",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "En topographie, à quoi correspond une ligne de faite ?",
    questionOptions: [
      {
        reponseChoix: "Ligne de séparation des intercalaires",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Ligne de séparation des forêts et des plaines, qui descend sur les deux côtés",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Ligne de séparation des eaux, lignes hautes du terrain, qui descend sur les deux côtés",
        isCorrect: true,
      },
      {
        reponseChoix:
          "Ligne de séparation visant et segmenter les fenêtres radios ",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "En topographie, concernant l’itinéraire, quelle est la méthode en 3 phases ?",
    questionOptions: [
      {
        reponseChoix:
          "Relier la carte au terrain / Choix de la zone / Estimation de la superficie de la zone",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Relier la carte au terrain / Choix de l’itinéraire / Réalisation de l’itinéraire",
        isCorrect: true,
      },
      {
        reponseChoix:
          "Relier la carte au terrain / Estimer la distance des axes routiers / Réaliser l’itinéraire",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Relier la carte au terrain / Choix de l’objectif / Réalisation d’une carte secondaire ",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "A quoi correspond la procédure «Eglantine» ? ",
    questionOptions: [
      {
        reponseChoix:
          "Faire face à des manifestions dirigées contre les forces et assurer l’ordre à l’intérieur des bases",
        isCorrect: true,
      },
      {
        reponseChoix:
          "Faire face à des attaques terroristes contre les forces et maintenir un état d’alerte maximal",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Faire face à des attaques aériennes multiples sur tout le territoire",
        isCorrect: false,
      },
      {
        reponseChoix: "Faire face à des attaques répétées de camion-poubelle",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "Comment déterminer sa position ?",
    questionOptions: [
      { reponseChoix: "Creuser un trou et ne rien faire", isCorrect: false },
      { reponseChoix: "Se mettre en PLS", isCorrect: false },
      {
        reponseChoix: "Localiser un avion dans le ciel et le suivre",
        isCorrect: false,
      },
      { reponseChoix: "Utiliser sa boussole et sa carte", isCorrect: true },
    ],
  },
  {
    questionText: "En combien de temps tue la soif ?",
    questionOptions: [
      { reponseChoix: "En quelques minutes", isCorrect: false },
      { reponseChoix: "En quelques jours", isCorrect: true },
      { reponseChoix: "En quelques semaines", isCorrect: false },
      { reponseChoix: "Ne tue pas", isCorrect: false },
    ],
  },
  {
    questionText: "Quels sont les 3 niveaux de communication verbale ?",
    questionOptions: [
      { reponseChoix: "Verbal/Pseudo-Verbal/Non verbal", isCorrect: false },
      { reponseChoix: "Verbal/Para-Verbal/Non verbal", isCorrect: true },
      { reponseChoix: "Verbal/Contre-Verbal/Non verbal", isCorrect: false },
      { reponseChoix: "Verbal/Multi-Verbal/Non verbal", isCorrect: false },
    ],
  },
  {
    questionText:
      "En communication verbale, à quoi correspond la distance de discussion «sociale» ?",
    questionOptions: [
      { reponseChoix: "Entre 3 et 4m", isCorrect: false },
      { reponseChoix: "Entre 1,2 et 3m", isCorrect: true },
      { reponseChoix: "Entre 4,5 et 5m", isCorrect: false },
      { reponseChoix: "Entre 4 et 4,5m", isCorrect: false },
    ],
  },
  {
    questionText: "A quoi correspond le mécanisme d’obturation du FAMAS ?",
    questionOptions: [
      {
        reponseChoix: "C’est un mécanisme d’armement assuré par la culasse",
        isCorrect: false,
      },
      {
        reponseChoix: "C’est un mécanisme d’étanchéité hors de la culasse",
        isCorrect: false,
      },
      {
        reponseChoix:
          "C’est un mécanisme de retrait de cartouche après le tir ",
        isCorrect: false,
      },
      {
        reponseChoix: "C’est un mécanisme d’étanchéité assuré par la culasse",
        isCorrect: true,
      },
    ],
  },
  {
    questionText:
      "En règle de transmission, à quoi correspond la «Lisibilité» ?",
    questionOptions: [
      {
        reponseChoix: "Clair / Lisible / Déformé /Avec interférence",
        isCorrect: true,
      },
      {
        reponseChoix: "Fort / Assez fort/Faible / Très faible",
        isCorrect: false,
      },
      {
        reponseChoix: "Entendu / Assez entendu / Peu entendu/Non entendu",
        isCorrect: false,
      },
      {
        reponseChoix: "Limpide / Correct / Déformé / Très faible",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "Selon la PIA 207, qu’est-ce qu’un accident ?",
    questionOptions: [
      {
        reponseChoix: "La PIA 207 ne traite pas des accidents",
        isCorrect: false,
      },
      {
        reponseChoix: "Un évènement prévisible à conséquences graves",
        isCorrect: false,
      },
      {
        reponseChoix: "Un évènement inopiné à conséquences graves",
        isCorrect: true,
      },
      {
        reponseChoix: "Un non-respect des règles de sécurité",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "Que veut dire TTA ",
    questionOptions: [
      { reponseChoix: "Texte toute arme", isCorrect: true },
      { reponseChoix: "Texte toute armée", isCorrect: false },
      { reponseChoix: "Texte tout amortissement", isCorrect: false },
      { reponseChoix: "Texte tout armement ", isCorrect: false },
    ],
  },
  {
    questionText: "Quelle est la dernière date de mise à jour de la PIA ?",
    questionOptions: [
      { reponseChoix: "30 mars 2013", isCorrect: false },
      { reponseChoix: "30 avril 2013", isCorrect: true },
      { reponseChoix: "30 janvier 2014", isCorrect: false },
      { reponseChoix: "30 avril 2011", isCorrect: false },
    ],
  },
  {
    questionText: "Que comprend la PIA ?",
    questionOptions: [
      { reponseChoix: "Les règles régissant les tirs", isCorrect: true },
      { reponseChoix: "Les règles d’engagement au combat", isCorrect: false },
      { reponseChoix: "Les règles d’entrainement", isCorrect: false },
      { reponseChoix: "Les règles de déploiement", isCorrect: false },
    ],
  },
  {
    questionText: "Dans quel cadre est validé le CATI ?",
    questionOptions: [
      {
        reponseChoix:
          "Après vérification de la capacité à neutraliser un allié",
        isCorrect: false,
      },
      {
        reponseChoix: "Après vérification de la capacité à se neutraliser",
        isCorrect: false,
      },
      {
        reponseChoix: "Après vérification de la capacité à tirer",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Après vérification et instruction des connaissances à l’instruction aux tirs ",
        isCorrect: true,
      },
    ],
  },
  {
    questionText: "Que concerne le CATI 1 en termes d’armement ?",
    questionOptions: [
      {
        reponseChoix: "Toutes les armes de tous les calibres",
        isCorrect: false,
      },
      {
        reponseChoix: "Toutes les armes d’épaule et de poing",
        isCorrect: false,
      },
      { reponseChoix: "Toutes les armes d’épaule", isCorrect: true },
      {
        reponseChoix: "Toutes les armes d’épaule de calibre 5.56  ",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "A quoi correspond un incident de tir ?",
    questionOptions: [
      {
        reponseChoix: "Evènement à conséquences graves fortuit",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Anomalie de fonctionnement ne présentant aucun danger immédiat",
        isCorrect: true,
      },
      {
        reponseChoix: "Evènement à conséquences graves intentionnel",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Anomalie de fonctionnement présentant un danger immédiat",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "La création d’infrastructure de tirs dépend du ?",
    questionOptions: [
      { reponseChoix: "TTA 207", isCorrect: false },
      { reponseChoix: "Des régimes extérieur", isCorrect: false },
      { reponseChoix: "SER 207", isCorrect: false },
      { reponseChoix: "PIA 207", isCorrect: true },
    ],
  },
  {
    questionText: "Dans quel cadre le régime «élémentaire» est appliqué ?",
    questionOptions: [
      {
        reponseChoix:
          "Il est appliqué à un stand de tir ou champs de tir uniquement",
        isCorrect: true,
      },
      {
        reponseChoix:
          "Il est appliqué à plusieurs stand de tir ou champs de tirs",
        isCorrect: false,
      },
      {
        reponseChoix: "Il est appliqué à un complexe de tir ",
        isCorrect: false,
      },
      {
        reponseChoix: "Il est appliqué sur une zone de passage ",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "Etre directeur de tir, de quoi s’agit-il ?",
    questionOptions: [
      {
        reponseChoix:
          "Objectif à atteindre Niveau des instructeurs / Genre de tir / Résultats à obtenir / Effectif horaire",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Objectif à atteindre Niveau des tireurs / Genre de tir / Résultats à obtenir / Effectif journalier",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Objectif à atteindre Niveau des tireurs / Genre de tir / Résultats à obtenir / Effectif horaire ",
        isCorrect: true,
      },
      {
        reponseChoix:
          "Objectif à atteindre Niveau des stands / Genre de tir / Résultats à obtenir / Effectif horaire ",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "Etre directeur de tir tourne autour de 4 facteurs clés, lesquels ?",
    questionOptions: [
      {
        reponseChoix:
          "Comprendre la mission / Responsabilité et règlement / Disposition à prendre / Suite à faire",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Comprendre la mission / Responsabilité et règlement / Disposition à prendre / Suite à donner",
        isCorrect: true,
      },
      {
        reponseChoix:
          "Comprendre la mission / Règlement et déploiement / Disposition à prendre / Suite à donner",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Comprendre la mission / Responsabilité et règlement / Disposition à prendre / Suite à éviter ",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "Quelles sont les responsabilités du directeur de tir ?",
    questionOptions: [
      {
        reponseChoix:
          "L’application des mesures de sécurité, armes, munitions, textes et directives ",
        isCorrect: true,
      },
      { reponseChoix: "Mettre des punitions aux inaptes", isCorrect: false },
      {
        reponseChoix: "Rassurer les tireurs et à gérer les armes et munitions",
        isCorrect: false,
      },
      {
        reponseChoix: "Regarder et donner uniquement des ordres de tir",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "A quoi correspond l’ordre «Disposition de combat» ?",
    questionOptions: [
      {
        reponseChoix: "Se positionner face à l’objectif, arme dans le dos",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Le tireur se couche, charge et garde son arme sur l’objectif",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Le tireur ne charge pas, contrôle et garde son arme en direction de l’objectif ",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Le tireur charge, contrôle et garde son arme en direction de l’objectif",
        isCorrect: true,
      },
    ],
  },
  {
    questionText: "A quoi correspond l’ordre «Halte au feu» ?",
    questionOptions: [
      { reponseChoix: "Un arrêt définitif du tir", isCorrect: false },
      { reponseChoix: "Un contre ordre de tir", isCorrect: false },
      { reponseChoix: "Un arrêt temporaire du tir", isCorrect: true },
      { reponseChoix: "Une doublette", isCorrect: false },
    ],
  },
  {
    questionText:
      "Quel est le commandement de tir pour arrêter le feu de manière définitive ?",
    questionOptions: [
      { reponseChoix: "Cessez le feu", isCorrect: true },
      { reponseChoix: "Halte au tir", isCorrect: false },
      { reponseChoix: "Halte au feu", isCorrect: false },
      { reponseChoix: "Cessez le tir ", isCorrect: false },
    ],
  },
  {
    questionText: "A quoi correspond «l’embedded journalism» ?",
    questionOptions: [
      { reponseChoix: "Journalisme en première ligne", isCorrect: false },
      { reponseChoix: "Journalisme armé", isCorrect: false },
      { reponseChoix: "Journalisme retranché ", isCorrect: false },
      { reponseChoix: "Journalisme embarqué", isCorrect: true },
    ],
  },
  {
    questionText: "Quelle phrase faut-il dire lorsque le tir est terminé ?",
    questionOptions: [
      { reponseChoix: "Tir effectué, sécurité vérifiée", isCorrect: true },
      { reponseChoix: "Tir effectué, sécurité engagée", isCorrect: false },
      { reponseChoix: "Tir terminé, sécurité mise ", isCorrect: false },
      { reponseChoix: "Tir terminé, sécurité engagée ", isCorrect: false },
    ],
  },
  {
    questionText: "Que fait l’EMA COM ?",
    questionOptions: [
      {
        reponseChoix:
          "Relevés d’information concernant les déploiements extérieurs",
        isCorrect: false,
      },
      {
        reponseChoix: "Communication de la chaîne opérationnelle",
        isCorrect: true,
      },
      {
        reponseChoix: "Information relative à l’emploi des forces",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Communication focalisée sur le pôle administratif et recrutement",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "Que veut dire DICOD ?",
    questionOptions: [
      {
        reponseChoix: "Délégation à l’information commune de la Défense",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Détachement d’information et de communication de la Défense",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Délégation à l’information et à la communication de la Défense",
        isCorrect: true,
      },
      {
        reponseChoix:
          "Direction de l’information et de la communication de la Défense",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "Quand l’aviation militaire devient-elle la 5eme arme ?",
    questionOptions: [
      { reponseChoix: "En 1922", isCorrect: true },
      { reponseChoix: "En 1921", isCorrect: false },
      { reponseChoix: "En 1925", isCorrect: false },
      { reponseChoix: "En 1923", isCorrect: false },
    ],
  },
  {
    questionText: "Quels sont les nouveaux enjeux de la politique de défense ?",
    questionOptions: [
      {
        reponseChoix:
          "Terrorisme / Cyber / Flux migratoires / Lutte contre la piraterie / Innovation",
        isCorrect: true,
      },
      {
        reponseChoix:
          "Terrorisme / Cyber / Flux migratoires / Lutte contre la piraterie / Nucléaire",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Terrorisme / Rens / Flux migratoires / Lutte contre la déforestation / Nucléaire",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Terrorisme / Cyber / NRBC / Lutte contre la piraterie / Innovation",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "Que veut dire OTIAD ?",
    questionOptions: [
      {
        reponseChoix:
          "Organisation centrale Territoriale des forces de Défense",
        isCorrect: false,
      },
      {
        reponseChoix: "Organisation Territoriale interarmées de Défense",
        isCorrect: true,
      },
      {
        reponseChoix: "Organisme Territorial interarmées de Destruction",
        isCorrect: false,
      },
      {
        reponseChoix: "Organisation Territoriale interarmées de Guerre ",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "Quel est l’objectif de l’OTIAD ?",
    questionOptions: [
      {
        reponseChoix: "Coordonne les moyens aériens uniquement de la défense",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Coordonne les moyens civils et militaire de la défense sur territoire",
        isCorrect: true,
      },
      {
        reponseChoix:
          "Coordonne les forces de sécurité contre une menace externe",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Coordonne uniquement les services administratifs de l’EMA",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "A quelle période correspond la naissance de l’aviation militaire française ?",
    questionOptions: [
      { reponseChoix: "1902-1910", isCorrect: false },
      { reponseChoix: "1904-1916", isCorrect: false },
      { reponseChoix: "1909-1918", isCorrect: true },
      { reponseChoix: "1903-1918 ", isCorrect: false },
    ],
  },
  {
    questionText:
      "Qui a dit «Sera maître du monde qui sera maître de l’air» ? ",
    questionOptions: [
      { reponseChoix: "Georges Guynemer", isCorrect: false },
      { reponseChoix: "Clément Ader", isCorrect: true },
      { reponseChoix: "Charles Lindbergh ", isCorrect: false },
      { reponseChoix: "Jean-Marie Messier", isCorrect: false },
    ],
  },
  {
    questionText:
      "Dans l’affrontement pour le contrôle de l’aviation, quels sont les deux segments militaires en opposition ?",
    questionOptions: [
      { reponseChoix: "La cavalerie et le génie", isCorrect: false },
      { reponseChoix: "La cavalerie et l’infanterie", isCorrect: false },
      { reponseChoix: "Le génie et l’artillerie", isCorrect: true },
      { reponseChoix: "Le génie et l’infanterie", isCorrect: false },
    ],
  },
  {
    questionText:
      "Quels sont les rôles et responsabilités du directeur de tir ?",
    questionOptions: [
      {
        reponseChoix:
          "Veille de l’application des mesures de sécurité, armes, munitions, textes, directives",
        isCorrect: true,
      },
      {
        reponseChoix:
          "Veille de l’application des procédures de déploiement et des armes",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Veille de l’application des mesures PAM (Personnel, Armement, Munitions)",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Veille de l’application des mesures de sécurité, et du maintien à jour des cahiers de tir",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "Quelle mission ne fait pas parti de celles de l’OTIAD ?",
    questionOptions: [
      { reponseChoix: "Coopération civile-militaire", isCorrect: false },
      {
        reponseChoix: "Organisation de visites de représentants étrangers",
        isCorrect: true,
      },
      { reponseChoix: "EInterventions NEDEX", isCorrect: false },
      {
        reponseChoix: "Renforcement du lien armée/société civile",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "A quelle date la France achète ses premiers aéroplanes ?",
    questionOptions: [
      { reponseChoix: "1906", isCorrect: false },
      { reponseChoix: "1900", isCorrect: false },
      { reponseChoix: "1908", isCorrect: false },
      { reponseChoix: "1909", isCorrect: true },
    ],
  },
  {
    questionText:
      "En 1910, quelle a été la première mission aérienne militaire ?",
    questionOptions: [
      { reponseChoix: "Chalons > Strasbourg", isCorrect: false },
      { reponseChoix: "Chalons > Vincennes", isCorrect: true },
      { reponseChoix: "Chalons > Paris", isCorrect: false },
      { reponseChoix: "Chalons > Bourges", isCorrect: false },
    ],
  },
  {
    questionText:
      "Qui a dit « L’aviation c’est du sport, pour l’armée c’est zéro » ?",
    questionOptions: [
      { reponseChoix: "Général Foch", isCorrect: true },
      { reponseChoix: "Général Montgomery", isCorrect: false },
      { reponseChoix: "Général Roques", isCorrect: false },
      { reponseChoix: "Général Enarquès", isCorrect: false },
    ],
  },
  {
    questionText: "Que fait la loi du 29 mars 1912 ?",
    questionOptions: [
      { reponseChoix: "Elle autorise la guerre ", isCorrect: false },
      {
        reponseChoix: "Elle institue l’aéronautique militaire",
        isCorrect: true,
      },
      {
        reponseChoix: "Elle permet le déploiement d’unités aériennes",
        isCorrect: false,
      },
      {
        reponseChoix: "lle autorise l’utilisation de bombes aérochimiques ",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "Pourquoi les aéroplanes sont baptisés « Avions » ?",
    questionOptions: [
      { reponseChoix: "En hommage à Georges Guynemer", isCorrect: false },
      { reponseChoix: "En hommage à Pétain", isCorrect: false },
      { reponseChoix: "En hommage à Clément Ader", isCorrect: true },
      { reponseChoix: "En hommage à Fonck", isCorrect: false },
    ],
  },
  {
    questionText:
      "Dans les débuts de l’aviation militaire, comment apparaissait celle-ci ?",
    questionOptions: [
      { reponseChoix: "L’observation et aide au ciblage", isCorrect: true },
      { reponseChoix: "L’épandage de gaz", isCorrect: false },
      { reponseChoix: "Le bombardement", isCorrect: false },
      { reponseChoix: "Le suicide", isCorrect: false },
    ],
  },
  {
    questionText:
      "Quand est créée la première escadrille de chasse française ?",
    questionOptions: [
      { reponseChoix: "En février 1914", isCorrect: false },
      { reponseChoix: "En mars 1914", isCorrect: false },
      { reponseChoix: "En mars 1915", isCorrect: false },
      { reponseChoix: "En février 1915", isCorrect: true },
    ],
  },
  {
    questionText:
      "Dans les débuts de l’aviation militaire, comment apparaissait celle-ci ?",
    questionOptions: [
      { reponseChoix: "Comme une aide", isCorrect: false },
      { reponseChoix: "Comme une arme", isCorrect: false },
      { reponseChoix: "Comme un service ", isCorrect: true },
      { reponseChoix: "Comme un soutien", isCorrect: false },
    ],
  },
  {
    questionText:
      "Quel est le but du Colonel Duval avec la création des escadrons de bombardement et de combat en 1917 ?",
    questionOptions: [
      {
        reponseChoix: "La désignation d’objectif en escadron",
        isCorrect: false,
      },
      { reponseChoix: "La destruction de masse", isCorrect: true },
      { reponseChoix: "La force de frappe précise", isCorrect: false },
      { reponseChoix: "La chasse groupée ", isCorrect: false },
    ],
  },
  {
    questionText:
      "Comment le Commandant Barès organise-t-il l’aviation militaire après 1914 ?",
    questionOptions: [
      {
        reponseChoix: "Renseignement / Ciblage / Observation",
        isCorrect: false,
      },
      {
        reponseChoix: "Ciblage / Bombardement / Observation",
        isCorrect: false,
      },
      {
        reponseChoix: "Renseignement / Bombardement / Chasse",
        isCorrect: true,
      },
      { reponseChoix: "L’épandage de gaz", isCorrect: false },
    ],
  },
  {
    questionText:
      "Qui a dit «Les aéroplanes sont aussi indispensables aux armées que les canons et les fusils c’est une vérité qu’il faut admettre sous peine d’avoir à la subir de force » ?",
    questionOptions: [
      { reponseChoix: "Général Foch", isCorrect: false },
      { reponseChoix: "Général Kenoby", isCorrect: false },
      { reponseChoix: "Général Montgomery", isCorrect: false },
      { reponseChoix: "Général Roques ", isCorrect: true },
    ],
  },
  {
    questionText: "A quoi correspond une politique de défense ?",
    questionOptions: [
      {
        reponseChoix:
          "C’est une politique publique en temps de paix, faire la guerre, préparer la conduite et la guerre",
        isCorrect: false,
      },
      {
        reponseChoix:
          "C’est une politique publique en temps de guerre, afin de faire basculer la guerre",
        isCorrect: false,
      },
      {
        reponseChoix:
          "C’est une politique publique en temps de paix, éviter la guerre, préparer la conduite et la guerre",
        isCorrect: true,
      },
      {
        reponseChoix:
          "C’est une politique publique en temps de paix, visant à déclencher la guerre à moyen terme",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "En quelle année est créée l’ALAT ?",
    questionOptions: [
      { reponseChoix: "1954", isCorrect: true },
      { reponseChoix: "1900", isCorrect: false },
      { reponseChoix: "1950", isCorrect: false },
      { reponseChoix: "1953", isCorrect: false },
    ],
  },
  {
    questionText:
      "Quelle est la limite de durée des services (LDS) pour les sous-officiers sous contrat ?",
    questionOptions: [
      { reponseChoix: "29 ans", isCorrect: false },
      { reponseChoix: "30 ans", isCorrect: false },
      { reponseChoix: "27 ans", isCorrect: true },
      { reponseChoix: "24 ans", isCorrect: false },
    ],
  },
  {
    questionText:
      "En quelle année l’AA s’est-elle dotée de son 1er concept stratégique ?",
    questionOptions: [
      { reponseChoix: "2022", isCorrect: false },
      { reponseChoix: "2008", isCorrect: true },
      { reponseChoix: "2007", isCorrect: false },
      { reponseChoix: "2010", isCorrect: false },
    ],
  },
  {
    questionText:
      "Laquelle des armes suivantes ne fait pas partie des agents biologiques ?",
    questionOptions: [
      { reponseChoix: "Les virus", isCorrect: false },
      {
        reponseChoix: "Les toxines et secretion de bacteries",
        isCorrect: false,
      },
      {
        reponseChoix: "Les produits toxiques et incapacitants",
        isCorrect: false,
      },
      {
        reponseChoix: "Les hormones sécrétéés par les plantes",
        isCorrect: true,
      },
    ],
  },
  {
    questionText:
      "Qui est l'actuel Commandant supreme de la transformation alliée ?",
    questionOptions: [
      { reponseChoix: "M.Jens Solfenberg", isCorrect: false },
      { reponseChoix: "General Curtis M. Scaparotti", isCorrect: false },
      { reponseChoix: "General Philippe Lavigne", isCorrect: true },
      { reponseChoix: "General Petr Pavel", isCorrect: false },
    ],
  },
  {
    questionText: "Qu'est-ce que le code de la Défense ?",
    questionOptions: [
      {
        reponseChoix:
          "L'ensemble des dispositifs legislatifs et reglementaire sur la defense national",
        isCorrect: true,
      },
      { reponseChoix: "Le statut général des militaires", isCorrect: false },
      {
        reponseChoix: "Un ensemble d'instructions régissant les status",
        isCorrect: false,
      },
      {
        reponseChoix: "L'ensemble des règlement s'appliquant aux militaires",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "Selon l'article L1111-1 du code de la defense, quel est l'objet de la politique de defense ?",
    questionOptions: [
      {
        reponseChoix:
          "Assurer l'integrité de la defense et de la securité national",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Assurer l'integrité du territoire et la protection de la population contre les agressions armées",
        isCorrect: true,
      },
      {
        reponseChoix: "Assurer la securité du territoire contre le terrorisme",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Assurer la securité du territoire a l'aide de l'arme nucleaire",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "Que peut entrainer le non-respect d'une obligation de prudence d'un tireur entrainant la mise en danger d'autrui ?",
    questionOptions: [
      {
        reponseChoix: "La responsabilité du commandant de base",
        isCorrect: false,
      },
      {
        reponseChoix: "5 ans d'emprisonnement et 200000 euros d'amende",
        isCorrect: false,
      },
      {
        reponseChoix: "La responsabilté penale de son auteur",
        isCorrect: true,
      },
      {
        reponseChoix:
          "La responsabilité  disciplinaire du directeur de tir et de l'officier de tir",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "Sur quelle support note t-on un officier",
    questionOptions: [
      { reponseChoix: "BNIO", isCorrect: true },
      { reponseChoix: "FNIO", isCorrect: false },
      { reponseChoix: "BNA", isCorrect: false },
      { reponseChoix: "BNO", isCorrect: false },
    ],
  },
  {
    questionText:
      "Quelle est la particularité de la legitime defense d'un bien ?",
    questionOptions: [
      { reponseChoix: "Cela depend de la valeur du bien", isCorrect: false },
      {
        reponseChoix: "Elle exclue l'emploi de la force non letal",
        isCorrect: false,
      },
      {
        reponseChoix: "Un bien ne peut beneficier de la legitime defense",
        isCorrect: false,
      },
      {
        reponseChoix: "Elle exclue totalement l'homicide volontaire",
        isCorrect: true,
      },
    ],
  },
  {
    questionText: "Pourquoi utilise-t-on une lampe rouge sur un champ de tir",
    questionOptions: [
      { reponseChoix: "Pour ne pas de faire remarquer", isCorrect: false },
      {
        reponseChoix: "Pour une intervention sur une arme de nuit",
        isCorrect: true,
      },
      {
        reponseChoix: "Pour etre plus discret à l'exterieur",
        isCorrect: false,
      },
      {
        reponseChoix: "Pour controler la perception du champs de tir",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "Parmis les équipement suivant lequel n'appartient pas au cyberespace ?",
    questionOptions: [
      { reponseChoix: "Montre connectée", isCorrect: false },
      { reponseChoix: "Frigo connectéé", isCorrect: false },
      { reponseChoix: "Voiture autonome", isCorrect: false },
      { reponseChoix: "Poste radio analogique", isCorrect: true },
    ],
  },
  {
    questionText: "Qui est chargé de rédaction du dossier d'auto protection ?",
    questionOptions: [
      {
        reponseChoix: "Le chef du pole sécurité protection (CPSP)",
        isCorrect: false,
      },
      { reponseChoix: "Le commandant d'unité", isCorrect: true },
      { reponseChoix: "L'officier de securité base", isCorrect: false },
      { reponseChoix: "Le commandant de l'EP", isCorrect: false },
    ],
  },
  {
    questionText:
      "Qu'est ce qui ne correspond pas à une bonne pratique en hygiene cybernetique ?",
    questionOptions: [
      {
        reponseChoix: "Passer sa clef USB à la station blanche",
        isCorrect: false,
      },
      {
        reponseChoix: "Donner son mot de passe a son collègue",
        isCorrect: true,
      },
      { reponseChoix: "Vérifier que l'antivirus est à jour", isCorrect: false },
      {
        reponseChoix: "S'assurer de son expediteur avant d'envoyer son mail",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "Citez les 2 régimes juridique qui peuvent etre soumis aux installations militaires ?",
    questionOptions: [
      {
        reponseChoix: "Regime de zone a statut spécial et militaire",
        isCorrect: false,
      },
      {
        reponseChoix: "Regime de zone maritime et terrestre",
        isCorrect: false,
      },
      {
        reponseChoix: "Regime de zone aérienne et terrestre",
        isCorrect: false,
      },
      { reponseChoix: "Regime de zone militaire et protégé", isCorrect: true },
    ],
  },
  {
    questionText:
      "Quelle est lacronyme associée a l'Europe de la Défense au sein de l'Union européénne ?",
    questionOptions: [
      { reponseChoix: "PESD", isCorrect: true },
      { reponseChoix: "PSDC", isCorrect: false },
      { reponseChoix: "CED", isCorrect: false },
      { reponseChoix: "CECA", isCorrect: false },
    ],
  },
  {
    questionText: "Qu-est-ce que la L2I?",
    questionOptions: [
      { reponseChoix: "La lutte d'information d'influence", isCorrect: false },
      { reponseChoix: "La lutte d'influence informatique", isCorrect: false },
      { reponseChoix: "La lutte informatique d'influence", isCorrect: true },
      { reponseChoix: "Aucune de ces proposition", isCorrect: false },
    ],
  },
  {
    questionText: "Pourquoi 1909 est une date importante ?",
    questionOptions: [
      {
        reponseChoix: "C'est l'année de naissance de Clément Ader",
        isCorrect: false,
      },
      {
        reponseChoix: "C'est l'année ou l'armee achète ses premiers aéroplanes",
        isCorrect: false,
      },
      {
        reponseChoix: "Les aérostiers ont inventé le parachutisme",
        isCorrect: false,
      },
      { reponseChoix: "L'aviation de chasse est créée", isCorrect: true },
    ],
  },
  {
    questionText:
      "De nos jours combien d'etats siègent à l'assemblée général de l'ONU ?",
    questionOptions: [
      { reponseChoix: "193", isCorrect: true },
      { reponseChoix: "150", isCorrect: false },
      { reponseChoix: "293", isCorrect: false },
      { reponseChoix: "50", isCorrect: false },
    ],
  },
  {
    questionText: "Quelle est l'une des missions de l'officier de garnison ?",
    questionOptions: [
      {
        reponseChoix: "Maintenir à jour les compétences du personnel",
        isCorrect: false,
      },
      { reponseChoix: "Mettre en place les cibles", isCorrect: false },
      {
        reponseChoix:
          "Mettre à jour la documentation de l'infrastructure de tir",
        isCorrect: true,
      },
      { reponseChoix: "Dépolluer la but de tir", isCorrect: false },
    ],
  },
  {
    questionText:
      "Quelle est l'organise qui coordone les actions de la communication institutionnelle du ministère des armées ?",
    questionOptions: [
      {
        reponseChoix:
          "La cellul COM du secrétariat général pour l'administration",
        isCorrect: false,
      },
      {
        reponseChoix: "La service de communication de l'Etat-major des armées",
        isCorrect: true,
      },
      {
        reponseChoix:
          "Le departement de l'information et de la communication des armées",
        isCorrect: false,
      },
      {
        reponseChoix: "Le service d'information du gouvernement",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "Quelle est la principale cause de compromission des réseaux informatique?",
    questionOptions: [
      {
        reponseChoix:
          "La compétence des attaquants qui ne cesse de s'améliorer",
        isCorrect: false,
      },
      {
        reponseChoix: "Le manque de moyens des équipes de sécurité",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Le manque de respect des règles de securité informatiques par les utilisateurs",
        isCorrect: true,
      },
      { reponseChoix: "La corruption des administrateurs", isCorrect: false },
    ],
  },
  {
    questionText:
      "Donnez les sommations réglementaires en vigueur pour la protection d'une ZDHS?",
    questionOptions: [
      {
        reponseChoix:
          "Halte ! - Halte ou je fais feu ! - Halte ou je fais feu !",
        isCorrect: false,
      },
      {
        reponseChoix: "Halte ! - Halte deuxième sommation ! - Halte au chien",
        isCorrect: false,
      },
      {
        reponseChoix: "Halte ! - Halte ou je fais feu",
        isCorrect: false,
      },
      {
        reponseChoix: "Halte! - Dernière sommation, Halte ! Ou je fais feu !",
        isCorrect: true,
      },
    ],
  },
  {
    questionText:
      "Qu'est ce qui explique la moindre utilisation de l'aviation de bombardement à partir de fin 1915",
    questionOptions: [
      {
        reponseChoix: "L'apparition du radar",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Le traité de Non-Prolifération qui limite l'usage d'un tel armement",
        isCorrect: false,
      },
      { reponseChoix: "Le manque de munition", isCorrect: true },
      {
        reponseChoix: "L'efficacité croissante de la chasse grace au tir axial",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "Quelle sont les 5 fonctions stratégiques introduites en 2008 et renforcées par le livre Blanc 2013",
    questionOptions: [
      {
        reponseChoix:
          "Meconnaissance, Anticipation, Dissuasion, Protection, Intervention",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Connaissance, Anticipation, Dissuasion, Protection, Intervention",
        isCorrect: true,
      },
      {
        reponseChoix:
          "Connaissance, Participation, Dissuasion, Projection, Intervention",
        isCorrect: false,
      },
      {
        reponseChoix: "Connexion, Acculer, Denombrer, Projection, Intermitant",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "En quelle année la France a-t-elle réintégrée le commandement de l'OTAN ?",
    questionOptions: [
      {
        reponseChoix: "1950",
        isCorrect: false,
      },
      { reponseChoix: "2002", isCorrect: false },
      {
        reponseChoix: "2010",
        isCorrect: false,
      },
      { reponseChoix: "2009", isCorrect: true },
    ],
  },
  {
    questionText:
      "De combien d'hommes compte l'ensemble des déploiements des 3 armées ?",
    questionOptions: [
      { reponseChoix: "30 000 hommes et femmes", isCorrect: true },
      {
        reponseChoix: "20 000 hommes et femmes",
        isCorrect: false,
      },
      { reponseChoix: "1 000 000 hommes et femmes", isCorrect: false },
      {
        reponseChoix: "25 000 hommes et femmes",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "Quelles sont les 5 membres permamnent du CSNU ?",
    questionOptions: [
      {
        reponseChoix: "Chine, Inde, France, Etats-Unis, Russie",
        isCorrect: false,
      },
      {
        reponseChoix: "Chine, Royaume-Uni, France, Etats-Unis, Russie",
        isCorrect: true,
      },
      {
        reponseChoix: "Chine, Pologne, Ukraine, Etats-Unis, Russie",
        isCorrect: false,
      },
      {
        reponseChoix: "Mongolie, Kirghizistan, Congo, Malawi, Espagne",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "Lequel de ces objectifs ne fait PAS partie des missions du PSDC ?",
    questionOptions: [
      {
        reponseChoix:
          "Les missions de conseil et d’assistance en matière militaire",
        isCorrect: false,
      },
      {
        reponseChoix: "Les missions humanitaires et d’évacuation",
        isCorrect: false,
      },
      { reponseChoix: "Legitime défense préventive", isCorrect: true },
      {
        reponseChoix: "Les actions conjointes en matière de désarmement",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "Opération lancée en Aout 2014, résultat de la fusion entre les opérations Serval et Epervier, en partenariat avec les principaux pays de BSS dans le but de lutter contre les GAT dans la bande sahélo-saharienne",
    questionOptions: [
      { reponseChoix: "Barkhane", isCorrect: true },
      {
        reponseChoix: "Shikra",
        isCorrect: false,
      },
      { reponseChoix: "Chammal", isCorrect: false },
      {
        reponseChoix: "Sangaris",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "Selon l'article L.1111.1, du Code de la Defense, quel est l'objet de la politique de defense ?",
    questionOptions: [
      {
        reponseChoix: "Faire la guerre ",
        isCorrect: false,
      },
      { reponseChoix: "Agresser", isCorrect: false },
      {
        reponseChoix: "Engager",
        isCorrect: false,
      },
      { reponseChoix: "Assurer", isCorrect: true },
    ],
  },
  {
    questionText:
      "Qui est responsable de la préparation et la mise en oeuvre de la politique de défense ?",
    questionOptions: [
      {
        reponseChoix: "Le président",
        isCorrect: false,
      },
      { reponseChoix: "Le premier Ministre", isCorrect: false },
      { reponseChoix: "Le Ministère", isCorrect: true },
      {
        reponseChoix: "Le Ministre de la guerre",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "Lequel de ces Etats ne fait pas partie de l’OTAN ?",
    questionOptions: [
      {
        reponseChoix: "L'Allemagne",
        isCorrect: false,
      },
      { reponseChoix: "Le Canada", isCorrect: false },
      {
        reponseChoix: "La Hongrie",
        isCorrect: false,
      },
      { reponseChoix: "L'Ukraine", isCorrect: true },
    ],
  },
  {
    questionText:
      "Quel est l’actuel Commandant suprême de la Transformation Alliée ?",
    questionOptions: [
      {
        reponseChoix: "L'amiral Edmund Giambastiani",
        isCorrect: false,
      },
      { reponseChoix: "Le général James Mattis", isCorrect: false },
      { reponseChoix: "Le Général André Lanata", isCorrect: true },
      {
        reponseChoix: "Le général d'armée aérienne Jean-Paul Paloméros ",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "Que signifie OOAD - Travail Préparatoire avant une frappe ?",
    questionOptions: [
      {
        reponseChoix: "Obstruration, Désorientation, Action, Décision",
        isCorrect: false,
      },
      {
        reponseChoix: "Observation, Orientation, Action, Décision",
        isCorrect: true,
      },
      {
        reponseChoix: "Observation, Orientation, Actionnement, Désilusion",
        isCorrect: false,
      },
      {
        reponseChoix: "Obsolescence, Orientation, Action, Décision ",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "En quelle année a été créé la Communauté Européenne de Défense ?",
    questionOptions: [
      {
        reponseChoix: "2018",
        isCorrect: false,
      },
      { reponseChoix: "2002", isCorrect: false },
      {
        reponseChoix: "1960",
        isCorrect: false,
      },
      { reponseChoix: "1952", isCorrect: true },
    ],
  },
  {
    questionText:
      "Combien représente la dépense française pour l’achat et l’entretien de son arsenal nucléaire ?",
    questionOptions: [
      {
        reponseChoix: "Environ 1/3 dépense d’équipement des armées",
        isCorrect: true,
      },
      {
        reponseChoix: "Environ 1/2 dépense d’équipement des armées",
        isCorrect: false,
      },
      {
        reponseChoix: "Environ 1/5 dépense d’équipement des armées",
        isCorrect: false,
      },
      {
        reponseChoix: "Environ 4/5 dépense d’équipement des armées",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "Qui est responsable de la défense nationale au titre de l’article 21 de la Constitution du 4 Octobre 1958 ?",
    questionOptions: [
      {
        reponseChoix: "Le Ministre de la culture",
        isCorrect: false,
      },
      {
        reponseChoix: "Le President",
        isCorrect: false,
      },
      {
        reponseChoix: "Le Premier Ministre",
        isCorrect: true,
      },
      {
        reponseChoix: "Le Ministre de l'air",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "En quelle année a été créé Vigipirate ?",
    questionOptions: [
      {
        reponseChoix: "2000",
        isCorrect: false,
      },
      {
        reponseChoix: "1980",
        isCorrect: false,
      },
      {
        reponseChoix: "2002",
        isCorrect: false,
      },
      {
        reponseChoix: "1978",
        isCorrect: true,
      },
    ],
  },
  {
    questionText: "Combien l’OTAN compte-elle de membres à l’heure actuelle ?",
    questionOptions: [
      {
        reponseChoix: "30",
        isCorrect: false,
      },
      {
        reponseChoix: "41",
        isCorrect: false,
      },
      {
        reponseChoix: "40",
        isCorrect: false,
      },
      {
        reponseChoix: "31",
        isCorrect: true,
      },
    ],
  },
  {
    questionText: "En quelle année a eu lieu le push en Algerie",
    questionOptions: [
      {
        reponseChoix: "En 1961",
        isCorrect: true,
      },
      {
        reponseChoix: "En 1970",
        isCorrect: false,
      },
      {
        reponseChoix: "En 1960",
        isCorrect: false,
      },
      {
        reponseChoix: "En 1978",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "En MAI 1918, les escadres de combat sont réunis au sein d'une division aérienne, de combien d'avions est-elle composée ?",
    questionOptions: [
      {
        reponseChoix: "600",
        isCorrect: true,
      },
      {
        reponseChoix: "650",
        isCorrect: false,
      },
      {
        reponseChoix: "700",
        isCorrect: false,
      },
      {
        reponseChoix: "750",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "Qui est l'as de la chasse française le plus titré de la Grande Guerre ?",
    questionOptions: [
      {
        reponseChoix: "Madon",
        isCorrect: false,
      },
      {
        reponseChoix: "Fonck",
        isCorrect: true,
      },
      {
        reponseChoix: "Boyd",
        isCorrect: false,
      },
      {
        reponseChoix: "Guynemer",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "Que ne contient pas le système documentaire d'une activité",
    questionOptions: [
      {
        reponseChoix: "L'ensemble des procédures",
        isCorrect: false,
      },
      {
        reponseChoix: "Les comptes rendus des audits internes",
        isCorrect: true,
      },
      {
        reponseChoix:
          "Un tableau référant tous les documents contenus dans le système documentaire",
        isCorrect: false,
      },
      {
        reponseChoix: "Les modes opératoires",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "Un processsus dit << opéationnel >> :",
    questionOptions: [
      {
        reponseChoix:
          "Est chargé d'apporter des ressources aux autres processus",
        isCorrect: false,
      },
      {
        reponseChoix: "Représente le coeur de métier de l'organisation",
        isCorrect: true,
      },
      {
        reponseChoix: "Assure une fonction de pilotage sur d'autres processus",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Na pas d'impacte sur les autres processus de l'organisation",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "Lors de la mise en place pour uen séance de tir on vous confit un PA d'accompagnement. Pour quelle raison ?",
    questionOptions: [
      {
        reponseChoix:
          "L'armement est transporté dans le meme véhicule que les munitions",
        isCorrect: false,
      },
      {
        reponseChoix: "Le tir est effectué de nuit",
        isCorrect: false,
      },
      {
        reponseChoix: "Le tir est effectué dans un contexte de temps de crise",
        isCorrect: false,
      },
      {
        reponseChoix: "Le tir est effectué a l'éxtérieur de la base aérienne",
        isCorrect: true,
      },
    ],
  },
  {
    questionText:
      "Les éléments de soldes ci-dessous sont tous communs avec la fonction publique sauf un, lequel ?",
    questionOptions: [
      {
        reponseChoix: "Indémnité de résidence",
        isCorrect: false,
      },
      {
        reponseChoix: "Majoration de l'indemnité pour charge militaire",
        isCorrect: true,
      },
      {
        reponseChoix: "Solde de base",
        isCorrect: false,
      },
      {
        reponseChoix: "Supplément familial de solde",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "Quelle est la limite d'age d'un sous-officier qui est ADC PNN",
    questionOptions: [
      {
        reponseChoix: "58",
        isCorrect: true,
      },
      {
        reponseChoix: "52",
        isCorrect: false,
      },
      {
        reponseChoix: "56",
        isCorrect: false,
      },
      {
        reponseChoix: "47",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "Le journalisme embarqué est une technique inventée par :",
    questionOptions: [
      {
        reponseChoix:
          "Les services de presse américains lors de la guerre en IRAK",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Les services de presses français lors de la 1er guerre mondial",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Les services de communication lors de la guerre du Vietnam",
        isCorrect: false,
      },
      {
        reponseChoix: "Les services de presse lors de la guerre d'Algérie",
        isCorrect: true,
      },
    ],
  },
  {
    questionText: "Que signifie mettre en place un système de management ?",
    questionOptions: [
      {
        reponseChoix: "Ecrire un référentiel de règles de management à suivre",
        isCorrect: false,
      },
      {
        reponseChoix: "Définir des procédure qui ne seront plus modifiées",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Définir des objectifs à atteindre associés à un panel d'actions coordonnées",
        isCorrect: true,
      },
      {
        reponseChoix: "Mettre en place un logiciel de management",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "En quelle année a lieu la fusion entre les forces aériennes française libre (FAFL) et l'armée de l'air de l'Afrique du nord ?",
    questionOptions: [
      {
        reponseChoix: "1940",
        isCorrect: false,
      },
      {
        reponseChoix: "1943",
        isCorrect: false,
      },
      {
        reponseChoix: "1945",
        isCorrect: true,
      },
      {
        reponseChoix: "1946",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "Parcours de carrière sous-officier - que signifie un echec définitif à la S2",
    questionOptions: [
      {
        reponseChoix:
          "Impossibilité de passer de carrière, depart à 15 ans de service",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Impossibilité de passer de carrière, depart à 11 ans de service",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Impossibilité de passer de carrière, depart à 27 ans de service",
        isCorrect: false,
      },
      {
        reponseChoix:
          "Impossibilité de passer de carrière, depart à 17 ans de service",
        isCorrect: true,
      },
    ],
  },
  {
    questionText: "Quels sont les 2 type de recours de droit commun possible ?",
    questionOptions: [
      {
        reponseChoix: "Contentieux ou administratif",
        isCorrect: true,
      },
      {
        reponseChoix: "Contentieux et hiérarchique",
        isCorrect: false,
      },
      {
        reponseChoix: "Administratif et gracieux",
        isCorrect: false,
      },
      {
        reponseChoix: "Gracieux ou hiérarchique",
        isCorrect: false,
      },
    ],
  },{
    questionText: "Il n'est pas possible que le processus soit :",
    questionOptions: [
      {
        reponseChoix: "Completement isolé d'autres processus",
        isCorrect: false,
      },
      {
        reponseChoix: "Transversal",
        isCorrect: false,
      },
      {
        reponseChoix: "Centré sur un service plutot qu'un produit",
        isCorrect: true,
      },
      {
        reponseChoix: "Révisé ou modifié dans le temps",
        isCorrect: false,
      },
    ],
  },
];
export default questions;
