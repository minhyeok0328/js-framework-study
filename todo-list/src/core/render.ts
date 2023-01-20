import { selectorAll } from '@/utils';

interface eventListenerType {
  eventType: string;
  target: string;
  callback: () => void;
}

interface renderProps {
  element: HTMLElement | null;
  rootComponent: () => string;
}

function Render() {
  const context: renderProps = {
    element: null,
    rootComponent: () => '',
  };
  let eventListenerStack: eventListenerType[] = [];
  const _render = () => {
    context.element!.innerHTML = context.rootComponent();

    runEventListener();
  };
  const render = ($element: HTMLElement, rootComponent: () => string) => {
    context.element = $element;
    context.rootComponent = rootComponent;

    _render();
  }

  function addEvent(eventType: string, target: string, callback: () => void) {
    eventListenerStack.push({
      eventType,
      target,
      callback,
    });
  }

  function runEventListener() {
    eventListenerStack.forEach(({ eventType, target, callback }: eventListenerType) => {
      const $target: HTMLElement[] = selectorAll(target);

      [...$target].forEach((item) => {
        item.addEventListener(eventType, callback);
      });
    });

    eventListenerStack = [];
  }

  return {
    render,
    _render,
    addEvent,
  };
}

const { render, addEvent, _render } = Render();

export { render, addEvent, _render };