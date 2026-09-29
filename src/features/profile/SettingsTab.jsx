import FormField from '../../components/ui/FormField';
import ToggleSwitch from '../../components/ui/ToggleSwitch';
import { NOTIFICATION_SETTINGS, PRIVACY_SETTINGS } from './profileData';

function SettingsSection({ icon, title, children }) {
    return (
        <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-xl">{icon}</span> {title}
            </h2>
            {children}
        </div>
    );
}

function ToggleList({ items }) {
    return (
        <div className="space-y-3">
            {items.map(({ title, description }) => (
                <div key={title} className="flex items-center justify-between">
                    <div>
                        <p className="font-medium text-gray-800">{title}</p>
                        <p className="text-sm text-gray-600">{description}</p>
                    </div>
                    <ToggleSwitch aria-label={title} />
                </div>
            ))}
        </div>
    );
}

export default function SettingsTab() {
    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Account Settings</h1>

            <SettingsSection icon="👤" title="Profile Information">
                <div className="space-y-4">
                    <FormField id="settings-name" label="Full Name" type="text" defaultValue="Student Name" />
                    <FormField id="settings-email" label="Email Address" type="email" defaultValue="student@example.com" />
                    <FormField id="settings-phone" label="Phone Number" type="tel" placeholder="+1 (555) 123-4567" />
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg">
                        Update Profile
                    </button>
                </div>
            </SettingsSection>

            <SettingsSection icon="🔒" title="Security">
                <div className="space-y-4">
                    <FormField id="settings-current-password" label="Current Password" type="password" placeholder="Enter current password" />
                    <FormField id="settings-new-password" label="New Password" type="password" placeholder="Enter new password" />
                    <FormField id="settings-confirm-password" label="Confirm New Password" type="password" placeholder="Confirm new password" />
                    <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg">
                        Change Password
                    </button>
                </div>
            </SettingsSection>

            <SettingsSection icon="🔔" title="Notifications">
                <ToggleList items={NOTIFICATION_SETTINGS} />
            </SettingsSection>

            <SettingsSection icon="🛡️" title="Privacy">
                <ToggleList items={PRIVACY_SETTINGS} />
            </SettingsSection>

            <SettingsSection icon="⚙️" title="Account Actions">
                <div className="space-y-3">
                    <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2">
                        <span>📥</span>
                        Export My Data
                    </button>
                    <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2">
                        <span>🚫</span>
                        Delete Account
                    </button>
                </div>
            </SettingsSection>
        </div>
    );
}
