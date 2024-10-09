function Message() {
  return (
<div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
    <div className="bg-white p-6 rounded-lg shadow-lg w-3/4">
        <h2 className="text-xl font-semibold mb-4">Modal Title</h2>
        <p className="mb-6">This is a simple modal message using Tailwind CSS.</p>
        <div className="flex justify-end">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Close</button>
        </div>
    </div>
</div>
  )
}

export default Message;