import { getUserOnboardingStatus } from '@/actions/user';
import { redirect } from "next/navigation";

const IndustyInsightPage = async () => {
    const {isOnboarded} = await getUserOnboardingStatus();
    if (!isOnboarded) {
      redirect('/onboarding');}
  return (
    <div>
      OnboardingForm
    </div>
  )
}

export default IndustyInsightPage
