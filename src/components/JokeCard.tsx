import React from 'react';
import { Copy, Heart, Share2 } from 'lucide-react';
import { Joke } from '../types/joke';

interface JokeCardProps {
  joke: Joke;
  isFavorite: boolean;
  onToggleFavorite: (joke: Joke) => void;
  onCopy: (joke: Joke) => void;
}

const JokeCard: React.FC<JokeCardProps> = ({
  joke,
  isFavorite,
  onToggleFavorite,
  onCopy,
}) => {
  if (joke.error) {
    return (
      <div className="bg-red-50 border-2 border-red-200 rounded-lg p-8 text-center">
        <p className="text-red-600 font-semibold">⚠️ Failed to load joke</p>
        <p className="text-red-500 text-sm mt-2">{joke.message || 'Please try again'}</p>
      </div>
    );
  }

  const jokeText = joke.type === 'single' 
    ? joke.joke 
    : `${joke.setup}\n\n${joke.delivery}`;

  return (
    <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
      {/* Category Badge */}
      <div className="flex items-center justify-between mb-6">
        <span className="inline-block bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
          {joke.category}
        </span>
        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
          joke.safe
            ? 'bg-green-100 text-green-700'
            : 'bg-yellow-100 text-yellow-700'
        }`}>
          {joke.safe ? '✓ Safe' : '⚠️ Not Safe'}
        </span>
      </div>

      {/* Joke Content */}
      <div className="mb-6">
        {joke.type === 'single' ? (
          <p className="text-xl text-gray-800 leading-relaxed font-medium">
            {joke.joke}
          </p>
        ) : (
          <div>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              {joke.setup}
            </p>
            <div className="h-1 bg-gradient-to-r from-purple-200 to-blue-200 my-4"></div>
            <p className="text-lg text-gray-800 font-semibold leading-relaxed">
              {joke.delivery}
            </p>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 pt-6 border-t border-purple-200">
        <button
          onClick={() => onToggleFavorite(joke)}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg transition font-semibold ${
            isFavorite
              ? 'bg-red-500 text-white hover:bg-red-600'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
          {isFavorite ? 'Favorited' : 'Favorite'}
        </button>

        <button
          onClick={() => onCopy(joke)}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition font-semibold"
        >
          <Copy className="w-5 h-5" />
          Copy
        </button>

        <button
          onClick={() => {
            const text = joke.type === 'single' ? joke.joke : `${joke.setup}\n${joke.delivery}`;
            if (navigator.share) {
              navigator.share({
                title: 'Check out this joke!',
                text: text,
              });
            }
          }}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-green-500 text-white hover:bg-green-600 transition font-semibold"
        >
          <Share2 className="w-5 h-5" />
          Share
        </button>
      </div>
    </div>
  );
};

export default JokeCard;
