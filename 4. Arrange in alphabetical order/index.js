const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
  },
  {
    title: "Who Are You",
    author: "George Orwell",
    year: 1949,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
  },
];

function logTitles(titles) {
  titles.sort();
  console.log(titles.join(", "));
}

function extractTitles(books, callback) {
  const titles = books.map((book) => {
    return book.title;
  });
  callback(titles);
}
extractTitles(books, logTitles);
