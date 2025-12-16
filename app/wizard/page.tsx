import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Header } from '@/components/Header';
import { GlobalStrip } from '@/components/GlobalStrip';
import { Footer } from '@/components/Footer';

export default function WizardPage() {
  return (
    <>
      <GlobalStrip />
      <Header />
      <main className="min-h-screen py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 text-center">
            <div className="mb-6">
              <svg
                className="w-24 h-24 mx-auto text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Full Fit Check Wizard
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              The complete multi-checkpoint wizard is coming soon. It will guide you through:
            </p>
            
            <div className="text-left max-w-2xl mx-auto mb-8">
              <ul className="space-y-3">
                {[
                  'Entry door measurements and photos',
                  'Hallway widths and turn clearances',
                  'Stair flights with ceiling heights',
                  'Landing depths and pivot spaces',
                  'Elevator diagonals (if applicable)',
                  'Final room entry checkpoints',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-status-pass flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <p className="text-gray-700 mb-4">
                <strong>In the meantime:</strong> Try our Quick Try demo on the homepage to test a single checkpoint.
              </p>
              <p className="text-sm text-gray-600">
                The full wizard will include photo upload, EXIF stripping, two-measure verification, 
                safety margin controls, and PDF generation with share links.
              </p>
            </div>
            
            <Link href="/">
              <Button variant="primary">
                Back to Homepage
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
