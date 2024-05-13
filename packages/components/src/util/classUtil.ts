const hasClass = (element: Element, className: string): boolean => {
	if (element.classList) {
		return element.classList.contains(className);
	}
	return new RegExp(String.raw`(\s|^)` + className + String.raw`(\s|$)`).test(element.className);
};

export const addClass = (element: Element | null, className: string): void => {
	if (!element) {
		return;
	}
	if (element.classList) {
		element.classList.add(className);
	} else if (!hasClass(element, className)) {
		element.className += " " + className;
	}
};

export const removeClass = (element: Element | null, className: string): void => {
	if (!element) {
		return;
	}
	if (element.classList) {
		element.classList.remove(className);
	} else if (hasClass(element, className)) {
		const reg = new RegExp(String.raw`(\s|^)` + className + String.raw`(\s|$)`);
		element.className = element.className.replace(reg, " ");
	}
};
