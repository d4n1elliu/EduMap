// InformationTechnology -> Information Technology
export function courseLabel(course) {
    return (course ?? '').toString().replace(/([a-z])([A-Z])/g, '$1 $2');
}
