class Paginator {

    static PAGINATION_LIMIT = 10;

    static getNextPage(req) {
        if (req.query.offset) {
            let nextLimit = req.query.limit ? parseInt(req.query.limit) : this.PAGINATION_LIMIT;
            let nextOffset = parseInt(req.query.offset) + nextLimit;

            return req.url.replace('offset=' + req.query.offset, 'offset=' + nextOffset);
        } else {
            let nextOffset = req.query.limit ?? 10;
            return req.url + '&offset=' + nextOffset;
        }
    }
}

module.exports = { Paginator };