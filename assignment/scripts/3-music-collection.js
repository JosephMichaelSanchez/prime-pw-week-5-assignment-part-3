console.log('***** Music Collection *****')

/*
let collection = [];

function addToCollection(title, artist, yearPublished){
  console.log('Adding a record to the collection...');
  let record = {
    title: 'title',
    artist: 'artist',
    yearPublished: 'yearPublished'
  }

  record.title = title;
  record.artist = artist;
  record.yearPublished = yearPublished;
  collection.push(record);
  return record;
}
console.log('Adding Massive Attack, Blue Lines, 1991 to the collection:', addToCollection('Blue Lines', 'Massive Attack', 1991));
console.log('Adding Massive Attack, Protection, 1995 to the collection:', addToCollection('Protection', 'Massive Attack', 1995));
console.log('Adding Nine Inch Nails, The Downward Spiral, 1994 to the collection:', addToCollection('The Downward Spiral', 'Nine Inch Nails', 1994));
console.log('Adding The Chemical Brothers, Dig Your Own Hole, 1997 to the collection:', addToCollection('Dig Your Own Hole', 'The Chemical Brothers', 1997));
console.log('Adding Roni Size, New Forms, 1997 to the collection:', addToCollection('Roni Size', 'New Forms', 1997));
console.log('Adding Megadeth, Rust in Peace, 1990 to the collection:', addToCollection('Megadeth', 'Rust in Peace', 1990));
console.log(collection);

function showCollection(array){
  console.log('Showing the collection...');
  console.log(`There are ${array.length} records in the collection:`);
  for(i=0; i<array.length; i++){
    console.log(`${array[i].title} by ${array[i].artist} published in ${array[i].yearPublished}`);
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

function search(artist, year){
  console.log('Running a search for a record...');
  let artistArray = [];
  for(i=0; i<collection.length; i++){
    if (artist == undefined || year == undefined){
      return collection;
    }
    else if (artist === collection[i].artist && year === collection[i].yearPublished){
      artistArray.push(collection[i]);
    }
  }
  return artistArray;
}

console.log('Searching for Massive Attack without year:', search('Massive Attack',));
console.log('Searching for Right Said Fred, 1991', search('Right Said Fred', 1991));
*/

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

function search(artist, year){
  console.log('Running a search for a record...');
  let artistArray = [];
  for(i=0; i<collection.length; i++){
    if (artist == undefined || year == undefined){
      return collection;
    }
    else if (artist === collection[i].artist && year === collection[i].yearPublished){
      artistArray.push(collection[i]);
    }
  }
  return artistArray;
}

console.log('Searching for Massive Attack without year:', search('Massive Attack',));
console.log('Searching for Right Said Fred, 1991', search('Right Said Fred', 1991));
