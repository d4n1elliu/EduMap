import { useEffect } from 'react';
import { SITE_TITLE, SITE_URL } from '../config/site';

// Set the tab title ("About | EduMap") and the canonical URL for a page.
// Pass no title to use the default site title.
export default function usePageMeta(title, path) {
    useEffect(() => {
        document.title = title ? `${title} | EduMap` : SITE_TITLE;

        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) canonical.href = `${SITE_URL}${path}`;
    }, [title, path]);
}
