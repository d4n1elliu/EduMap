// Return a new list with the item removed if present, or appended if missing
export function toggleItem(list, item) {
    return list.includes(item)
        ? list.filter((i) => i !== item)
        : [...list, item];
}
