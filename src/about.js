import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-[rgb(256,226,226)] min-h-screen py-8"> {/* Outer Container with Background Color */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-center font-bold text-4xl my-10">About Us</h1>
        <div className="bg-[rgb(255,199,199)] p-8 rounded-3xl max-w-10xl mx-auto text-base leading-relaxed mb-12">
          <p>
          The campus includes several modern hostel blocks for both male and female students, with a capacity of up to 3,000 residents. Each hostel has its own mess hall, administrative office, and warden’s quarters for easy management. The rooms are well-furnished with comfortable amenities, making them conducive for both study and relaxation. Students benefit from free high-speed Wi-Fi, along with access to facilities like a gym, medical center, and nearby shopping and entertainment options, ensuring a balanced and enjoyable campus life.

Sports and Recreational Activities:
Students can enjoy a variety of sports at the Vikram Nail Sports Complex, which includes volleyball, cricket, football, swimming, and more. Professional coaches are available for all sports, offering guidance for both beginners and advanced players. Additionally, the gym provides a convenient space for fitness enthusiasts to maintain an active and healthy lifestyle, contributing to the students’ overall well-being.

Laundry Service:
A convenient laundry service is available on a pay-per-use basis at the campus shopping center. Students can choose between self-service machines or full-service laundry, allowing them to focus on their studies and activities without worrying about household chores.

Security Measures:
The safety of hostel residents is ensured through comprehensive security arrangements. Security checks are carried out at the main gate of each hostel, and each building has its own security guard. To provide additional support for female students, a lady warden is assigned to every girls' hostel. This combination of personnel and strict security measures ensures a safe environment for all residents on campus.
          </p>
          <ul className="mt-2 pl-5 space-y-2">
            <li>
              <strong className="font-bold">Sports and Recreational Activities:</strong> Students can use GYM and sports activities like Volleyball, Cricket, Football, Swimming, etc., at Vikram Nail Sports Complex. Professional coaches are available for all activities.
            </li>
            <li>
              <strong className="font-bold">Laundry Service:</strong> Laundry service is available at the campus shopping center on a payment basis.
            </li>
            <li>
              <strong className="font-bold">Security Arrangements:</strong> The following arrangements have been made to ensure the security of the hostel inmates:
              <ul className="list-disc list-inside pl-5 mt-2 space-y-1">
                <li>Security check at the main gate of each hostel.</li>
                <li>Individual security guard at each hostel building.</li>
                <li>Lady warden at girls' hostels.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
