const ImageApp = () => {
  const [images, setImages] = useState([]);

  const addImage = (image) => {
    setImages([...images, image]);
  };

  return (
    <div>
      <AddImage addImageSubmit={addImage} />
      {images.map((img, index) => (
        <ImageList key={index} img={img} />
      ))}
    </div>
  );
};
