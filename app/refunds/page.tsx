import Link from 'next/link';
import { Header } from '@/components/Header';
import { GlobalStrip } from '@/components/GlobalStrip';
import { Footer } from '@/components/Footer';

export default function RefundsPage() {
  return (
    <>
      <GlobalStrip />
      <Header />
      <main className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Refund Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Promise</h2>
              <p className="text-gray-700 mb-4">
                If your delivery fails after receiving a Pass status from Fit Pass, we'll refund your $3—no questions asked.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">When Refunds Apply</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Your Fit Pass showed Pass status for all checkpoints</li>
                <li>The delivery team refused to proceed or the item did not fit</li>
                <li>You followed the measurement guidelines (two measures per checkpoint, recommended safety margins)</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Request a Refund</h2>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                <li>Email us at <a href="mailto:refunds@fitpass.example" className="text-primary hover:underline">refunds@fitpass.example</a> with your Fit Pass number</li>
                <li>Include a brief description of what happened (which checkpoint failed)</li>
                <li>We'll process your refund within 2 business days</li>
              </ol>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">When Refunds Don't Apply</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Your Fit Pass showed Warn or Fail status (these are warnings, not guarantees)</li>
                <li>Measurements were not accurate or conditions changed on-site</li>
                <li>The delivery team had other reasons for refusal (building policy, insurance, etc.)</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why We Offer This</h2>
              <p className="text-gray-700 mb-4">
                We want to continuously improve Fit Pass. If our calculations were wrong, we want to know. Your feedback helps us refine our rules engine and serve future customers better.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Questions?</h2>
              <p className="text-gray-700 mb-4">
                Contact us anytime at <a href="mailto:hello@fitpass.example" className="text-primary hover:underline">hello@fitpass.example</a>
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
