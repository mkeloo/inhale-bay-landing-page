import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicyPage = () => {
    return (
        <>
            <Navbar />
            <div className="px-6 py-10 pt-20 max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
                <p className="mb-4">
                    At [Your Smoke Shop Name] ("we", "us", or "our"), we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you visit our website.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
                <p className="mb-4">
                    We may collect personal identification information from you in various ways, including when you visit our site, subscribe to the newsletter, or fill out a form. The information may include your name, email address, and phone number.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
                <p className="mb-4">
                    We may use the information we collect from you to:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Improve our website and customer service.</li>
                    <li>Send periodic emails regarding updates, promotions, or other information.</li>
                    <li>Respond to your inquiries, questions, and/or other requests.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">3. Protection of Your Information</h2>
                <p className="mb-4">
                    We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">4. Cookies and Tracking Technologies</h2>
                <p className="mb-4">
                    Our website may use "cookies" to enhance user experience. Your web browser places cookies on your hard drive for record-keeping purposes and sometimes to track information about them.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">5. Third-Party Websites</h2>
                <p className="mb-4">
                    You may find links to third-party websites on our site. We do not control the content or links on these sites and are not responsible for the practices employed by websites linked to or from our site.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">6. Compliance with Laws</h2>
                <p className="mb-4">
                    We will disclose your personal information where required to do so by law or subpoena.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">7. Changes to This Privacy Policy</h2>
                <p className="mb-4">
                    We have the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">8. Your Acceptance of These Terms</h2>
                <p className="mb-4">
                    By using this site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our site.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
                <p className="mb-4">
                    If you have any questions about this Privacy Policy, please contact us at [Your Contact Information].
                </p>

                <p className="mt-8 text-sm text-gray-600">
                    <em>Last updated: [Today's Date]</em>
                </p>
            </div>
            <Footer />
        </>
    );
};

export default PrivacyPolicyPage;