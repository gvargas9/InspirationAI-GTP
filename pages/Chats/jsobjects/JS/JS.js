export default {
  // Function to format image URLs for display
  formatImageData: () => {
    const apiData = [
    
    ];

    // Extract image URLs from the JSON data
    return apiData[0].data.map(item => ({
      url: item.filename
    }));
  }
};
