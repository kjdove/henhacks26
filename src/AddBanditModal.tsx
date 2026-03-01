import React, { useState } from 'react';
import './AddBanditModal.css';

interface AddBanditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (banditData: {
    Name: string;
    threatLevel: number;
    Location: string;
    Description: string;
    Photo: string;
  }) => void;
}

export function AddBanditModal({ isOpen, onClose, onSubmit }: AddBanditModalProps) {
  const [formData, setFormData] = useState({
    Name: '',
    threatLevel: 1,
    Location: '',
    Description: '',
    Photo: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'threatLevel' ? parseInt(value, 10) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.Name.trim() === '') {
      alert('Please enter a bandit name');
      return;
    }
    onSubmit(formData);
    setFormData({
      Name: '',
      threatLevel: 1,
      Location: '',
      Description: '',
      Photo: '',
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className='modal-overlay' onClick={onClose}>
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        <div className='modal-header'>
          <h2>Add New Bandit</h2>
          <button className='modal-close-btn' onClick={onClose}>✕</button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='Name'>Bandit Name *</label>
            <input
              type='text'
              id='Name'
              name='Name'
              value={formData.Name}
              onChange={handleInputChange}
              placeholder='e.g., Slick Silber'
              required
            />
          </div>

          <div className='form-row'>
            <div className='form-group'>
              <label htmlFor='threatLevel'>Threat Level (1-5)</label>
              <select
                id='threatLevel'
                name='threatLevel'
                value={formData.threatLevel}
                onChange={handleInputChange}
              >
                <option value='1'>1 - Low</option>
                <option value='2'>2 - Moderate</option>
                <option value='3'>3 - Medium</option>
                <option value='4'>4 - High</option>
                <option value='5'>5 - Critical</option>
              </select>
            </div>

            <div className='form-group'>
              <label htmlFor='Location'>Location</label>
              <input
                type='text'
                id='Location'
                name='Location'
                value={formData.Location}
                onChange={handleInputChange}
                placeholder='e.g., Memorial Hall'
              />
            </div>
          </div>

          <div className='form-group'>
            <label htmlFor='Description'>Description</label>
            <textarea
              id='Description'
              name='Description'
              value={formData.Description}
              onChange={handleInputChange}
              placeholder='Enter bandit description...'
              rows={3}
            />
          </div>

          <div className='form-group'>
            <label htmlFor='Photo'>Photo URL</label>
            <input
              type='text'
              id='Photo'
              name='Photo'
              value={formData.Photo}
              onChange={handleInputChange}
              placeholder='e.g., /path/to/photo.jpg'
            />
          </div>

          <div className='form-actions'>
            <button type='button' className='btn-cancel' onClick={onClose}>
              Cancel
            </button>
            <button type='submit' className='btn-submit'>
              Add Bandit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
