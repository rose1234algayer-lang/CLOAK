import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center select-none overflow-hidden p-4">
      {/* Container centralizado estritamente com o texto e a linha de luz passando em loop */}
      <div className="relative inline-block text-center">
        
        {/* Linha de luz horizontal passando pelas letras em loop contínuo */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
          {/* Feixe de luz vertical / fita de luz cortando as letras */}
          <div 
            className="absolute top-1/2 left-0 w-6 h-16 -translate-y-1/2 bg-gradient-to-r from-transparent via-white to-transparent opacity-90 blur-[1px] animate-beam-pass shadow-[0_0_15px_#c084fc,0_0_30px_#9333ea]"
            style={{
              mixBlendMode: 'overlay',
            }}
          />
          {/* Filamento branco brilhante da linha de luz */}
          <div 
            className="absolute top-1/2 left-0 w-[2px] h-12 -translate-y-1/2 bg-white blur-[0.3px] opacity-95 animate-beam-pass shadow-[0_0_8px_#ffffff,0_0_16px_#c084fc]"
          />
        </div>

        {/* Texto roxo bem menor, com brilho de luz correndo internamente em loop */}
        <h1 
          className="text-base sm:text-lg md:text-xl font-bold tracking-wider uppercase text-purple-700 relative z-10 animate-light-sweep bg-clip-text text-transparent"
          style={{
            backgroundImage: 'linear-gradient(110deg, #6b21a8 0%, #7e22ce 35%, #ffffff 50%, #c084fc 54%, #7e22ce 68%, #581c87 100%)',
            backgroundSize: '250% 100%',
          }}
        >
          TEM NADA AQUI NAO COMEDIA
        </h1>

      </div>
    </div>
  );
}
