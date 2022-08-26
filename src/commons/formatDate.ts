export const formatDate = (timestamp: number, separator: string = ".") => {
    const date = new Date(timestamp);
    
    const day = date.getDate().toString().length === 1
        ? "0" + date.getDate().toString() : date.getDate();
    const mounth = date.getMonth().toString().length === 1
        ? "0" + date.getMonth().toString() : date.getMonth();
    const year = date.getFullYear();
    return [day, mounth, year].join(separator)
} 