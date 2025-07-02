import React, { useState } from 'react';
import { X } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReservationModal = ({ isOpen, onClose }: ReservationModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-serif">Réservation</h2>
          <button onClick={onClose}>
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <form className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Nom</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:border-gold focus:outline-none"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:border-gold focus:outline-none"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Téléphone</label>
            <input
              type="tel"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:border-gold focus:outline-none"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Date</label>
              <input
                type="date"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:border-gold focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Heure</label>
              <select className="w-full px-4 py-2 rounded border border-gray-300 focus:border-gold focus:outline-none">
                <option>12:00</option>
                <option>12:30</option>
                <option>13:00</option>
                <option>13:30</option>
                <option>19:00</option>
                <option>19:30</option>
                <option>20:00</option>
                <option>20:30</option>
                <option>21:00</option>
              </select>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Nombre de personnes</label>
            <input
              type="number"
              min="1"
              max="120"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:border-gold focus:outline-none"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Message (optionnel)</label>
            <textarea
              rows={3}
              className="w-full px-4 py-2 rounded border border-gray-300 focus:border-gold focus:outline-none"
              placeholder="Précisions, allergies, occasions spéciales..."
            />
          </div>
          
          <button
            type="submit"
            className="w-full px-6 py-3 bg-burgundy text-cream rounded hover:bg-burgundy/90 transition"
          >
            Confirmer la réservation
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReservationModal;