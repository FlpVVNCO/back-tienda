import Image from "../schemas/image.schema.js";
export const createImage = async (req, res) => {
  try {
    const newImage = new Image({
      name: req.file.originalname,
      imageUrl: req.file.path,
    });
    newImage.save();
    return res.status(200).json({ message: 'Imagen subida exitosamente' });
  } catch (error) {
    return res.status(400).json({ message: 'No se ha proporcionado ninguna imagen' });
  }
}

export const getImage = async (req, res) => {
  try {
    const images = await Image.find();
    res.status(200).json({ images });
    // res.status(200).json({ images });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las imágenes' });
  }
}
