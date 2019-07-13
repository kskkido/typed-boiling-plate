import { always } from 'ramda';
import maybe from './utils/maybe';

type Component = () => HTMLElement;

export const renderOnTo = maybe<
  HTMLElement,
  (component: Component) => void
>(
  always(undefined),
  root => component => {
    while (root.firstChild) {
      root.removeChild(root.firstChild);
    }

    root.appendChild(component());
});
