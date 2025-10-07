import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import RewardsPreview from '@/components/RewardsPreview';
import MembershipTiers from '@/components/MembershipTiers';
import ArticlesGrid from '@/components/ArticlesGrid';
import SocialFeed from '@/components/SocialFeed';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <RewardsPreview />
      <MembershipTiers />
      <ArticlesGrid />
      <SocialFeed />
      <Footer />
    </>
  );
}
