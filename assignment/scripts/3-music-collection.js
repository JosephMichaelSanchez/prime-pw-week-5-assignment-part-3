console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished){
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
console.log(collection);

function showCollection(array){
  console.log(array.length);
  for(i=0; i<array.length; i++){
    console.log(array[i].title + ' by ' + array[i].artist + ' published in ' + array[i].yearPublished);
    }
}

showCollection(collection);
