import Container from "@components/elements/Container";

export default function CookiePolicy() {
    return (
        <Container>
            <article className="prose prose-slate prose-strong:text-slate-slate-100 max-w-full text-slate-300 prose-p:text-lg prose-li:text-lg pt-[80px]">
                <h1>Cookie Policy</h1>
                <p>Last updated - Dec 6, 2023</p>

                <h2>Introduction</h2>
                <p>Welcome to the Cookie Policy of SleepPods.io. We are committed to protecting your privacy and handling your data in an open and transparent manner. This Cookie Policy explains how we use cookies and similar technologies on our website to improve your browsing experience and gather insights to enhance our services.</p>

                <h2>1. Use of Cookies</h2>
                <p>In Short: Yes, we use first-party cookies. We do not use third-party cookies.</p>
                <p>Our website, https://www.sleeppods.io, uses first-party cookies to enhance your user experience and to collect analytics data. We use Google Analytics 4 and PostHug hosted in EU for this purpose.</p>

                <h2>2. Types of Cookies and Collected Information</h2>
                <p>We use the following types of cookies:</p>
                <ul>
                    <li><strong>Analytics Cookies:</strong> These cookies help us understand how visitors interact with our website, providing information about the areas visited, the time spent on the site, and any issues encountered. This helps us improve the performance of our website.</li>
                    <li><strong>Functional Cookies:</strong> Essential for providing functionalities such as payment processing with services like Stripe. These cookies enable smooth transactions and secure handling of payment information.</li>
                </ul>
                <p>The information we collect includes:</p>
                <ul>
                    <li>Pages visited</li>
                    <li>Referrer and UTM campaign parameters</li>
                    <li>Country of origin, city, and language</li>
                    <li>Operating system, browser, and screen resolution</li>
                    <li>Custom events and interactions</li>
                </ul>

                <h2>3. Consent and Control</h2>
                <p>Upon visiting our website, you will be prompted to consent to our use of cookies. You have the right to withdraw your consent at any time. Additionally, you can modify your browser settings to decline cookies if you prefer. However, disabling cookies may impact your experience on our site.</p>

                <h2>4. Data Protection and Privacy</h2>
                <p>In compliance with GDPR and other privacy regulations, we ensure that your data is handled securely. Our analytics tools are configured to respect your privacy. We do not sell or share your data with third parties for advertising purposes.</p>

                <h2>5. Your Rights</h2>
                <p>You have the right to access, rectify, or erase any personal data we may have collected. You can also object to the processing of your data, request data portability, and withdraw consent at any time. For any concerns or requests, please contact us at info@eightathletics.com</p>

                <h2>6. Updates to this Policy</h2>
                <p>We may update this Cookie Policy to reflect changes in our practices or for other operational, legal, or regulatory reasons. The updated version will be indicated by a revised date and will be effective upon posting. We encourage you to review this policy periodically.</p>

                <h2>Contact Us</h2>
                <p>If you have any questions about this Cookie Policy, please contact us at info@eightathletics.com</p>
            </article>
        </Container>
    );
}
