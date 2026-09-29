// Join class names, skipping falsy values: cx('a', cond && 'b')
export default function cx(...classes) {
    return classes.filter(Boolean).join(' ');
}
