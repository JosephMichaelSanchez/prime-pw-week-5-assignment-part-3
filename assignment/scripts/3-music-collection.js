console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished){
  let record = {
    title:,
    artist:,
    yearPublished:
  }

  record.title = title;
  record.artist = artist;
  record.yearPublished = yearPublished;
  collection.push(record);
  return record;
}
