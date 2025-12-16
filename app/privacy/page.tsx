import Link from 'next/link';
import { Header } from '@/components/Header';
import { GlobalStrip } from '@/components/GlobalStrip';
import { Footer } from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <>
      <GlobalStrip />
      <Header />
      <main className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Privacy Commitment</h2>
              <p className="text-gray-700 mb-4">
                Fit Pass is designed with privacy at its core. We collect only the minimum data necessary to provide our service, and we never store your address or retain your photos longer than required.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We Don't Collect</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Your home address or delivery location</li>
                <li>EXIF data from photos (it's stripped on upload)</li>
                <li>GPS coordinates or location data</li>
                <li>Unnecessary personal information</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We Collect</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Measurements:</strong> The doorway, hallway, and stair dimensions you enter</li>
                <li><strong>Photos (temporary):</strong> Photos you upload are stored for 72 hours only, then permanently deleted</li>
                <li><strong>Payment information:</strong> Processed securely through our payment provider; we don't store full card numbers</li>
                <li><strong>Email (optional):</strong> If you provide it to receive your Fit Pass PDF</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">EXIF Data and Photo Security</h2>
              <p className="text-gray-700 mb-4">
                All photos are automatically processed to remove EXIF metadata, which can contain GPS coordinates and device information. Photos are stored on secure servers with encryption at rest and in transit.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">72-Hour Photo Deletion</h2>
              <p className="text-gray-700 mb-4">
                Photos are automatically and permanently deleted from our servers 72 hours after your Fit Pass PDF is generated. Your PDF remains accessible and can be regenerated with new photos anytime.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Analytics and Cookies</h2>
              <p className="text-gray-700 mb-4">
                We use privacy-respectful analytics to understand how visitors use our site. We do not use tracking cookies or share data with third-party advertisers.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-700 mb-4">
                You have the right to request deletion of your data at any time. Contact us and we'll remove your information within 48 hours.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
              <p className="text-gray-700 mb-4">
                Questions about privacy? Email us at <a href="mailto:privacy@fitpass.example" className="text-primary hover:underline">privacy@fitpass.example</a>
              </p>
            </section>
            
            <p className="text-gray-600 text-sm mt-12">
              Last updated: December 2024
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
