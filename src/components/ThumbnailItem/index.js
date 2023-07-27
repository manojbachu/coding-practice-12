// Write your code here.
const ThumbnailItem = props => {
  const {thumbNail} = props
  const {thumbnailUrl, thumbnailAltText} = thumbNail

  return (
    <li className="thumbnail-image">
      <img src={thumbnailUrl} alt={thumbnailAltText} />
    </li>
  )
}

export default ThumbnailItem
