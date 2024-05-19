const ImageApp = () => {
  const [images, setImages] = useState([]);

  const addImage = (image) => {
    setImages([...images, image]);
  };

  return (
    <div>
      <addImage addImageSubmit={addImage} />
      {images.map((img, index) => (
        <imageList key={index} img={img} />
      ))}
    </div>
  );
};
