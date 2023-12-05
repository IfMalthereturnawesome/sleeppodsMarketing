import Container from "@components/elements/Container";

export default function Disclaimer() {
    return (
        <Container>
            <article className="prose prose-slate prose-strong:text-slate-slate-100 max-w-full text-slate-300 prose-p:text-lg prose-li:text-lg pt-[80px]">
                <h1>Disclaimer</h1>
                <p>Last updated - Dec 6, 2023</p>

                <h2>Introduction:</h2>
                <p>Welcome to SleepPods.io, a project by Eight Athletics ApS. This website is dedicated to showcasing our innovative sleep-tracking earplug prototype, utilizing advanced EEG and PPG technology. Our goal is to enhance sleep quality through state-of-the-art, user-friendly sleep-tracking tools.</p>

                <h2>Experimental Nature of the Product:</h2>
                <p>The sleep-tracking earplug is currently in its prototype stage and part of a feasibility study. It is an experimental device and not yet available for public use or purchase. The prototype's purpose is to gather data and insights for future development.</p>

                <h2>Health and Safety:</h2>
                <p>While user safety is a priority, please be aware that the prototype has not undergone full regulatory approval or clinical trials. It should not be used for medical diagnosis or treatment, and any health-related information provided should be verified with a healthcare professional.</p>

                <h2>No Guarantee of Performance:</h2>
                <p>Eight Athletics ApS makes no guarantees regarding the performance or accuracy of the sleep-tracking earplug prototype. The device is in its testing phase, and its functionalities and features are subject to change.</p>

                <h2>User Feedback and Participation:</h2>
                <p>User feedback is invaluable to us and will contribute to the ongoing development of the product. Participation in any trials or studies is voluntary.</p>

                <h2>Intellectual Property:</h2>
                <p>All content on this website, including designs and concepts related to the sleep-tracking earplug prototype, is the intellectual property of Eight Athletics ApS.</p>

                <h2>Changes to the Disclaimer:</h2>
                <p>This disclaimer may be updated or modified to reflect changes in our product development process. We encourage visitors to review this disclaimer periodically.</p>

                <h2>Contact Information:</h2>
                <p>For more information about our sleep-tracking earplug prototype, please contact info@eightathletics.com</p>
            </article>
        </Container>
    );
}
