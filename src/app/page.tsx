import Link from 'next/link';
import DelayedRedirect from './delayedRedirect';
import { useRouter } from 'next/router';


const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Test Redirect</h1>
      <DelayedRedirect />
    </div>
  );
};

export default HomePage;
