import { useEffect, useState } from 'react';

export function useResponsiveItemsPerPage() {
    const [itemsPerPage, setItemsPerPage] = useState<number>(5);

    useEffect(() => {
        const updateItemsPerPage = () => {
            if (window.matchMedia("(min-width: 768px)").matches) {
                setItemsPerPage(6); // md and above
            } else {
                setItemsPerPage(5); // below md
            }
        };

        updateItemsPerPage(); // initial set
        window.addEventListener('resize', updateItemsPerPage);

        return () => window.removeEventListener('resize', updateItemsPerPage);
    }, []);

    return itemsPerPage;
}