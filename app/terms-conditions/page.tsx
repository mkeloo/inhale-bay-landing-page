import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


const TermsConditionsPage = () => {
    return (
        <>
            <Navbar />
            <div className="px-6 py-10 pt-20 max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
                <p className="mb-4">
                    Welcome to [Your Smoke Shop Name] ("we", "us", or "our"). By accessing or using our website, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">1. Age Restriction</h2>
                <p className="mb-4">
                    You must be at least 21 years old to access this website. By using our website, you represent that you are at least 21 years of age.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">2. No Online Sales</h2>
                <p className="mb-4">
                    We do not sell any products online. All products mentioned on this website are available exclusively at our physical store located at [Your Address].
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">3. Product Information</h2>
                <p className="mb-4">
                    The product descriptions and images on our website are for informational purposes only. We strive for accuracy but do not guarantee that all information is complete or error-free.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">4. Intellectual Property</h2>
                <p className="mb-4">
                    All content on this website, including text, graphics, logos, and images, is the property of [Your Smoke Shop Name] and is protected by intellectual property laws.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">5. Limitation of Liability</h2>
                <p className="mb-4">
                    We are not liable for any damages arising from the use of this website or for the purchase of products at our physical store.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">6. External Links</h2>
                <p className="mb-4">
                    Our website may contain links to third-party websites. We are not responsible for the content or practices of these external sites.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">7. Privacy Policy</h2>
                <p className="mb-4">
                    Please refer to our <a href="/privacy-policy" className="text-blue-600 underline">Privacy Policy</a> for information on how we collect, use, and protect your personal data.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">8. Governing Law</h2>
                <p className="mb-4">
                    These terms and conditions are governed by the laws of [Your State/Country], without regard to its conflict of law principles.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">9. Changes to Terms</h2>
                <p className="mb-4">
                    We reserve the right to modify these terms and conditions at any time. Changes will be effective immediately upon posting on the website.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Us</h2>
                <p className="mb-4">
                    If you have any questions about these terms, please contact us at [Your Contact Information].
                </p>

                <p className="mt-8 text-sm text-gray-600">
                    <em>Last updated: [Today's Date]</em>
                </p>
            </div>
            <Footer />
        </>
    );
};

export default TermsConditionsPage;