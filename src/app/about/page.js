'use client'
import React from 'react'
import { FaShippingFast, FaHeadset, FaShieldAlt, FaRegCreditCard } from 'react-icons/fa'
import { motion } from 'framer-motion'

const AboutPage = () => {
  const features = [
    {
      icon: <FaShippingFast className="w-8 h-8" />,
      title: 'Fast Delivery',
      description: 'Get your products delivered quickly and efficiently across India'
    },
    {
      icon: <FaHeadset className="w-8 h-8" />,
      title: '24/7 Support',
      description: 'Our customer service team is available round the clock to help you'
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: 'Secure Shopping',
      description: 'Your transactions are protected with advanced security measures'
    },
    {
      icon: <FaRegCreditCard className="w-8 h-8" />,
      title: 'Easy Payments',
      description: 'Multiple payment options for your convenience'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  }

  const slideInLeft = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  }

  const slideInRight = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  }

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  return (
    <div className="m-5">
      <motion.div 
        initial="hidden"
        animate="visible"
        className="dropshadowbtn h-[calc(100vh-2.5rem)] bg-gray-100 rounded-xl overflow-auto hide-scrollbar"
      >
        {/* Hero Section */}
        <motion.section 
          className="relative bg-gradient-to-r from-pink-600 to-purple-600 text-white py-20 rounded-t-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Welcome to Our Store
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl opacity-90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Your one-stop destination for quality products and exceptional shopping experience
              </motion.p>
            </motion.div>
      </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-100"></div>
        </motion.section>

        {/* Mission Section */}
        <motion.section 
          className="py-16"
          variants={containerVariants}
        >
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              variants={slideInLeft}
            >
              <motion.h2 
                className="text-3xl font-bold mb-6 text-gray-800"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Our Mission
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-600 leading-relaxed"
                variants={itemVariants}
              >
                We strive to provide our customers with the best shopping experience possible. 
                Our commitment to quality, affordability, and customer satisfaction drives 
                everything we do. We carefully curate our product selection to ensure you 
                get the best value for your money.
              </motion.p>
            </motion.div>
          </div>
        </motion.section>

        {/* Features Grid */}
        <motion.section 
          className="py-16 bg-white/50"
          variants={containerVariants}
        >
          <div className="container mx-auto px-4">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  <motion.div 
                    className="text-pink-600 mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Why Choose Us */}
        <motion.section 
          className="py-16 bg-gray-50/50"
          variants={containerVariants}
        >
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto"
              variants={slideInRight}
            >
              <motion.h2 
                className="text-3xl font-bold mb-8 text-center text-gray-800"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Why Choose Us?
              </motion.h2>
              <motion.div 
                className="space-y-6"
                variants={containerVariants}
              >
                {[
                  {
                    title: "Quality Products",
                    description: "We partner with trusted brands and suppliers to ensure every product meets our high standards of quality."
                  },
                  {
                    title: "Customer First",
                    description: "Your satisfaction is our priority. We offer hassle-free returns and responsive customer support."
                  },
                  {
                    title: "Best Prices",
                    description: "We regularly compare prices to ensure you get the best deals without compromising on quality."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="p-6 bg-white rounded-lg shadow-md"
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.02,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                  >
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          className="py-16 bg-white/50 rounded-b-xl"
          variants={containerVariants}
        >
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              variants={slideInLeft}
            >
              <motion.h2 
                className="text-3xl font-bold mb-6 text-gray-800"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Get in Touch
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-600 mb-8"
                variants={itemVariants}
              >
                Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll 
                respond as soon as possible.
              </motion.p>
              <motion.div 
                className="space-y-4"
                variants={containerVariants}
              >
                {[
                  { label: "Email", value: "support@yourstore.com" },
                  { label: "Phone", value: "+91 1234567890" },
                  { label: "Hours", value: "Monday - Saturday, 9:00 AM - 6:00 PM" }
                ].map((item, index) => (
                  <motion.p 
                    key={index}
                    className="text-gray-600"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="font-semibold">{item.label}:</span> {item.value}
                  </motion.p>
                ))}
              </motion.div>
            </motion.div>
      </div>
        </motion.section>
      </motion.div>
    </div>
  )
}

export default AboutPage