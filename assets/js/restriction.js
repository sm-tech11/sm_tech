function isInputElement(event) {
    const target = event.target;
    return target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable;
}

document.addEventListener('contextmenu', function(e) {
    if (!isInputElement(e)) {
        e.preventDefault();
    }
});

document.addEventListener('selectstart', function(e) {
    if (!isInputElement(e)) {
        e.preventDefault();
    }
});

document.addEventListener('copy', function(e) {
    if (!isInputElement(e)) {
        e.preventDefault();
    }
});

document.addEventListener('paste', function(e) {
    if (!isInputElement(e)) {
        e.preventDefault();
    }
});

document.addEventListener('keydown', function(e) {
    if (isInputElement(e)) {
        return;
    }
    
    // Windows
    if (e.key === 'PrintScreen' || (e.key === 'p' && e.ctrlKey)) {
        navigator.clipboard.writeText('Content is protected');
        e.preventDefault();
    }
    
    // macOS
    if ((e.key === '3' || e.key === '4') && e.metaKey && e.shiftKey) {
        e.preventDefault();
    }
});