import React, { useEffect, useRef } from 'react';

interface OrionWidgetLoaderProps {
  cookieConsent: boolean | null;
}

export const OrionWidgetLoader: React.FC<OrionWidgetLoaderProps> = ({ cookieConsent }) => {
  const loadedRef = useRef(false);
  const initialConsentState = useRef<string | null>(localStorage.getItem('velks-cookie-consent'));

  useEffect(() => {
    // Avoid double loading
    if (loadedRef.current) return;

    const loadOrion = () => {
      if (loadedRef.current) return;
      loadedRef.current = true;
      const script = document.createElement('script');
      script.src = 'https://orion-capture-widget.vercel.app/orion-widget.js';
      script.setAttribute('data-tenant-id', 'demo_tenant');
      script.setAttribute('data-public-key', 'demo_public_key');
      script.setAttribute('data-api-base-url', 'https://orion-capture-widget.vercel.app');
      script.setAttribute('data-avatar-url', 'https://orion-capture-widget.vercel.app/orion-avatar.png');
      script.setAttribute('data-debug', 'true');
      document.body.appendChild(script);
    };

    if (initialConsentState.current) {
      // Scenario B: Banner was already accepted/declined previously
      // Wait 3 seconds or first scroll event
      let timeoutId: ReturnType<typeof setTimeout>;
      
      const handleScroll = () => {
        loadOrion();
        window.removeEventListener('scroll', handleScroll);
        clearTimeout(timeoutId);
      };

      window.addEventListener('scroll', handleScroll, { passive: true, once: true });
      
      timeoutId = setTimeout(() => {
        loadOrion();
        window.removeEventListener('scroll', handleScroll);
      }, 3000);

      return () => {
        window.removeEventListener('scroll', handleScroll);
        clearTimeout(timeoutId);
      };
    } else {
      // Scenario A: Banner is visible right now. Wait for user to interact.
      if (cookieConsent !== null) {
        // User just interacted!
        const delay = Math.random() * 1000 + 1500; // Between 1500ms and 2500ms
        const timer = setTimeout(() => {
          loadOrion();
        }, delay);
        
        return () => clearTimeout(timer);
      }
    }
  }, [cookieConsent]);

  return null;
};
