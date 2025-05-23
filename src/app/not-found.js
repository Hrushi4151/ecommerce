import React from 'react'

const page = () => {
  return (
    <div>
   <section class="dropshadowbtn h-[calc(100vh-2.5rem)] bg-gray-100 m-5 rounded-xl overflow-auto hide-scrollbar flex justify-center items-center">
   <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div className="max-w-md text-center">
			<h2 className="mb-8 font-extrabold text-9xl text-gray-600">
				<span className="sr-only">Error</span>404
			</h2>
			<p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
			<p className="mt-4 mb-8 text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
			<a rel="noopener noreferrer" href="#" className="px-8 py-3 font-semibold rounded bg-pink-400 text-gray-900">Back to homepage</a>
		</div>
	</div>
</section>
    </div>
  )
}

export default page