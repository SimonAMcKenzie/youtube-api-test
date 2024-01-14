const apiKey = 'AIzaSyDeWYJ8dZyvM4oOTF01FP-JD4FVpaID6JM';
const apiUrl = 'https://www.googleapis.com/youtube/v3/playlistItems';

// Replace 'PLAYLIST_ID' with the actual ID of the playlist you want to retrieve
const playlistId = 'PLmbqX3EgB-VMK2fBCUKYgBuJn-Dlrh9Ky';

// Construct the URL for the YouTube Data API request
const url = `${apiUrl}?part=snippet&playlistId=${playlistId}&key=${apiKey}`;

// Make a Fetch API request
fetch(url, {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    // Add any other headers if needed
  },
})
  .then(response => {
    // Check if the response status is OK (status code 200)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Parse the JSON response
    return response.json();
  })
  .then(data => {
    // Handle the data from the API response
    const videosContainer = document.getElementById('videos-container');

  // Check if there are items in the playlist
  if (data.items.length > 0) {
    const mostRecentVideo = data.items[0];
    const videoTitle = mostRecentVideo.snippet.title;
    const videoId = mostRecentVideo.snippet.resourceId.videoId;

    // Create a new iframe element for the most recent video
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    iframe.width = 560;
    iframe.height = 315;

    // Create a paragraph element for the video title
    const titleParagraph = document.createElement('p');
    titleParagraph.textContent = videoTitle;

    // Append the iframe and title to the videos container
    videosContainer.appendChild(iframe);
    videosContainer.appendChild(titleParagraph);
  } else {
    console.log('No videos found in the playlist.');
  }
})
.catch(error => {
  console.error('Fetch Error:', error);
});