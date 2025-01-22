import React, { useState } from 'react';
import { Modal, Box, TextField, Button, MenuItem, Select, InputLabel, FormControl,IconButton } from '@mui/material';
import { MdClose } from 'react-icons/md';
import Toastify from 'toastify-js'


const ProductAddPopup = ({ open = false, setOpen }) => {
  const [product, setProduct] = useState({
    name: '',
    desc: '',
    price: '',
    dprice: '',
    category: '',
    color: '',
    stock: '',
    images: [],
  });

  const categories = ['Smartphones', 'Laptop','TV', 'Home Appliances', 'Speakers', 'Others'];

  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
  
    files.forEach((file) => {
      const reader = new FileReader();
  
      reader.onload = () => {
        const base64URL = reader.result; // Base64 URL of the image
        console.log(base64URL); // Use the Base64 URL as needed
        // You can update the state or perform any operation with the Base64 URL
        setProduct((prev) => ({
          ...prev,
          images: [...prev.images,  base64URL ],
        }));
      };
  
      reader.readAsDataURL(file); // Converts the file to a Base64 URL
    });
  };
  

  const handleRemoveImage = (index) => {
    const updatedImages = product.images.filter((_, i) => i !== index);
    setProduct((prev) => ({
      ...prev,
      images: updatedImages,
    }));
  };

  const handleSubmit = async () => {
    console.log('Product details:', product);
    if(product.name === "" || product.desc === "" || product.price === "" || product.category === "" || product.size === "" || product.color === "" || product.stock === "" || product.images.length === 0){
      alert("Please fill all the fields")
    }else{
      const response = await fetch('/api/addproducts', {  
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ product: product }),
  });
  const data = await response.json();
  console.log(data);
    if(data.status==200){
      handleClose();
      Toastify({
  
        text: "Added Successfully",
        position: "center",
        duration: 2000,
        style: {
          background: "green",
        }

        
        }).showToast();
          }else{
            Toastify({
  
              text: "Failed to Add. Try Again",
              position: "center",
        duration: 2000,
        style: {
          background: "red",
        }
              
              }).showToast();
          }
    // Add logic to save product to the database
  }
  }




  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '90%', sm: '80%', md: '500px' },
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: { xs: 2, md: 4 },
            borderRadius: 2,
            maxHeight: '90vh',
            overflowY: 'auto',
          }}
        >
          <IconButton
            sx={{ position: 'absolute', top: 8, right: 8, color: 'grey.500' }}
            onClick={handleClose}
          >
            <MdClose />
          </IconButton>

          <h2>Add New Product</h2>
          <TextField
            fullWidth
            label="Product Name"
            name="name"
            value={product.name}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Description"
            name="desc"
            value={product.desc}
            onChange={handleChange}
            margin="normal"
            multiline
            rows={3}
          />
          <TextField
            fullWidth
            label="Price"
            name="price"
            type="number"
            value={product.price}
            onChange={handleChange}
            margin="normal"
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Category</InputLabel>
            <Select name="category" value={product.category} onChange={handleChange}>
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            fullWidth
            label="Color"
            name="color"
            value={product.color}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Stock"
            name="stock"
            type="number"
            value={product.stock}
            onChange={handleChange}
            margin="normal"
          />
          <FormControl fullWidth margin="normal">
            <Button variant="outlined" component="label">
              Upload Images
              <input
                type="file"
                multiple
                accept="image/*"
                hidden
                onChange={handleFileChange}
              />
            </Button>
            {product.images.length > 0 && (
              <Box sx={{ mt: 2 }}>
                <strong>Uploaded Images:</strong>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 1 }}>
                  {product.images.map((image, index) => (
                    <Box key={index} sx={{ position: 'relative', width: 100 }}>
                      <img
                        src={image.preview}
                        alt={`Product ${index + 1}`}
                        style={{
                          width: '100%',
                          height: '100px',
                          objectFit: 'cover',
                          borderRadius: 4,
                        }}
                      />
                      <Button
                        size="small"
                        variant="contained"
                        color="error"
                        sx={{
                          position: 'absolute',
                          top: 0,
                          right: 0,
                          transform: 'translate(50%, -50%)',
                          borderRadius: '50%',
                          minWidth: 0,
                          padding: '4px',
                        }}
                        onClick={() => handleRemoveImage(index)}
                      >
                        X
                      </Button>
                    </Box>
                  ))}
                </Box>
              </Box>
            )}
          </FormControl>
          <Button
  variant="contained"
  sx={{
    backgroundColor: 'hotpink',
    fontWeight:"bold",
    color: 'white',
    '&:hover': {
      backgroundColor: 'hotpink',
    },
  }}
  onClick={handleSubmit}
  fullWidth
>
  Save Product
</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ProductAddPopup;
