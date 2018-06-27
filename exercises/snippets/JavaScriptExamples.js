//Assign value to variable
var myStringVariable = "Grace Hopper";
var myNumberVariable = 1952;

//Output variable
document.write("String variable:" + myStringVariable);

//Store list/array in variable
var namesArray = [ "Ada Lovelace","Adele Goldberg","Anita Borg","Audrey Tang","Éva Tardos","Barbara Liskov","Beatrice Helen Worsley",
"Betty Holberton","Carla Meninsky","Carol Shaw","Dame Stephanie","Dana Ulery","Donna Dubinsky","Edith Clarke",
"Elizabeth J. Feinler","Ellen Spertus","Erna Schneider Hoover","Evelyn Boyd Granville","Frances Brazier","Frances E. Allen",
"Frances Spence","Gertrude Blanch","Grace Hopper","Grete Hermann","Hedy Lamarr","Henrietta Swan Leavitt","Ida Rhodes",
"Irene Greif","Irma Wyman","Janese Swanson","Jean Bartik","Jean E. Sammet","Jeri Ellsworth","Joan Margaret Winters",
"Joanna Rutkowska","Judith Estrin","Juliana Rotich","Karen Spärck Jones","Kathleen Booth","Kay McNulty","Kimberly Bryant",
"Limor Fried","Lorinda Cherry","Lynn Conway","Maria Klawe","Marissa Mayer","Marlyn Wescoff","Mary Allen Wilkes","Mary Lou Jepsen",
"Mary Shaw","Melanie","Monica S. Lam","Phyllis Fox","Radia Perlman","Rana el Kaliouby","Rósa Péter","Rebecca Enonchong","Roberta Williams",
"Ruchi Sanghvi","Ruth Lichterman","Sally Floyd","Sandra Kurtzig","Susan Estrada","Susan Nycum","Thelma Estrin","Window Snyder","Xiaoyuan Tu"];
//Output first element
document.write("First item in array:" + namesArray[0]);


//If conditional
//If first element equals a certain value, then add an asterisk
if(namesArray[0] == "somevalue") {
  document.write("First item in array:" + namesArray[0] + "*");
}

//For loop with array
var index;
for(index = 0; index < namesArray.length; index++) {
  document.write("<li>" + namesArray[index]);
}

var profilesArray = [
  {
  name: "Ada Lovelace",
  details: "Augusta Ada King, Countess of Lovelace, born Augusta Ada Byron and now commonly known as Ada Lovelace, was an English mathematician and writer chiefly known for her work on Charles Babbage's early mechanical general-purpose computer, the Analytical Engine. Her notes on the engine include what is recognized as the first algorithm intended to be carried out by a machine. Because of this, she is often described as the world's first computer programmer.",
  website: "http://en.wikipedia.org/wiki/Ada_Lovelace",
  image_path: "/img/profile/220px-Ada_Lovelace_portrait.jpg",
  image_width: "150",
  tags: "Ada Lovelace Day,History of Computing,Women in Tech",
  dbpedia_uri: "http://dbpedia.org/resource/Ada_Lovelace",
  birth_year: "1815",
  death_year: "1852",
  given_name: "Ada",
  surname: "Lovelace"
  },
  {
    id: "1",
    name: "Adele Goldberg",
    details: "Adele Goldberg is a computer scientist who participated in the development of the programming language Smalltalk-80 and various concepts related to object-oriented programming while a researcher at the Xerox Palo Alto Research Center, PARC, in the 1970s. Goldberg began working at PARC in 1973 as a laboratory and research assistant, and eventually became manager of the System Concepts Laboratory where she, Alan Kay, and others developed Smalltalk-80, which both developed the object-oriented approach of Simula 67 and introduced a programming environment of overlapping windows on graphic display screens. Not only was Smalltalk's innovative format simpler to use, it was also customizable and objects could be transferred among applications with minimal effort. Goldberg and Kay also were involved in the development of design templates, forerunners of the design patterns commonly used in software design.",
    website: "http://en.wikipedia.org/wiki/Adele_Goldberg_(computer_scientist)",
    image_path: "/img/profile/adele_goldberg.jpg",
    image_width: "150",
    tags: "Ada Lovelace Day,History of Computing,Women in Tech",
    dbpedia_uri: "http://dbpedia.org/resource/Adele_Goldberg_(computer_scientist)",
    birth_year: "1945",
    given_name: "Adele",
    surname: "Goldberg",
    known_for: "Smalltalk",
    alma_mater: "University of Michigan; University of Chicago"
  }
];

//For loop with objects
var index;
for(index = 0; index < profilesArray.length; index++) {
  document.write("<li>" + profilesArray[index]["given_name"] + " " + "</li>");
  //Next step: also output last name
}
