import MovalVideo from 'modal-video'
import 'modal-video/css/modal-video.min.css'

export const openModal = videoId => {
  const button = document.createElement('BUTTON')
  button.dataset.videoid = videoId

  new MovalVideo([button])
  button.click()
}