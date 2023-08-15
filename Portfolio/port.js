document.addEventListener('DOMContentLoaded', function() {
    const downloadButton = document.getElementById('resume');

    downloadButton.addEventListener('click', function() {
        // Replace 'example.pdf' with the actual path to your PDF file
        const pdfPath = 'Portfolio/CV/CV_bhavya.pdf';

        // Create an anchor element
        const anchor = document.createElement('a');
        anchor.href = pdfPath;
        anchor.download = 'downloaded_CV.pdf'; // Set the desired file name for download
        anchor.target = '_blank'; // Open the link in a new tab (optional)

        // Simulate a click on the anchor element
        anchor.click();
    });
});
