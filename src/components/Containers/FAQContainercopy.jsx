// import React, { useState } from 'react';
// import './faq.css'

// const FAQContainercopy = () => {
//   const faqData = [
//     {
//       question: "What is your return policy?",
//       answer: "Our return policy allows for returns within 30 days of purchase with a receipt."
//     },
//     {
//       question: "How can I contact customer support?",
//       answer: "You can contact customer support via email at support@example.com or call us at 1-800-123-4567."
//     },
//     {
//       question: "Do you offer international shipping?",
//       answer: "Yes, we offer international shipping to select countries. Please check our shipping policy for more details."
//     },
//     // Add more FAQ items here
//   ];

//   return (
//     <>
//     <h1>hello</h1>
//     <div className="faq-container">
//       {faqData.map((item, index) => (
//         <FAQItem key={index} question={item.question} answer={item.answer} />
//       ))}
//     </div>
//     </>
//   );
// };

// const FAQItem = ({ question, answer }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleOpen = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="faq-item">
//       <div className="faq-question" onClick={toggleOpen}>
//         {question}
//       </div>
//       {isOpen && <div className="faq-answer">{answer}</div>}
//     </div>
//   );
// };

// export default FAQContainercopy;


import React, { useState } from 'react';
import './faq.css'

const FAQ = () => {
  const topics = [
    {
      topic: "Urgent Care",
      questions: [
        {
          "question": "What is Urgent Care? When should I use the DOOPER Urgent Care Service?",
          "answer": "Urgent Care refers to illnesses or injuries that need immediate attention but aren’t life-threatening—think dengue, malaria, typhoid, chicken pox, viral infections, minor cuts and more.\n\nDOOPER Urgent Care is speedy and open 24/7, perfect for non-life-threatening situations. If you’re feeling symptoms like fever, vomiting, stomach aches, or sprains, we’ve got you covered. Check our Urgent Care page for the complete list of what we handle. Quick relief is just a click away!"
        },
        {
          "question": "How do I book an Urgent Care Service?",
          "answer": "Getting DOOPER Urgent Care at your doorstep is super quick! Log in to the DOOPER App or website using your ID and password. Simply click on the Urgent Care tab, select “Make an Appointment,” fill in your symptoms and details, then hit Confirm Booking. Voila! DOOPER swiftly processes your request, and our DHAs visit you to ensure fast relief for your symptoms.\n\nAdditionally, you can connect with our chat support or call the helpline to request a DHA for rapid relief."
        },
        {
          "question": "How do I check the progress of my booking?",
          "answer": "You can check the progress of your booking under the ‘My Bookings’ tab on your DOOPER App or the website. You will find all your case details under this tab."
        },
        {
          "question": "How can I cancel an Urgent Care service?",
          "answer": "You can cancel your bookings by visiting the DOOPER App or the website and checking your case under the ‘My Bookings’ section. Click on the Cancel tab to cancel your appointment.\n\nYou can also cancel an Urgent Care service using our chat support or the helpline number. Urgent Care is a fast service, and once your booking is made, our DHAs get to work instantly. Hence, we suggest you cancel your request before our DHA is on their way to avoid cancellation charges."
        },
        {
          "question": "Do I get refunds on Urgent Care services?",
          "answer": "DOOPER DHAs work around the clock to offer you Urgent Care whenever and wherever you need it. You can connect with our chat support and request a refund. However, a refund is subjective to the case and is at the discretion of the admin team. To know more, please read our Refund Policy here."
        },
        {
          "question": "What kind of tests can urgent care perform with same-day results?",
          "answer": "At DOOPER Urgent Care, our DHAs come prepared with advanced point-of-care testing modules. What does this mean for you? It means they can assess 21 vital health indicators right there on the spot.\n\nFrom checking for urinary tract infections (that uncomfortable pain while peeing) to screening for STIs, flu, strep throat, and even COVID-19—our DHAs are equipped to provide fast and accurate assessments. Your health matters, and we’re here to give you the precise care you need, rapidly!"
        },
        {
          "question": "When should I go to urgent care vs emergency care?",
          "answer": "Urgent care is suitable for all non-life-threatening situations requiring immediate or fast care. These include symptoms like dengue, malaria, COVID-19, UTIs, fever, cough, sprains, cuts, minor fractures, vomiting, diarrhoea, etc.\n\nHowever, if you are dealing with severe pain, difficulty in breathing, chest/abdominal pain, or stroke-like symptoms, head straight to the nearest hospital. Your health is our priority, and we want you to get the right care at the right place!"
        },
        {
          "question": "When should I see urgent care vs non-urgent care?",
          "answer": "Urgent Care is your fast relief for non-life-threatening issues like dengue, malaria, COVID-19, UTIs, fever, cough, sprains, cuts, minor fractures, vomiting, diarrhoea, etc.\n\nFor your routine health check-ups, preventive screenings, and managing chronic conditions like chronic aches, skin infections, hair fall, or diabetes, turn to a non-urgent or primary care provider. Let’s get your overall health covered for a longer life!"
        },
        {
          "question": "Can urgent care refill my medication?",
          "answer": "Yes, they can. Based on your medication type and refill history, our doctors/DHAs will explore options—whether it’s a refill, a new prescription, or connecting you with a primary care provider. We’ve got your medication needs covered!"
        }
      ]
      
    },
    {
      topic: "Non Urgent Care",
      "questions": [
        {
          "question": "What is Non-Urgent Care? When should I use Non-Urgent Care?",
          "answer": "Non-urgent care is for situations that don’t demand immediate attention, such as routine check-ups, follow-ups, vaccinations, and lab tests. It’s your go-to for maintaining your overall health. For routine health check-ups, preventive screenings, and managing chronic conditions like chronic aches, skin infections, hair fall, or diabetes, book DOOPER’s Non-urgent Care Service. Let’s prioritize your well-being together!"
        },
        {
          "question": "How do I book a Non-Urgent Care Service?",
          "answer": "DOOPER has made booking Non-Urgent Care Service super easy. Log in to the DOOPER App or website using your ID and password. Just click on the Non-Urgent Care tab, select “Make an Appointment,” fill in your details and required service, and then hit Confirm Booking. That’s it! DOOPER will process your request and schedule appointments according to your needs. Additionally, you can connect with our chat support or call the helpline for all your non-urgent care requirements."
        },
        {
          "question": "How can I cancel or reschedule a Non-Urgent Care service?",
          "answer": "To cancel your Non-Urgent Care appointment, visit the DOOPER App or website, go to the ‘My Bookings’ section, and click ‘Cancel Booking.’ For rescheduling, cancel your existing appointment and make a new one under the non-urgent care services tab. Alternatively, connect with our chat support team or call our helpline to cancel or reschedule your non-urgent care service. We are here to assist you every step of the way!"
        },
        {
          "question": "Do I get refunds on Non-Urgent Care services?",
          "answer": "Yes, you can get refunds for non-urgent care services after your case is investigated by our admin. Make sure you cancel your appointments 4 hours prior to avail of a refund. To know more, please read our Refund Policy here."
        }
      ]
    },
    {
      topic: "Home and Nursing Care",
      "questions": [
        {
          "question": "What is included in Home Care and Nursing?",
          "answer": "DOOPER Home Care and Nursing brings professional nursing to your doorstep, offering personalized medical aid, monitoring, post-operative care, ongoing treatment, daily activity assistance, and unwavering support. Our goal is to provide exceptional care, promoting healing, independence, and a higher quality of life in the comfort of your home."
        },
        {
          "question": "How can I book a Home Care or at-home Nursing service?",
          "answer": "Booking a service is super convenient on the DOOPER app or website. Click on the Home Nursing tab under the Stand-Alone Services tab, pick Home Care or Nursing, input your details, and tailor your service based on your needs— be it hourly, daily, weekly, or monthly. Fill out the application, complete the payment, and there you go! Your service is booked, and a dedicated DHA (DOOPER Health Assistant) is assigned for your care."
        },
        {
          "question": "How can I cancel the service?",
          "answer": "To cancel, visit the DOOPER app or website, go to My Bookings, and find your service under the Home Nursing tab. Click Cancel. For rescheduling, cancel and rebook under the Home Care / Nursing Services tab. Alternatively, connect with our chat support or call the helpline to cancel your service."
        },
        {
          "question": "How can I offer feedback on the service?",
          "answer": "Providing feedback is easy! Simply click on the My Bookings section on the DOOPER app or website. Select the Home Nursing option and view your booking. You’ll find the option to Add Feedback. Share your thoughts with us—we genuinely value your input! If you prefer more ways to express your experience, feel free to connect with our chat support or give us a call through the helpline. We’re here to ensure your feedback is heard and valued."
        },
        {
          "question": "How do I get a refund?",
          "answer": "DOOPER offers a full refund for cancelled services provided the service is cancelled a day prior. In other cases, you can reach out to our chat support or helpline to avail of a refund. The approval process depends on the case and is at the discretion of the admin team. Please refer to our Refund Policy for more details."
        }
      ]
    },
    {
      topic: "Lab & Health Checkups",
      "questions": [
    {
      "question": "How can I book an appointment?",
      "answer": "DOOPER offers a range of at-home Lab Tests and Health Check-ups. You can easily book an appointment using our hassle-free app interface or visit our website. Find the Lab Tests / Health Check-ups under the Stand-Alone Services tab. Click the required service and fill out your details. Don’t forget to select the time and date for the service, complete the payment process, and that’s it – your service is booked! You can also book your service by connecting with us through our chat support or helpline number. Once confirmed, our partners will reach out to you and do what is needed."
    },
    {
      "question": "Can I get a lab test/health check-up done at home?",
      "answer": "Yes, DOOPER offers convenient doorstep lab tests and health check-ups."
    },
    {
      "question": "How many days in advance do I need to book an appointment?",
      "answer": "At DOOPER, we accommodate your scheduling needs. Hence, we offer you the flexibility of selecting your preferred date and time slot while booking an appointment for the above services. You can book a slot up to seven days in advance. Click here to book now!"
    },
    {
      "question": "How can I cancel or reschedule my appointment?",
      "answer": "You can cancel or reschedule lab tests or health check-up services by visiting your service under the ‘My Bookings’ tab on your DOOPER mobile app or the website. Select the ‘Cancel Order’ button to cancel your appointment. Once the appointment is cancelled, you can reschedule the appointment for a new date and time at your convenience. Additionally, you can cancel an appointment by initiating a request with our chat support team or calling the helpline number."
    },
    {
      "question": "How can I get my refund?",
      "answer": "DOOPER offers a refund on lab tests and health check-up services if the request is cancelled in advance. You can connect with our chat support or call the helpline to initiate a refund. To know more, please read our Refund Policy here."
    },
    {
      "question": "When will I receive my Health Check-up/Lab Test reports?",
      "answer": "Expect your Health Check-up/Lab Test reports promptly on your registered mobile number via our App or WhatsApp as soon as results are available. Easily access your health results anytime under the My Bookings tab on your mobile app or website. At DOOPER, we prioritize efficiency, ensuring swift access to your vital health information."
    }
  ]
    },
    {
      topic: "Vaccination",
      questions: [
    {
      "question": "How can I book an appointment for at-home Vaccination services?",
      "answer": "Booking at-home Vaccination services with DOOPER is dooper easy. Simply go to the Stand-Alone Services tab on our app or website, click ‘Vaccination,’ and provide your details. Choose your preferred time and date, complete the payment, and your service is booked! You can also connect with us through chat support or the helpline to book and once confirmed, our partners will reach out to assist you further."
    },
    {
      "question": "Can I get a Vaccination done at home with DOOPER?",
      "answer": "Certainly! DOOPER offers the convenience of at-home Vaccination services."
    },
    {
      "question": "How many vaccinations can I take in a day?",
      "answer": "For your well-being, we recommend a maximum of 3 vaccinations in a day."
    },
    {
      "question": "How many days in advance do I need to book an appointment for at-home Vaccination?",
      "answer": "At DOOPER, we value your time. Book your at-home Vaccination appointment at your convenience by selecting your preferred date and time slot. You can book a slot up to seven days in advance. Click here to book now!"
    },
    {
      "question": "How can I cancel or reschedule my at-home Vaccination appointment?",
      "answer": "For cancellations or rescheduling of at-home Vaccination appointments, visit the ‘My Bookings’ tab on your DOOPER mobile app or website. Click ‘Cancel Order’ to cancel your appointment, and once cancelled, you can reschedule for a new date and time. Alternatively, initiate a cancellation request with our chat support team or call the helpline number."
    },
    {
      "question": "How can I get a refund for at-home Vaccination services?",
      "answer": "DOOPER provides refunds for at-home Vaccination services if the request is cancelled up to 4 hours prior to your appointment. Initiate a refund by connecting with our chat support or calling the helpline. Check our Refund Policy for more details."
    }
  ]
    },
    {
      topic: "Medicines",
      "questions": [
    {
      "question": "How can I order Medicines on DOOPER?",
      "answer": "DOOPER makes ordering Medicines a cake-walk with our easy-to-use app! Simply visit the app on your mobile phone or visit our website. Click on the ‘Medicines’ tab under the Stand-Alone Services tab, upload your prescription, mention additional details, if any, and click ‘Send Request.’ It’s as simple as that! In case of any queries or to order medicines, you can also connect with our chat support or call the helpline, and someone from our team will assist you with your request."
    },
    {
      "question": "Can urgent care refill my medication?",
      "answer": "Yes, they can. Based on your medication type and refill history, our doctors/DHAs will explore options—whether it’s a refill, a new prescription, or connecting you with a primary care provider. We’ve got your medication needs covered!"
    },
    {
      "question": "Can I order Medicines without a prescription?",
      "answer": "To ensure your safety, we require a valid prescription for all medication orders on DOOPER."
    },
    {
      "question": "How do I cancel my order?",
      "answer": "Cancelling your order is easy. Visit the ‘My Bookings’ section on the DOOPER app or website, find your medicine order under the Stand-Alone Services tab, and click on the ‘Cancel Order’ button. Ensure that you cancel the request before the pharmacy is assigned, and your order is booked. You can always contact our chat support or helpline for further assistance."
    },
    {
      "question": "Can I get a refund for the medicines cancelled?",
      "answer": "DOOPER offers refunds on medications if they are cancelled in advance. In such cases, the refund will be initiated after investigating your case and will be at the admin’s discretion. You can connect with us via our chat support or helpline to initiate your refund."
    }
  ]
    },
    {
      topic: "General",
      "questions": [
    {
      "question": "What payment methods are accepted?",
      "answer": "DOOPER offers various payment methods for your convenience. We accept major credit and debit cards, UPI, net banking, and bank transfers. We aim to make payments as effortless as possible so you can focus on your care. We’re committed to providing accessible and hassle-free payment options that suit your needs."
    },
    {
      "question": "How do I check the status of my service?",
      "answer": "For an effortless status check, head to the My Bookings tab on the DOOPER app or website. Easily access order details, live track your DHA, get updates on lab tests and check-ups, track the progress of your requested service, etc. If you need further assistance, connect with our chat support or helpline. Stay informed with DOOPER’s user-friendly status updates."
    }
  ]
    },
    {
      topic: "Dooper Health Assistant (DHA)",
      "questions": [
    {
      "question": "Who is a DOOPER Health Assistant (DHA)?",
      "answer": "A DOOPER Health Assistant (DHA) is a highly skilled and compassionate medical professional carefully selected by DOOPER to deliver top-notch home care services. Our DHAs are trained as per global standards to provide personalized point-of-care testing. They are dedicated to supporting individuals with various home healthcare activities, ensuring their well-being and comfort. In the realm of preserving health, safety, and independence, our DHAs play a pivotal role. Trust in the reliability and compassion of our DHAs for exceptional support."
    },
    {
      "question": "How can you book a DOOPER Home Assistant service?",
      "answer": "Your DHA is always a click away. Log on to the DOOPER app or the website and select your service. Once you fill out the details and make the payment, your DHA will be on their way to offer the best healthcare possible. Our user-friendly interface ensures a seamless and convenient booking process for all our services. Additionally, you can book an appointment via our chat support or helpline. Experience the convenience of booking with DOOPER. Sign up today!"
    },
    {
      "question": "What are the services I can book with DHAs?",
      "answer": "With DOOPER, you can book diverse services delivered by our DOOPER Health Assistants (DHAs):\n· Home First-Aid: For immediate medical attention and first-aid support in the comfort of your home.\n· Home Vaccination: Cut the queue; get vaccinated against various diseases at home.\n· Home Companion: Enjoy the support of a skilled caregiver for companionship and daily tasks.\n· Post-Operative Care: Get specialized care and support during the post-surgery recovery period.\n· Injections and IV Drips: At-home administration of injections and IV (intravenous) therapies.\n· Home Care: Receive comprehensive home care services tailored to your specific needs.\nDOOPER and our DHAs bring these services to your doorstep, ensuring your well-being and comfort."
    }
  ]
    },
    {
      topic: "About Dooper",
     "questions": [
    {
      "question": "What is DOOPER?",
      "answer": "DOOPER is a comprehensive at-home healthcare platform providing a range of services, including Urgent Care, Home Care, Nursing, Lab Tests, Health Check-ups, Medicines, and Vaccinations. Committed to delivering fast, accessible, and personalized healthcare, DOOPER connects users with skilled professionals to address their health needs. Empowering individuals to take control of their health, DOOPER utilizes innovative technology and a team of trained caregivers, bringing reliable healthcare to you whenever and wherever. Experience a new era of healthcare with DOOPER."
    },
    {
      "question": "How does DOOPER work?",
      "answer": "DOOPER operates through a user-friendly app and website, offering easy booking for various services. Users can select the desired service, provide necessary details, and confirm bookings. Whether it’s Urgent Care, Home Care, or other healthcare needs, DOOPER ensures a seamless and convenient process. Our advanced chat support on WhatsApp and the website and helplines enhance accessibility. Patients can quickly seek assistance, schedule appointments, and receive expert guidance on home nursing care through our responsive chat support. Experience convenient and efficient communication for a seamless healthcare journey with DOOPER."
    },
    {
      "question": "Which problems do we intend to solve?",
      "answer": "At DOOPER, we tackle various remote and at-home healthcare challenges with innovative solutions. Our platform is dedicated to addressing issues such as limited access to quality home nursing care, the inconvenience of traditional appointment scheduling, and the need for reliable and timely medical guidance. By leveraging technology, designing a seamless app and website, and integrating chat support, we enhance patient experiences, improve healthcare accessibility, and promote efficient and personalized care for individuals in need. Whether it’s Urgent Care, Home Care, or Lab Test bookings, DOOPER ensures efficient services."
    },
    {
      "question": "What kind of customer support or assistance do we provide?",
      "answer": "At DOOPER, exceptional customer support is our priority. Our dedicated team, including doctors, DHAs, hospitals, and labs, is readily available to address concerns, answer queries, and provide guidance throughout the patient’s journey. From initial inquiries to post-care support, we ensure prompt and compassionate assistance, creating a seamless and positive customer experience. We emphasize open communication and strive to deliver the highest level of support, ensuring that our patients feel heard, supported, and well taken care of every step of the way."
    },
    {
      "question": "Why should you choose DOOPER?",
      "answer": "Select DOOPER for its diverse healthcare services, user-friendly interface, and dedicated professionals. Experience fast and at-home healthcare solutions that emphasize efficiency, accessibility, and personalized care tailored to meet your unique healthcare needs. Our skilled DHAs deliver dependable and compassionate care in the comfort of your home, ensuring ease, convenience, and a familiar environment."
    },
    {
      "question": "How would we help you?",
      "answer": "DOOPER is your comprehensive healthcare partner, efficiently delivering prompt, reliable, and at-home services through our user-friendly app and website. From Urgent Care and Home Care to Lab Tests and Medicines, we address your health concerns with personalized attention. Designed for 360° healthcare assistance, DOOPER also uses chat support and helpline numbers to further your experience. For example, when you request a home check-up, a skilled DOOPER Health Assistant (DHA) will visit, assess your 21 vitals on the spot, and further connect you with a qualified doctor. This seamless healthcare journey combines advanced technology, expert assistance, and trusted medical guidance, all accessible from the convenience of your home. Experience optimal health and well-being with DOOPER—a reliable partner in your healthcare journey."
    },
    {
      "question": "What measures does DOOPER have in place to protect user data security and privacy?",
      "answer": "At DOOPER, we understand what data privacy means to you. Our multi-level security checks, regular data backups, and stringent privacy policies are designed to ensure the highest level of protection for your personal information. With robust measures in place, we safeguard user data, guaranteeing confidentiality and compliance with privacy regulations. Trust DOOPER to handle your data with the utmost care and security, providing you with peace of mind while using our services. For more details, read our privacy policy here:"
    },
    {
      "question": "How can I book a service with DOOPER?",
      "answer": "Booking a service with DOOPER is effortless. Users can log in through the app or website, choose their desired service, provide necessary details, and confirm the booking. The user-friendly interface ensures a seamless process for all services offered by DOOPER. You can also initiate a conversation using our chat support or helpline numbers. Once your service is booked, your nearest DHA will receive an intimation, and they will assist you."
    }
  ]
    },
    // Add more topics here
  ];

  const [selectedTopicIndex, setSelectedTopicIndex] = useState(null);

  const handleTopicClick = (index) => {
    setSelectedTopicIndex(index === selectedTopicIndex ? null : index);
  };

  return (
    <div className="faq-container">
      {topics.map((topic, index) => (
        <div key={index} className="faq-topic">
          <div className="faq-topic-title sm:text-lg text-md font-medium flex justify-between items-center" onClick={() => handleTopicClick(index)}>
            {topic.topic}
            <img src="/Assets/FAQOpenArrow.png" alt="arrow" className="w-[25px] h-[25px]" />
          </div>
          {selectedTopicIndex === index && (
            <div className="faq-questions ">
              {topic.questions.map((item, qIndex) => (
                <FAQItem key={qIndex} question={item.question} answer={item.answer} />
                
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <div className="faq-question flex justify-between sm:text-md text-xs font-medium" onClick={toggleOpen}>
        <div className='max-w-[350px]'>
        {question}
        </div>
        <img src="/Assets/FAQOpenArrow.png" alt="arrow" className="sm:w-[25px] w-[20px] h-[20px] sm:h-[25px]" />
      </div>
      {isOpen && <div className="faq-answer sm:text-md text-xs font-normal">{answer}</div>}
    </div>
  );
};

export default FAQ;
