import Link from 'next/link';
import { Header } from '@/components/Header';
import { GlobalStrip } from '@/components/GlobalStrip';
import { Footer } from '@/components/Footer';

export default function TermsPage() {
  return (
    <>
      <GlobalStrip />
      <Header />
      <main className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Service Description</h2>
              <p className="text-gray-700 mb-4">
                Fit Pass is a delivery fit calculator that helps you determine whether furniture or large items will fit through doorways, hallways, stairs, and other checkpoints in your delivery path. The service provides guidance based on measurements you provide.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Accuracy and Liability</h2>
              <p className="text-gray-700 mb-4">
                Fit Pass calculations are based entirely on the measurements you enter. We recommend measuring twice at each checkpoint and using a safety margin of 3-6 inches. While our rules engine follows industry best practices, we cannot guarantee that items will fit as predicted.
              </p>
              <p className="text-gray-700 mb-4">
                Movers may refuse delivery if on-site conditions differ from your measurements. Fit Pass is not liable for failed deliveries, damaged items, or additional moving costs.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Refund Policy</h2>
              <p className="text-gray-700 mb-4">
                If your delivery fails after receiving a Pass status from Fit Pass, we will refund your $3 payment. To request a refund, contact us with your Fit Pass number and brief details of the failed delivery.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Privacy and Data</h2>
              <p className="text-gray-700 mb-4">
                We do not collect or store your address. Photos are automatically stripped of EXIF data and deleted from our servers 72 hours after PDF generation. See our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link> for complete details.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Use of Service</h2>
              <p className="text-gray-700 mb-4">
                You agree to provide accurate measurements and use the service for legitimate purposes only. Abusive or fraudulent use may result in account termination.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Changes to Terms</h2>
              <p className="text-gray-700 mb-4">
                We may update these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms.
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
