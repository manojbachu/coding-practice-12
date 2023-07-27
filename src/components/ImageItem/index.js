import './index.css'

const ImageItem = props => {
  const {imageDetails} = props
  const {imageUrl, imageAltText} = imageDetails

  return (
    <li>
      <img className="image" src={imageUrl} alt={imageAltText} />
    </li>
  )
}

export default ImageItem
