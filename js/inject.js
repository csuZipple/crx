window.addEventListener('copy', function (e) {
    e = window.event || e;
    e.stopPropagation();
}, true);
