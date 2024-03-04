// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import {findVideos} from './modules/video';

window.addEventListener('DOMContentLoaded', () => {

  findVideos();

  window.addEventListener('load', () => {

  });
});
