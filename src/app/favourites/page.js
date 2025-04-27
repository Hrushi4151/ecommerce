'use client'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { Productsdata } from '../components/Providers'
import { razorpayConfig } from '../config/razorpay'
import Script from 'next/script'
import AuthModal from '../components/AuthModal'

const FavoritesPage = () => {
  const { setFav, fav } = useContext(Productsdata)
  const [selectedItems, setSelectedItems] = useState([])
  const [total, setTotal] = useState(0)
  const [showAddressModal, setShowAddressModal] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: ''
  })

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem('userToken')
    const userData = localStorage.getItem('userData')
    if (token && userData) {
      setIsAuthenticated(true)
      const user = JSON.parse(userData)
      setUserDetails(prev => ({
        ...prev,
        name: user.name,
        email: user.email
      }))
    }
  }, [])

  const handleFav = (item) => {
    let updatedFav = fav.filter((favItem) => favItem._id !== item._id)
    setFav(updatedFav)
    localStorage.setItem("fav", JSON.stringify(updatedFav))
    setSelectedItems(prev => prev.filter(id => id !== item._id))
  }

  const handleSelect = (item) => {
    setSelectedItems(prev => {
      if (prev.includes(item._id)) {
        return prev.filter(id => id !== item._id)
      }
      return [...prev, item._id]
    })
  }

  const calculateTotal = () => {
    const selectedProducts = fav.filter(item => selectedItems.includes(item._id))
    return selectedProducts.reduce((sum, item) => sum + Number(item.dprice), 0)
  }
    
      useEffect(() => {
    const f = localStorage.getItem('fav')
    if (f) {
      setFav(JSON.parse(f))
    } else {
      setFav([])
        }
      }, [])

  useEffect(() => {
    setTotal(calculateTotal())
  }, [selectedItems])

  const handleUserDetailsChange = (e) => {
    const { name, value } = e.target
    setUserDetails(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const validateForm = () => {
    const requiredFields = ['name', 'email', 'phone', 'address', 'city', 'state', 'pincode']
    for (const field of requiredFields) {
      if (!userDetails[field]) {
        alert(`Please fill in your ${field}`)
        return false
      }
    }
    if (!/\S+@\S+\.\S+/.test(userDetails.email)) {
      alert('Please enter a valid email address')
      return false
    }
    if (!/^\d{10}$/.test(userDetails.phone)) {
      alert('Please enter a valid 10-digit phone number')
      return false
    }
    if (!/^\d{6}$/.test(userDetails.pincode)) {
      alert('Please enter a valid 6-digit pincode')
      return false
    }
    return true
  }

  const handleProceedToPayment = () => {
    if (!isAuthenticated) {
      setShowAuthModal(true)
      return
    }
    setShowAddressModal(true)
  }

  const handleAuthSuccess = (data) => {
    setIsAuthenticated(true)
    setUserDetails(prev => ({
      ...prev,
      name: data.user.name,
      email: data.user.email
    }))
    setShowAddressModal(true)
  }

  const initializeRazorpay = async () => {
    if (typeof window === 'undefined') {
      return
    }

    const res = await loadRazorpay()
    if (!res) {
      alert('Razorpay SDK failed to load')
      return
    }

    const options = {
      key: razorpayConfig.key_id,
      amount: total * 100,
      currency: razorpayConfig.currency,
      name: razorpayConfig.name,
      description: razorpayConfig.description,
      handler: function (response) {
        alert('Payment successful! Payment ID: ' + response.razorpay_payment_id)
        // Here you can add API call to your backend to verify payment and update order status
        // Also save the order details including userDetails and selectedItems
      },
      prefill: {
        name: userDetails.name,
        email: userDetails.email,
        contact: userDetails.phone,
      },
      theme: {
        color: '#F472B6',
      },
    }

    const paymentObject = new window.Razorpay(options)
    paymentObject.open()
  }

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script')
      script.src = 'https://checkout.razorpay.com/v1/checkout.js'
      script.onload = () => {
        resolve(true)
      }
      script.onerror = () => {
        resolve(false)
      }
      document.body.appendChild(script)
    })
  }

  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="lazyOnload"
      />
      <section className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-pink-600">
              <AiFillHeart className="inline-block mr-2" /> Favourites
        </h2>
            {selectedItems.length > 0 && (
              <div className="flex items-center gap-4">
                <p className="text-lg font-medium">
                  Total: ₹{total}
                </p>
                <button
                  onClick={handleProceedToPayment}
                  className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition-colors"
                >
                  Proceed to Pay
                </button>
                    </div>
            )}
                  </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.isArray(fav) && fav.map((item) => (
              <div key={item._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={item.images[0] || "https://via.placeholder.com/300"}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <button
                      onClick={() => handleFav(item)}
                      className="p-2 bg-white rounded-full shadow-md hover:bg-red-50"
                    >
                      <AiFillHeart className="text-red-500 text-xl" />
                    </button>
                  </div>
                  </div>

                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {item.name}
                  </h3>
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-xl font-bold text-pink-600">
                      ₹{item.dprice}
                    </p>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedItems.includes(item._id)}
                        onChange={() => handleSelect(item)}
                        className="form-checkbox h-5 w-5 text-pink-600 rounded border-gray-300 focus:ring-pink-500"
                      />
                      <span className="ml-2 text-sm text-gray-600">
                        Select to buy
                      </span>
                    </label>
                  </div>
                  </div>
                </div>
              ))}
            </div>

          {fav.length === 0 && (
            <div className="text-center py-12">
              <AiOutlineShoppingCart className="mx-auto text-6xl text-gray-400 mb-4" />
              <p className="text-xl text-gray-600">Your favorites list is empty</p>
              <Link href="/" className="text-pink-600 hover:text-pink-700 mt-2 inline-block">
                Continue Shopping
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSuccess={handleAuthSuccess}
      />

      {/* Address Modal */}
      {showAddressModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-semibold mb-4">Enter Delivery Details</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={userDetails.name}
                  onChange={handleUserDetailsChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={userDetails.email}
                  onChange={handleUserDetailsChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={userDetails.phone}
                  onChange={handleUserDetailsChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <textarea
                  name="address"
                  value={userDetails.address}
                  onChange={handleUserDetailsChange}
                  rows="3"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                  required
                ></textarea>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">City</label>
                  <input
                    type="text"
                    name="city"
                    value={userDetails.city}
                    onChange={handleUserDetailsChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">State</label>
                  <input
                    type="text"
                    name="state"
                    value={userDetails.state}
                    onChange={handleUserDetailsChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Pincode</label>
                <input
                  type="text"
                  name="pincode"
                  value={userDetails.pincode}
                  onChange={handleUserDetailsChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                  required
                />
              </div>
              <div className="flex justify-end space-x-4 mt-6">
                <button
                  type="button"
                  onClick={() => setShowAddressModal(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md"
                >
                  Cancel
                </button>
              <button
                  type="button"
                  onClick={() => {
                    if (validateForm()) {
                      setShowAddressModal(false)
                      initializeRazorpay()
                    }
                  }}
                  className="px-4 py-2 text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 rounded-md"
                >
                  Proceed to Payment
              </button>
            </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default FavoritesPage
