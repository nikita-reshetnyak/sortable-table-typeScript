
export const formatValue = (value: string): string => {
    return value.toLocaleLowerCase().replaceAll(/\s /g, "");
}