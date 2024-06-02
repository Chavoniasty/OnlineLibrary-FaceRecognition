
class FacesTableQueryBuilder {
    constructor() {
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

    where(field) {
        if (this.query.includes('SELECT')) {
            if (!this.query.includes('WHERE')) {
                this.query += 'WHERE ' + field + ' = ? ';
                return this;
            } else {
                this.query += 'AND ' + field + ' = ? ';
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