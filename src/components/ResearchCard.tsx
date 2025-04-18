'use client';

import { useState } from "react";

export default function ResearchCard() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Try to send the email in the background
      const emailResponse = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'PDF Downloader',
          email: email,
          company: 'PDF Download',
          message: `New PDF download request from: ${email}`,
        }),
      });

      if (!emailResponse.ok) {
        const errorData = await emailResponse.json();
        console.error('Email error:', errorData);
      }

      // Trigger download immediately
      window.location.href = '/api/download';

      setShowModal(false);
      setEmail("");
    } catch (err) {
      console.error('Download error:', err);
      setError(err instanceof Error ? err.message : "Failed to process download. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-center mb-4">
          <svg className="w-8 h-8 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          <h3 className="text-lg font-semibold text-gray-900">Bitcoin: A Peer-to-Peer Electronic Cash System</h3>
        </div>
        <p className="text-gray-600 mb-4">
          The original Bitcoin whitepaper by Satoshi Nakamoto, introducing the first decentralized digital currency and blockchain technology.
        </p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Published: October 2008</span>
          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#0a0b1e]/90 hover:bg-[#0a0b1e]"
          >
            Download PDF
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <h2 className="text-2xl font-bold mb-4">Download Research Paper</h2>
            <p className="text-gray-600 mb-6">Please enter your email address to download the whitepaper.</p>
            
            <form onSubmit={handleDownload}>
              <div className="mb-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f1240] focus:border-transparent"
                  required
                />
              </div>
              
              {error && (
                <p className="text-red-500 text-sm mb-4">{error}</p>
              )}

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 bg-[#0a0b1e]/90 text-white rounded-lg hover:bg-[#0a0b1e] disabled:opacity-50"
                >
                  {isSubmitting ? 'Processing...' : 'Download'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
} 