import  { useMemo, useState } from 'react';
import { IData } from '../../@types/data.type';

interface SortConfig {
    key: string | number,
    direction: string
}
export const useSortableData = (items: IData[], config = null) => {
    const [sortConfig, setSortConfig] = useState<null | SortConfig>(config);

    const sortedItems = useMemo(() => {
        const sortableItems = items;
        
        if (sortConfig !== null) {
            sortableItems.sort((obj1, obj2) => {
               
                if (obj1[sortConfig.key as keyof typeof config] < obj2[sortConfig.key as keyof typeof config]) {
                
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (obj1[sortConfig.key as keyof typeof config] > obj2[sortConfig.key as keyof typeof config]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }

                return 0;
            })
        }
        return sortableItems;
    }, [items, sortConfig]);

    const requestSort = (key: string) => {
        let direction = 'ascending';
        if (
            sortConfig &&
            sortConfig.key === key &&
            sortConfig.direction === 'ascending'
        ) {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
       
    };

    return { items: sortedItems, requestSort, sortConfig }
}