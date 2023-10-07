
function Sidebar({ isOpen, onClose }) {
    return (
      <div className={`sidebar ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:hidden fixed top-0 left-0 h-full w-64 bg-gray-900 text-white p-4 transform transition-transform duration-300 ease-in-out`}>
        <ul>
          <li><a href="/" className="text-white hover:text-gray-300">Home</a></li>
          <li><a href="/about" className="text-white hover:text-gray-300">About</a></li>
          <li><a href="/login" className="text-white hover:text-gray-300">Login</a></li>
        </ul>
        <button onClick={onClose} className="mt-4 p-2 bg-purple-600 hover:bg-purple-700 text-white rounded">Close</button>
      </div>
    );
  }
  
  export default Sidebar;