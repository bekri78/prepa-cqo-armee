const questions = [
  {
    questionText:
      "Quel est l'organisme qui coordonne les actions de communication institutionnelle du ministère des armées ?",
    questionOptions: [
      { reponseChoix: "1", isCorrect: false },
      { reponseChoix: "2", isCorrect: false },
      { reponseChoix: "La DICoD", isCorrect: true },
      { reponseChoix: "4", isCorrect: false },
    ],
  },
  {
    questionText:
      "Dans les Ministères autres que le MinArm, qui est en charge de la communication ?",
    questionOptions: [
      { reponseChoix: "1", isCorrect: false },
      { reponseChoix: "Les DIRCOMS respectifs", isCorrect: true },
      { reponseChoix: "3", isCorrect: false },
      { reponseChoix: "4", isCorrect: false },
    ],
  },
  {
    questionText:
      "Lorsqu’un évènement s’est produit récemment, on dit qu’il relève de :",
    questionOptions: [
      { reponseChoix: "1", isCorrect: false },
      { reponseChoix: "2", isCorrect: false },
      { reponseChoix: "Proximité chronologique", isCorrect: true },
      { reponseChoix: "4", isCorrect: false },
    ],
  },
  {
    questionText:
      "Un journaliste vous contacte pour une ITW dans une semaine, que devez-vous faire ?",
    questionOptions: [
      { reponseChoix: "1", isCorrect: false },
      { reponseChoix: "2", isCorrect: false },
      {
        reponseChoix:
          "Contacter l'officier communication et mon CDU afin d'être autorisé à s'exprimer et de préparer l'interview le cas échéant",
        isCorrect: true,
      },
      { reponseChoix: "4", isCorrect: false },
    ],
  },
  {
    questionText:
      "Quel est le média d'information le plus consulté par les français ?",
    questionOptions: [
      { reponseChoix: "1", isCorrect: false },
      { reponseChoix: "La télévision", isCorrect: true },
      { reponseChoix: "3", isCorrect: false },
      { reponseChoix: "4", isCorrect: false },
    ],
  },
  {
    questionText: "Quand un interview commence-t-il ?",
    questionOptions: [
      { reponseChoix: "Dès la présence du journaliste", isCorrect: true },
      { reponseChoix: "2", isCorrect: false },
      { reponseChoix: "3", isCorrect: false },
      { reponseChoix: "4", isCorrect: false },
    ],
  },
  {
    questionText: "Quels sont les deux types de crise ?",
    questionOptions: [
      { reponseChoix: "1", isCorrect: false },
      { reponseChoix: "2", isCorrect: false },
      { reponseChoix: "3", isCorrect: false },
      { reponseChoix: "Sous-jacente et Imprévue", isCorrect: true },
    ],
  },
  {
    questionText:
      "Quel service communique les informations relatives à l'emploi des forces ?",
    questionOptions: [
      { reponseChoix: "1", isCorrect: false },
      { reponseChoix: "La DICoD", isCorrect: true },
      { reponseChoix: "3", isCorrect: false },
      { reponseChoix: "4", isCorrect: false },
    ],
  },
  {
    questionText:
      "Quand est signée la déclaration des devoirs et des droits des journalistes ?",
    questionOptions: [
      { reponseChoix: "1", isCorrect: false },
      { reponseChoix: "2", isCorrect: false },
      { reponseChoix: "3", isCorrect: false },
      { reponseChoix: "En 1971", isCorrect: true },
    ],
  },
  {
    questionText: "Qu'est-ce que la Com OPS ?",
    questionOptions: [
      { reponseChoix: "1", isCorrect: false },
      {
        reponseChoix:
          "L'ensemble des activités menées pour communiquer publiquement sur une opération militaire en suivant une doctrine",
        isCorrect: true,
      },
      { reponseChoix: "2", isCorrect: false },
      { reponseChoix: "3", isCorrect: false },
    ],
  },
  {
    questionText: "Que signifie l'acronyme SIRPA ?",
    questionOptions: [
      { reponseChoix: "1", isCorrect: false },
      { reponseChoix: "2", isCorrect: false },
      {
        reponseChoix:
          "Service d'Informations et de Relations Publiques des Armées",
        isCorrect: true,
      },
      { reponseChoix: "4", isCorrect: false },
    ],
  },
  {
    questionText: "Quels sont les 2 types de communication ouverte ?",
    questionOptions: [
      { reponseChoix: "1", isCorrect: false },
      { reponseChoix: "2", isCorrect: false },
      { reponseChoix: "3", isCorrect: false },
      { reponseChoix: "Réactive et Proactive", isCorrect: true },
    ],
  },
  {
    questionText: "Laquelle de ces affirmations est fausse :",
    questionOptions: [
      { reponseChoix: "1", isCorrect: false },
      { reponseChoix: "2", isCorrect: false },
      {
        reponseChoix:
          "L’ECPAD transmet publiquement toutes ses photos à ceux qui le souhaitent",
        isCorrect: true,
      },
      { reponseChoix: "4", isCorrect: false },
    ],
  },
  {
    questionText:
      "Parmi ces 4 propositions, laquelle est un enjeu de la communication des armées ?",
    questionOptions: [
      { reponseChoix: "1", isCorrect: false },
      {
        reponseChoix:
          "Préserver le secret des opérations et la sécurité du personnel",
        isCorrect: true,
      },
      { reponseChoix: "3", isCorrect: false },
      { reponseChoix: "4", isCorrect: false },
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
      { reponseChoix: "2", isCorrect: false },
      { reponseChoix: "3", isCorrect: false },
      { reponseChoix: "4", isCorrect: false },
    ],
  },
  {
    questionText:
      "Quel est l'organisme chargé de proposer et de conduire la communication du MinArm et de coordonner les communications spécifiques de ses armées ?",
    questionOptions: [
      { reponseChoix: "1", isCorrect: false },
      { reponseChoix: "2", isCorrect: false },
      { reponseChoix: "La DICoD", isCorrect: true },
      { reponseChoix: "4", isCorrect: false },
    ],
  },
];
export default questions