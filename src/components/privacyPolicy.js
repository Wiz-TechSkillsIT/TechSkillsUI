import React, { useEffect } from 'react';

const PrivacyPolicy = () => {

    useEffect(()=>{
        window.scroll(0,0)
    })
    const containerStyle = {
        backgroundColor: '#fee4c3',
        color: 'black',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.6'
    };

    const titleStyle = {
        textAlign: 'center',
        fontWeight: 'bold'
    };

    const sectionStyle = {
        marginTop: '20px'
    };

    const listStyle = {
        marginLeft: '20px',
        listStyleType: 'disc'
    };

    return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>PRIVACY POLICY</h1>
            <p>
                In relation with your use of the TechSkillsIT platform owned by Wiz TechSkillsIT Private Ltd (“us”, “we”, or “our”) may collect/
                receive, store, use, share, and/or process certain information (“Information”) about you when
                you use our Services.
            </p>
            <p>
                We use your Information for providing and improving the Services. By using the Services, you
                agree to the collection and use of Information in accordance with this Privacy Policy. Unless
                otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same
                meanings as in our Terms and Conditions, accessible on the website. We will not use or share
                your Information with anyone except as described in this Privacy Policy.
            </p>
            <div style={sectionStyle}>
                <h2>1. INFORMATION COLLECTION</h2>
                <p>
                    1.1. While using our Service, we may ask you to provide us with certain personally identifiable
                    Information that can be used to contact or identify you. Information may include, but is not
                    limited to:
                </p>
                <ul style={listStyle}>
                    <li>Your name;</li>
                    <li>Your email address;</li>
                    <li>Phone number;</li>
                    <li>Your Account Data such as your profile, course opted by you etc.;</li>
                    <li>Data related to content shared by you via your Account;</li>
                    <li>Data about your account on other services;</li>
                    <li>Data through promotions and surveys conducted by us;</li>
                    <li>Data regarding any support concerns that you may have (this is only for internal
                        purposes to optimize our Services);</li>
                    <li>Any other information as may be disclosed by you during the use of Services;</li>
                    <li>Information about your device;</li>
                    <li>Parts of our Services you use etc;</li>
                    <li>Sensitive Personal Information.</li>
                </ul>
                <p>
                    1.2. We may also collect Information that your browser sends whenever you visit our Site ("Log
                    Data"). This Log Data may include information such as:
                </p>
                <ul style={listStyle}>
                    <li>Your IP address;</li>
                    <li>Browser type;</li>
                    <li>Device type;</li>
                    <li>Browser version;</li>
                    <li>The pages of our Site that you visit;</li>
                    <li>The time and date of your visit;</li>
                    <li>The time spent on those pages and other statistics;</li>
                    <li>Approximate geographic location, including information like country, city, and geographic
                        coordinates, calculated based on your IP address.</li>
                </ul>
                <p>
                    1.3. In order to receive payments from you, we may also collect (either directly or with the
                    support of our payments partners) certain financial Information as may be required.
                </p>
                <p>
                    1.4. In addition, we may use third party services such as cookies, google analytics,
                    advertisements that collect, monitor and analyze this type of Information in order to increase the
                    performance of our Service's. Use of such Information by these third party services shall be
                    governed by their individual privacy policies. We encourage you to understand these policies as
                    well.
                </p>
                <p>(i) Cookies</p>
                <p>
                    We use cookies to store and access and analyze the Information on the device that you use to
                    access our Services, to personalize your experience, and to facilitate you to log into the
                    Services, and to recognize when you return to the Services. You may opt out or refuse your
                    browser from accessing/ storing the cookies or indicating when a cookie is being sent. However,
                    it may be noted that major portions of our service may not be accessible to you if you do not
                    accept cookies.
                </p>
                <p>(ii) Analytics</p>
                <p>
                    We use third-party browser and mobile analytics services like Google Analytics on the Services.
                    These services help us analyze your use of the Services by using cookies, tags, scripts,
                    customized links, device or browser fingerprints etc. These services also help us analyzing
                    Information such as:
                </p>
                <ul style={listStyle}>
                    <li>The third-party website you arrive from;</li>
                    <li>How often you visit the Site;</li>
                    <li>Events within the Services;</li>
                    <li>Usage and performance data</li>
                </ul>
                <p>
                    The information collected is used solely for the purpose of improving our Services, to better
                    understand the behavior projected by our Services on different devices, and to provide
                    information that may be of interest to you. You can opt-out of Google Analytics by visiting the
                    Google Ads Settings page.
                </p>
                <p>
                    For more information on the privacy practices of Google, please visit the Google
                    Privacy & Terms web page.
                </p>
                <p>(iii) Online Advertising</p>
                <p>
                    We use third-party advertising services for personalization and showing you targeted
                    advertisements. These advertisements are based on your recent or over time activities on our
                    Site and across other sites and services, and are tailored to your interests. We do not disclose
                    information about identifiable individuals to our advertising services, but we may provide them
                    with aggregate information about our users (for example, we may inform them that any given
                    number of students in a specified age group clicked on their advertisement on any given day).
                </p>
            </div>
            <div style={sectionStyle}>
                <h2>3. SHARING YOUR INFORMATION</h2>
                <p>
                    We may share certain Information about you:
                </p>
                <ul style={listStyle}>
                    <li>with third parties such as instructors, other students, companies helping us run promotions
                        and surveys, and advertising companies etc.;</li>
                    <li>for security, legal compliance, or as part of a corporate restructuring; or</li>
                    <li>in other ways if it is aggregated or de-identified or if we get your consent.</li>
                </ul>
            </div>
            <div style={sectionStyle}>
                <h2>4. SECURITY</h2>
                <p>
                    We use appropriate security based on the type and sensitivity of Information being stored. We
                    take that you understand that there is always a risk of unauthorized access to Information with
                    internet enabled platforms. Your password is an important part of our security system, and it is
                    your responsibility to protect it. We therefore request you to protect your password and to
                    contact us as soon as possible if you suspect any unauthorized access to your Account. We
                    shall take appropriate security measures to protect against unauthorized access, alteration,
                    disclosure, or destruction of your Information.
                </p>
            </div>
            <div style={sectionStyle}>
                <h2>5. INFORMATION RETENTION</h2>
                <p>
                    We do not retain your Sensitive Personal Information for longer than is required for the
                    purposes for which the information may be lawfully used. For any other content, we will
                    entertain your request for deletion, however, there is a strong possibility that copies of any
                    public content will be retained indefinitely in our systems, including in cached and archived
                    pages of the Platform, or if other users have copied or saved that information.
                </p>
                <p>
                    In addition, due to the nature of the internet, copies of your content, including content that you
                    have removed or deleted from your account, may also exist elsewhere on the Internet and be
                    retained indefinitely. We may also retain Information where relevant for internal processing,
                    analytical reasons, fraud monitoring, and in some cases on an anonymized/ de-identified basis.
                </p>
            </div>
            <div style={sectionStyle}>
                <h2>6. THIRD PARTY LINKS</h2>
                <p>
                    The Platform may, from time to time, contain links to and from the websites of our partner
                    networks, advertisers, Affiliates and/or any other websites or mobile applications. If you follow a
                    link to any of these websites, please note that these websites have their own privacy policies
                    and that we do not accept any responsibility or liability for these policies. Please check these
                    policies before you submit any personal data to these websites or mobile applications.
                </p>
            </div>
            <div style={sectionStyle}>
                <h2>7. CHANGES TO PRIVACY POLICY</h2>
                <p>
                    The Company may periodically update this Privacy Policy. We will post the updated Privacy
                    Policy at this link. We will notify you from time to time to update you of any changes made to this
                    Privacy Policy.
                </p>
            </div>
            <div style={sectionStyle}>
                <h2>8. DISCLAIMER</h2>
                <p>
                    We follow best procedures and take security measures to protect your Information and try to
                    prevent unauthorized access. However, we cannot guarantee the security of your Information
                    transmitted to the Platform. You agree that any transmission on the Platform is at your own risk.
                </p>
            </div>
            <div style={sectionStyle}>
                <h2>9. COMMUNICATIONS FROM US</h2>
                <p>
                    We may from time to time send you service-related announcements when we consider it
                    necessary to do so (such as when we temporarily suspend the Platform for maintenance, or
                    security, privacy, or administrative-related communications). We send these to you via SMS,
                    email, push notifications and any other communication channel. You may not opt-out of these
                    service-related announcements, which are not promotional in nature and used solely to protect
                    your account and keep you informed of important changes to the Platform.
                </p>
            </div>
            <div style={sectionStyle}>
                <h2>INTELLECTUAL PROPERTY POLICY</h2>
                <p>
                    Any content on the Platform such as tests, live lectures, notes, assignments, documents and
                    other materials by way of video, images, text, audio, along with other related graphics, software,
                    maps, photos, sounds, logos, html files, and interactive features (Content), may be owned by
                    TechSkillsIT or licensed to it by appropriate third parties. In addition, the Platform and Services
                    are owned and operated by TechSkillsIT, and its licensors.
                </p>
                <p>
                    We would request for third parties to refrain from copying, reproducing, downloading, or
                    distributing any such Content, or other intellectual property without our consent. Any action
                    taken by you shall be at your own cost and liability and we aim to take all actions that are
                    necessary to protect our rights.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
