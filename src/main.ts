import './app.css';
import App from './App.svelte';

let root = document.getElementById('app');

if (!root) {
  root = document.createElement('div');
  root.id = 'app';
  document.body.appendChild(root);
}

const app = new App({
  target: root,
});

export default app;
