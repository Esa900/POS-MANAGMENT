import React from 'react';
import { Menu, Volume2, VolumeX, Store } from 'lucide-react';

interface Props {
  onToggleMobileMenu: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  shopName?: string;
  subTitle?: string;
}

export const TopHeader: React.FC<Props> = ({
  onToggleMobileMenu,
  soundEnabled,
  onToggleSound,
  shopName = 'KHAN MANAGEMENT',
  subTitle = 'Point of Sale Management System',
}) => {
  return (
    <header className="sticky top-0 z-30 bg-[#004e38] text-white shadow-sm border-b border-[#003c2b] py-2.5 px-4 sm:px-6">
      <div className="relative flex items-center justify-between">
        
        {/* Left: Mobile hamburger */}
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleMobileMenu}
            className="lg:hidden p-2 text-white/90 hover:text-white hover:bg-[#003c2b] rounded-lg transition cursor-pointer"
            aria-label="মেনু খুলুন"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {/* Center: Exact Shop Title & Subtitle from the screenshot */}
        <div className="text-center flex-1">
          <h1 className="text-base sm:text-lg font-bold tracking-normal leading-tight text-white drop-shadow-xs">
            {shopName}
          </h1>
          <p className="text-[11px] sm:text-xs text-emerald-100 font-medium">
            {subTitle}
          </p>
        </div>

        {/* Right: Sound & Status */}
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleSound}
            title={soundEnabled ? 'সাউন্ড চালু আছে' : 'সাউন্ড বন্ধ'}
            className="p-1.5 text-emerald-100 hover:text-white hover:bg-[#003c2b] rounded-lg transition cursor-pointer"
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4" />
            ) : (
              <VolumeX className="w-4 h-4 text-emerald-300/60" />
            )}
          </button>
        </div>

      </div>
    </header>
  );
};
