const { AbstractQueryBuilder } = require('./abstract_query_builder');


class FacesTableQueryBuilder extends AbstractQueryBuilder {
    constructor() {
        super();
        this.TABLE_NAME = 'faces';
        this.query = '';
    }

    select(fields) {
        if (!this.query.includes('SELECT')) {
            this.query += 'SELECT ' + fields.join(', ') + ' FROM ' + this.TABLE_NAME + ' ';
            return this;
        } else {
            throw new Error('SELECT statement already exists');
        }
    }

    where(field, operator, value) {
        if (this.query.includes('SELECT')) {
            if (!this.query.includes('WHERE')) {
                this.query += 'WHERE ' + field + ' ' + operator + ' ' + value + ' ';
                return this;
            } else {
                this.query += 'AND ' + field + ' ' + operator + ' ' + value + ' ';
                return this;
            }
        } else {
            throw new Error('SELECT statement is missing');
        }
    }

    offset(offset) {
        this.query += 'OFFSET ' + offset + ' ';
        return this;
    }

    limit(limit) {
        this.query += 'LIMIT ' + limit + ' ';
        return this;
    }

    build() {
        let q = this.query.trim() + ';';
        this.query = '';
        return q;
    }

}

module.exports.FacesTableQueryBuilder = FacesTableQueryBuilder;