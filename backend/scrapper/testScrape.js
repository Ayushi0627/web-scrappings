const scrapeJournalPublications = require('./scrapeJournalPublications');

(async () => {
    const publications = await scrapeJournalPublications();
    console.log('Scraped Publications:', publications);
})();
