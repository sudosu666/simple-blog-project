import {
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center text-sm text-gray-500 py-4">
      <div className="container mx-auto flex flex-col items-center space-y-2">
        <p>&copy; {new Date().getFullYear()} Gentle Movers. All rights reserved.</p>
        <div className="flex space-x-4 text-gray-600">
          <a href="https://www.tiktok.com/@gentlemovers" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
          </a>
          <a href="https://www.youtube.com/@gentlemovers" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <Youtube className="w-5 h-5 hover:text-purple-700" />
          </a>
          <a href="https://www.yelp.com/biz/gentle-movers-san-francisco" target="_blank" rel="noopener noreferrer" aria-label="Yelp">
          </a>
          <a href="https://www.instagram.com/gentlemovers" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className="w-5 h-5 hover:text-purple-700" />
          </a>
          <a href="https://www.facebook.com/gentlemovers" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook className="w-5 h-5 hover:text-purple-700" />
          </a>
        </div>
      </div>
    </footer>
  );
}
