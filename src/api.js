import axios from 'axios'

export const getFlickrData = ({ text = 'dogs', ...rest } = {}) =>
  axios
    .get('https://api.flickr.com/services/rest/', {
      params: {
        ...rest,
        text,
        method: 'flickr.photos.search',
        api_key: 'a621ac90c3f5e20b92fd638c2b540f6c',
        format: 'json',
        nojsoncallback: 1,
        media: 'photos',
        content_type: 1,
        extras: 'owner_name,date_upload,geo,tags,description'
      }
    })
    .then(res => ((res || {}).data || {}).photos)
    .catch(error => console.log(error) || error)

export const getPhotoSrc = ({ farm, server, id, secret }) =>
  `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_n.jpg`
