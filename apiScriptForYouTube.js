// Replace 'YOUR_API_KEY' with your actual YouTube Data API key
const apiKey = 'AIzaSyDeWYJ8dZyvM4oOTF01FP-JD4FVpaID6JM';
const apiUrl = 'https://www.googleapis.com/youtube/v3/videos';

// Replace 'PLAYLIST_ID' with the actual ID of the video you want to retrieve
const  playlistId = 'PLmbqX3EgB-VMK2fBCUKYgBuJn-Dlrh9Ky';

// Construct the URL for the YouTube Data API request
const url = `${apiUrl}?part=snippet&playlistid=${playListId}&key=${apiKey}`;

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
    console.log('YouTube Playlist API Response:', data);
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('Fetch Error:', error);
  });
