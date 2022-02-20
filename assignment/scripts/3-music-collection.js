console.log('***** Music Collection *****')


let collection = [];

function addToCollection(title, artist, yearPublished){
  console.log('Adding a record to the collection...');
  let record = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  }
  collection.push(record);
  return record;

}//END OF addToCollection FUNCTION
//This function creates a local object named 'record'.
//It takes in 'title', 'artist', and 'yearPublished' parameters and turns them into the values for the respective properties of 'record'.
//The function then pushes the 'record' object into the 'collection' array and returns the record.

console.log('Adding Massive Attack, Blue Lines, 1991 to the collection:', addToCollection('Blue Lines', 'Massive Attack', 1991));
console.log('Adding Massive Attack, Protection, 1995 to the collection:', addToCollection('Protection', 'Massive Attack', 1995));
console.log('Adding Nine Inch Nails, The Downward Spiral, 1994 to the collection:', addToCollection('The Downward Spiral', 'Nine Inch Nails', 1994));
console.log('Adding The Chemical Brothers, Dig Your Own Hole, 1997 to the collection:', addToCollection('Dig Your Own Hole', 'The Chemical Brothers', 1997));
console.log('Adding Roni Size, New Forms, 1997 to the collection:', addToCollection('New Forms', 'Roni Size', 1997));
console.log('Adding Megadeth, Rust in Peace, 1990 to the collection:', addToCollection('Rust in Peace', 'Megadeth', 1990));
console.log(collection);

function showCollection(array){
  console.log('Showing the collection...');
  console.log(`There are ${array.length} records in the collection:`);
  for(i=0; i<array.length; i++){
    console.log(`${array[i].title} by ${array[i].artist} published in ${array[i].yearPublished}`);
    }
}//END OF showCollection FUNCTION
//This function will tell us how many records are in the 'collection' array by console logging it's length.
//It will then run a for loop to list each record in the collection in the console.

showCollection(collection);

function findByArtist(artist){
  console.log('Searching for an artist...');
  let newArray = [];
  for(i=0; i<collection.length; i++){
    if(artist === collection[i].artist){
      newArray.push(collection[i]);
    }
  }
  return newArray;
}//END OF findByArtist FUNCTION
//This function takes in a string parameter of an artist's name.
//It then creates an an empty array name 'newArray'.
//It will then loop through the collection and each record that has an .artist property that matches the parameter will be pushed into 'newArray'.
//It will then return newArray. Even if no matches were found, the array will return blank as instructed.
console.log('Looking for artist Massive Attack in the collection:', findByArtist('Massive Attack'));
console.log('Looking for artist Portishead in the collection:', findByArtist('Portishead'));

function search(searchObject){
  console.log('Running a search for a record...');
  let artistArray = [];
  for(i=0; i<collection.length; i++){
    if (searchObject == undefined || searchObject.artist == undefined || searchObject.year == undefined){
      return collection;
    }
    else if (searchObject.artist === collection[i].artist && searchObject.year === collection[i].yearPublished){
      artistArray.push(collection[i]);
    }
  }
  return artistArray;
}//END OF search FUNCTION
//This function takes in an object as a parameter.
//It creates an empty array called 'artistArray'.
//If no object was given as a parameter, or if there is no defined artist or year property, it returns the entire collection array.
//If artist property AND the year property BOTH match the values of an object in the collection array, it pushes that object into the artistArray.
//The artistArray is then returned; empty if no matches were found or with elements of the matches found.

const blueLines = {
  artist: 'Massive Attack',
  year: 1991
};

const downwardSpiral = {
  artist: 'Nine Inch Nails',
  year: 1994
};

const rustInPiece = {
  artist: 'Megadeth'
};

const prettyHateMachine = {
  artist: 'Nine Inch Nails',
  year: 1989
};

console.log('Searching for blueLines:', search(blueLines));
console.log('Searching for downwardSpiral:', search(downwardSpiral));
console.log('Searching for rustInPiece:', search(rustInPiece));
console.log('Searching for prettyHateMachine:', search(prettyHateMachine));




/*
let collection = [];

function addToCollection(title, artist, yearPublished, tracks){
  console.log('Adding a record to the collection...');
  let record = {
    title: 'title',
    artist: 'artist',
    yearPublished: 'yearPublished',
    tracks: []

  };

  record.title = title;
  record.artist = artist;
  record.yearPublished = yearPublished;
  record.tracks = tracks;

  collection.push(record);
  return record;
}
console.log('Adding Massive Attack, Blue Lines, 1991 to the collection:', addToCollection('Blue Lines', 'Massive Attack', 1991, [{name: 'Safe From Harm', duration: 5_19}, {name: 'One Love', duration: 4_49}, {name: 'Blue Lines', duration: 4_22}]));
console.log('Adding Massive Attack, Protection, 1995 to the collection:', addToCollection('Protection', 'Massive Attack', 1995, [{name: 'Protection', duration: 7_52}, {name: 'Karmacoma', duration: 5_17}, {name: 'Three', duration: 3_49}]));
console.log('Adding Nine Inch Nails, The Downward Spiral, 1994 to the collection:', addToCollection('The Downward Spiral', 'Nine Inch Nails', 1994, [{name: 'Mr. Self Detruct', duration: 4_31}, {name: 'Piggy', duration: 4_24}, {name: 'Heresy', duration: 3_54}]));
console.log('Adding The Chemical Brothers, Dig Your Own Hole, 1997 to the collection:', addToCollection('Dig Your Own Hole', 'The Chemical Brothers', 1997, [{name: 'Block Rockin\' Beats', duration: 5_27}, {name: 'Dig Your Own Hole', duration: 5_27}, {name: 'Electrobank', duration: 8_19}]));
console.log('Adding Roni Size, New Forms, 1997 to the collection:', addToCollection('Roni Size', 'New Forms', 1997, [{name: 'Railing', duration: 2_05}, {name: 'Brown Paper Bag', duration: 9_03}, {name: 'New Forms', duration: 7_45}]));
console.log('Adding Megadeth, Rust in Peace, 1990 to the collection:', addToCollection('Megadeth', 'Rust in Peace', 1990, [{name: 'Holy Wars...The Punishment Due', duration: 6_36}, {name: 'Hanger 18', duration: 5_18}, {name: 'Take No Prisoners', duration: 3_28}]));
console.log(collection);

function showCollection(array){
  console.log('Showing the collection...');
  console.log(`There are ${array.length} records in the collection:`);
  for(i=0; i<array.length; i++){
    console.log(`${array[i].title} by ${array[i].artist} published in ${array[i].yearPublished}:`);
    console.log(array[i].tracks);
    }
}
showCollection(collection);

function findByArtist(artist){
  console.log('Searching for an artist...');
  let newArray = [];
  for(i=0; i<collection.length; i++){
    if(artist === collection[i].artist){
      newArray.push(collection[i]);
    }
  }
  return newArray;
}

console.log('Looking for artist Massive Attack in the collection:', findByArtist('Massive Attack'));
console.log('Looking for artist Portishead in the collection:', findByArtist('Portishead'));

function search(searchObject){
  console.log('Running a search for a record...');
  let artistArray = [];
  for(i=0; i<collection.length; i++){
    if (searchObject == undefined || searchObject.artist == undefined || searchObject.year == undefined){
      return collection;
    }
    else if (searchObject.artist === collection[i].artist && searchObject.year === collection[i].yearPublished){
      artistArray.push(collection[i]);
    }
  }
  return artistArray;
}

*/
