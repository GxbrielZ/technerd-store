const NewArticles = ({ articles }) => {
  return (
    <div className="bg-darkwhite py-6 px-6 md:mx-12 shadow mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mx-auto">
        {articles.map((article) => (
          <div
            key={article.id}
            className="relative rounded-lg shadow-md overflow-hidden bg-darkwhite"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>

            <div className="absolute bottom-0 left-0 right-0 p-4 md:px-8 md:py-8 text-darkwhite">
              <h2 className="text-xl md:text-2xl font-bold mb-2">
                {article.title}
              </h2>
              <p className="text-sm md:text-base mb-4">
                {article.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArticles;
