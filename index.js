function isValidURL(string) {
    var res = string.match(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/g);
    return (res !== null);
}

function startIT() {
    var url = document.getElementById('input').value;
    if (url === "") {
        alert("Please enter a URL");
    } else if (isValidURL(url)) {
        grabFavicon();
    } else {
        alert("Invalid URL");
    }
}

function grabFavicon() {
    var url = document.getElementById('input').value;
    var size = document.getElementById('icon-size').value;
    const downloadPngButton = document.getElementById('download-png');
    const downloadSvgButton = document.getElementById('download-svg');

    var faviconUrl = `https://www.google.com/s2/favicons?domain=${url}&sz=${size}`;
    var faviconPreview = document.getElementById('favicon-preview');
    faviconPreview.src = faviconUrl;
    faviconPreview.style.display = 'block';

    // Enable download buttons
    downloadPngButton.disabled = false;
    downloadSvgButton.disabled = false;

    // Set download URL for PNG
    downloadPngButton.onclick = () => downloadFavicon(faviconUrl, 'png');

    // Set download URL for SVG (requires an SVG version of the icon)
    downloadSvgButton.onclick = () => downloadFavicon(faviconUrl, 'svg');
}

function downloadFavicon(faviconUrl, format) {
    if (format === 'svg') {
        alert('SVG download functionality is not implemented yet.');
        return;
    }

    const link = document.createElement('a');
    link.href = faviconUrl;
    link.download = `favicon.${format}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
