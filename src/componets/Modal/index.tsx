import { animate } from 'framer-motion';
import { X } from 'phosphor-react';
import React, { useState } from 'react';
import { animated } from 'react-spring';

interface PropsModal {
  isOpen: boolean;
  onClose: () => void;
}

export function Modal({ isOpen, onClose }: PropsModal) {
  const closeModal = () => {
    onClose();
  };

  if (isOpen) {
    return (
      <div className="animate-content">
        <div className="fixed top-0 bottom-0 left-0 right-0 z-[1000] flex items-center justify-center">
          <div className=" transform p-[40px] bg-black-100 bg-clip-border rounded-3xl m-2">
            <div>
              <button onClick={closeModal}>
                <X
                  size={40}
                  color="#f7f7f7"
                  className="flex items-start justify-start top-[-30px] right-[30px] relative"
                />
              </button>
              <p className="top-[-30px] relative text-lg text-center">
                A sessão BOXES armazena cada BOX.
                <p>Um BOX tem 7 enigmas, com um tema específico.</p>
                <p>
                  O enígma é composto por 3 dicas: duas frases e uma imagem.
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
