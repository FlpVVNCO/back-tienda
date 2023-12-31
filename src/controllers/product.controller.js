import Product from "../models/product.model.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({
      user: req.user.id,
    }).populate("user");
    res.json(products);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const getProductsByGenre = async (req, res) => {
  try {
    const { genre } = req.query;
    const query = {};
    // Dividir el parámetro "gender" en un array utilizando la coma como separador
    const genders = genre.split(',');
    // Construir una consulta para buscar productos que coincidan con cualquiera de los géneros proporcionados
    if (genders.length === 1) {
      // Si solo se proporciona un género, buscar productos con ese género
      query.genre = genders[0];
    } else {
      // Si se proporcionan varios géneros, buscar productos que coincidan con cualquiera de los géneros
      query.genre = { $in: genders };
    }
    const products = await Product.find(query);
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong"  });
  }
}

export const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("user");
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);

  } catch (error) {
    return res.status(404).json({ message: "Product not found" });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, description, genre, price, amount, date, imageName, imageUrl } =
      req.body;

    // buscar una mejor manera de obtener datos
    const priceNumber = parseFloat(price);
    const amountNumber = parseInt(amount);

    const newProduct = new Product({
      name,
      description,
      genre, 
      price: priceNumber,
      amount: amountNumber,
      date,
      user: req.user.id,
      // Supongamos que la imagen se envía en el campo 'image' del formulario
      imageName: req.file.originalname,
      imageUrl: req.file.path, // Aquí se guarda la ruta de la imagen en el modelo Product
    });
    const savedProduct = await newProduct.save();
    res.json(savedProduct);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (error) {
    return res.status(404).json({ message: "Product not found" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(404).json({ message: "Product not found" });
  }
};
