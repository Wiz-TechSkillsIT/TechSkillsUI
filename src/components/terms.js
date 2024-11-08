import React, { useEffect } from 'react';

const TermsAndConditions = () => {
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
            <h1 style={titleStyle}>TERMS AND CONDITIONS</h1>
            <p>
                The TechSkillsIT services, such as courses, content, instructor support, training platforms, and
                activities (collectively the Service) and websites www.TechSkillsIT.com and
                www.TechSkillsIT.com, and applications (Site/ Platform) are operated by Wiz TechSkillsIT Pvt Ltd (collectively, us, we or the Company). These terms apply to our applications,
                website, WhatsApp groups, Facebook groups, social media presence on platforms such as
                Facebook, Instagram.
            </p>
            <p>
                By accessing or using our Site or using our services, the user (you) signify that you have read,
                understood and agree to be bound by these Terms (in the manner provided for specifically).
                The Terms describe the basis on which you may access and use our Services.
            </p>
            <p>In addition to this document, the Terms consist of:</p>
            <ul style={listStyle}>
                <li>Privacy Policy;</li>
                <li>Intellectual Property Policy;</li>
                <li>Placement Terms;</li>
                <li>Credits Policy; and</li>
                <li>Additional conditions that may be applicable to specific Services obtained by you from us.</li>
            </ul>
            <p>
                We may prevent, suspend or terminate your access to the Platform and the Services, if you do
                not agree to be bound by these Terms (or any subsequent amendment or modification to any
                such Term).
            </p>
            <p>
                We reserve the right to modify these Terms and may provide you (at our discretion) notification
                of such amendment/ modification. Your continued use of the Site indicates your acceptance of
                the amended Agreement.
            </p>
            <p><b>PLEASE READ THIS AGREEMENT CAREFULLY AS IT CONTAINS IMPORTANT INFORMATION REGARDING YOUR LEGAL RIGHTS, REMEDIES, AND OBLIGATIONS.</b></p>
            <div style={sectionStyle}>
                <h2>1. ACCOUNTS</h2>
                <p>
                    You need an account (Account) for most activities on the Site. By signing on the platform and
                    creating an account you confirm that you are the age of majority and competent / of entering
                    into a contract in your country. If you are not of age, then we request you to take assistance of a
                    parent or guardian to create an account and help you enroll and pay for courses that are
                    relevant for you.
                </p>
                <p>
                    You shall use the Account to enroll for Services that may be provided on the specific terms and
                    conditions as may be applicable. You agree and undertake to provide true, correct, accurate and complete information, including your:
                </p>
                <ul style={listStyle}>
                    <li>Name;</li>
                    <li>Email;</li>
                    <li>Phone number (if required)</li>
                </ul>
                <p>
                    In addition, from time to time, based on the Services availed by you, we may request for
                    additional information such as your address, financial information, and educational
                    qualifications.
                </p>
                <p>
                    Please do not share your Account details, personal information with others. Any harm or loss
                    suffered on account of an unauthorized disclosure or access of your Account shall be borne by
                    you.
                </p>
                <p>
                    You cannot transfer your account to any other person, and a third party may not access your
                    account without our permission. We may terminate, suspend or cancel your account if we are
                    made aware of any such unauthorized access or use.
                </p>
            </div>
            <div style={sectionStyle}>
                <h2>2. USER CONDUCT AND BEHAVIOR</h2>
                <p>
                    You agree to participate in any Services with sincerity, diligence, and not indulge in any
                    unethical, corrupt, or illegal practice. This includes behavior that amounts to cheating, collusion
                    or any coordinated action conducted with the intention to subvert these Terms or any
                    conditions that may be applicable.
                </p>
                <p>You shall not indulge in activities that amount to:</p>
                <ul style={listStyle}>
                    <li>Harassment of other users, instructors, TechSkillsIT personnel, or other third parties;</li>
                    <li>Disparage, defame or bring disrepute to any person;</li>
                    <li>Show hostility, bully or create disharmony among other users or third parties.</li>
                </ul>
                <p>
                    We have the right to report any such suspicious activity to legal or law enforcement authorities
                    without notice from time to time.
                </p>
            </div>
            <div style={sectionStyle}>
                <h2>3. COURSE AND CONTENT</h2>
                <p>
                    By creating an Account, you shall receive access to videos, text, or other material (Content),
                    training programs (Courses), advice and support (Instructors), and services such as training
                    platforms and technologies, on our Platform.
                </p>
                <p>
                    The Services, especially any Courses or Content are for your personal use and benefit alone,
                    and not meant for commercial use.
                </p>
                <p>You are granted a limited, non-exclusive, non-transferable license to access and view the Courses and associated Content solely for your personal, non-commercial, educational purposes.</p>
            </div>
            <div style={sectionStyle}>
                <h2>4. PAYMENTS, CREDITS, AND REFUNDS</h2>
                <p><b>4.1 Pricing</b></p>
                <p>
                    The prices of the Courses and other Services are informed to you on the Platform, and may
                    vary from time to time. Pricing may also be determined based on other considerations such as
                    promotions or discount vouchers, location, applicable taxes, or fees.
                </p>
                <p><b>4.2 Payments</b></p>
                <p>
                    You agree to pay the fees for the Services that you purchase. You authorize us to charge your
                    debit or credit card or process other means of payment for such fees.
                </p>
                <p><b>4.3 Refunds</b></p>
                <p>
                    No refunds will be made once the trainee joins the course. 
                </p>
            </div>
            <div style={sectionStyle}>
                <h2>5. TechSkillsIT’s RIGHTS TO CONTENT YOU POST</h2>
                <p>
                    You retain ownership of content you post to our Platform, including feedback, messages, notes,
                    documents, etc. However, we’re allowed to share your content through any media, including
                    promoting it via advertising.
                </p>
            </div>
            <div style={sectionStyle}>
                <h2>6. USING PLATFORM AT YOUR OWN RISK</h2>
                <p>
                    We do not provide any warranty or guarantee relating to our Services, and they are provided on an ‘as-is’ basis. You agree to use the Platform and avail any Service at your own risk.
                </p>
            </div>
            <div style={sectionStyle}>
                <h2>7. OUR ROLE</h2>
                <p>
                    We are not a University, Institute, or any form of registered or accredited institution. We provide
                    access to online training software and content and do not guarantee admission to any educational institution or procurement of a job.
                </p>
            </div>
            <div style={sectionStyle}>
                <h2>8. TERMINATION, SUSPENSION</h2>
                <p>
                    We may terminate your membership, delete your Account, and any content or information that
                    you have posted on the Site at our discretion, including if we identify any potential violation of
                    these Terms.
                </p>
            </div>
        </div>
    );
};

export default TermsAndConditions;
