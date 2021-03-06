const initialState = {
  posts: [
    {
      id: "1",
      title: "Article title 1",
      shortDescription: "Short description of the article...",
      content: "Main content of the article",
      publishedDate: new Date("04-10-2022"),
      author: "John Doe",
      category: "Sport",
    },
    {
      id: "2",
      title: "Article title 2",
      shortDescription: "Short description of the article...",
      content: "Main content of the article",
      publishedDate: new Date("04-20-2022"),
      author: "Anna More",
      category: "News",
    },
    {
      id: "3",
      title: "Article title 3",
      shortDescription: "Short description of the article...",
      content: "Main content of the article",
      publishedDate: new Date("06-14-2022"),
      author: "Kevin Stan",
      category: "Movies",
    },
  ],

  categories: ["Sport", "News", "Movies"],
};

export default initialState;
