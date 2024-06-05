class Paginator {

    static PAGINATION_LIMIT = 10;

    static getNextPage(req) {
        let limit = this.clipLimit(req);
        if (req.query.offset) {
            let nextOffset = parseInt(req.query.offset) + limit;

            return req.url.replace('offset=' + req.query.offset, 'offset=' + nextOffset);
        } else {
            if (Object.keys(req.query).length === 0) {
                return req.url + '?offset=' + limit;
            }
            return req.url + '&offset=' + limit;
        }
    }

    static clipLimit(req) {
        return req.query.limit ? Math.min(parseInt(req.query.limit), Paginator.PAGINATION_LIMIT) : Paginator.PAGINATION_LIMIT;
    }
}

module.exports = { Paginator };