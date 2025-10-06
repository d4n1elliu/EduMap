import { useState } from 'react';
import Background from './Background';
import Footer from './Footer';

export default function ProfileSetup() {
  const [fullName, setFullName] = useState('');
  const [university, setUniversity] = useState('');
  const [bio, setBio] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app we'd persist this profile. For now, proceed to Buddy System
    window.location.href = '/buddy-system';
  };

  return (
    <Background>
      <div className="w-full max-w-3xl px-6 pt-10 pb-10 mx-auto flex-1">
        <main className="flex-1">
          <header className="mx-auto max-w-2xl rounded-lg bg-white shadow-2xl px-8 py-8 text-center mb-8">
            <h1 className="text-6xl font-extrabold text-blue-700 mb-2">Set Up Your Profile</h1>
            <p className="text-gray-700">Tell mentors a little about you to get better matches.</p>
          </header>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text black mb-2">Full Name</label>
                <input value={fullName} onChange={(e)=>setFullName(e.target.value)} required className="w-full px-3 py-2 border rounded-lg" placeholder="Your name"/>
              </div>
              <div>
                <label className="block text-sm font-medium text black mb-2">University</label>
                <input value={university} onChange={(e)=>setUniversity(e.target.value)} required className="w-full px-3 py-2 border rounded-lg" placeholder="e.g. University of Technology Sydney"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">Short Bio</label>
                <textarea value={bio} onChange={(e)=>setBio(e.target.value)} rows={5} className="w-full px-3 py-2 border rounded-lg" placeholder="Interests, goals, and what you’re looking for in a mentor"/>
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <a href="/course-questionnaire" className="px-6 py-2 rounded-lg bg-blue-500 text-white font-semibold hover:bg-red-600">Back</a>
              <button type="submit" className="px-6 py-2 rounded-lg bg-orange-500 text-white font-semibold hover:bg-green-600">Continue to Buddy System</button>
            </div>
          </form>
        </main>
      </div>
      <Footer/>
    </Background>
  );
}
