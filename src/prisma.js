import './style.css';
import { createTable } from './helpers';

fetch('http://localhost:3000/datas.json')
  .then(response => response.json())
  .then(data => {
    createTable(data);
  })
  .catch(error => {
    console.error(error);
  });
