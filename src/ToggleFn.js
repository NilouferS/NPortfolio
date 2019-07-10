export default function Toggle(selector, className) {
    console.log(selector);
    const el = document.getElementById(selector)
    console.log(el);
        if (el.classList.contains(selector)) {
            el.classList.remove(className);
        } else {
            el.classList.add(className);
        }
}