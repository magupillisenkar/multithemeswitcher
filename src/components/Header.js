import { useTheme } from '../contexts/ThemeContext';
import logo from "../assets/Products.png"
import { Link } from 'react-router-dom';

export default function Header() {
  const { setTheme } = useTheme();

  return (

    <header class="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 border-b border-white/20 shadow-sm">
  <div class="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

    <div class="flex items-center space-x-2">
     <Link to="/">
      <img src={logo} />
      </Link>
    </div>

    <nav class="flex space-x-6 text-sm text-gray-800 font-medium">
      <Link to="about" class="hover:text-purple-600">About</Link>
      <Link to="contact" class="hover:text-purple-600">Contact Us</Link>
    </nav>

    <div class="flex items-center space-x-4">
    <select class="border border-white rounded-full font-bold px-8 py-2"
          onChange={(e) => setTheme(e.target.value)}
          className="text-black p-2 rounded"
          defaultValue={localStorage.getItem('theme') || 'theme1'}
        >
          <option value="theme1">Theme 1</option>
          <option value="theme2">Theme 2</option>
          <option value="theme3">Theme 3</option>
        </select>

     </div>
  </div>
</header>
  );
}
