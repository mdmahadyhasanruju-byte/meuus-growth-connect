import React from 'react';
import { Trash2 } from 'lucide-react';
import { Joke } from '../types/joke';
import JokeCard from './JokeCard';

interface FavoritesListProps {
  favorites: Joke[];
  onRemoveFavorite: (joke: Joke) => void;
  onCopy: (joke: Joke) => void;
}

const FavoritesList: React.FC<FavoritesListProps> = ({
  favorites,
  onRemoveFavorite,
  onCopy,
}) => {
  if (favorites.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-2xl text-gray-500 mb-2">💔 No favorites yet</p>
        <p className="text-gray-400">Add jokes to your favorites by clicking the heart icon!</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-800">❤️ Your Favorites</h2>
        <span className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold">
          {favorites.length} jokes
        </span>
      </div>

      <div className="space-y-4">
        {favorites.map((joke, index) => (
          <div key={index} className="relative">
            <JokeCard
              joke={joke}
              isFavorite={true}
              onToggleFavorite={() => onRemoveFavorite(joke)}
              onCopy={onCopy}
            />
            <button
              onClick={() => onRemoveFavorite(joke)}
              className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition"
              title="Remove from favorites"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;
