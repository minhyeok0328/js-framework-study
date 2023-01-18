import { selectorAll } from '@/utils';

interface eventListenerType {
  eventType: string;
  target: string;
  callback: () => void;
}

function Render() {
  const eventListenerStack: eventListenerType[] = [];
  const render = ($element: HTMLElement, rootComponent: () => string) => {
    $element.innerHTML = rootComponent();

    runEventListener();
  }

  function addEvent(eventType: string, target: string, callback: () => void) {
    eventListenerStack.push({
      eventType,
      target,
      callback,
    });
  };

  function runEventListener() {
    eventListenerStack.forEach(({ eventType, target, callback }: eventListenerType) => {
      const $target: HTMLElement[] = selectorAll(target);

      [...$target].forEach((item) => {
        item.addEventListener(eventType, callback);
      });
    });
  }

  return {
    render,
    addEvent,
  };
}

const { render, addEvent } = Render();

export { render, addEvent };