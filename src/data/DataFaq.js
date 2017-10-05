import FaqData from '../data/faqs';

const DataFaq = {
    faqs: FaqData,
    all: function() { return this.faqs},
    get: function(id) {
        const isFaq = n => n.id === id;
        return this.faqs.find(isFaq);
    }
};

export default DataFaq;