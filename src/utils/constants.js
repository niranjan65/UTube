const API_KEY="AIzaSyBD1c7WiUwyzUGpZO6G9imKXhswKw9DYGY"

export const YOUTUBE_API=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`
export const YOUTUBE_SEARCH_API="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const YOUTUBE_SEARCH_RESULTS=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=javascript%20dog&type=video&videoDefinition=high&maxResults=50&key=${API_KEY}`