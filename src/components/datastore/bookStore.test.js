import { getBookList, getBookDetail, getLatestBook, getTrendingBook } from './bookStore';

global.fetch = jest.fn();

afterEach(() => {
    jest.clearAllMocks();
});

describe('getBookList', () => {
    it('returns books on successful fetch', async () => {
        const mockResponse = {
            items: [{ id: '1', volumeInfo: { title: 'Book One' } }],
            totalItems: 1,
        };

        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockResponse
        });

        const result = await getBookList({ query: 'test' });

        expect(result.books).toEqual(mockResponse.items);
        expect(result.totalItems).toBe(1);
        expect(result.error).toBe('');
        expect(fetch).toHaveBeenCalledWith(expect.stringContaining('test'), expect.any(Object));
    });

    it('handles fetch error gracefully', async () => {
        fetch.mockRejectedValueOnce(new Error('Network error'));

        const result = await getBookList({ query: 'test' });

        expect(result.books).toEqual([]);
        expect(result.error).toBe('Network error');
    });
});

describe('getBookDetail', () => {
    it('fetches book detail successfully', async () => {
        const mockBook = { id: 'abc', volumeInfo: { title: 'Detail Book' } };

        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockBook
        });

        const result = await getBookDetail('abc');

        expect(result.book).toEqual(mockBook);
        expect(result.error).toBe('');
    });

    it('returns error if id is missing', async () => {
        const result = await getBookDetail();

        expect(result.book).toBe(null);
        expect(result.error).toBe('Book ID is required.');
    });
});

describe('getLatestBook', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('returns latest books on successful fetch', async () => {
        const mockResponse = {
            items: [
                { id: '1', volumeInfo: { title: 'Latest Book One' } },
                { id: '2', volumeInfo: { title: 'Latest Book Two' } }
            ]
        };

        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockResponse
        });

        const result = await getLatestBook();

        expect(result.books).toEqual(mockResponse.items);
        expect(result.error).toBe('');
        expect(fetch).toHaveBeenCalledWith(
            expect.stringContaining('orderBy=newest'),
            expect.any(Object)
        );
    });

    it('handles API failure response', async () => {
        fetch.mockResolvedValueOnce({
            ok: false,
            json: async () => ({ error: { message: 'API error' } })
        });

        const result = await getLatestBook();

        expect(result.books).toEqual([]);
        expect(result.error).toBe('API error');
    });

    it('handles fetch rejection', async () => {
        fetch.mockRejectedValueOnce(new Error('Network error'));

        const result = await getLatestBook();

        expect(result.books).toEqual([]);
        expect(result.error).toBe('Network error');
    });
});

describe('getTrendingBook', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('returns trending books on successful fetch', async () => {
        const mockResponse = {
            items: [
                { id: '3', volumeInfo: { title: 'Trending Book One' } }
            ]
        };

        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockResponse
        });

        const result = await getTrendingBook();

        expect(result.books).toEqual(mockResponse.items);
        expect(result.error).toBe('');
        expect(fetch).toHaveBeenCalledWith(
            expect.stringContaining('best%20sellers'),
            expect.any(Object)
        );
    });

    it('handles API failure response', async () => {
        fetch.mockResolvedValueOnce({
            ok: false,
            json: async () => ({ error: { message: 'Something went wrong' } })
        });

        const result = await getTrendingBook();

        expect(result.books).toEqual([]);
        expect(result.error).toBe('Something went wrong');
    });

    it('handles fetch rejection', async () => {
        fetch.mockRejectedValueOnce(new Error('Network down'));

        const result = await getTrendingBook();

        expect(result.books).toEqual([]);
        expect(result.error).toBe('Network down');
    });
});