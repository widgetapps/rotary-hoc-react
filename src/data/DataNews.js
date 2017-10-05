import ArticleData from '../data/articles';

const DataNews = {
    articles: ArticleData,
    all: function() { return this.articles},
    get: function(id) {
        const isNews = n => n.number === id;
        return this.articles.find(isNews);
    }
};

export default DataNews;