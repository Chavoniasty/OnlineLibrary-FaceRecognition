class AbstractQueryBuilder {
    constructor() {
        if (new.target === AbstractQueryBuilder) {
            throw new TypeError("Cannot construct AbstractQueryBuilder instances directly");
        }
    }

    select(fields) {
        throw new Error("Method 'select()' must be implemented.");
    }

    where(field, operator, value) {
        throw new Error("Method 'where()' must be implemented.");
    }

    offset(offset) {
        throw new Error("Method 'offset()' must be implemented.");
    }

    limit(limit) {
        throw new Error("Method 'limit()' must be implemented.");
    }

    insert(fields) {
        throw new Error("Method 'insert()' must be implemented.");
    }

    build() {
        throw new Error("Method 'build()' must be implemented.");
    }

}

module.exports.AbstractQueryBuilder = AbstractQueryBuilder;