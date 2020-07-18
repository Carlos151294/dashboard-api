const mockData = {
  "users": [
    {
      "id": 1,
      "firstName": "Stephen",
      "lastName": "King",
      "email": "stephenk89@gmail.com"
    },
    {
      "id": 2,
      "firstName": "Soren",
      "lastName": "Kierkegaard",
      "email": "soren3@gmail.com"
    },
    {
      "id": 3,
      "firstName": "Paulo",
      "lastName": "Coelho",
      "email": "pcoelho50@gmail.com"
    },
    {
      "id": 4,
      "firstName": "Ludwig",
      "lastName": "Beethoven",
      "email": "beethoven1@gmail.com"
    },
    {
      "id": 5,
      "firstName": "Fryderyk",
      "lastName": "Chopin",
      "email": "chopin@gmail.com"
    },
    {
      "id": 6,
      "firstName": "Isaac",
      "lastName": "Albeniz",
      "email": "albeniz87@gmail.com"
    },
    {
      "id": 7,
      "firstName": "Wolfgang",
      "lastName": "Mozart",
      "email": "mozart34@gmail.com"
    },
    {
      "id": 8,
      "firstName": "Johann",
      "lastName": "Bach",
      "email": "bach65@gmail.com"
    },
    {
      "id": 9,
      "firstName": "Robert",
      "lastName": "Schumann",
      "email": "schumann365@gmail.com"
    },
    {
      "id": 10,
      "firstName": "Domenico",
      "lastName": "Scarlatti",
      "email": "scarlatti65@gmail.com"
    },
    {
      "id": 11,
      "firstName": "Claude",
      "lastName": "Debussy",
      "email": "debussy72@gmail.com"
    },
    {
      "id": 12,
      "firstName": "Stephen",
      "lastName": "Hawking",
      "email": "shawking827@gmail.com"
    },
    {
      "id": 13,
      "firstName": "Joanne",
      "lastName": "Rowling",
      "email": "rowling52@gmail.com"
    }
  ],
  "publications": [
    {
      "id": 1,
      "title": "Fear and Trembling",
      "description": "Soren Kierkegaard, in this book had tried to understand how Abraham felt when God commanded him to sacrifice his son as a part of a ritual.",
      "date": "16-10-1843",
      "idUser": 2
    },
    {
      "id": 2,
      "title": "The Sickness Unto Death",
      "description": "Soren Kierkegaard has managed to beautifully combine elements of poetry and philosophy in one of Soren Kierkegaardk popular novels titled, “The Sickness Unto Death.”",
      "date": "30-07-1849",
      "idUser": 2
    },
    {
      "id": 3,
      "title": "The Seducer’s Diary",
      "description": "Buy Now Johannes is all set to control a girl named Cordelia, who now has to act as per Johannes’s wish.",
      "date": "15-12-1844",
      "idUser": 2
    },
    {
      "id": 4,
      "title": "Fur Elise",
      "description": "Fur Elise is one of Ludwig van Beethoven's most popular compositions. It was not published during his lifetime, only being discovered forty years after his death.",
      "date": "25-02-1867",
      "idUser": 4
    },
    {
      "id": 5,
      "title": "Sonata Pathétique",
      "description": "Piano Sonata No. 8 in C minor, Op. 13, commonly known as Sonata Pathétique, was written in 1798 when the composer was 27 years old, and was published in 1799.",
      "date": "02-05-1799",
      "idUser": 4
    },
    {
      "id": 5,
      "title": "It",
      "description": "The story follows the experiences of seven children as they are terrorized by an evil entity that exploits the fears and phobias of its victims to disguise itself while hunting its prey. 'It' primarily appears in the form of Pennywise the Dancing Clown to attract its preferred prey of young children.",
      "date": "15-09-1986",
      "idUser": 1
    },
    {
      "id": 6,
      "title": "Misery",
      "description": "The novel's narrative is based on the relationship of its two main characters – the popular writer Paul Sheldon and his psychotic fan Annie Wilkes. When Paul is seriously injured following a car accident, former nurse Annie brings him to her home, where Paul receives treatment and doses of pain medication. Gradually, Paul realizes that he is a prisoner and is forced to indulge his captor's whims.",
      "date": "12-06-1987",
      "idUser": 1
    },
    {
      "id": 7,
      "title": "The alchemist",
      "description": "The Alchemist is a psychological novel, or so it would like you to think. Paulo Coelho tells the story of a Spanish shepherd who creates his own personal legend through his Andalusian travels in Egypt. The story propounds the “philosophy” that people only discover themselves when they understand how to listen.",
      "date": "29-01-1988",
      "idUser": 3
    },
    {
      "id": 8,
      "title": "The Winner Stands Alone",
      "description": "What is the price of success? Paulo Coelho offers us a mirror of our own society, where the cult of luxury and success makes us deaf to the truths murmured by our hearts.",
      "date": "14-11-2008",
      "idUser": 3
    },
    {
      "id": 9,
      "title": "Nocturne No. 20 in C-sharp minor",
      "description": "Chopin dedicated this work to his older sister, Ludwika Chopin, with the statement: “To my sister Ludwika as an exercise before beginning the study of my second Concerto“.",
      "date": "09-12-1870",
      "idUser": 5
    },
    {
      "id": 10,
      "title": "Minute Waltz",
      "description": "The Waltz in D-flat major, Op. 64, No. 1, Valse du petit chien (French for “Waltz of the little dog“), popularly known in English as the “Minute Waltz“, is a piano waltz composed by Frédéric Chopin. It is dedicated to the Countess Delfina Potocka.",
      "date": "19-04-1847",
      "idUser": 5
    },
    {
      "id": 11,
      "title": "Suite Española",
      "description": "Isaac Albéniz’s Suite española, Op. 47, is a suite for solo piano. It is mainly composed of works written in 1886 which were grouped together in 1887, in honour of the Queen of Spain. Like many of Albeniz’s works for the piano, these pieces depict different regions and musical styles in Spain.",
      "date": "29-04-1889",
      "idUser": 6
    },
    {
      "id": 12,
      "title": "Cataluña",
      "description": "Cataluña, Op. 47, No. 2, is a composition by Isaac Albéniz. It premiered as a piano performance in Paris in January 1899.",
      "date": "23-04-1886",
      "idUser": 6
    },
    {
      "id": 13,
      "title": "Alla Turca",
      "description": "The Piano Sonata No. 11 in A major, K. 331 / 300i, by Wolfgang Amadeus Mozart is a piano sonata in three movements. It is uncertain where and when Mozart composed the sonata; however, Vienna or Salzburg around 1783 is currently thought to be most likely (Paris and dates as far back as 1778 have also been suggested).",
      "date": "27-11-1784",
      "idUser": 7
    },
    {
      "id": 14,
      "title": "Piano Sonata No. 1",
      "description": "Wolfgang Amadeus Mozart's Piano Sonata No. 1 in C major, K. 279 / 189d (1774), is a piano sonata in three movements. It was written down, except for the first part of the opening movement, during the visit Mozart paid to Munich for the production of La finta giardiniera from late 1774 to the beginning of the following March.",
      "date": "13-05-1774",
      "idUser": 7
    },
    {
      "id": 15,
      "title": "Toccata and fugue",
      "description": "The Toccata and Fugue in D minor, BWV 565, is a piece of organ music written, according to its oldest extant sources, by Johann Sebastian Bach. The piece opens with a toccata section, followed by a fugue that ends in a coda. It is one of the most famous works in the organ repertoire.",
      "date": "12-02-1833",
      "idUser": 8
    },
    {
      "id": 16,
      "title": "Notebook for Anna Magdalena Bach",
      "description": "The title Notebook for Anna Magdalena Bach (German: Notenbüchlein für Anna Magdalena Bach) refers to either of two manuscript notebooks that the German Baroque composer Johann Sebastian Bach presented to his second wife, Anna Magdalena. Keyboard music (minuets, rondeaux, polonaises, chorales, sonatas, preludes, musettes, marches, gavottes) makes up most of both notebooks, and a few pieces for voice (songs, and arias) are included.",
      "date": "01-08-1722",
      "idUser": 8
    },
    {
      "id": 17,
      "title": "Kreisleriana",
      "description": "Kreisleriana, Op. 16, is a composition in eight movements by Robert Schumann for solo piano, subtitled Phantasien für das Pianoforte. It was written in only four days in April 1838 and a revised version appeared in 1850. The work was dedicated to Frédéric Chopin, but when a copy was sent to the Polish composer, 'he commented favorably only on the design of the title page'.",
      "date": "12-02-1850",
      "idUser": 9
    },
    {
      "id": 18,
      "title": "Humoreske",
      "description": "Humoresque (or Humoreske) is a genre of Romantic music characterized by pieces with fanciful humor in the sense of mood.",
      "date": "05-11-1852",
      "idUser": 9
    },
    {
      "id": 19,
      "title": "Amleto",
      "description": "Amleto is an opera or musical drama by Domenico Scarlatti, an Italian baroque composer (1685-1757). It is not certain that the argument was based on the Shakespearean tragedy Hamlet, that for this work the English playwright abbreviates in long-standing sources previous information and diversity of origin, well known in the European cultural field.",
      "date": "20-09-1715",
      "idUser": 10
    },
    {
      "id": 20,
      "title": "Ifigenia en Aulide",
      "description": "Iphigenia in Aulide (original title in Italian, Iphigenia in Aulide) is a dramma per musica (opera) in three acts with music by Domenico Scarlatti and a libretto in Italian by Carlo Sigismondo Capece. It premiered at the Zuccari Palace in Rome on January 11, 1713, although the date is not entirely safe.",
      "date": "11-01-1713",
      "idUser": 10
    },
    {
      "id": 21,
      "title": "Arabesque No. 1",
      "description": "This arabesque is in the key of E major. The piece begins with parallelism of triads in first inversion, a composition technique very much used by Debussy and other Impressionists which traces back to the tradition of fauxbourdon.",
      "date": "20-07-1891",
      "idUser": 11
    },
    {
      "id": 22,
      "title": "Clair de lune",
      "description": "The third and most famous movement of Suite bergamasque is Clair de lune, in D♭ major. Its name comes from Verlaine's poem 'Clair de lune', which means 'moonlight' in French.",
      "date": "16-09-1905",
      "idUser": 11
    },
    {
      "id": 23,
      "title": "The Universe in a Nutshell",
      "description": "The Universe in a Nutshell is a 2001 book about theoretical physics by Stephen Hawking. It is generally considered a sequel and was created to update the public concerning developments since the multi-million-copy bestseller A Brief History of Time published in 1988.",
      "date": "29-10-2001",
      "idUser": 12
    },
    {
      "id": 24,
      "title": "A Brief History of Time",
      "description": "A Brief History of Time: From the Big Bang to Black Holes is a popular-science book on cosmology (the study of the universe) by British physicist Stephen Hawking. It was first published in 1988. Hawking wrote the book for nonspecialist readers with no prior knowledge of scientific theories.",
      "date": "10-11-1988",
      "idUser": 12
    },
    {
      "id": 25,
      "title": "Harry Potter and the Goblet of Fire",
      "description": "Harry Potter and the Goblet of Fire is a fantasy book written by British author J. K. Rowling and the fourth novel in the Harry Potter series. It follows Harry Potter, a wizard in his fourth year at Hogwarts School of Witchcraft and Wizardry and the mystery surrounding the entry of Harry's name into the Triwizard Tournament, in which he is forced to compete.",
      "date": "08-07-2000",
      "idUser": 13
    },
    {
      "id": 26,
      "title": "Fantastic Beasts and Where to Find Them",
      "description": "Fantastic Beasts and Where to Find Them is a 2001 guide book written by British author J. K. Rowling (under the pen name of the fictitious author Newt Scamander) about the magical creatures in the Harry Potter universe.",
      "date": "01-12-2001",
      "idUser": 13
    }
  ]
};

module.exports = mockData;
