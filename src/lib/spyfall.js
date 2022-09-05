import { baseConvert } from "./utils";

const ALPHABET_HUMAN = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ.';
const ALPHABET_URL = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz._-~';

export const SPYFALL_LOCATIONS = {
    A: 'Beach',
    B: 'Movie Theater',
    C: 'Casino',
    D: 'Circus',
    E: 'Bank',
    F: 'Hotel',
    G: 'Restaurant',
    H: 'Supermarket',
    I: 'Service Station',
    J: 'Hospital',
    K: 'School',
    L: 'University',
    M: 'Airport',
    N: 'Train Station',
    O: 'Church',
    P: 'Sports Stadium',
    Q: 'Library',
};

export const toUrl = human => baseConvert(human, ALPHABET_HUMAN, ALPHABET_URL);
export const toHuman = url => baseConvert(url, ALPHABET_URL, ALPHABET_HUMAN);

