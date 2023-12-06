"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';


const DelayedRedirect: React.FC = () => {
  const router = useRouter();
  const [countdown, setCountdown] = useState<number>(5);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prevCount) => prevCount - 1);
    }, 1000);

    const redirectTimeout = setTimeout(() => {
      router.push('https://kars.bio');
    }, 5000);

    return () => {
      clearInterval(countdownInterval);
      clearTimeout(redirectTimeout);
    };
  }, [router]);

  return (
    <div>
      <p>Redirecting in {countdown} seconds...</p>
    </div>
  );
};

export default DelayedRedirect;
