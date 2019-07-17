export function addClassName(selector, className) {
    const el = document.getElementById(selector)
    el.classList.add(className);
}

export function removeClassName(selector, className) {
    const el = document.getElementById(selector)
    el.classList.remove(className);
}