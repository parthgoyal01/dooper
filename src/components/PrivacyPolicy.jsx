const PrivacyPolicy = (props) => {
    return (
        <div className="flex flex-col items-center px-[20px] lg:px-[100px]">
            <div className="flex justify-center pt-[40px]">
                <div className="bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[120px] font-semibold text-[12px] lg:text-[14px]">Privacy Policy</div>
            </div>

            <p className="text-[24px] lg:text-[40px] mt-[20px] font-medium">Our Privacy Policy</p>
            <p className="text-[#1A1C1F] text-[12px] text-center lg:text-[16px] mt-[5px]">WHAT PERSONAL DATA WE COLLECT AND WHY WE COLLECT IT</p>

            <div className="border-[1px] border-[#E3E6E8] p-[15px] rounded-[10px] mt-[50px] w-full">
                <p className="font-semibold text-[14px] lg:text-[18px]">Terms and Conditions</p>

                <p className="mt-[10px] text-[12px] lg:text-[16px]">When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.</p>
                <p className="mt-[10px] text-[12px] lg:text-[16px]">An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: After approval of your comment, your profile picture is visible to the public in the context of your comment.</p>
            </div>

            <div className="border-[1px] border-[#E3E6E8] p-[15px] rounded-[10px] mt-[30px] w-full">
                <p className="font-semibold text-[14px] lg:text-[18px]">Consent</p>

                <p className="mt-[10px] text-[12px] lg:text-[16px]">If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.</p>
            </div>

            <div className="border-[1px] border-[#E3E6E8] p-[15px] rounded-[10px] mt-[30px] w-full">
                <p className="font-semibold text-[14px] lg:text-[18px]">Cancellation Policy</p>

                <p className="mt-[10px] text-[12px] lg:text-[16px]">If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.</p>
                <p className="mt-[10px] text-[12px] lg:text-[16px]">If you have an account and you log in to this site, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.</p>
                <p className="mt-[10px] text-[12px] lg:text-[16px]">When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.</p>
                <p className="mt-[10px] text-[12px] lg:text-[16px]">If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.</p>
            </div>

            <div className="border-[1px] border-[#E3E6E8] p-[15px] rounded-[10px] mt-[30px] mb-[50px] w-full">
                <p className="font-semibold text-[14px] lg:text-[18px]">Refund Policy</p>

                <p className="mt-[10px] text-[12px] lg:text-[16px]">Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.</p>
                <p className="mt-[10px] text-[12px] lg:text-[16px]">These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracing your interaction with the embedded content if you have an account and are logged in to that website.</p>
            </div>
        </div>
    );
}

export default PrivacyPolicy;