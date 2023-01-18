export function selector<T = HTMLElement>(target: string, parent: Element | Document = document): T {
  const $element = parent.querySelector(target);

  return $element as unknown as T;
}

export function selectorAll<T = HTMLElement>(target: string, parent: Element | Document = document): T[] {
  const $element = parent.querySelectorAll(target);

  return $element as unknown as T[];
}