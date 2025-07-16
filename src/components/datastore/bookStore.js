/**
 * @typedef {Object} GoogleBook
 * @property {string} id
 * @property {Object} volumeInfo
 * @property {string} volumeInfo.title
 * @property {string[]} [volumeInfo.authors]
 * @property {string} [volumeInfo.description]
 * @property {Object} [volumeInfo.imageLinks]
 * @property {string} [volumeInfo.imageLinks.thumbnail]
 * @property {string} [volumeInfo.publishedDate]
 * @property {string} [volumeInfo.publisher]
 * @property {string} [volumeInfo.language]
 * @property {number} [volumeInfo.pageCount]
 * @property {string[]} [volumeInfo.categories]
 */

/**
 * 
 * @param {Object} options
 * @param {string} [options.query='']
 * @param {number} [options.start=0]
 * @param {number} [options.maxResults=8]
 * @returns {Promise<{ books: GoogleBook[], totalItems: number, startIndex: number, error: string }>}
 */

/**
 * Fetch the latest books using Google Books API
 * 
 * @returns {Promise<{ books: GoogleBook[], error: string }>}
 */

/**
 * Fetch the trending books using Google Books API
 * 
 * @returns {Promise<{ books: GoogleBook[], error: string }>}
 */

export const getBookList = async ({ query = '', start = 0, maxResults = 8 }) => {
    try {
        const term = query.trim() || '';
        const url = `${process.env.VUE_APP_API_URL}?q=${encodeURIComponent(term)}&startIndex=${start}&maxResults=${maxResults}`;

        const response = await fetch(url, {
            method: 'GET',
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error?.message || 'Failed to fetch books');
        }

        const data = await response.json();

        return {
            books: data.items || [],
            totalItems: data.totalItems || 0,
            startIndex: start,
            error: data.items ? '' : 'No books found.'
        };

    } catch (error) {
        console.error('getBookList error:', error.message || error);
        return {
            books: [],
            totalItems: 0,
            startIndex: start,
            error: error.message || 'Error fetching books.'
        };
    }
};

export const getBookDetail = async (id) => {
    try {
        if (!id) throw new Error('Book ID is required.');

        const url = `${process.env.VUE_APP_API_URL}/${encodeURIComponent(id)}`;
        const response = await fetch(url, { method: 'GET' });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error?.message || 'Failed to fetch book details');
        }

        const data = await response.json();

        return {
            book: data || null,
            error: ''
        };
    } catch (error) {
        console.error('getBookDetail error:', error.message || error);
        return {
            book: null,
            error: error.message || 'Error fetching book detail.'
        };
    }
};

export const getLatestBook = async () => {
    try {
        const url = `${process.env.VUE_APP_API_URL}?q=a&orderBy=newest&maxResults=4`;
        const response = await fetch(url, { method: 'GET' });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error?.message || 'Failed to fetch latest books');
        }

        const data = await response.json();

        return {
            books: data.items || [],
            error: data.items ? '' : 'No latest books found.'
        };

    } catch (error) {
        console.error('getLatestBook error:', error.message || error);
        return {
            books: [],
            error: error.message || 'Error fetching latest books.'
        };
    }
};

export const getTrendingBook = async () => {
    try {
        const url = `${process.env.VUE_APP_API_URL}?q=best%20sellers&orderBy=relevance&maxResults=4`;
        const response = await fetch(url, { method: 'GET' });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error?.message || 'Failed to fetch trending books');
        }

        const data = await response.json();

        return {
            books: data.items || [],
            error: data.items ? '' : 'No trending books found.'
        };

    } catch (error) {
        console.error('getTrendingBooks error:', error.message || error);
        return {
            books: [],
            error: error.message || 'Error fetching trending books.'
        };
    }
};
