const ftqb = require('./faces_table_query_builder.js');

describe('FacesTableQueryBuilder', () => {
    let queryBuilder;

    beforeEach(() => {
        queryBuilder = new ftqb.FacesTableQueryBuilder();
    });

    it('should generate a valid SELECT query', () => {
        const query = queryBuilder.select(['id', 'name']).build();
        expect(query).toBe('SELECT id, name FROM faces;');
    });

    it('should throw an error if SELECT statement already exists', () => {
        queryBuilder.select(['id', 'name']);
        expect(() => queryBuilder.select(['age'])).toThrowError('SELECT statement already exists');
    });

    it('should throw an error if SELECT statement is missing', () => {
        expect(() => queryBuilder.where('id')).toThrowError('SELECT statement is missing');
    });

    it('should generate a valid WHERE query', () => {
        queryBuilder.select(['id', 'name']).where('id');
        const query = queryBuilder.build();
        expect(query).toBe('SELECT id, name FROM faces WHERE id = ?;');
    });

    it('should generate a valid WHERE query with multiple conditions', () => {
        queryBuilder.select(['id', 'name']).where('id').where('name');
        const query = queryBuilder.build();
        expect(query).toBe('SELECT id, name FROM faces WHERE id = ? AND name = ?;');
    });

    it('should clear the query after building', () => {
        queryBuilder.select(['id', 'name']).where('id').build();
        expect(queryBuilder.query).toBe('');
    });

    it('should generate a valid OFFSET query', () => {
        queryBuilder.select(['id', 'name']).offset(10);
        const query = queryBuilder.build();
        expect(query).toBe('SELECT id, name FROM faces OFFSET 10;');
    });

    it('should generate a valid LIMIT query', () => {
        queryBuilder.select(['id', 'name']).limit(10);
        const query = queryBuilder.build();
        expect(query).toBe('SELECT id, name FROM faces LIMIT 10;');
    });
});