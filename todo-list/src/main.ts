import { render } from '@/core/render';
import { selector } from '@/utils';
import App from './App';
import '@/styles/main.scss';

const $app = selector('#app');

render($app, App);