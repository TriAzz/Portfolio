document.addEventListener('DOMContentLoaded', function() {
    // Get all download buttons
    const downloadButtons = document.querySelectorAll('.download-btn');
    
    // Add click event listener to each button
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const repoPath = this.getAttribute('data-repo');
            if (repoPath) {
                downloadGitHubRepo(repoPath);
            }
        });
    });
    
    // Function to download GitHub repository
    function downloadGitHubRepo(repoPath) {
        // GitHub allows direct download of repositories as zip files
        const downloadUrl = `https://github.com/${repoPath}/archive/refs/heads/main.zip`;
        
        // Create a temporary link element to trigger the download
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.setAttribute('download', `${repoPath.split('/')[1]}.zip`);
        
        // Append to the document, click and remove
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        console.log(`Downloading ${repoPath} repository...`);
    }
});

