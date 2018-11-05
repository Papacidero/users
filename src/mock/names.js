// eslint-disable-next-line import/no-mutable-exports
export let names = `Emma	Liam
Olivia	Noah
Ava	William
Isabella	James
Sophia	Logan
Mia	Benjamin
Charlotte	Mason
Amelia	Elijah
Evelyn	Oliver
Abigail	Jacob
Harper	Lucas
Emily	Michael
Elizabeth	Alexander
Avery	Ethan
Sofia	Daniel
Ella	Matthew
Madison	Aiden
Scarlett	Henry
Victoria	Joseph
Aria	Jackson
Grace	Samuel
Chloe	Sebastian
Camila	David
Penelope	Carter
Riley	Wyatt
Layla	Jayden
Lillian	John
Nora	Owen
Zoey	Dylan
Mila	Luke
Aubrey	Gabriel
Hannah	Anthony
Lily	Isaac
Addison	Grayson
Eleanor	Jack
Natalie	Julian
Luna	Levi
Savannah	Christopher
Brooklyn	Joshua
Leah	Andrew
Zoe	Lincoln
Stella	Mateo
Hazel	Ryan
Ellie	Jaxon
Paisley	Nathan
Audrey	Aaron
Skylar	Isaiah
Violet	Thomas
Claire	Charles
Bella	Caleb
Aurora	Josiah
Lucy	Christian
Anna	Hunter
Samantha	Eli
Caroline	Jonathan
Genesis	Connor
Aaliyah	Landon
Kennedy	Adrian
Kinsley	Asher
Allison	Cameron
Maya	Leo
Sarah	Theodore
Madelyn	Jeremiah
Adeline	Hudson
Alexa	Robert
Ariana	Easton
Elena	Nolan
Gabriella	Nicholas
Naomi	Ezra
Alice	Colton
Sadie	Angel
Hailey	Brayden
Eva	Jordan
Emilia	Dominic
Autumn	Austin
Quinn	Ian
Nevaeh	Adam
Piper	Elias
Ruby	Jaxson
Serenity	Greyson
Willow	Jose
Everly	Ezekiel
Cora	Carson
Kaylee	Evan
Lydia	Maverick
Aubree	Bryson
Arianna	Jace
Eliana	Cooper
Peyton	Xavier
Melanie	Parker
Gianna	Roman
Isabelle	Jason
Julia	Santiago
Valentina	Chase
Nova	Sawyer
Clara	Gavin
Vivian	Leonardo
Reagan	Kayden
Mackenzie	Ayden
Madeline	Jameson
Carlos	Tatiana`
  .split('\n')
  .map(item => item.split('\t'));

names = [...names.map(name => name[0]), ...names.map(name => name[1])];

export default names;
