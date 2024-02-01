export function mergeAlternatively(word1: string, word2: string): string {
    const minLength: number = Math.min(word1.length, word2.length);
    let mergeStr = '';

    for (let i = 0; i < minLength; i++) {
        mergeStr += word1[i] + word2[i];
    }
    mergeStr += word1.slice(minLength) + word2.slice(minLength); 
    return mergeStr;
}