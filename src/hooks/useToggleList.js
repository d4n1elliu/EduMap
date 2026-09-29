import { useCallback, useState } from 'react';
import { toggleItem } from '../lib/array';

// State for a multi-select list: [items, toggle(item), setItems]
export default function useToggleList(initial = []) {
    const [items, setItems] = useState(initial);
    const toggle = useCallback((item) => setItems((prev) => toggleItem(prev, item)), []);
    return [items, toggle, setItems];
}
