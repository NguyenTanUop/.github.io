// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var bar = new ProgressBar.Path('#heart-path', {
  easing: 'easeInOut',
  duration: 5600
});

bar.set(0);
bar.animate(1.0);  // Number from 0.0 to 1.0
