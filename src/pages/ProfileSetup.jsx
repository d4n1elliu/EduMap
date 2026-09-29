import { useState } from 'react';
import PageLayout from '../components/layout/PageLayout';
import ConnectionsSidebar from '../features/profile/ConnectionsSidebar';
import PlannerTab from '../features/profile/PlannerTab';
import { PROFILE_TABS } from '../features/profile/profileData';
import ProfileTab from '../features/profile/ProfileTab';
import ProfileTabNav from '../features/profile/ProfileTabNav';
import ProjectsTab from '../features/profile/ProjectsTab';
import SettingsTab from '../features/profile/SettingsTab';
import usePageMeta from '../hooks/usePageMeta';
import { PATHS } from '../config/routes';

const TAB_CONTENT = {
    profile: ProfileTab,
    projects: ProjectsTab,
    bookings: PlannerTab,
    settings: SettingsTab,
};

export default function ProfileSetup() {
    usePageMeta('Profile', PATHS.PROFILE);
    const [activeTab, setActiveTab] = useState('profile');
    const ActiveTab = TAB_CONTENT[activeTab];

    return (
        <PageLayout backgroundClassName="w-screen">
            <div className="flex justify-center p-6">
                <div className="relative w-3/4 max-w-7xl flex">
                    <ProfileTabNav tabs={PROFILE_TABS} activeTab={activeTab} onChange={setActiveTab} />

                    <div className="bg-white shadow-lg rounded-2xl w-full flex p-6 gap-8 ml-12">
                        <div className="w-2/3">
                            <ActiveTab />
                        </div>
                        <ConnectionsSidebar />
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
