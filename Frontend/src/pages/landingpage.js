import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  Textarea,
  Select,

} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';

const Landingpage = () => {
  return (
    <div className="bg-yellow-500 min-h-screen">
      {/* Your content goes here */}
      <div className="flex flex-col items-center p-6 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Welcome to Shop Manager</h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl">Total Products</h2>
            <p className="text-2xl font-bold">7</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl">Total Bills</h2>
            <p className="text-2xl font-bold">10</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl">Total Categories</h2>
            <p className="text-2xl font-bold">4</p>
          </div>
          <div className="m-6 flex justify-center space-x-10">
            <Link to="/stocks">
              <button className="bg-blue-400 hover:bg-blue-700 text-black font-bold py-3 px-6 rounded text-xl">
                Manage Stocks
              </button>
            </Link>

            <Link to="/bills">
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded text-xl">
                See and Create Bills
              </button>
            </Link>
            <div><AddStockBtn /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

const AddStockBtn =()=> {
  const { isOpen, onOpen, onClose } = useDisclosure()

  // State to handlw form inputs
  const [formData, setFormData] = useState({
    name:'',
    price: 0,
    category: '',
    stock: 0,
    description: ''
  })

  // Handle input change 
  const handleChange =(e)=>{
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle number input
  const handleNumberChange = (value, name)=>{
    setFormData({
      ...formData,
      [name]:value,
    });
  };

  const handleSubmit = async() =>{
    try {await fetch(`http://localhost:5000/api/add-product`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body : JSON.stringify(formData),
    });
    onClose();
  }
    catch(error){
      console.log("Error", error);
    }
  }

  return (
    <>
      <Button onClick={onOpen}>Add New Stock</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a New Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <FormControl isRequired>
            <FormLabel>Product Name</FormLabel>
            <Input placeholder='Product Name'
                   name='name'
                   value={formData.name}
                   onChange={handleChange} />
          </FormControl>

          <FormControl isRequired mt={4}>
            <FormLabel>Price</FormLabel>
            <NumberInput 
              min={0}
              value={formData.price}
              onChange={(value)=>handleNumberChange(value, 'price')}
             >
              <NumberInputField name='price' placeholder='Enter price'></NumberInputField>
             </NumberInput> 
             
          </FormControl>
          <FormControl isRequired mt={4}>
          <FormLabel>Category</FormLabel>
              <Select
                placeholder="Select category"
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="Electronics">Electronics</option>
                <option value="Clothing">Clothing</option>
                <option value="Accessories">Accessories</option>
                <option value="Home">Home</option>
                <option value="Food">Food</option>
              </Select>
            </FormControl>
            
            <FormControl isRequired mt={4}>
              <FormLabel>Stock</FormLabel>
              <NumberInput
                min={0}
                value={formData.stock}
                onChange={(value) => handleNumberChange(value, 'stock')}
              >
                <NumberInputField name="stock" placeholder="Enter stock" />
              </NumberInput>
            </FormControl>
            
            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Textarea
                placeholder="Enter product description"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </FormControl>


          </ModalBody>

          <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={handleSubmit}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
export default Landingpage